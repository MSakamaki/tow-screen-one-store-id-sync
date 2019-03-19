import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      {
        path: 'sub/:mainId',
        component: DetailComponent,
        children: [
          {
            path: 'child/:subId',
            component: ChildComponent
          }
        ]
      }
    ])
  ],
  declarations: [DetailComponent, ChildComponent]
})
export class FeaturesPageTowModule {}
