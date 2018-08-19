export default{
	state: {
        isLoggedIn: false
    },
	  getters : {
	  	isLoggedIn(state, getters, rootState) {
            return state.isLoggedIn;
        }
    },
    actions:{
    	login({state, commit, rootState,}){
    		commit('login');

    	},
    	logout({state, commit, rootState,}){
    		commit('logout');
    	}
    },
    mutations:{
    	login(state){
    			state.isLoggedIn = true;
    	},
    	logout(state){
    		state.isLoggedin = false;
    	}
    }
}