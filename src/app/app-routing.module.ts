import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionCaroselComponent } from './components/section-carosel/section-carosel.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {path: "", component: SectionCaroselComponent},
  {path: "description", component: DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
