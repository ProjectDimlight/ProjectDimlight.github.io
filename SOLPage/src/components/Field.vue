<template>
  <div style="display: inline-block;">
    <div class="block">
      <img class="cell" style="width: 50px; height: 50px; border-radius:50%;" :src="icon ? icon : '/static/PCIlight.png'"/>
      <div class="cell" style="width: 100%; padding: 0px 20px;">
        <div style="font-weight: bold; border-bottom: 1px grey solid; padding: 15px 0px;">
          <slot></slot>
        </div>
        <div style="padding: 15px 0px;">
          <slot name="description">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticker',
  props: [
    'icon'
  ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.block{
  display: table;
}

.shadow{
  background-color: rgba(255, 255, 255, 0.65);
  position: relative;
  top: -90px;
  left: 15px;
  height: 94%;
  width: 98%;
  filter: blur(2px);

  z-index: -100;
}

.cell{
  display: table-cell;
  vertical-align: middle;
  text-align: left;
}

</style>
