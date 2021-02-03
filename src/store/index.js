import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    Loadnotes(state,notes){
      state.notes = notes
    },
  },
  actions: {
    loadnotes({commit ,state}){
     axios.get(`https://raw.githubusercontent.com/Zafermushtaha97/data-serve/master/db.json`).then((response)=>{
        state.notes = response.data.notes
        commit('Loadnotes',state.notes)
      })
    },
    deletenote({commit,state},payload){
        commit('Loadnotes',state.notes.filter(note => note.id != payload))
    },
    addnote({commit,state},payload){
        commit('Loadnotes',state.notes.concat(payload))
    },
    togglestatus({commit,state},payload){
      axios.patch(`https://raw.githubusercontent.com/Zafermushtaha97/data-serve/master/db.json${payload.id}`,
      {
        "title":payload.title,
        "description":payload.description,
        "status": payload.status = !payload.status
      }).then(() =>{
        commit('Loadnotes',state.notes)
      })
    }
  

    
  },
  getters:{
    notes(state){
      return state.notes

    }
  },
  modules: {
  }
})
