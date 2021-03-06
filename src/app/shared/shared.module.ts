import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';


@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        NopagesfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ],
    exports:[
        NopagesfoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent
    ]

})

export class SharedModule{}