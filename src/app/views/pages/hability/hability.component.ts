import { SkillsFacade } from './../../../core/facade/skills.facade';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ISkill } from 'src/app/core/Interfaces/iskill';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-hability',
  templateUrl: './hability.component.html',
  styleUrls: ['./hability.component.scss'],
})
export class HabilityComponent implements OnInit {
  // options
  value: number = 100;

  constructor(
    public dialog: MatDialog,
    private skillsFacade: SkillsFacade,
    public authSvc: AuthService
  ) {}

  placeholderSkill: ISkill = {
    name: 'Sin nombre',
    value: 50,
  };

  skills: ISkill[] = [];
  ngOnInit(): void {
    this.skillsFacade.getAll().subscribe((res) => {
      this.skills = res;
      console.log(res);
    });
    this.skillsFacade.refresh();
  }

  openDialog(editMode: boolean, item?: ISkill): void {
    const dialogRef = this.dialog.open(SkillDialogComponent, {
      data: { item, editMode },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) return;
      const index = this.skills.findIndex((skill) => skill.id == result.id);

      if (index !== -1) {
        this.skills[index] = result;
      } else {
        this.skills.push(result);
      }
      this.skillsFacade.save(result).subscribe(() => {
        this.skillsFacade.refresh();
      });
    });
  }

  addSkillToList(item?: ISkill) {
    if (this.authSvc.loginStatus.getValue()) {
      if (item) {
        this.openDialog(false, item);
      } else {
        this.openDialog(true, this.placeholderSkill);
      }
    }
  }
}
