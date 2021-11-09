import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    articles:[] as string[],
    section: ['business'],
    results: [],
    // sections: SECTIONS.split(', '), // create an array of the sections
    // section: 'home', // set default section to 'home'
    loading: true,
    title: ''

    
  },
  mutations: {
    setArticles:(state,payload) =>{
      state.articles = payload.data
    },
    setActiveCategory(state, category){
      state.section=category
      console.log(state.section);
      
  },
    Search(state, text){
      state.articles.filter((i: string | any[]) =>{
        console.log(i);
       i.indexOf(text)>=0
        
        
      })
    }
  },
  actions: {
   
    async setArticles({commit}){
      const NYTBaseUrl = 'https://newsapi.org/v2/top-headlines?country=jp&category=';
      const ApiKey = '4196d9a26cfc4e68baf81f7a5b23404f';
      function buildUrl (url :any) {
        return NYTBaseUrl + url + "&apiKey=" + ApiKey;
    } 
      const url :string = buildUrl(this.state.section)
      const payload ={
        data:''
      };
      await axios.get(url)
      .then((res :any)=> {
        payload.data=res.data.articles
        commit('setArticles',payload)
        console.log(this.state.articles);
        
      })
      .catch(error=>{
        console.log(error);
        
      })     },



    updateCategory({commit, state}, category){
      if(state.section !== category){
          commit('setActiveCategory', category)
          console.log(category);

          
          
      }
  },

    Search({commit,state},text){
      commit('Search',text)
      console.log(text);
      
    }

      
    
  },
  getters: {
    getArticles:state=>{
      return state.articles
    }
  }
})
