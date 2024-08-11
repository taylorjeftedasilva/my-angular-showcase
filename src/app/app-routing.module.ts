import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionCaroselComponent } from './components/section-carosel/section-carosel.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {path: "", component: SectionCaroselComponent},
  {path: "description/:carosel-title/:card-slug", component: DescriptionComponent},
  { path: '**', component: SectionCaroselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
