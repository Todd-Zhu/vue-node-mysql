<template>
  <div>
      {{ users }}
  </div>
</template>

<script>
export default {
  name: 'user',
  data(){
    return {
      users : ""
    }
  },
  created(){
    this.$axios.get('/getUser').then((data)=>{
      const result = data.data;
      this.users = JSON.stringify(result);
    });
  },
}
</script>

<style>
</style>
