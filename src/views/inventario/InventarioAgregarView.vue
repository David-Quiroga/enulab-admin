<template>
    <!-- <div class="navbar">
    
    <div class="logo">
    </div> -->
    
    <!-- <div class="user-info">
        <div>
            <img src="./img/campana (1).png" alt="">    
        </div>
        <div>
            <img src="./img/usuario.png" alt="">
        </div>
        <div>
            <button class="btn2">Adan Schwartz</button>
        </div>
    </div> -->
    
    <!-- </div> -->
    <h1>Creacion de inventarios</h1>
    <form action="">
        <div class="contenedor"> 
            <div class="izquierda">
                <label for="Nitem">Nombre del item:</label>
                <input type="text" id="Nitem" name="Nitem">
                
                <label for="Citem">Cantidad:</label>
                <input type="number" id="Citem" name="Citem">
                
                <label for="Caitem">Categoría:</label>
                <input type="text" id="Caitem" name="Caitem">
                
                <label for="estado">Estado:</label>
                <div>
                    <input type="radio" id="activo" name="estado" value="activo">
                    <label for="activo">Activo</label>
                    <input type="radio" id="inactivo" name="estado" value="inactivo">
                    <label for="inactivo">Inactivo</label>
                </div>
            </div>
    
            <div class="derecha">
                    <label for="imagen">Imagen del item:</label>
                    <input type="file" id="imagen" name="imagen">
                    
                    <label for="descripcion">Descripción del item:</label>
                    <textarea id="descripcion" name="descripcion"></textarea>
            </div>
        </div>
    </form>
    <button class="btn-back">Atras</button>
    <button class="btn-conf">Continuar</button>
    </template>
    
    
    <style>
        body {
        padding: 0;
        margin: 0;
        background-color: #141313;
        height: 100vh; /* Asegura que el body ocupe toda la altura de la ventana */
    }
    
    .navbar {
        display: flex;
        background-color: #000000;
        height: 50px;
    }
    
    .logo {
        width: 20%;
    }
    
    .user-info {
        width: auto;
        display: flex;
        align-items: center;
        margin-left: auto;
        gap: 10px;
        padding-right: 20px;
    }
    
    .user-info h1 {
        color: #8C9094;
    }
    
    .user-info img {
        color: aliceblue;
    }
    
    .btn1 {
        height: 30px;
    }
    
    .btn2 {
        border-radius: 5px;
        border: none;
        height: 35px;
        padding: 0 20px;
    }
    
    h1{
        color: #FFFFFF;
        font-size: 50px;
        padding-left: 100px;
    }
    label{
        color: #6C6C6C;
    }
    input{
        background-color: #F0F0F0;
        border: none;
        border-radius: 10px;
        height: 40px;
        margin-top: 10px;
        margin-bottom: 21px;
    }
    
    
    form{
        height: 60%;
        width: 80%;
        margin: auto;
    
    }
    .contenedor {
        display: flex; /* Enable flexbox layout */
    
    }
    .izquierda{
        display: flex;
        flex-direction: column;
        width: 45%;
        margin-right: 10%;
    }
    .derecha{
        display: flex;
        flex-direction: column;
        width: 45%;
    }
    .btn-back{
        background-color: #BBB7B7;
        width: 200px;
        height: 40px;
        border: none;
        border-radius: 10px;
        margin-left: 150px;
    
    }
    .btn-conf{
        background-color: #FF7A00;
        width: 300px;
        height: 40px;
        border: none;
        border-radius: 10px;
        color: #FFFFFF;
    }
    </style>