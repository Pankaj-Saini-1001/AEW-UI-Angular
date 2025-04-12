import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ErrorComponent } from './Components/error/error.component';
import { SearchComponent } from './Components/search/search.component';
import { ShopComponent } from './Components/shop/shop.component';
import { ServicesComponent } from './Components/services/services.component';
import { SeasonComponent } from './Components/season/season.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { AddComponent } from './Components/add/add.component';
import { RegisterComponent } from './Components/register/register.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {   path: '',
         redirectTo: '/login',
         pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: 'shop',
        component:ShopComponent
    },
    {
        path:'wishlist' ,
        component:WishlistComponent,
        children:[
            {
                path: 'payment',
                component:PaymentComponent,
                canActivate : [authGuard]
            },
        ]
    },
    {
        path: 'services',
        component:ServicesComponent
    },
    {
        path: 'add',
        component:AddComponent,
        canActivate : [authGuard]
    },
    {
        path: 'search',
        component:SearchComponent
    },
    {
        path: 'season',
        component:SeasonComponent
    },
    {
        path : 'register',
        component : RegisterComponent
    },
    
    {
        path: '**',
        component:ErrorComponent
    },
    
    
];
