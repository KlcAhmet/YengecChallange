<template>
  <div>
    <div class="col-2">
      testyyyyyyyyyyyyy yyyyyyyyyyyyyyyyy yyyyyyyyyyyyy yyyyyyyyyyyyyy yyyyyyyyyyyyyyyyyyyyyyyyyyyy
    </div>
    <p>ss{{apikey}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      apikey: process.env.API_KEY,
    }
  },
  created() {

  }
}
</script>
