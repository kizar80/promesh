import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-6-datatable';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from "ngx-bootstrap";
import { NgxLoadingModule } from 'ngx-loading';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CKEditorModule } from 'ng2-ckeditor';

import { LeadComponent } from './lead/lead.component';
import { ContactadoComponent } from './contactado/contactado.component';
import { NegociadoComponent } from './negociado/negociado.component';
import { GanadoComponent } from './ganado/ganado.component';
import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';
import { TrabajadorListComponent } from './trabajador-list/trabajador-list.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { IncidenciaFormComponent } from './incidencia-form/incidencia-form.component';

@NgModule({
  declarations: [
   
    LeadComponent,
    ContactadoComponent,
    NegociadoComponent,
    GanadoComponent,
    TrabajadorFormComponent,
    TrabajadorListComponent,
    CronogramaComponent,
    IncidenciaFormComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TypeaheadModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    NgbModule,
    ModalModule.forRoot(),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule
  ]
})

export class AdminModule {  }
