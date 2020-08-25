import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase"
import { BootstrapVue} from 'bootstrap-vue'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App),
created(){
  firebase.initializeApp({
    apiKey: "AIzaSyBIij-55dbDqG1_HmHYIY-svwPlfrfasMM",
    authDomain: "quicknotetasks.firebaseapp.com",
    databaseURL: "https://quicknotetasks.firebaseio.com",
    projectId: "quicknotetasks",
    storageBucket: "quicknotetasks.appspot.com",
    messagingSenderId: "918928288753",
    appId: "1:918928288753:web:4b035d82a6a0d309ce7250",
    measurementId: "G-6W0NNFENHC"
  })
}
}).$mount('#app')
