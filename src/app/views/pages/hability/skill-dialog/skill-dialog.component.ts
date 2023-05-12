import { SkillsFacade } from './../../../../core/facade/skills.facade';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ISkill } from 'src/app/core/Interfaces/iskill';
import { AuthService } from 'src/app/views/auth/services/auth.service';

@Component({
  selector: 'app-skill-dialog',
  templateUrl: './skill-dialog.component.html',
  styleUrls: ['./skill-dialog.component.scss']
})
export class SkillDialogComponent implements OnInit {

  confirmDeleteStatus:boolean = false

  constructor(
    public dialogRef: MatDialogRef<SkillDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {item:ISkill, editMode:boolean},
    private SkillsFacade:SkillsFacade,
    private authSvc:AuthService
  ) {
  }

  skillForm = new FormGroup({
    value: new FormControl(this.data.item.value),
    name: new FormControl(this.data.item.name),
  });

  ngOnInit(): void {
    console.log(this.data.item);

    this.skillForm.valueChanges.subscribe((data) => {
      this.data.item = {
        ...this.data.item,
        value: data.value as number,
        name: data.name as string,
      } as ISkill;
    });
  }

  confirmDelete(){
    this.confirmDeleteStatus = true
  }

  deleteSkill(){
    if((this.data.item.id !== undefined) && this.authSvc.loginStatus.getValue()){
      this.SkillsFacade.deleteSkill(this.data.item.id).subscribe(()=>{
        this.SkillsFacade.refresh()
        this.onNoClick();
      })
    }
  }

  save(){
    this.dialogRef.close(this.data.item)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
