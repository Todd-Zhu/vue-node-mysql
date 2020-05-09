<template>
  <div>
    <table class="user-table">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user,idx) in users" :key="idx">
          <td class="">{{user.id}}</td>
          <td class="">{{user.name}}</td>
          <td class="">{{user.phone}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'user',
  data(){
    return {
      users : []
    }
  },
  created(){
    this.$axios.get('/getUser').then((data)=>{
      const result = data.data;
      this.users = result;
    });
  },
}
</script>

<style>
.user-table{
  text-align: center;
}
</style>
