<template>
	<div>
		<div>
			<label>name</label>
			<input type="" name="" v-model='print[0].name'>
			<div>{{print[0].name}}</div>
			<label>id</label>
			<input type="" name="" v-model='print[0].gtin14'>{{print[0].gtin14}}
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		computed:{
			print(){
				return this.$store.state.any
				//cosole.log(this.$store.state.any.gtin14)
			}
		},

	}
</script>
