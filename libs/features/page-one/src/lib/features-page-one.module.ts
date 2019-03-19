import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: ':mainId', pathMatch: 'full', component: DetailComponent }
    ])
  ],
  declarations: [DetailComponent]
})
export class FeaturesPageOneModule {}
