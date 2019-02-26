<template>
	<div>
		<div class="container">
			<h1>Add Product</h1>
			<div class="form-group">
			  <div class="form-control-label">
			    <label class="">Name:</label>
			  </div>
			    <input class="form-control col-lg-6" type="" name="" v-model='productname'>
			</div>
			<div class="space"></div>
			<div class="form-group">
				<div class="form-control-label">
			    <label>Author:</label>
			  </div>
			    <input class="form-control col-lg-6" type="" name="" v-model='author'>
      </div>
			<div class="space"></div>
			<div class="form-group">
				<div class="form-control-label">
			    <label>ID:</label>
			  </div>
			    <input class="form-control col-lg-6" type="" name="" v-model='productid'>
      </div>
      <div class="space">
			  <button class="btn btn-info form-control col-lg-2" type="submit" @click="addDone()">Done</button>
		  </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
         productname: '',
         productid : '',
         author:''
			}
		},

		methods:{
			addDone(){
        // this.$store.state.seen = ! this.$store.state.seen
        // this.$store.state.seen2 = ! this.$store.state.seen2
        // var fd= [{name: this.poductname, gtin14: this.productid}]
        // this.$store.state.info = _.concat(this.$store.state.a, fd)
        this.$store.state.name = this.productname
        this.$store.state.gtin14 = this.productid
        this.$store.state.author = this.author
        this.$store.dispatch('addProduct')
        this.$modal.hide('add-product');


        // this.$store.state.a = _.concate(this.$store.state.a,this.$store.state.any)
      }
		}

	}
</script>
<style>
.space{
	margin-top: 20px;
}
</style>
