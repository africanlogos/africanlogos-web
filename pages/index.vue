<template>
 <section>
     <Banner />
     <Header />

     <section>
       <LeftBar />
         
     </section>


 </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  mounted() {
    console.log('IndexPage mounted')
  }
})
</script>
