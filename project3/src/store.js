import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age:20,
      likes : 5,
      click : false,
      more : {},
    }
  },

  mutations : {
    setMore(state, data){
        state.more = data
    },
    이름변경(state){
        state.name = 'park'
    },
    나이올리기(state, data){
        state.age += data
    },
    좋아요(state){
        if (state.click == false) {
            state.likes ++;
            state.click = true;
        } else{
            state.likes --;
            state.click = false;
        }
    }
  },
  actions : {
    getData(context){
        axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((a)=>{
           context.commit('setMore', a.data) 
        })
    }
  }
})

export default store