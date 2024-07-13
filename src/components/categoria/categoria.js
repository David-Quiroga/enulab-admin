export default {
    name: 'MenuCategory',
    props: {
      title: String,
      description: String,
      routePrefix: String
    },
    methods: {
      getImageUrl(title) {
        // Retorna la URL de la imagen basada en el título de la categoría
        return require(`@/assets/${title.toLowerCase().replace(' ', '-')}.jpg`);
      }
    }
  };