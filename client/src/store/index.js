import { Store } from 'vuex';
import todos from './modules/todos.js'
const store = new Store({
    modules:{
        todos
    }

})
export default store