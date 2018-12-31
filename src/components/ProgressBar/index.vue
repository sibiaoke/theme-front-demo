<template>
  <div class="progressbar" :class="{ thin, large }">
    <progress v-if="stripe" max="100"/>
    <template v-else>
      <progress max="100" :value="value"/>
      <progress v-if="buffer" max="100" class="buffer" :value="buffer"/>
      <span>{{value}}%</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    buffer: Number,
    stripe: Boolean,
    thin: Boolean,
    large: Boolean
  }
}
</script>

<style scoped lang="scss">
@import '~@sibiaoke/ui-theme/src/mixins/themes';
@keyframes progress-bar-stripes {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 10rem 10rem;
  }
}
.progressbar {
  position: relative;

  progress,
  meter {
    appearance: none;
    width: calc(100% - 60px);
    height: 4px;
    border: none;
    vertical-align: middle;
    transition: all 0.2s ease-in-out;

    @include themify($themes) {
      background-color: themed('border-color-base');
    }

    &::-webkit-progress-value {
      @include themify($themes) {
        background-color: themed('color-text-primary');
      }
      transition: all 0.2s ease-in-out;
      height: 4px;
      width: 100%;
    }

    &::-webkit-progress-bar {
      @include themify($themes) {
        background-color: themed('border-color-base');
      }
    }

    &::-moz-progress-bar {
      @include themify($themes) {
        background-color: themed('color-text-primary');
      }
      transition: all 0.2s ease-in-out;
    }

    &:not([value]) {
      animation: progress-bar-stripes 2s linear infinite;
      @include themify($themes) {
        background-image: linear-gradient(
          90deg,
          rgba(themed('system-l0-color'), 0.3) 25%,
          transparent 25%,
          transparent 50%,
          rgba(themed('system-l0-color'), 0.3) 50%,
          rgba(themed('system-l0-color'), 0.3) 75%,
          transparent 75%,
          transparent
        );
      }

      background-size: 10rem 10rem;

      &::-webkit-progress-bar {
        transition: all 0.2s ease-in-out;
        overflow: hidden;
        opacity: 0.5;
      }
    }

    &.buffer {
      position: absolute;
      opacity: 0.3;
      left: 0;
      top: 8px;
    }

    & + span {
      margin-left: 20px;
    }
  }

  &.thin progress {
    height: 2px;

    &.buffer {
      top: 9px;
    }

    &::-webkit-progress-value {
      height: 2px;
    }
  }

  &.large progress {
    height: 8px;

    &.buffer {
      top: 6px;
    }

    &::-webkit-progress-value {
      height: 8px;
    }
  }
}
</style>
