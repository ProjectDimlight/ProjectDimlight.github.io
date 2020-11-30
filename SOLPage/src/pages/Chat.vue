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
          detail: '查看邮箱进入面试页面，连续两场',
          date: '下周二'
        },
        {
          name: '无线网络应用',
          detail: '作业',
          date: '11-9'
        },
        {
          name: '无线网络应用',
          detail: '在线考试+实验报告',
          date: '11-14'
        },
        {
          name: '勇电凯实杯',
          detail: '方案调研',
          date: '11-13'
        },
        {
          name: '勇电凯实杯',
          detail: '具体实现',
          date: '11-20'
        },
        {
          name: '勇电凯实杯',
          detail: '调优，写报告',
          date: '11-27'
        },
        {
          name: '棋社策划案',
          detail: '编写初稿',
          date: '11-13'
        },
        {
          name: '洛谷教案',
          detail: '添加例题、作业等具体方案',
          date: '11-13'
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
