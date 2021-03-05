<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container"><br><Hero></Hero></div>
    

     </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Hero from '@/components/Hero.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Hero
  }
}
</script>
