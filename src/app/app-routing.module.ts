import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'criarconta', loadChildren: './criarconta/criarconta.module#CriarcontaPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'galeria', loadChildren: './galeria/galeria.module#GaleriaPageModule' },

  { path: 'tabs/galeria/:id', loadChildren: './galeria/galeria.module#GaleriaPageModule' },
  
  { path: 'ajuda', loadChildren: './ajuda/ajuda.module#AjudaPageModule' },
  { path: 'desenvolvedor', loadChildren: './desenvolvedor/desenvolvedor.module#DesenvolvedorPageModule' },
  { path: 'loginpage', loadChildren: './loginpage/loginpage.module#LoginpagePageModule' },
  { path: 'imagem-modal', loadChildren: './imagem-modal/imagem-modal.module#ImagemModalPageModule' },
  { path: 'unhas', loadChildren: './unhas/unhas.module#UnhasPageModule' },
  { path: 'cabelos', loadChildren: './cabelos/cabelos.module#CabelosPageModule' },
  { path: 'maquiagem', loadChildren: './maquiagem/maquiagem.module#MaquiagemPageModule' },
  { path: 'categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
