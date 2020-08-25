<template>
    <transition name="fade">
    <div class="mt-4">
    <div  v-show="show" class="alert red-alert"  fade>
    <h4 class="alert-heading text-white">Do you want to delete this note?</h4>
     <button  size="md" class="px-4 py-2 mx-4 btn btn-light text-danger" @click="deletenote">Yes</button>
     <button size="md" class="px-4 py-2 btn  btn-outline-light" @click="cancel">NO</button>
  </div>
    </div>
    </transition>
</template>
<script>
export default {
    props:["show"],
    methods:{
        cancel(){
            this.$emit('cancelmodal')
        },
        deletenote(){
            this.$emit('deletenote')
            this.cancel()
        }
    }
}
</script>

<style  scopped>
    .red-alert{
  background-color: #ff2600;
    top: 12px;
    position: fixed;
      width: 50%;
    left: 20%;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>