import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
{path: 'one', component: CompTwoComponent},
{path: 'two', component: CompThreeComponent},
{path: 'list', component: ListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
