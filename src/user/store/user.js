export default{
	state:{

	},
	  getters : {
	  	isLoggedIn(state, getters, rootState) {
            return rootState.isLoggedIn;
        }
    }
}