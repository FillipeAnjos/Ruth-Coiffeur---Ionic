import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },
      /* *************************************************************** */

      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'categoria',
        children: [
          {
            path: '',
            loadChildren: '../categoria/categoria.module#CategoriaPageModule'
          }
        ]
      },
      {
        path: 'galeria',
        children: [
          {
            path: '',
            loadChildren: '../galeria/galeria.module#GaleriaPageModule'
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPageModule'
          }
        ]
      },
      {
        path: 'loginpage',
        children: [
          {
            path: '',
            loadChildren: '../loginpage/loginpage.module#LoginpagePageModule'
          }
        ]
      },
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../perfil/perfil.module#PerfilPageModule'
          }
        ]
      },
      {
        path: 'desenvolvedor',
        children: [
          {
            path: '',
            loadChildren: '../desenvolvedor/desenvolvedor.module#DesenvolvedorPageModule'
          }
        ]
      },
      {
        path: 'ajuda',
        children: [
          {
            path: '',
            loadChildren: '../ajuda/ajuda.module#AjudaPageModule'
          }
        ]
      },
      {
        path: 'criarconta',
        children: [
          {
            path: '',
            loadChildren: '../criarconta/criarconta.module#CriarcontaPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
