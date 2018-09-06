<template>
  <div class="Calculator">
    <Display />
    <NumPad />
  </div>
</template>

<script>
import Display from './Display.vue';
import NumPad from './NumPad.vue';

export default {
  name: 'Calculator',
  components: {
    Display,
    NumPad,
  },
}
</script>

<style scoped>

</style>
