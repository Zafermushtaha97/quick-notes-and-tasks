<template>
    <div>
        <nav class="navbar navbar-dark bg-nav ">
        <h3 class="navbar-brand text-white font-cursive ml-4">Quick Notes</h3>
        <form class="form-inline mr-4" @submit.prevent="showmodaladd">
          <button class="btn bg-nav-icon text-white mt-1" type="submit">
            <i class="fas fa-plus"></i>
          </button>
        </form>
      </nav>
        <div>
          <Modal :show="modaladd" @close="hidemodaladd">
            <FormAdd @close="hidemodaladd"></FormAdd>
          </Modal>
          
        </div>
    </div>
    
</template>

<script>
import Modal from '@/components/Modal'
import FormAdd from '@/components/FormAdd'
export default {
  data(){
      return{
          modaladd:false
      }
  },
    components:{
      FormAdd,
      Modal
    },
    methods:{
      showmodaladd(){
        this.modaladd=true
      },
      hidemodaladd(){
        this.modaladd=false
      }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
.nav-extended{
      text-align: start;
    padding-left: 25px;
}
/* .mar-buttom-110{
  margin-bottom: -85%;
} */
.font-cursive{
font-family: 'Dancing Script', cursive;
font-size: 1.7em;
}    

.bg-nav{
  background: rgb(109 78 78 / 15%);
}
.bg-nav-icon{
 background:hsla(0,0%,100%,.3)
}
</style>