<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Kulineran</a>
        
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/foods">Berita</router-link>
            </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/login"> Login</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/keranjang"
                >Keranjang
                <b-icon-bag></b-icon-bag>
                <span class="badge badge-success ml-2">{{jumlah_pesanan}}</span>
              </router-link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: "Navbar",
  data(){
    return{
      jumlah_pesanan:[] ,
      id_user : null , 
    } ; 
  },
  methods:{
    setJumlahPesanan(data)
    {
      if(data)
      this.jumlah_pesanan=data;
      else{
        this.jumlah_pesanan='';
      }
    }
    
  },
  mounted(){
    
    this.id_user = localStorage.getItem('id_user');
    if(this.id_user==null)
    {
      var nil ;
      this.setJumlahPesanan(nil)
    }
    else{
const uri = this.$apiUrl+'/totalPesanan'+'?id_user='+this.id_user; 
    this.$http.get(uri).then((response)=>this.setJumlahPesanan(response.data))
    .catch((error) => {
          console.log(error);
        });
    }
    
 
  }
};
</script>
