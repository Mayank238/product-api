<template>
	<div >
		 <h1>Edit the Product</h1>
		<div class="form-group">
			<div class="form-control-label">
			  <label >Name:</label>
		  </div>
			  <input class="form-control col-lg-5" type="text" name="" v-model='data.name'>
		</div>
		<div class="space"></div>
		<div class="form-group">
			<div class="form-control-label">
			  <label>Author:</label>
		  </div>
			  <input class="form-control col-lg-5" type="text" name="" v-model='data.author'>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['data']
		// computed:{
		// 	val(){
		// 		return this.$store.state.sobj
		// 	}
		// }
	}
</script>
<style>
.space{
	margin-top: 20px;
}
</style>
