<template>
  <div class="row m-0 pb-5 mx-4">
  <div class="col-lg-3 col-md-6 col-sm-12  mt-4" v-for="note in notes" :key="note.title">
  <div class="card pb-2 h-100">
    <div class="card-body p-0">
    <div class="inputGroup"  @click="togglestatus(note)">
    <input  name="option2" type="checkbox" :checked="note.status"/>
    <label for="option2" class="card-title bg-sec color-blue p-2">
      <h4>{{note.title}}</h4></label>
  </div>
      <h5 class="card-text px-4 py-2 color-blue">{{note.description}}</h5>  
      <p class="px-4 py-2 color-blue">{{note.duedate}}</p>
        <span v-bind:class="{complete:note.status}" class="default card-lin  px-4 py-2k mx-4" v-if="note.status">Completed</span>
        <span v-bind:class="{complete:note.status}" class="default card-lin  px-4 py-2k mx-4" v-if="!note.status">Not complete</span>
      <div class="delete" @click="showmodaldelete(note.id)">
        <i class="fas fa-trash" ></i>
      </div>
    </div>
    </div>
        <div>
          <DeleteAlert :show="modaldelete" @cancelmodal="hidemodaldelete"
          @deletenote="deletenote(selecteditem)"
          ></DeleteAlert>
        </div>
</div>
</div>
         
</template>

<script>
import DeleteAlert from '@/components/DeleteAlert'
export default {
  components:{
    DeleteAlert
  },
  data(){
    return{
     selecteditem:null,
     modaldelete:false
    }
  },
  mounted(){
    this.$store.dispatch('loadnotes')
  },
  computed:{
    notes(){
     return this.$store.getters.notes
    }
  },
  methods:{
    showmodaldelete(id){
      this.selecteditem=id
      this.modaldelete=true
      
    },
    hidemodaldelete(){
      this.modaldelete = false
    },
    deletenote(){
      this.$store.dispatch('deletenote',this.selecteditem).then(() =>{
        this.selecteditem = null
      })
    },
    togglestatus(note){
      this.$store.dispatch('togglestatus',note)   
    }
  }
}
</script>

<style scopped >
.text-start{
  text-align: start;
}
.delete{
      position: absolute;
    bottom: 4px;
    right: 6px;
    cursor: pointer;
    color: #eb4d4b;
    font-size: 1.5em;
}
.bg-sec{
background: #ebecf0;
}
.color-blue{
 color: #172b4d !important;
}
.complete{
  background-color: #00205b !important;
  color:white !important;
  
}   
.default{
  background-color: #ebecf0;
  padding: 6px;
  color:#172b4d;
  border-radius: 20px;
}
.inputGroup {
  background-color: #fff;
  display: block;
  position: relative;
}
.inputGroup label {
  padding: 12px 30px;
  width: 100%;
  display: block;
  text-align: left;
  color: #3c454c;
  cursor: pointer;
  position: relative;
  z-index: 2;
  transition: color 200ms ease-in;
  overflow: hidden;
}
.inputGroup label:before {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  content: "";
  background-color: #009f4d !important;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale3d(1, 1, 1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  z-index: -1;
}
.inputGroup label:after {
  width: 32px;
  height: 32px;
  content: "";
  border: 2px solid #d1d7dc;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
  background-repeat: no-repeat;
  background-position: 2px 3px;
  border-radius: 50%;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 200ms ease-in;
}
.inputGroup input:checked ~ label {
  color: #fff;
}
.inputGroup input:checked ~ label:before {
  transform: translate(-50%, -50%) scale3d(56, 56, 1);
  opacity: 1;
}
.inputGroup input:checked ~ label:after {
     background-color: #00205b;
    border-color: #005670;
}
.inputGroup input {
  width: 32px;
  height: 32px;
  order: 1;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  visibility: hidden;
}

</style>
  
