<template>
  <div class="hero">
    <!-- DESKTOP -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex 1-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Selamat Datang Di:</strong><br />Kab. Manggarai Barat</h2>
              <!-- <p>Ayo Segera Pilih Makanan Favoritmu</p> -->
              <router-link to="/foods" class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/Untitled.png" width="100%" />
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <img src="../assets/Untitled.png" width="100%" />
        </div>
        <div class="col-md-6">
          <div class="d-flex 1-100">
            <div class="justify-content-center align-self-center">
              <h2><strong>Food For Everyone</strong><br />Yummy...!</h2>
              <p>Ayo Segera Pilih Makanan Favoritmu</p>
              <router-link to="/foods" class="btn btn-lg btn-success">
                <b-icon-arrow-right></b-icon-arrow-right>Pesan
              </router-link >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
</style>