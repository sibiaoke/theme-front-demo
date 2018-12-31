<template>
  <div id="app">
    <div class="theme-switch">
      <el-button-group>
        <el-button type="primary" size="mini" @click="theme = 'theme-dark'" :disabled="theme === 'theme-dark'">Dark</el-button>
        <el-button type="primary" size="mini" @click="theme = 'theme-light'" :disabled="theme === 'theme-light'">Light</el-button>
      </el-button-group>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: 'theme-dark'
    }
  },
  watch: {
    theme() {
      this.changeTheme()
    }
  },
  created() {
    this.changeTheme()
  },
  methods: {
    changeTheme() {
      document.body.className = this.theme
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
