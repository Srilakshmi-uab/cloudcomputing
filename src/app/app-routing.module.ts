import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserpageComponent } from './userpage/userpage.component';
import { FetchfilefromawsComponent } from './fetchfilefromaws/fetchfilefromaws.component';

const routes: Routes = [
  { path: '', component:UserpageComponent  },
  { path: 'fetch/:userpath', component: FetchfilefromawsComponent },
  { path: 'fetch', component: FetchfilefromawsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
