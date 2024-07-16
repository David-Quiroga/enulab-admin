<template>
    <div class="contenedor-principal">
        <h1>Creación de inventarios</h1>
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
            <div class="botones">
                <button class="btn-back">Atrás</button>
                <button class="btn-conf">Continuar</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
body {
    padding: 0;
    margin: 0;
    background-color: #141313;
    height: 100vh; /* Asegura que el body ocupe toda la altura de la ventana */
}

h1{
    color: #FFFFFF;
    font-size: 50px;
    padding-left: 150px;
    margin-top: 130px;
    margin-bottom: 50px;
}

label{
    color: #6C6C6C;
}

input, textarea {
    background-color: #F0F0F0;
    border: none;
    border-radius: 10px;
    height: 40px;
    margin-top: 10px;
    margin-bottom: 21px;
}

textarea {
    height: 80px; /* Ajustar altura del textarea */
}

form {
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contenedor-principal{
    width: 100%;
}
.contenedor {
    display: flex;
    width: 900px; /* Ajustar al 100% del contenedor */
    justify-content: space-between; /* Espacio entre columnas */

}

.izquierda, .derecha {
    display: flex;
    flex-direction: column;
    width: 47%;
}

.botones {
    display: flex;
    width: 85%;
    margin-top: 50px;
}

.btn-back, .btn-conf {
    height: 40px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-right: 10px
}

.btn-back {
    background-color: #BBB7B7;
    width: 180px;
}

.btn-conf {
    background-color: #FF7A00;
    color: #FFFFFF;
    width: 250px;
}
</style>
