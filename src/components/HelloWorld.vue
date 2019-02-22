<template>
  <div>
    <div class="card-header text-center text-info col-lg-12 col-sm-12">
      <h1>CRUD APPLICATION</h1>
    </div>
      <div class="space"></div>
    <div v-if='seen'>
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
        <tbody v-for="data in data">
          <tr>
            <td>{{data.name}}</td>
            <td>{{ data.author}}</td>
            <td>
              <button class="btn btn-secondary" @click='a(data.gtin14)'>edit</button>
              <button class="btn btn-danger" @click='del(data.gtin14)'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <div v-if='(!seen) && seen2' class="container">
      <app-edit></app-edit>
      <div class="space"></div>
      <button class="btn btn-info" @click="b()">Done</button>
    </div>
    <div v-if='(!seen) && (!seen2)'>
      <app-addproduct :seen='seen' @seenwasupdate='seen = $event'></app-addproduct>
      <div class="space"></div>

    </div>
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
        seen: true,
        seen2:true
      }
    },
    computed:{
      data(){
          this.$store.state.a = this.$store.state.info
          return this.$store.state.a
      },
      any(){
        return this.$store.state.any
      }
    },
    created(){
      axios.get('https://c0rs.herokuapp.com/https://www.datakick.org/api/items')
           .then((response) => (this.$store.state.info = response.data))
    },
    components:{
      'app-edit': edit,
      'app-addproduct': addproduct
    },
    methods:{
      a(event){
        this.seen =! this.seen

        this.$store.state.sobj = _.find(this.$store.state.a,{'gtin14': event})
        console.log(event)
      },

      del(val){
        this.$store.state.a = _.remove(this.$store.state.a, {'gtin14': val })
      },
      add(){
        this.seen2 = false
        this.seen =false
        // this.$store.state.any[0].name=''
        // this.$store.state.any[0].gtin14=''

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
</style>
