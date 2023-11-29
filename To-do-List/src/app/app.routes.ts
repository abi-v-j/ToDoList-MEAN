import { Routes } from '@angular/router';
import { AddTodoComponent } from './User/add-todo/add-todo.component'
import { ShowTodoComponent } from './User/show-todo/show-todo.component'
import { NavComponentComponent } from './User/nav-component/nav-component.component'
import { HomeComponentComponent } from './User/home-component/home-component.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponentComponent,
    },
    {
        path: 'main',
        component: NavComponentComponent,
        children: [
           
            {
                path: '',
                component: AddTodoComponent
            },
            {
                path: 'show',
                component: ShowTodoComponent
            },
        ],
    },

];
