<template>
  <el-row>
    <el-col :span="1">
      <label>Layers</label>
    </el-col>
    <el-col :span="11">
      <div class="color-item">
        <div ref="l0" class="color-block system-l0"></div>
        <div>System L0</div>
        <label>{{l0}}</label>
      </div>
      <div class="color-item">
        <div ref="l1" class="color-block app-l1"></div>
        <div>APP L1</div>
        <label>{{l1}}</label>
      </div>
      <div class="color-item">
        <div ref="l2" class="color-block tile-l2"></div>
        <div>Tile L2</div>
        <label>{{l2}}</label>
      </div>
    </el-col>
    <el-col :span="1">
      <label>Status</label>
    </el-col>
    <el-col :span="11">
      <div class="color-item">
        <div ref="green" class="color-block green"></div>
        <div>Green</div>
        <label>{{green}}</label>
      </div>
      <div class="color-item">
        <div ref="yellow" class="color-block yellow"></div>
        <div>Yellow</div>
        <label>{{yellow}}</label>
      </div>
      <div class="color-item">
        <div ref="orange" class="color-block orange"></div>
        <div>Orange</div>
        <label>{{orange}}</label>
      </div>
      <div class="color-item">
        <div ref="red" class="color-block red"></div>
        <div>Red</div>
        <label>{{red}}</label>
      </div>
    </el-col>
    <el-col :span="1">
      <label>Text</label>
    </el-col>
    <el-col :span="11">
      <div class="color-item">
        <div ref="text" class="color-block text"></div>
        <div>Text</div>
        <label>{{text}}</label>
      </div>
      <div class="color-item">
        <div ref="gray" class="color-block gray"></div>
        <div>Gray</div>
        <label>{{gray}}</label>
      </div>
      <div class="color-item">
        <div ref="link" class="color-block link-blue"></div>
        <div>Link Blue</div>
        <label>{{link}}</label>
      </div>
    </el-col>
    <el-col :span="1">
      <label>Brand</label>
    </el-col>
    <el-col :span="11">
      <div class="color-item">
        <div ref="blue" class="color-block blue"></div>
        <div>Blue</div>
        <label>{{blue}}</label>
      </div>
      <div class="color-item">
        <div ref="purple" class="color-block purple"></div>
        <div>Purple</div>
        <label>{{purple}}</label>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      l0: '',
      l1: '',
      l2: '',
      green: '',
      yellow: '',
      orange: '',
      red: '',
      text: '',
      gray: '',
      link: '',
      blue: '',
      purple: ''
    }
  },
  computed: {
    theme() {
      // App.vue
      return this.$root.$children[0].dark
    }
  },
  watch: {
    theme() {
      this.updateColor()
    }
  },
  mounted() {
    this.updateColor()
  },
  methods: {
    updateColor() {
      Object.keys(this.$refs).forEach(k => {
        this[k] = this.rgb2hex(window.getComputedStyle(this.$refs[k]).backgroundColor)
      })
    },
    rgb2hex(rgb) {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)
      function hex(x) {
        return ('0' + parseInt(x).toString(16)).slice(-2).toUpperCase()
      }
      return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3])
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@sibiaoke/ui-theme/src/mixins/themes';
.color-item {
  display: inline-block;

  & + & {
    margin-left: 14px;
  }
}
.color-block {
  display: inline-block;
  width: 100px;
  height: 36px;
  border: 1px solid;

  &.system-l0 {
    @include themify($themes) {
      background: themed('system-l0-color');
      border-color: themed('system-l0-color');
    }
  }
  &.app-l1 {
    @include themify($themes) {
      background: themed('app-l1-color');
      border-color: themed('app-l1-color');
    }
  }
  &.tile-l2 {
    @include themify($themes) {
      background: themed('tile-l2-color');
      border-color: themed('gray-color');
    }
  }
  &.text {
    @include themify($themes) {
      background: themed('text-color');
      border-color: themed('text-color');
    }
  }
  &.gray {
    @include themify($themes) {
      background: themed('gray-color');
      border-color: themed('gray-color');
    }
  }
  &.link-blue {
    @include themify($themes) {
      background: themed('link-blue-color');
      border-color: themed('link-blue-color');
    }
  }
  &.green {
    @include themify($themes) {
      background: themed('green-color');
      border-color: themed('green-color');
    }
  }
  &.yellow {
    @include themify($themes) {
      background: themed('yellow-color');
      border-color: themed('yellow-color');
    }
  }
  &.orange {
    @include themify($themes) {
      background: themed('orange-color');
      border-color: themed('orange-color');
    }
  }
  &.red {
    @include themify($themes) {
      background: themed('red-color');
      border-color: themed('red-color');
    }
  }
  &.blue {
    @include themify($themes) {
      background: themed('blue-color');
      border-color: themed('blue-color');
    }
  }
  &.purple {
    @include themify($themes) {
      background: themed('purple-color');
      border-color: themed('purple-color');
    }
  }
}
</style>
