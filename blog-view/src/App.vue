<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>





export default {
  name: 'App',
  components: {

  },
  data () {
    return {

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
