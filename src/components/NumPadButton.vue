<template>
  <button class="NumPadButton" type="button" @click="onClick">
    {{buttonValue}}
  </button>
</template>

<script>
export default {
  name: 'NumPadButton',
  props: ['buttonValue', 'onClick'],
}
</script>

<style scoped>

</style>
