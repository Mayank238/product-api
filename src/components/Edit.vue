<template>
	<div>
		 <h1>Edit the Product</h1>
		<div>
			<div class="form-group">
			  <label class="form-control-label">Name:</label>
		  </div>
			  <input type="" name="" v-model='val.name'>
		</div>
		<div>
			<div class="form-group">
			  <label class="form-control-label">Author</label>
		  </div>
			  <input type="" name="" v-model='val.author'>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		computed:{
			val(){
				return this.$store.state.sobj
			}
		}
	}
</script>
