<template>
    <div class="create-menu">
        <h1>Lista de sopas</h1>
        <div class="img">   
            <p class="titulo">Nombre:</p>
            <br>
            <p class="bold">Ceviche</p>
            <br>
            <p class="desc">Descripción</p>
            <p class="plato">Rico rico</p>
            <p class="price">Precio</p>
            <p class="number">20.00</p>
            <button class="submit">Editar Plato</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            price: null,
            status: 'disponible',
            image: null,
            category: this.$route.params.category
        };
    },
    methods: {
        handleImageUpload(event) {
            this.image = event.target.files[0];
        },
        handleSubmit() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('description', this.description);
            formData.append('price', this.price);
            formData.append('status', this.status);
            formData.append('image', this.image);
        }
    }
};
</script>

<style scoped>
.create-menu {
    position: absolute;
    top: 200px;
    left: 350px;
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid #2A2A2A;
    border-radius: 8px;
}
.titulo{
    color: white;
    position: relative;
    font-size: 20px;
    left: 10px;
}
.bold{
    color: white;
    position: relative;
    font-size: 15px;
    top: -17px;
    left: 16px;
}
.desc{
    color: white;
    position: relative;
    font-size: 20px;
    left: 10px;
    top: -35px
}
.plato{
    color: white;
    position: relative;
    font-size: 15px;
    top: -30px;
    left: 16px;
}
.price{
    color: white;
    position: relative;
    font-size: 20px;
    left: 10px;
    top: -28px
}
.number{
    color: white;
    position: relative;
    font-size: 15px;
    top: -30px;
    left: 16px;
}
.submit{
    background-color: rgb(100, 100, 209);
    border-radius: 5px;
    position: relative;
    top: -17px;
    left: 20px;
    height: 25px;
    width: 100px;
}
h1{
    font-size: 30px;
    position: relative;
    left: -90px
}
.img{
    position: relative;
    top: 50px;
    left: 20px;
    background-image: url('../../assets/img/sopas1.png');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
    height: 170px;
    width: 140px;
}

</style>
