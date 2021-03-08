<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h2>Daftar <strong>Makanan</strong></h2>
        </div>
      </div>
      <div class="row mt-3">
        <div class="input-group mb-3">

          <input
            v-model="seacrh"
            type="text"
            class="form-control"
            placeholder="Cari Makanan Kesukaan Anda"
            aria-label="cari"
            aria-describedby="basic-addon1"
             @keyup="seacrhFood"
          />
                    <span class="input-group-text" id="basic-addon1"><b-icon-search></b-icon-search></span>
        </div>
      </div>
      <div class="row mb-3">
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
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

export default {
  name: "Foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      products: [],
      seacrh:'',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
      
    },
    seacrhFood()
    {
      var param = this.seacrh ;
      const uri = this.apiUrl+'/seacrh'+'/?nama_menu='+param 
      this.$http.get(uri).then((response)=>this.setProduct(response.data))
      .catch((error)=>console.log("gagal",error))
      .then(() => {
          this.$router.push({path: "/keranjang"})
          this.$toast.success("Sukses Masuk Ke Keranjang", {
   
            type :'success',
            position:'bottom',
            duration :3000,
            dismissible:true,
          });
        })
        .catch((error) => {
          console.log(error);
        });



      
    }
    
  },
  
  
  mounted() {
    const uri =  this.$apiUrl ; 
    this.$http.get(uri).then((response)=>this.setProduct(response.data))
    .catch((error)=>console.log("gaga",error))

  },
  // computed:{
  //   filterBlogs: function()
  //   {
  //     return this.products.filter((product)=>
  //     {return product.nama_menu.match(this.seacrh);}
  //     )
  //   }
  // },
};
</script>
<style>
</style>