//Arquivo que vai montar as rotas da aplicação
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//cria um construtor
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
