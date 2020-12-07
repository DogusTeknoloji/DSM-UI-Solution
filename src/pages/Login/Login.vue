<template>
  <div class="login-page">
    <b-container>
      <Widget
        class="mx-auto"
        title="<h3 class='mt-0 fw-normal text-center'>Sign In to DSM</h3>"
        customHeader
      >
        <div v-if="this.displayName != null && this.displayName.length>1" class="">
            <b-overlay rounded="circle" class="mt-0 fw-normal text-center">
              <b-img width="88" height="60" thumbnail rounded="circle" fluid v-if="this.photo.length > 1" :src="this.photo" :alt="this.displayName" />
            </b-overlay>
           <b-card-title class="mt-2 fw-normal text-center">Welcome back {{this.displayName.split(' ')[0]}}!</b-card-title> 
        </div>
          <b-alert class="alert-sm" variant="secondary" :show="alertCountDown"
                   @dismissed="alertCountDown=0" @dismiss-count-down="countDownChanged">
            <h6 class="mt-2 fw-normal">{{errorMessage}}</h6>
            <b-progress variant="secondary" :max="alertSeconds" :value="alertCountDown" height="8px" />
          </b-alert>
          <b-form-group label="User Name" label-for="username-input">
            <b-input-group class="input-group-transparent">
              <b-input-group-text slot="prepend">
                <i class="fa fa-user text-white"></i>
              </b-input-group-text>
              <b-form-input
                id="username-input"
                class="input-transparent pl-0"
                type="text"
                v-model="form.Username"
                required
                placeholder="Your User Name"
              />
              <div>
                <span class=" pl-0 v-center" > @ </span>
              </div>
              <b-form-select 
                id="domainselect-input"
                class="input-transparent pl-0"
                type="text"
                required
                v-model="selected" 
                :options="options"
               />
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password-input">
            <b-input-group class="input-group-transparent">
              <b-input-group-text slot="prepend">
                <i class="fa fa-lock text-white"></i>
              </b-input-group-text>
              <b-form-input
                id="password-input"
                class="input-transparent pl-0"
                type="password"
                ref="pwd"
                v-model="form.Password"
                required
                placeholder="Your Password"
                v-on:keyup.enter="login"
              />
            </b-input-group>
          </b-form-group>
          <div class="widget-middle-overflow bg-widget mt-4 px-4 py-3">
            <b-button class="btn-block btn-lg fs-normal" type="submit" 
                      variant="primary" @click="login()">
              <div v-show="!isLoading">
                <span class="login-circle">
                  <i class="fa fa-caret-right"></i>
                </span>
                &nbsp;Sign in
              </div>

              <div v-show="isLoading">
                <b-spinner small type="grow"></b-spinner> Loading...
              </div>
            </b-button>
            <a 
              href="#"
              class="text-center text-dark d-block mt-4 hidden"
            >Forgot Username or Password?</a>
          </div>
        <!-- </form> -->
      </Widget>
    </b-container>
    <footer class="footer">
      <div class="float:right">
        <p> Sürüm: 20.12.08.1 </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Widget from "@/components/Widget/Widget";
import { mapGetters } from "vuex";
export default {
  name: "LoginPage",
  components: { Widget },
  computed: {
    ...mapGetters({
      photo: "user/GET_PHOTO",
      userName: "user/GET_USERNAME",
      displayName: "user/GET_DISPLAYNAME"
    }),
  },
  mounted(){
    if (this.userName != null && this.userName.length > 0){
      this.form.Username = this.userName;
      this.$refs.pwd.$el.focus();
    }
  },
  data() {
    return {
      isLoading: false,
      alertSeconds: 15,
      alertCountDown: 0,
      errorMessage: null,
      form: {
        Username: "",
        Password: ""
      },
      selected:"@d-teknoloji.com.tr",
      options:[
        { value:"idv", text:"Individual Account"},
        { value:"@d-teknoloji.com.tr",text:"d-teknoloji.com.tr" },
        { value:"@vdfholding.com.tr",text:"vdfholding.com.tr" },
        { value:"@dohas.com.tr",text:"dohas.com.tr" },
        { value:"@dturizm.com.tr",text:"dturizm.com.tr" }
      ]
    };
  }, 
  methods: {
    login() {
      this.isLoading = true;
      var userValidationObj = { Username:  this.form.Username + this.selected, Password: this.form.Password };
      if (this.selected == "idv"){
        userValidationObj.Username = this.form.Username;
      }
      
      if (this.form.Username.length !== 0 && this.form.Password.length !== 0) {
        this.$store
          .dispatch("user/action_login", userValidationObj)
          .then(res => {
            if (res) {
              this.isLoading = false;
              window.localStorage.setItem("authenticated", true);
              if (window.location.pathname !== "/app/dashboard"){
                this.$router.push("/app/dashboard");
              }
            }
          })
          .catch(err => {
            this.isLoading = false;
            if (err.errorCode == 400){
              this.errorMessage = "Error: " + err.message;
            }
            else{
              this.errorMessage = err;
            }
            this.showAlert();
          });
      }
    },
    countDownChanged(dismissCountDown){
      this.alertCountDown = dismissCountDown;
    },
    showAlert(){
      this.alertCountDown = this.alertSeconds;
    }
  },
  created() {
    if (window.localStorage.getItem("authenticated") === "true" && window.location.pathname !== "/app/dashboard") {
      
      this.$router.push("/app/dashboard");
    }
  }
};
</script>

<style src="./Login.scss" lang="scss" scoped />
