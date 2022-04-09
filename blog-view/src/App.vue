<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
import vueLive2d from 'vue-live2d'




export default {
  name: 'App',
  components: {

  },
  data () {
    return {
      direction: 'right',
      style: '',
      width: 500,
      height: 500,
      size: 350,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      }
    }
  },
  created () {
    // tips 未使用，可自行在组件绑定此参数，注意此参数只会初始化一次
    this.tips = this.customTips
  }
}
</script>


<style>

</style>
