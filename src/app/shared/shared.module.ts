import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { DinamicHeroComponent } from './dinamic-hero/dinamic-hero.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    FooterComponent,
    HeroComponent,
    DinamicHeroComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRippleModule,
    RouterModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    FooterComponent,
    HeroComponent,
    DinamicHeroComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule
  ],
})
export class SharedModule {}
