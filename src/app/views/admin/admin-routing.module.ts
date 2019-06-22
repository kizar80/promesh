import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LeadComponent } from './lead/lead.component';
import { ContactadoComponent } from './contactado/contactado.component';
import { NegociadoComponent } from './negociado/negociado.component';
import { GanadoComponent } from './ganado/ganado.component';
import { TrabajadorFormComponent } from './trabajador-form/trabajador-form.component';
import { TrabajadorListComponent } from './trabajador-list/trabajador-list.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { IncidenciaFormComponent } from './incidencia-form/incidencia-form.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrador'
    },
    children: [
      {
        path: 'registrar-trabajador',
        component: TrabajadorFormComponent,
        data: {
          title: 'Registrar Trabajador'
        }
      },
      {
        path: 'listar-trabajador',
        component: TrabajadorListComponent,
        data: {
          title: 'Listar Trabajadores'
        }
      },
     
      {
        path: 'registrar-lead',
        component: LeadComponent,
        data: {
          title: 'Registrar Lead'
        }
      },
      {
        path: 'contactar',
        component: ContactadoComponent,
        data:{
          title: 'Contactar'
        }
      },
      {
        path: 'negociar',
        component: NegociadoComponent,
        data: {
          title: 'Negociar'
        }
      },
      {
        path: 'ganado',
        component: GanadoComponent,
        data:{
          title: 'Ganados'
        }
      },
      {
        path: 'cronograma',
        component: CronogramaComponent,
        data:{
          title: 'Cronograma'
        }
      },
      {
        path: 'registrar-incidencia',
        component: IncidenciaFormComponent,
        data:{
          title: 'Registar Incidencia'
        }
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AdminRoutingModule { }
