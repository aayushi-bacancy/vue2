<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">product2</router-link>
  </section>
</template>

<script>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';

export default {
  props: ['pid'],
  setup() {
    const route = useRoute();
    const products = inject('products');
    const selectedProds = computed(() =>
      products.value.find(prod => prod.id == route.params.pid)
    );
    const title = computed(() => selectedProds.value.title);
    const price = computed(() => selectedProds.value.price);
    const description = computed(() => selectedProds.value.description);
    return { title, price, description };
  }
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
