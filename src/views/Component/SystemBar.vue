<template>
  <div>
    <label>Default</label>
    <br>
    <sysbar/>
    <label>With logo</label>
    <br>
    <sysbar product="Product">
      <img :src="logo" slot="logo" style="vertical-align: middle; width: 20px; height: 20px;">
    </sysbar>
  </div>
</template>

<script>
import Sysbar from '@/components/Sysbar'
import logo from '@/assets/logo.png'

export default {
  components: { Sysbar },
  data() {
    return {
      logo
    }
  }
}
</script>

<style>
</style>
