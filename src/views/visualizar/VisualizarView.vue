<template>
    <div class="container">
        <h1>Visualización de menú</h1>
        <div class="content">
            <div class="izquierda">
                <h1>MENU</h1>
                <div class="bloque1">
                    <h3>Entrantes</h3>
                    <h4>Entradas frias</h4>
                    <h4>Entradas Calientes</h4>
                    <h4>Aperitivos</h4>
                    <h4>Snacks</h4>
                </div>
            </div>
            <div class="medio">
                <div class="bloque2">
                    <h3>Bebidas</h3>
                    <h4>Sin alcohol</h4>
                    <h4>Con alcohol</h4>
                </div>
                <div class="bloque3">
                    <h3>Postres</h3>
                    <h4>Frios</h4>
                    <h4>Calientes</h4>
                </div>
            </div>
            <div class="derecha">
                <div class="bloque4">
                    <h3>Sopas</h3>
                    <h4>Mariscos</h4>
                    <h4>Cremas</h4>
                    <h4>Caldos</h4>
                </div>
                <div class="bloque5">
                    <h3>Helados</h3>
                    <h4>Naturales</h4>
                    <h4>Especiales</h4>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
}

.container h1 {
    color: #6C6C6C;
    margin-top: 100px;
    padding-left: 100px;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-left: 90px;
}

.izquierda, .medio, .derecha {
    height: 600px; /* Ajusta esta altura según tus necesidades */
    width: 700px;
    box-sizing: border-box;
    margin-left: 10px;
}

.izquierda {
    background-color: #353535;
}
.izquierda h1{
    color: #FFFBF0;
    font-size: 120px;
    padding: 0 0 0 10px;
    margin: 0;
}

.medio {
    background-color: #353535;
}

.derecha {
    background-color: #353535;
}
.bloque1 h3{
    text-align: center;
    color: #FFFBF0;
    font-weight: 300;
}
.bloque2 h3,.bloque3 h3,.bloque4 h3,.bloque5 h3{
    color: #FFFBF0;
    font-weight: 300;
    padding-top: 30px;
    padding-left: 50px;
}
.bloque1{
    height: 70%;
}
.bloque2, .bloque3, .bloque4, .bloque5{
    height: 50%;
}
.bloque1 h4{
    color: #FFBB00;
    padding-top: 70px;
    padding-left: 20px;
}
.bloque2 h4{
    color: #FA00FF;
    padding-top: 70px;
    padding-left: 20px;
}
.bloque3 h4{
    color: #55D25A;
    padding-top: 70px;
    padding-left: 20px;
}
.bloque4 h4{
    color: #0094FF;
    padding-top: 50px;
    padding-left: 20px;
}
.bloque5 h4{
    color: #FFF500;
    padding-top: 70px;
    padding-left: 20px;
}
</style>
