<template>
  <div>
    <component :is="'h' + (parseInt(depth) + 2)">{{ title }}</component>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Section',
  props: [
    'title',
    'depth'
  ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
