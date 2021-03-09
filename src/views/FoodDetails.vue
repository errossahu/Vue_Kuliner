<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col md-6">
          <img
            class="img-fluid shadow"
            :src="'../assets/images/' + product.gambar"
            alt=""
          />
        </div>
        <div class="col md-6">
          <h2>
            <strong>{{ product.nama_menu }}</strong>
          </h2>
          <hr />
          Harga :Rp. <strong>{{ product.harga }}</strong>
          <form v-on:submit.prevent action="">
            <div class="mb-3 mt-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Jumlah Pesanan</strong>
              </label>
              <input
                min="0"
                v-model="pesan.jumlah_pesan"
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Jumlah Pesanan"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Keterangan</label
              >
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="pedas, tidak pedas , setengah matang dll"
              ></textarea>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-success" @click="pemesanan">
                <b-icon-cart></b-icon-cart> Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "FoodDetails",
  components: {
    Navbar,
  },
  data() {
    return {
      product: [],
      pesan: { id_menu: this.$route.params.id_menu },
      data  : new FormData(),
    };
  },
  methods: {
    setProoduck(data) {
      this.product = data;
    },
    pemesanan() {
      this.data.append('id_menu',this.pesan.id_menu);
      this.data.append('jumlah_pesan',this.pesan.jumlah_pesan);
      this.data.append('keterangan',this.pesan.keterangan);

      // const id_menu = this.pesan.id_menu;
      // const jumlah_pesan = this.pesan.jumlah_pesan;
      // const keterangan = this.pesan.keterangan;

      if (this.pesan.jumlah_pesan) {
        const uri =
          this.$apiUrl + "/pesan" ;
        this.$http
          .post(uri,this.data)
          .then(() => {
            this.$router.push({ path: "/keranjang" });
            this.$toast.success("Sukses Masuk Ke Keranjang", {
              type: "success",
              position: "bottom",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.$toast.warning("Jumlah Pesanan Tidak Boleh Kosong", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    const uri = this.$apiUrl + "/?id_menu=" + this.$route.params.id_menu;
    this.$http
      .get(uri)
      .then((response) => this.setProoduck(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
<style>
</style>