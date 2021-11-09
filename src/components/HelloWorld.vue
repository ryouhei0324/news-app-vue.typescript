<template>
    <div>
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">

      <div  v-for="(posts,index) in this.$store.state.articles" :key="index">
        <div class="columns large-3 medium-6">
          <div class="card">
          <div class="card-divider">
          {{ posts.title}}
          </div>
          <a :href="posts.url" ><img :src='posts.urlToImage'></a>
          <div class="card-section">
            <p>{{ posts.description}}</p>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { mapGetters,mapActions } from "vuex"

  export default {
    data (){
        return{
      drawer: false,
      group: null,
      sections:['business','sports','health'] ,
      text:''
        }
    },

    watch: {
      group () {
        this.drawer = false
      },
    },
    
    methods:{
        ...mapActions(['updateCategory','setArticles','Search']),
    Change(section){
            this.updateCategory(section)
            console.log(section);
            this.setArticles()

        },
    
    Searchii(i){
            
            if(this.text==''){
            console.log('入力されてません');
            return 
            }
            else{
            //   return this.$store.state.articles.filter(i=>{
            // this.$store.state.articles= i.title.indexOf(this.text)>=0
            this.Search(i)
            // })
            }
    }
    }
  }
</script>

<style>
.ii{

}

</style>

