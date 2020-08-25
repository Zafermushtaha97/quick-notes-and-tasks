<template>
    <div>
        <form @submit.prevent="Addnote" class="w-75">
  <div class="form-group ">
    <label for="notetitle">Note title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    v-model="note.title" required>
  </div>
  <div class="form-group">
    <label for="description">description</label>
    <input type="text" class="form-control" v-model="note.description" required>
  </div>
     <div class="form-group">
    <label for="date">date</label>
    <input type="date" class="form-control" v-model="note.duedate" required>
  </div>
  <div class="form-group form-check">
    <input type="radio" class="form-check-input w20 h15" v-model="note.status" value=true >
    <label class="form-check-label" for="exampleCheck1">Completed</label>
        <br>
     <input type="radio" class="form-check-input w20 h15" v-model="note.status"  value=false>
    <label class="form-check-label" for="exampleCheck2">Not Completed</label><br>
  </div>
  <button type="submit" class="btn btn-primary">Add</button>
  <button type="button" class="btn btn-primary mx-2" @click="cancel">Cancel</button>
</form>
    </div>
</template>

<script>
export default {
    props:["show"],
    data(){
        return{
            note:{
                title:'',
                description:'',
                status:'',
                duedate:new Date().toISOString().substr(0, 10),
            }
        }
    },
    methods:{
        Addnote(){
            this.$store.dispatch('addnote',this.note)
            this.cancel()
        },
        cancel(){
            this.$emit('close')
        }
    }
}

</script>

<style scoopde>
    .w20{
        width: 20px;
        cursor: pointer;
    }
    .h15{
        height: 15px;
        cursor: pointer;
    }
</style>