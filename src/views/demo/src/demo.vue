<template>
  <div class="demo">
    <img src="../../../assets/img/l.gif"/>
    <h1>demo beiquan </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'say hello'
    }
  },
  mounted() {
    this.$alert('这是一段内容', '标题名称', {
      confirmButtonText: '确定',
      callback: action => {
        this.$message({
          type: 'info',
          message: `action: ${action}`
        })
      }
    })
  }
}
</script>

<style lang="scss">
  @import 'scss/variables.scss';
  .demo {
    background-color: red;
    font-family: $font-family-base;
    font-size: 14px;
  }
</style>
