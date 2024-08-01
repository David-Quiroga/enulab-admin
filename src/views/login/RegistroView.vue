<template>
    <div>
      <h1>Digital Waiter</h1>
      <p class="comm">"El arte de crear es el arte de descubrir."</p>
      <p class="autor">-Pablo Picasso</p>
      <div class="form-wrapper">
        <h2>Formulario de Registro</h2>
        <form @submit.prevent="crearUsuario">
          <div class="form-control">
            <input type="text" v-model="nombreCompleto" required />
            <label>Nombre completo</label>
          </div>
          <div class="form-control">
            <input type="text" v-model="rucUser" required/>
            <label>RUC (opcional)</label>
          </div>
          <div class="form-control">
            <input type="email" v-model="correoElectronico" required />
            <label>Correo electrónico</label>
          </div>
          <div class="form-control">
            <input type="tel" v-model="numeroContacto" required />
            <label>Número de contacto</label>
          </div>
          <div class="form-control">
            <input type="password" v-model="password" required />
            <label>Password</label>
          </div>
          <button>Sign Up</button>
          <div class="form-help">
            <div class="remember-me">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">
                By clicking Sign Up, you agree to our Terms and that you have read our Data Policy, including our Cookie Use.
              </label>
            </div>
            <router-link to="/">
              <a>Already a member? Click here to login.</a>
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: 'RegistroView',
    data() {
      return {
        nombreCompleto: "",
        correoElectronico: "",
        password: "",
        rucUser: "",
        numeroContacto: ""
      };
    },
    methods: {
      async crearUsuario() {
        try {
          const userData = {
            nombreCompleto: this.nombreCompleto,
            correoElectronico: this.correoElectronico,
            password: this.password,
            rucUser: this.rucUser,
            numeroContacto: this.numeroContacto
          };
          await axios.post("http://localhost:4200/usuario/crear", userData, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          // Resetear los campos del formulario
          this.nombreCompleto = "";
          this.correoElectronico = "";
          this.password = "";
          this.rucUser = "";
          this.numeroContacto = "";
          
          // Redireccionar al login
          this.$router.push('/');
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>



  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      
  }
  body {
      background: #000;
      
  }
  body::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: url("../../assets/img/login.jpg");
      background-position: center;
  }
  h1{
    position: absolute;
    top: 100px;
    left: 40px;
    color: #fff;
    font-size: 90px
  }
  .comm{
    position: absolute;
    top: 470px;
    left: 40px;
    color: #fff;
    font-size: 25px;
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
    font-style: normal;
  }
  .autor{
    position: absolute;
    top: 540px;
    left: 540px;
    color: #fff;
    font-size: 20px;
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
    font-style: normal;
  }
  .titulo1{
    position: absolute;
    top: 340px;
    left: 40px;
    color: #fff;
    font-size: 90px
}
.form-wrapper {
    position: absolute;
    left: 81%;
    top: 30%;
    width: 587px;
    height: 1115px;
    border-radius: 4px;
    padding: 70px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .75);
}
.form-wrapper h2 {
    color: #fff;
    top: 450px;
    position: absolute;
    font-size: 2rem;
}
.form-wrapper form {
    margin: 500px 0 65px;
}
  form .form-control {
      height: 50px;
      position: relative;
      margin-bottom: 16px;
  }
  .form-control input {
      height: 100%;
      top: -30px;
      position: absolute;
      width: 100%;
      background: #333;
      border: none;
      outline: none;
      border-radius: 4px;
      color: #fff;
      font-size: 1rem;
      padding: 0 20px;
  }
  .form-control input:is(:focus, :valid) {
      background: #444;
      padding: 16px 20px 0;
  }
  .form-control label {
      position: absolute;
      left: 20px;
      top: -10%;
      transform: translateY(-50%);
      font-size: 1rem;
      pointer-events: none;
      color: #8c8c8c;
      transition: all 0.1s ease;
  }
  .form-control input:is(:focus, :valid)~label {
      font-size: 0.75rem;
      transform: translateY(-130%);
  }
  form button {
      width: 100%;
      padding: 16px 0;
      font-size: 1rem;
      background: #FF7A00;
      color: #fff;
      font-weight: 500;
      border-radius: 4px;
      border: none;
      outline: none;
      margin: 25px 0 10px;
      cursor: pointer;
      transition: 0.1s ease;
  }
  form button:hover {
      background: #f78821;
  }
  .form-wrapper a {
      text-decoration: none;
  }
  .form-wrapper a:hover {
      text-decoration: underline;
  }
  .form-wrapper :where(label, p, small, a) {
      color: #b3b3b3;
  }
  form .form-help {
      display: flex;
      justify-content: space-between;
  }
  form .remember-me {
      position: absolute;
      top: 870px;
      display: flex;
  }
  form .remember-me input {
      margin-right: 5px;
      accent-color: #b3b3b3;
  }
  form .form-help :where(label, a) {
      font-size: 0.9rem;
  }
  .form-wrapper p a {
      color: #fff;
  }
  .form-wrapper small {
      display: block;
      margin-top: 15px;
      color: #b3b3b3;
  }
  .form-wrapper small a {
      color: #0071eb;
  }
  @media (max-width: 740px) {
      body::before {
          display: none;
      }
      nav, .form-wrapper {
          padding: 20px;
      }
      nav a img {
          width: 140px;
      }
      .form-wrapper {
          width: 100%;
          top: 43%;
      }
      .form-wrapper form {
          margin: 25px 0 40px;
      }
  }
  </style>
  