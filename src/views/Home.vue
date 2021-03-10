<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container">
      <br /><Hero></Hero>

      <div class="row mt-4">
        <div class="col">
          <h2><strong>Best</strong> Food</h2>
        </div>
        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Semua</router-link
          >
        </div>
      </div>

      <div class="row mb-4">
        <div
          class="col md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product"></CardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CardProduct from "@/components/CardProduct.vue";
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";

// import axios from "axios";
export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  data() {
    return {
      products: [],
  
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    setError(resspon)
    {
      if(resspon==this.error)
        console.log('error');
        this.$toast.warning("Server Bermasalah", {
          
        type :'error',
            position:'top',
            duration :3000,
            dismissible:true,
          });
    },
    getIdLocalStoroge()
    {
      if(localStorage.getItem('id_user')==null)
      {
        return alert('You Are Not Log In');
      }
    }
  },
  mounted() { 
    // console.log(this.$id_user);

  this.getIdLocalStoroge()
;    const uri =  this.$apiUrl ; 
    this.$http.get(uri).then((response)=>this.setProduct(response.data))
    .catch((error)=>this.setError(error));
  

  },
};
</script>
