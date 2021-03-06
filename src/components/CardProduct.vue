<template>
  <!-- <h2>Card <br>{{product.nama_menu}}</h2> -->
    <div class="card shadow card-product">
      <v-card
    class="mx-auto"
    max-width="344"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          {{product.nama_menu}}
        </div>
        <v-list-item-title class="headline mb-1">
          Harga: Rp.{{product.harga}}
        </v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
        
      ><img :src="'assets/images/'+product.gambar" alt=""></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <router-link
        :to= "'/foods/'+product.id_menu"
        outlined
        rounded
        text
        class="btn btn-success"
      >
      <b-icon-cart></b-icon-cart>
        Pesan
      </router-link>
    </v-card-actions>
  </v-card>


    </div>
</template>

<script>
export default {
    name:"CardProduct",
    props:['product']
}
</script>

<style>

</style>