<template>
  <div>
    <div class="card-header text-center text-info col-lg-12 col-sm-12">
      <h1>CRUD APPLICATION</h1>
    </div>
      <div class="space"></div>
      <div v-if="this.$store.state.load" class="spinner-grow text-secondary" role="status">
        <span class="sr-only">loading..</span>
      </div>
      <div v-else>
    <div v-if='this.$store.state.seen'>
      <div class=" container ">
      <div class="row">
        <button class="btn btn-outline-dark col-lg-2" @click="add()">
          <i class="fa fa-plus"></i> add product
        </button>
      </div>
      </div>
      <div class="space"></div>
      <div class="container">
      <table class="table table-hover">
        <thead>
          <th>Name</th>
          <th>Author</th>
          <th>Action</th>
        </thead>
        <tbody v-for="(data,index) in data">
          <tr class="" :id='index'>
            <td>{{data.name}}</td>
            <td>{{ data.author}}</td>
            <td>
              <button class="btn btn-secondary" @click='editProduct(data,index)'>edit</button>
              <button class="btn btn-danger" @click='del(data,index)'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
    <modal name="edit-product">
    <!-- <div v-if='(!this.$store.state.seen) && this.$store.state.seen2' class="container"> -->
      <div class="container">
        <app-edit :data="Product"></app-edit>
        <div class="space"></div>
        <button class="btn btn-info" @click="editdone()">Done</button>
      </div>
    <!-- </div> -->
    </modal>
    <modal name="add-product" height="auto" >
    <!-- <div v-if='(!this.$store.state.seen) && (!this.$store.state.seen2)'> -->
      <app-addproduct ></app-addproduct>
      <div class="space"></div>
    <!-- </div> -->
    </modal>
  </div>
</template>
<script >
import axios from 'axios'
import edit from '@/components/Edit'
import _ from 'lodash'
import addproduct from '@/components/addproduct'
  export default{
    data(){
      return{
        Product: null,

      }
    },
    computed:{
      data(){
          this.$store.state.productdata = this.$store.state.products
          return this.$store.state.productdata
      }
    },
    created(){
      // axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
      //      .then((response) => (this.$store.state.info = response.data))
      this.$store.dispatch('apicall')
    },
    components:{
      'app-edit': edit,
      'app-addproduct': addproduct
    },
    methods:{
      editProduct(data,index){
        // this.$store.state.seen =! this.$store.state.seen
        this.Product = data
        this.removeclass();
         document.getElementById(index).className = 'activeClass'
        this.$modal.show('edit-product');
        console.log(index)

        // this.$store.state.sobj = _.find(this.$store.state.a,{'gtin14': event})
        // console.log(event)
      },

      del(val,index){
        var r= confirm("Are you sure ??")
        if (r == true) {
          // this.$store.state.productdata = _.remove(this.$store.state.productdata, {'gtin14': val })
          this.$store.state.productdata.splice(index,1)
        }
      },
      add(){
        // this.$store.state.seen2 = false
        // this.$store.state.seen =false

        this.$modal.show('add-product');
        // this.$store.state.any[0].name=''
        // this.$store.state.any[0].gtin14=''

      },
      editdone(){
        // this.$store.state.seen = ! this.$store.state.seen
        this.$modal.hide('edit-product');

      },
      removeclass(){
        for (var i = 0; i <this.data.length; i++) {
          document.getElementById(i).classList.remove('activeClass')
        }
      }
    }

  }
</script>
<style>
  .space{
    margin-top: 20px;
  }
  .left{
    margin-left: 400px;
  }
  .activeClass{
    background-color: green;
  }
</style>
