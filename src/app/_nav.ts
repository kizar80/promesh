import { notEqual } from 'assert';

interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItemsAdmin: NavData[] = [
  {
    name: 'Inicio',
    url: '/home',
  },
  {
    title: true,
    name: 'Administrador'
  },
  {
    name: 'Registrar Trabajador',
    url: '/home/administrador/registrar-trabajador',
    
  },
  {
    name:'Trabajadores',
    url:'/home/administrador/listar-trabajador'
  },
  {
    title: true,
    name: 'Gestión de Procesos'
  },
  {
    name:'Lead',
    url:'/home/administrador/registrar-lead'
  },
  {
    name:'Contactado',
    url:'/home/administrador/contactar'
  },
  {
    name:'Negociado',
    url:'/home/administrador/negociar'
  },
  {
    name:'Ganado',
    url:'/home/administrador/ganado'
  },
  {
    title: true,
    name: 'Gestión de Socios'
  },
  {
    name:'Socios',
    url:'/home/administrador/socios'
  },
  {
    title: true,
    name: 'Plan de trabajo'
  },
  {
    name:'Cronograma',
    url:'/home/administrador/cronograma'
  },
  {
    title: true,
    name: 'Gestión de incidencias'
  },
  {
    name:'Registrar incidencia',
    url:'/home/administrador/registrar-incidencia'
  },
];
