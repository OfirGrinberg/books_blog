import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myblog', component: HomeComponent, canActivate: [AdminGuard] },
  { path: 'myblog/article/:id', component: ItemComponent, canActivate: [AdminGuard] },
  { path: 'article/:id', component: ItemComponent },
  { path: 'blogin', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
