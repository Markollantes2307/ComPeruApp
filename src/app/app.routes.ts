import { Routes } from '@angular/router';
import { HomeComponent } from "./home/components/home/home.component";
import { AboutUsComponent} from "./about-us/about-us.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'about-us-component', component: AboutUsComponent },
];
