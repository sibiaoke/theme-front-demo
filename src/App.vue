<template>
  <div id="app">
    <div class="theme-switch">
      <el-switch v-model="dark" active-color="#242424" inactive-color="#f2f2f2"></el-switch>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dark: true
    }
  },
  watch: {
    dark() {
      this.changeTheme()
    }
  },
  created() {
    this.changeTheme()
  },
  methods: {
    changeTheme() {
      document.body.className = this.dark ? 'theme-dark' : 'theme-light'
    }
  }
}
</script>

<style scoped lang="scss">
.theme-switch {
  position: fixed;
  top: 8px;
  right: 24px;
  z-index: 1000;
}
</style>
