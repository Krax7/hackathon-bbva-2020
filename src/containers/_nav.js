export default [{
  _name: 'CSidebarNav',
  _children: [
    {
      _name: 'CSidebarNavItem',
      name: 'Inicio',
      to: '/dashboard',
      icon: 'cil-home',
      // badge: {
      //   color: 'primary',
      //   text: 'NEW'
      // }
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Mi progreso',
      to: '/progress',
      icon: 'cil-check',
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Compromisos',
      to: '/compromisos',
      icon: 'cil-globe-alt',
      // badge: {
      //   color: 'primary',
      //   text: 'NEW'
      // }
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Theme']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Colors',
      to: '/theme/colors',
      icon: 'cil-drop'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Typography',
      to: '/theme/typography',
      icon: 'cil-pencil'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Components']
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Base',
      route: '/base',
      icon: 'cil-puzzle',
      items: [{
          name: 'Breadcrumbs',
          to: '/base/breadcrumbs'
        },
        {
          name: 'Cards',
          to: '/base/cards'
        },
        {
          name: 'Carousels',
          to: '/base/carousels'
        },
        {
          name: 'Collapses',
          to: '/base/collapses'
        },
        {
          name: 'Jumbotrons',
          to: '/base/jumbotrons'
        },
        {
          name: 'List Groups',
          to: '/base/list-groups'
        },
        {
          name: 'Navs',
          to: '/base/navs'
        },
        {
          name: 'Navbars',
          to: '/base/navbars'
        },
        {
          name: 'Paginations',
          to: '/base/paginations'
        },
        {
          name: 'Popovers',
          to: '/base/popovers'
        },
        {
          name: 'Progress Bars',
          to: '/base/progress-bars'
        },
        {
          name: 'Switches',
          to: '/base/switches'
        },
        {
          name: 'Tabs',
          to: '/base/tabs'
        },
        {
          name: 'Tooltips',
          to: '/base/tooltips'
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Buttons',
      route: '/buttons',
      icon: 'cil-cursor',
      items: [{
          name: 'Buttons',
          to: '/buttons/standard-buttons'
        },
        {
          name: 'Button Dropdowns',
          to: '/buttons/dropdowns'
        },
        {
          name: 'Button Groups',
          to: '/buttons/button-groups'
        },
        {
          name: 'Brand Buttons',
          to: '/buttons/brand-buttons'
        }
      ]
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Profile',
      to: '/profilex',
      icon: 'cil-people'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Certificado de Emisiones en Blockchain',
      to: '/certificado',
      icon: 'cil-spreadsheet'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Directorio de Empresas',
      to: '/directorio_empresas',
      icon: 'cil-globe-alt'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Eventos',
      to: '/eventos',
      icon: 'cil-globe-alt'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Financiamiento Verde',
      to: '/financiamiento_verde',
      icon: 'cil-globe-alt'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Calculadora',
      to: '/calculadora',
      icon: 'cil-globe-alt'
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Charts',
      to: '/charts',
      icon: 'cil-chart-pie'
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Editors',
      route: '/editors',
      icon: 'cil-code',
      items: [
        {
          name: 'Code editors',
          to: '/editors/code-editors',
          icon: 'cil-code',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Text editors',
          to: '/editors/text-editors',
          icon: 'cil-justify-left'
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Forms',
      route: '/forms',
      icon: 'cil-notes',
      items: [
        {
          name: 'Basic forms',
          to: '/forms/basic-forms'
        },
        {
          name: 'Advanced forms',
          to: '/forms/advanced-forms',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Validation forms',
          to: '/forms/validation-forms',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Google Maps',
      to: '/google-maps',
      icon: 'cil-map',
      badge: {
        color: 'danger',
        text: 'PRO'
      }
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Icons',
      route: '/icons',
      icon: 'cil-star',
      items: [{
          name: 'CoreUI Icons',
          to: '/icons/coreui-icons',
          badge: {
            color: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Brands',
          to: '/icons/brands'
        },
        {
          name: 'Flags',
          to: '/icons/flags'
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Notifications',
      route: '/notifications',
      icon: 'cil-bell',
      items: [{
          name: 'Alerts',
          to: '/notifications/alerts',
        },
        {
          name: 'Badges',
          to: '/notifications/badges'
        },
        {
          name: 'Modals',
          to: '/notifications/modals'
        },
        {
          name: 'Toaster',
          to: '/notifications/toaster',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Plugins',
      route: '/plugins',
      icon: 'cil-input-power',
      items: [
        {
          name: 'Draggable',
          to: '/plugins/draggable',
          icon: 'cil-cursor-move',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Calendar',
          to: '/plugins/calendar',
          icon: 'cil-calendar',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        },
        {
          name: 'Spinners',
          to: '/plugins/spinners',
          icon: 'cil-circle',
          badge: {
            color: 'danger',
            text: 'PRO'
          }
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Tables',
      route: '/tables',
      icon: 'cil-list',
      items: [
        {
          name: 'Basic Tables',
          to: '/tables/tables',
          icon: 'cil-list',
        },
        {
          name: 'Advanced tables',
          to: '/tables/advanced-tables',
          icon: 'cil-list-rich'
        }  
      ]
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Widgets',
      to: '/widgets',
      icon: 'cil-calculator',
      badge: {
        color: 'primary',
        text: 'NEW',
        shape: 'pill'
      }
    },
    {
      _name: 'CSidebarNavDivider'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Extras']
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Pages',
      route: '/pages',
      icon: 'cil-star',
      items: [
        {
          name: 'Login',
          to: '/pages/login'
        },
        {
          name: 'Register',
          to: '/pages/register'
        },
        {
          name: 'Error 404',
          to: '/pages/404'
        },
        {
          name: 'Error 500',
          to: '/pages/500'
        }
      ]
    },
    {
      _name: 'CSidebarNavDropdown',
      name: 'Apps',
      route: '/apps',
      icon: 'cil-layers',
      _children: [
        {
          _name: 'CSidebarNavDropdown',
          name: 'Invoicing',
          route: '/apps/invoicing',
          icon: 'cil-spreadsheet',
          items: [
            {
              name: 'Invoice',
              to: '/apps/invoicing/invoice',
              badge: {
                color: 'danger',
                text: 'PRO'
              }
            }
          ]
        },
        {
          _name: 'CSidebarNavDropdown',
          name: 'Email',
          route: '/apps/email',
          icon: 'cil-envelope-closed',
          items: [
            {
              name: 'Inbox',
              to: '/apps/email/inbox',
              icon: 'cil-envelope-closed',
              badge: {
                color: 'danger',
                text: 'PRO'
              }
            },
            {
              name: 'Message',
              to: '/apps/email/message',
              icon: 'cil-envelope-open',
              badge: {
                color: 'danger',
                text: 'PRO'
              }
            },
            {
              name: 'Compose',
              to: '/apps/email/compose',
              icon: 'cil-envelope-letter',
              badge: {
                color: 'danger',
                text: 'PRO'
              }
            }
          ]
        }
      ]
    },
    {
      _name: 'CSidebarNavDivider',
      _class: 'm-2'
    },
    {
      _name: 'CSidebarNavTitle',
      _children: ['Labels']
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Label danger',
      icon: {
        name: 'cil-star',
        class: 'text-danger'
      },
      label: true
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Label info',
      icon: {
        name: 'cil-star',
        class: 'text-info'
      },
      label: true
    },
    {
      _name: 'CSidebarNavItem',
      name: 'Label warning',
      icon: {
        name: 'cil-star',
        class: 'text-warning'
      },
      label: true
    }
  ]
}]