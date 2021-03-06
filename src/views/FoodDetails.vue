<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="col">
        <div class="row">
          <!-- <h1>Food Detail{{ $route.params.id_menu }}</h1> -->
          <p>{{ product.nama_menu }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

export default {
  name: "FoodDetails",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
    };
  },
  methods: {
    setProoduck(data) {
      this.product = data;
    },
  },
  mounted() {
    axios
    .get("http://localhost/back_endServer/api/?id_menu= "+this.$route.params.id_menu )
    .then((response)=>this.setProoduck(response.data))
    .catch((error)=>console.log(error));
  },
};
</script>

<style>
</style>