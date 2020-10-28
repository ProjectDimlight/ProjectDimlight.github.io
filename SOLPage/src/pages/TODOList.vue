<template>
  <div style="display: flex;">
    <div style="width: 150px; padding: 50px;">
      <span style="font-size: 40px;">日程表</span>
    </div>
    <div style="padding: 50px;">
      <sticker v-for="(item, index) in items" :key="index" :category="item['date']" icon="" style="margin: 30px;">
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
          name: '面试',
          detail: '查看邮箱进入面试页面',
          date: '下周一'
        },
        {
          name: '面试',
          detail: '查看邮箱进入面试页面',
          date: '下周五'
        },
        {
          name: '无线网络应用',
          detail: '作业+在线考试',
          date: '11-9'
        },
        {
          name: '数字音视频',
          detail: '转场作业',
          date: '11-20'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.box{
  display: inline-block;
}

</style>
