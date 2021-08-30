<template>
  <div class="row d-flex justify-content-center loginPage m-0">
    <div class="col-11 col-sm-9 col-md-6 col-lg-5 col-xl-4 col-xxl-3 my-auto loginPage-tab">
      <ul id="myTab" class="nav nav-tabs" role="tablist">
        <li class="nav-item" role="presentation">
          <button id="login-tab" class="nav-link active" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true" @click="clear">Login</button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="register-tab" class="nav-link" data-bs-toggle="tab" data-bs-target="#register" type="button" role="tab" aria-controls="register" aria-selected="false" @click="clear">Register</button>
        </li>
      </ul>

      <div id="myTabContent" class="loginPage-tab-formGroup tab-content">
        <div id="login" class="tab-pane fade show active pt-3" role="tabpanel" aria-labelledby="login-tab">
          <div class="input-group mb-2">
            <span class="input-group-text"><i class="far fa-user-circle fa-lg"></i></span>
            <input v-model="UserName" type="text" class="form-control formInput" placeholder="Username" aria-label="Username" aria-describedby="login-name">
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text"><i style="font-size:1.3em" class="fas fa-key"></i></span>
            <input v-model="Password" type="password" class="form-control formInput" placeholder="Password" aria-label="Password" aria-describedby="login-password">
          </div>
          <div class="d-grid mt-2">
            <button type="button" class="btn btn-success btn-block --btnFocus" @click="login">Giriş</button>
          </div>
        </div>

        <div id="register" class="tab-pane fade pt-3" role="tabpanel" aria-labelledby="register-tab">
          <div class="input-group mb-2">
            <span class="input-group-text"><i class="far fa-user-circle fa-lg"></i></span>
            <input v-model="UserName" type="text" class="form-control formInput" placeholder="Username" aria-label="Username" aria-describedby="register-Name">
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text"><i style="font-size:1.3em" class="fas fa-key"></i></span>
            <input v-model="Password" type="password" class="form-control formInput" placeholder="Password" aria-label="Password" aria-describedby="register-Password">
          </div>
          <div class="input-group mb-2">
            <span class="input-group-text"><i style="font-size:1.3em" class="fas fa-key"></i></span>
            <input v-model="PasswordRepeat" type="password" class="form-control formInput" placeholder="Password" aria-label="PasswordRepeat" aria-describedby="register-PasswordRepeat">
          </div>
          <div class="d-grid mt-3">
            <button type="button" class="btn btn-primary --btnFocus" @click="register">Kayıt Ol</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'assets/scss/login.css'

export default {
  data() {
    return {
      UserName: '',
      Password: '',
      PasswordRepeat: '',
    }
  },
  created() {
    this.load()
  },
  methods: {
    load() {
      this.$nuxt.$options.router.push('login')
    },
    register() {
      if (!['undefined', null, ''].includes(this.UserName) && !['undefined', null, ''].includes(this.Password) && (this.Password === this.PasswordRepeat)) {
        const User = {
          UserName: this.UserName,
          Password: this.Password,
        }
        this.$store.commit('LocalStorage/set', {User})
        location.reload();
        alert('Kayıt başarılı.')
      } else {
        alert('Bilgiler yanlış.')
      }
    },
    login() {
      const user = this.$store.state.LocalStorage.User
      if (user?.UserName === this.UserName && user?.Password === this.Password) this.$nuxt.$options.router.push('catImage')
      else alert("Bilgiler yanlış.")
    },
    clear() {
      this.UserName = ''
      this.Password = ''
      this.PasswordRepeat = ''
    }
  },
}
</script>
<style>
.loginPage {
}

.loginPage-tab {
  padding-top: 20vh;
}
</style>
