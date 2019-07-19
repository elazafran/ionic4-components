import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'presents',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'buttons',
    loadChildren: './buttons/buttons.module#ButtonsPageModule'
  },
  {
    path: 'cards',
    loadChildren: './cards/cards.module#CardsPageModule'
  },
  {
    path: 'toolbar',
    loadChildren: './toolbar/toolbar.module#ToolbarPageModule'
  },
  {
    path: 'presents',
    loadChildren: './presents/presents.module#PresentsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
