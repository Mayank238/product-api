<template>
	<div>
		<div>
			<label>name</label>
			<input type="" name="" v-model='poductname'>
			<div></div>
			<label>id</label>
			<input type="" name="" v-model='productid'>

			<button class="btn btn-info" type="submit" @click="b()">Done</button>
		</div>
	</div>
</template>
<script type="text/javascript">
import _ from 'lodash'
	export default{
		props:['seen'],
		data(){
			return{
         poductname: '',
         productid : ''
			}
		},

		methods:{
			b(){
        this.$store.state.seen = ! this.$store.state.seen
        var fd= [{name: this.poductname, gtin14: this.productid}]
        this.$store.state.info = _.concat(this.$store.state.a, fd)


        // this.$store.state.a = _.concate(this.$store.state.a,this.$store.state.any)
      }
		}

	}
</script>
