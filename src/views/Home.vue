<template>
  <div class="home">
    <Navbar></Navbar><br><br>
    <TodoCard></TodoCard>
   
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar'
import TodoCard from '@/components/TodoCard'
export default {
  name: 'Home',
  components: {
    Navbar,
    TodoCard

  }
}
</script>
<style  scoped>
.home{
    background: radial-gradient(#00205b, transparent) !important;
height: 100%;
}
</style>