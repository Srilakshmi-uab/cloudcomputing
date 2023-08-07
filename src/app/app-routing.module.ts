import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { FetchfilefromawsComponent } from './fetchfilefromaws/fetchfilefromaws.component';

const routes: Routes = [
  { path: '', component:UserpageComponent  },
  { path: 'dashboard/:userpath', component: FetchfilefromawsComponent },
  { path: 'dashboard', component: FetchfilefromawsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
