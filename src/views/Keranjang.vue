<template>
  <div class="keranjang">
    <Navbar></Navbar>
    <div class="container">
    <div style="text-align: center;"><h2>List Belanja</h2></div>
      <div class="row">

        <div class="col mt-5">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Menu</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(keranjang,index) in kerajangs" :key="keranjang.id_pesan">
                <td scope="row">{{index+1}}</td>
                <td>{{keranjang.nama_menu}}</td>
                <td>{{keranjang.jumlah_pesan}}</td>
                <td>{{keranjang.keterangan}}</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Keranjang",
  components: {
    Navbar,
  },
  data(){
      return{
        kerajangs:[],

      }
  },
  methods:{
    setKeranjang(data)
    {
      this.kerajangs=data ;
    }
  },
  mounted(){
    axios
    .get("http://localhost/back_endServer/api/listPesanan")
    .then((response)=>this.setKeranjang(response.data))
    .catch((error)=>console.log(error))
  }

};
</script>
<style>
</style>