<template>

<div class="container" id="app">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
		<h3 class="text-center">VueNews</h3>

		<section class="callout secondary">
			<h5 class="text-center">カテゴリーを選択</h5>
			<form>
				<div class="row">
					<div class="large-6 small-12 columns">
						<select v-model="section">
							<option v-for="(section,index) in sections" :value="section" :key="index" >{{ section }}</option>
						</select>
					</div>
					<div class="large-6 small-12 columns">
						<a @click="Change(section)" class="button expanded">更新</a>
					</div>
				</div>
			</form>
		</section>

		<h5 class="text-center uppercase">{{ title }}</h5>
		<!-- <div  class="loader"><img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader"></div> -->

		<!-- <news-list  :results="results"></news-list> -->
	</div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'
  import { mapGetters,mapActions } from "vuex"


  export default Vue.extend({
    name: 'Home',
    data(){
      return{
        show:false as boolean,
        sections:['business','sports','health','technology','science'] as string[],
        section: 'sports',
        loading: true,
        title: '',
        results: [],      }
    },

    created(){
        this.setArticles()
        
    },

    computed:{
      
    },



    methods:{
      ...mapActions(['setArticles','updateCategory']),
      ...mapGetters(['getArticles']),

    Change(section :any){
            this.updateCategory(section)
            console.log(section);
            this.setArticles()

        },
      
      


    }


  })
</script>

<style>

.container {
  padding: 20px 0
}

.column:last-child:not(:first-child),
.columns:last-child:not(:first-child) {
  float: left;
}

.main_heading {
  margin: 10px 0 30px;
}

.callout {
  margin-bottom: 40px;
}

select {
  text-transform: capitalize;
}

.loader {
  text-align: center;
  padding: 40px;
}

.uppercase {
  text-transform: uppercase;
}
</style>