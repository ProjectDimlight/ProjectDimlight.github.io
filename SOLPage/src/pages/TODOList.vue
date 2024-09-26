<template>
  <div style="width: calc(min(90%, 400px)); margin: 0px auto; padding: 20px 0px;">
    <sticker v-for="(item, index) in items" :key="index" :category="item['date']" icon="" style="margin: 10px;" class="sticker">
      {{item['name']}}
      <template v-slot:description>
        {{item['detail']}}
      </template>
    </sticker>
  </div>
</template>

<script>
import Sticker from '@/components/Sticker'

export default {
  name: 'Index',
  components: {
    'sticker': Sticker
  },
  data () {
    return {
      items: [
        {
          name: 'Seminar @ Cityu',
          detail: '暂时取消',
          date: '取消'
        },
        {
          name: '双周同步@ZJU',
          detail: '一年半了还没搞出来，废了',
          date: '周一19点'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sticker{
  display: block;
}

</style>
