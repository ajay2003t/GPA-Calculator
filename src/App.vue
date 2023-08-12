<template>
  <div>
    <the-header></the-header>
    <h3 class="text-center head">Select Your Department</h3>
    <base-card>
    <select class="course" v-model="select" placeholder="Course">
      <option value="CSBS">CSBS</option>
      <option value="CSE">CSE</option>
      <option value="CCE">CCE</option>
      <option value="AIDS">AIDS</option>
      <option value="MECH">MECH</option>
      <option value="ECE">ECE</option>
  </select>
  </base-card>
  <component :is=select></component>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        select:''
      }
    }
  }
</script>

<style scoped>
.head{
  margin-top: 16px;
}
select{
  word-wrap: normal;
  margin-left: 25%;
  width: 50%;
  height: 56px;
  background: #333;
  color: white;
  text-align: center;
}


</style>