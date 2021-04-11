<template>
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onUnmounted,
  onBeforeUnmount
} from 'vue';
export default {
  props: ['firstName', 'lastName'],
  setup(props, context) {
    const userAge = inject('userAge');
    const userName = computed(() => {
      return props.firstName + ' ' + props.lastName;
    });
    console.log(context);
    onBeforeUnmount(() => console.log('onbeforeunmount'));
    onUnmounted(() => console.log('onunmounted'));
    onUpdated(() => console.log('onupdated'));
    onBeforeUpdate(() => console.log('onbeforeupdate'));
    onMounted(() => console.log('onmounted'));
    onBeforeMount(() => console.log('onBeforemount'));
    // context.emit('save',ads)
    return { userName, userAge };
  }
};
</script>
