<template>
  <div class="keranjang">
    <Navbar></Navbar>
    <div class="container">
    <div style="text-align: center;"><h2>List Belanja</h2></div>
      <div class="row">

        <div class="col mt-5">
              <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th>
            No
          </th>
          <th>Gambar</th>
          <th class="text-left">
            Nama Menu
          </th>
          <th class="text-left">
            Jumlah Pesanan
          </th>
          <th>Keterangan</th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(list,no) in kerajangs" :key="list.id_pesan"
        >
          <td>{{no+1}}</td>
          <td><img class="img-fluid img-thumbnail rounded float-left rounded mx-auto d-block"   :src="'../assets/images/' + list.gambar"
            alt="" srcset=""></td>
          <td>{{ list.nama_menu }}</td>
          <td>{{list.jumlah_pesan }}</td>
          <td>{{list.keterangan ? list.keterangan:"-"}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>




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
    },
    
  },
  mounted(){
    axios
    .get("http://localhost/back_endServer/api/listPesanan")
    .then((response)=>this.setKeranjang(response.data))
    .catch((error)=>console.log(error))

 
  },


};
</script>
<style>
</style>