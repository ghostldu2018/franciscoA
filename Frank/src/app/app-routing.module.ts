import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhostComponent } from './ghost/ghost.component';
import { FranciscoComponent } from './francisco/francisco.component';
import { GhostLDUComponent } from './ghost-ldu/ghost-ldu.component';
import { AlarconComponent } from './alarcon/alarcon.component';

const routes: Routes = [
{path: '' , redirectTo: '/ghost', pathMatch: 'full'}, 
{path: 'ghost', component: GhostComponent},
{path: 'francisco', component: FranciscoComponent},
{path: 'ghostLDU', component: GhostLDUComponent},
{path: 'Alarcon', component: AlarconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
