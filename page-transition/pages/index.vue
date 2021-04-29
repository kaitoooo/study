<template>
  <div class="container">
    <Loading />
    <Kv />
  </div>
</template>

<script>
import Kv from '~/components/Kv';
import Loading from '~/components/loading';
export default {
  components:{
    Kv,
    Loading,
  },
}
</script>
