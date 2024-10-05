import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { SectionCaroselComponent } from './components/section-carosel/section-carosel.component';
import { DescriptionComponent } from './components/description/description.component';

const routes: Routes = [
  {path: "", component: SectionCaroselComponent},
  {path: "description/:carosel-title/:card-slug", component: DescriptionComponent},
  { path: '**', component: SectionCaroselComponent }
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top',
  useHash: true 
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
