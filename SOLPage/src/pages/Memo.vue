<template>
  <div>
    <div class="words" style="text-align:center; margin:50px; color:grey; font-size: 14px;">
      sol失眠也不是一天两天了。<br/>
      sol吃过安眠药、但还没睡着的时间里，经常会冒出各种奇思妙想。<br/>
      有99.99%或许是精神错乱的胡言乱语。有0.01%或许会是转瞬即逝的灵感迸发。<br/>
      总之，哪怕只是当成一个随机数发生器，记下来也是好的。
    </div>

    <div style="margin: 25px auto; width: 80%;">

      <field v-for="(item, index) in data" :key="index" :icon="item['icon']" style="margin: 10px;" class="sticker">
        <span>{{item['title']}}</span>
        <span style="float:right;">{{item['date']}}</span>
        <template v-slot:description>
          <div v-html="item['contents']"></div>
        </template>
      </field>

    </div>
  </div>
</template>

<script>
import Field from '@/components/Field'
import data from '@/assets/memo.json'

export default {
  name: 'Index',
  components: {
    'field': Field
  },
  data () {
    return {
      data: data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
