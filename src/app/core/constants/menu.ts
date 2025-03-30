import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Home',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/chart-pie.svg',
          label: 'Dashboard',
          route: '/dashboard/home',
        },
        {
          icon: 'assets/icons/heroicons/outline/users.svg',
          label: 'Utilisateur',
          route: '/dashboard/users',
        },
        {
          icon: 'assets/icons/heroicons/outline/lock-closed.svg',
          label: 'Authentification',
          route: '/auth',
          children: [
            { label: 'Inscription', route: '/auth/sign-up' },
            { label: 'Login', route: '/auth/sign-in' },
            { label: 'Mot de passe oublié', route: '/auth/forgot-password' },
            { label: 'Nouveau mot passe', route: '/auth/new-password' },
            { label: 'OPT', route: '/auth/two-steps' },
          ],
        },
        {
          icon: 'assets/icons/heroicons/outline/exclamation-triangle.svg',
          label: 'Erreurs',
          route: '/errors',
          children: [
            { label: '404', route: '/errors/404' },
            { label: '500', route: '/errors/500' },
          ],
        },
      ],
    },
    {
      group: 'Collaboration',
      separator: true,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/download.svg',
          label: 'Générer rapport',
          route: '/download',
        },
        {
          icon: 'assets/icons/heroicons/outline/cube.svg',
          label: 'Booking des mentees',
          route: '/booking',
        },
        {
          icon: 'assets/icons/heroicons/outline/folder.svg',
          label: 'Gérer les vidéos',
          route: '/videos',
        },
      ],
    },
    {
      group: 'Configuration',
      separator: false,
      items: [
        {
          icon: 'assets/icons/heroicons/outline/cog.svg',
          label: 'Paramètres',
          route: '/settings',
        },
        {
          icon: 'assets/icons/heroicons/outline/bell.svg',
          label: 'Notifications',
          route: '/notifications',
        },
      ],
    },
  ];
}
