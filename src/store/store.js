import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		info: null,
		a:[],
		sobj:[],
		b:[],
		any:[{'gtin14':'' ,'name':''}]
	},
	mutations:{
		addData: state => {
			state.info = _.concat(state.a,state.any)
      console.log(state.a)
		}
	},
	actions:{
		addData : ({commit}) => {
        commit('addData')

		}
	}
	// mutations:{
	// 	update: (state, productid) => {
 //        state.name = _.find(state.a,{'gtin14}': 'productid'})
	// 	}
	// },
	// actions:{
	// 	update: ({commit}, productid) => {
 //         commit('update', productid)
	// 	}
	// }

})
