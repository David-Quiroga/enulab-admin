export default {
    name: 'Header',
    data() {
      return {
        showProfileMenu: false
      };
    },
    methods: {
      showNotifications() {
        alert('Notificaciones');
      },
      toggleProfileMenu() {
        this.showProfileMenu = !this.showProfileMenu;
      }
    }
  };