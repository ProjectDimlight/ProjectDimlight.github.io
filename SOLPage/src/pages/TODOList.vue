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
          name: '数字音视频',
          detail: '实验9：大范围延时摄影',
          date: '12-6'
        },
        {
          name: '计算机问题求解',
          detail: 'Lab2',
          date: '两周后'
        },
        {
          name: '助教',
          detail: '整理补选实验，旁听（周二曹西201）',
          date: '短期'
        },
        {
          name: '复位传说R',
          detail: '设计总体流程',
          date: '长期'
        },
        {
          name: '洛谷省队',
          detail: '整理省选题目',
          date: '长期'
        },
        {
          name: '洛谷教案',
          detail: '添加例题、作业等具体方案',
          date: '长期'
        },
        {
          name: '黄老师课题组',
          detail: '论文阅读与研讨',
          date: '长期'
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
