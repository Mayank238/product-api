import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		products: null,
		productdata:[],
		seen: true,
		seen2:true,
		load:true,
		name:'',
		gtin14:'',
		author:''
	},
	mutations:{
       apicall: (state, res) =>{
       	state.load = false
       state.products = res
       },
       addProduct:
       (state) => {
       	state.products.push({'name':state.name , 'gtin14': state.gtin14, 'author': state.author})
       }
	},
	actions: {
		apicall: ({commit}) =>{
      axios.get(process.env.ROOT_API)
           .then((response) => {
           	// this.$store.state.info = response.data
            commit('apicall',response.data)
           })
		},
		addProduct: ({commit}) => {
			commit('addProduct')
		}
	}
})
