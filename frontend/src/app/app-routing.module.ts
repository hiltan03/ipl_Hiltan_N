import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamCreateComponent } from './ipl/components/teamcreate/teamcreate.component';
import { CricketerCreateComponent } from './ipl/components/cricketercreate/cricketercreate.component';
import { MatchCreateComponent } from './ipl/components/matchcreate/matchcreate.component';

const routes: Routes = [
  {path: 'auth',loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),},
  {path: 'ipl',loadChildren: () => import('./ipl/ipl.module').then((m) => m.IplModule),},
  {path:'team',component:TeamCreateComponent},
  {path:'cricketer',component:CricketerCreateComponent},
  {path:'match',component:MatchCreateComponent},
  {path: '',pathMatch: 'full',redirectTo: '/auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
