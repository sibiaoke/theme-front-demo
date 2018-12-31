<template>
  <div class="pill">
    <svg-icon :icon-class="icon"/>
    <span v-if="!mini" class="pill-type">{{type}}</span>
    <slot></slot>
  </div>
</template>

<script>
import { oneOf } from './util'

export default {
  props: {
    type: {
      validator(value) {
        return oneOf(value, ['critical', 'major', 'minor', 'warning', 'indeterminate', 'cleared'])
      },
      default: 'cleared'
    },
    mini: Boolean
  },
  computed: {
    icon() {
      return `severity_${this.type}`
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@sibiaoke/ui-theme/src/mixins/themes';

.pill {
  display: inline-block;
  margin-bottom: 8px;
  margin-right: 4px;
  padding: 2px 12px;
  border-radius: 16px;
  line-height: 25px;

  opacity: 0.8;
  cursor: pointer;

  @include themify($themes) {
    color: themed('color-text-primary');
    background: rgba(themed('border-color-base'), 0.4);
  }

  svg {
    font-size: 14px;
    margin-right: 8px;
  }

  &-type {
    text-transform: capitalize;
    margin-right: 8px;
  }

  &:empty {
    display: none;
  }

  &:hover {
    opacity: 1;
  }

  &.selected {
    @include themify($themes) {
      background: themed('border-color-base');
    }
    opacity: 1;
  }
}
</style>
