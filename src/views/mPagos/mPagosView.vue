<template>
    <div>
      <h1>GESTION METODO DE PAGO</h1>
      <div class="manage-payment-methods">
        <div class="payment-methods-list">
          <h3>Métodos de Pago Actuales</h3>
          <ul>
            <li v-for="method in paymentMethods" :key="method.id">
              <span>{{ method.name }}</span>
              <button @click="toggleMethod(method.id)">
                {{ method.active ? 'Desactivar' : 'Activar' }}
              </button>
            </li>
          </ul>
        </div>
        <div class="add-payment-method">
          <h3>Agregar Nuevo Método de Pago</h3>
          <input type="text" v-model="newPaymentMethod" placeholder="Nombre del nuevo método">
          <button @click="addPaymentMethod">Agregar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethods: [
          { id: 1, name: 'Tarjeta de Crédito', active: true },
          { id: 2, name: 'Efectivo', active: true },
        ],
        newPaymentMethod: '',
      };
    },
    methods: {
      toggleMethod(id) {
        const method = this.paymentMethods.find(m => m.id === id);
        if (method) {
          method.active = !method.active;
        }
      },
      addPaymentMethod() {
        if (this.newPaymentMethod.trim()) {
          this.paymentMethods.push({
            id: this.paymentMethods.length + 1,
            name: this.newPaymentMethod,
            active: true,
          });
          this.newPaymentMethod = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    margin-top: 100px;
    margin-bottom: 40px;
    margin-left: 200px; /* Ajusta este valor según tu preferencia */
  
    color: #6C6C6C;
    font-family: 'Montserrat';
  }
  
  .manage-payment-methods {
    width: 800px;
    margin: -25px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    margin-left: 200px;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  }
  
  .payment-methods-list,
  .add-payment-method {
    margin-bottom: 20px;
  }
  
  h3 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  span {
    font-size: 16px;
  }
  
  button {
    background-color: #FF7A00; /* Green */
    color: white;
    padding: 8px 15px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #FF7A06; /* Darker green */
  }
  
  .add-payment-method input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
   
    margin-right: 10px;
  }
  </style>