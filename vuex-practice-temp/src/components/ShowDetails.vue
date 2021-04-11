<template>
  {{ datas }}
  <div>
    <router-link to="/main">home</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    datas() {
      return this.$store.getters.datas;
    }
  },
  methods: {
    loadData() {
      return this.$store.dispatch.loadData;
    }
  },
  created() {
    this.loadData();
  }
};
</script>
