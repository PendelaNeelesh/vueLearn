const state = {
    todos:{
        
        id: 1,
        title: "Abcd"
    }
};


const getters = {
    allTodos(state){
        return state.todos;
    }
};


const actions = {};


const mutations = {};



export default{
    state,
    getters,
    actions,
    mutations,
}