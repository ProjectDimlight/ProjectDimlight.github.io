<template>
  <div style="display: flex;">
    <div style="width: 400px; padding: 50px;">
      <div style="border-right: 1px grey solid; padding: 20px; padding-bottom: 200px; text-align: center; font-size: 40px;">
        日程表
      </div>
    </div>
    <div style="padding: 100px;">
      <sticker v-for="(item, index) in items" :key="index" :category="item['date']" icon="" style="margin: 10px;" class="sticker">
        {{item['name']}}
        <template v-slot:description>
          {{item['detail']}}
        </template>
      </sticker>
    </div>
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
          name: 'Seminar@Cityu',
          detail: '下一次是7月5日',
          date: '每周一 13:00'
        },
        {
          name: '每周同步@ZJU',
          detail: '也许ddl是8月吧',
          date: '每周二 15:30'
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
