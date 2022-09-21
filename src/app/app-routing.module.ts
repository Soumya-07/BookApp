import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { HomeComponent } from './home/home.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegisterComponent } from './register/register.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [

{
  component:LoginuserComponent,
  path:"Login"
},
{
  component:UserdashboardComponent,
  path:"userdash"
},
{
  component:HomeComponent,
  path:'home'
},
{
  component:RegisterComponent,
  path:'register'
},
{
  component:AddbooksComponent,
  path:'addbooks'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
