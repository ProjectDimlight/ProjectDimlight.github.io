<template>
    <div class="content-block">
    <sec depth="1" title="研究方向">
    我自以为我在研究以下方向（按照Most Recently Used排序），但是实际上我自己也并不确定自己是否入了门，大概是没有：
    <ul>
      <li>应用机密访存</li>
      <li>机密计算（基于专用硬件的异构计算）</li>
      <li>计算机系统</li>
      <li>传统算法</li>
      <li>应用人工智能与对抗学习</li>
    </ul>
    </sec>
    <sec depth="1" title="已发表">
    <ul>
      <li>一作</li>
        <span class="high-line-height grey">我太菜了，啥也没发</span>
      <li>非一作</li>
      <ul>
        <li><a href="https://www.usenix.org/conference/usenixsecurity23/presentation/xu-jinyan">Xu J, Liu Y, <span class="name">SOL</span>, et al. {MorFuzz}: Fuzzing processor via runtime instruction morphing enhanced synchronizable co-simulation[C]//32nd USENIX Security Symposium (USENIX Security 23). 2023: 1307-1324. </a></li>
        <li><a href="https://doi.org/10.1002/int.22851">Du T, Ji S, Wang B, <span class="name">SOL</span>, et al. DetectSec: Evaluating the robustness of object detection models to adversarial attacks[J]. International Journal of Intelligent Systems, 2022, 37(9): 6463-6492. </a></li>
      </ul>
    </ul>
    </sec>
  </div>
</template>

<script>
import Section from '@/components/Section'

export default {
  name: 'Index',
  components: {
    'sec': Section
  },
  data () {
    return {
      publications: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sticker{
  display: block;
}

.name{
  color: cyan;
  font-style: italic;
}

</style>
