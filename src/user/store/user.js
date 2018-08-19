export default{
	state:{

	},
	  getters : {
	  	isLoggedIn(state, getters, rootState) {
            return rootState.isLoggedIn;
        }
    },
    actions:{
    	login({state, commit, rootState,}){
    		alert("isLoggedin is:" + rootState.isLoggedIn);

    	},
    	logout({state, commit, rootState,}){
    		
    	}
    }
}