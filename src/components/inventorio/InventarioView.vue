<template>
    <div class="inventory-item">
      <img :src="image" alt="Producto" class="item-image">
      <div class="item-info">
        <h3>{{ title }} <span class="item-weight">({{ weight }})</span></h3>
        <p class="item-description">{{ description }}</p>
      </div>
      <div class="item-category">{{ category }}</div>
      <div class="item-quantity">
        <span>{{ quantity }}</span>
        <span>unidades</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InventoryItem',
    props: {
      image: String,
      title: String,
      weight: String,
      description: String,
      category: String,
      quantity: Number
    }
  };
  </script>
  
  <style scoped>
  .inventory-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #333;
    background-color: #ddd;
    margin-bottom: 10px;
  }
  
  .item-image {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .item-info {
    flex: 1;
  }
  
  .item-category {
    flex-shrink: 0;
    margin-right: 20px;
  }
  
  .item-quantity {
    flex-shrink: 0;
    text-align: right;
  }
  
  .item-weight {
    font-weight: normal;
    font-size: 0.8em;
    color: #777;
  }
  
  .item-description {
    font-size: 0.9em;
    color: #777;
  }
  </style>
  