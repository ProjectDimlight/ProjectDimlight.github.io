<template>
  <div class="size" style="display: inline-block;">
    <div class="block" style="width: 100%">
      <img class="cell" style="width: 100px; height: 100px;" :src="icon ? icon : '/static/PCIlight.png'"/>
      <div class="cell" style="width: 230px; padding: 0px 20px;">
        <div style="font-weight: bold; border-bottom: 1px grey solid; margin-bottom: 5px;">
          <slot></slot>
        </div>
        <div style="font-size: 10px;">
          <slot name="description">
          </slot>
        </div>
      </div>
      <div class="cell" style="font-size: 14px; width: 60px; text-align: right; color: cyan; padding-right: 10px;">
        {{category}}
      </div>
    </div>

    <div class="shadow">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sticker',
  props: [
    'icon',
    'category'
  ],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.size{
  height: 100px;
  width: calc(min(80%, 400px));
}

.block{
  background-color: rgba(48, 48, 48, 0.85);
  display: table;
}

.shadow{
  background-color: rgba(255, 255, 255, 0.65);
  position: relative;
  top: -90px;
  left: 15px;
  height: 95%;
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
