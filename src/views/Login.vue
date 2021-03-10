<template>
  <v-app id="inspire">
    <Navbar></Navbar>

    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar color="success" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form v-on:submit.prevent>
                <v-text-field
                  label="Login"
                  prepend-icon="person"
                  type="text"
                  v-model="Login.email"
                >
                  <v-icon>person</v-icon>
                </v-text-field>

                <v-text-field
                  id="password"
                  label="Password"
                  prepend-icon="lock"
                  type="password"
                  v-model="Login.password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="Login_vue" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import "@mdi/font/css/materialdesignicons.css";
export default {
  name: "Login",
  components: {
    Navbar,
  },
  data() {
    return {
      Login: {},
      id :null , 
      user: new FormData(),
    };
  },
  methods: {
    Login_vue() {
      this.user.append("email", this.Login.email);
      this.user.append("password", this.Login.password);

      const uri = this.$apiUrl + "/login";
      this.$http
        .post(uri, this.user)
        .then((response) => 
          {this.$toast.success("Sukses Masuk Ke Keranjang", {
            type: "success",
            position: "bottom",
            duration: 3000,
            dismissible: true,
          });
          this.setUserSession(response.data);
        },
        )
        .catch((error) => {
          console.log(error);
        });
    },
    setUserSession(data) {
     localStorage.setItem('id_user',data.id_users);
    //  console.log(localStorage.getItem('id_user'));
    },
  },
};
</script>

<style>
</style>