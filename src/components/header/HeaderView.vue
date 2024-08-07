<template>
  <header class="header">
    <div class="logo">
      <h1>Digital Waiter</h1>
    </div>
    <!-- <div class="search-bar">
      <input type="text" placeholder="Buscar..." />
    </div> -->
    <div class="header-right">
      <button @click="showNotifications" class="notification-button">
        🔔
      </button>
      <div class="user-profile" @click="toggleProfileMenu">
        <img src="../../assets/img/perfil.png" alt="Perfil" />
        <span class="usuario">{{ nombreCompleto }}</span>
        <div v-if="showProfileMenu" class="profile-menu">
          <ul>
            <li><a href="#">Politicas de privacida</a></li>
            <li><a href="#">Configuraciones</a></li>
            <li><a href="/" @click="logout">Cerrar session</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>


<script src="../header/header.js">
  export default{
    data(){
      return {
        nombreCompleto: '',

      }
    },
    methods: {
      logout(){
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.$router.push('/')
      }
    },
    created(){
      const user = JSON.parse(localStorage.getItem('user'))
      if(user){
        this.nombreCompleto = `${user.nombreCompleto}`
      }
    }
  }

</script>

<style scoped src="../header/header.css"></style>