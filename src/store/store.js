import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state:{
		info: null,
		a:[],
		sobj:[],
		seen: true
	}
	// mutations:{
	// 	addData: state => {
	// 		state.b = _.concat(state.a,state.any)
 //      console.log(state.a)
	// 	},
	// 	finalData: state => {
	// 		state.info = state.b
	// 	}
	// },
	// actions:{
	// 	addData : ({commit}) => {
 //        commit('addData')

	// 	},
	// 	finalData: ({commit}) => {
	// 		  commit('finalData')
	// 	}
	// }
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
