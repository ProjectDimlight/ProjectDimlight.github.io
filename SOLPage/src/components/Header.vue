<template>
  <div class="block">
    <router-link to="/">
      <div class="box" style="width: 160px;">
        S<span style="font-size: 0.8em; color: cyan;">OL</span>&nbsp;&nbsp;
        O<span style="font-size: 0.8em; color: cyan;">N</span>&nbsp;&nbsp;
        L<span style="font-size: 0.8em; color: cyan;">INE</span>
      </div>
    </router-link>
    <router-link to="/todo">
      <div class="box">
        TODO List <span class="label">日程</span>
      </div>
    </router-link>
    <div class="box">
      科研进展 <span class="label">学术</span>
    </div>
    <div class="box">
      世界树默示录 <span class="label">世界观</span>
    </div>
    <router-link to="/memo">
      <div class="box">
        sol失眠记 <span class="label">随笔</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.block {
  background-color: rgba(255, 255, 255, 0.25);
  display: flex;
  font-size: 16px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
}

.label{
  font-size: 5px;
  color: cyan;
}

.box {
  transition: 1s;
  padding: 15px 10px;
  width: 150px;
  margin: 0px;
  text-align: center;
}

.box:hover {
  color: black;
  background-color: rgba(255, 255, 255, 0.7);
}

</style>
