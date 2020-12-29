<template>
  <div>
    <h4>Button Theme</h4>
    <div class="shapla-buttons">
      <shapla-button @click="handleClick">Default</shapla-button>
      <shapla-button disabled>Default disabled</shapla-button>
      <shapla-button theme="primary">Primary</shapla-button>
      <shapla-button theme="primary" disabled>Primary disabled</shapla-button>
      <shapla-button theme="secondary">Secondary</shapla-button>
      <shapla-button theme="secondary" disabled>Secondary disabled</shapla-button>
      <shapla-button theme="success">Success</shapla-button>
      <shapla-button theme="success" disabled>Success disabled</shapla-button>
      <shapla-button theme="warning">Warning</shapla-button>
      <shapla-button theme="warning" disabled>Warning disabled</shapla-button>
      <shapla-button theme="error">Error</shapla-button>
      <shapla-button theme="error" disabled>Error disabled</shapla-button>
    </div>
    <h4>Button Size</h4>
    <div class="shapla-buttons">
      <shapla-button size="small">Small Button</shapla-button>
      <shapla-button size="medium">Medium Button</shapla-button>
      <shapla-button size="large">Large Button</shapla-button>
    </div>
    <h4>Full width Button</h4>
    <div class="shapla-buttons">
      <shapla-button fullwidth>Default full Width</shapla-button>
    </div>
    <h4>Outline Button</h4>
    <div class="shapla-buttons">
      <shapla-button outline>Default outline</shapla-button>
      <shapla-button outline disabled>Default outline disabled</shapla-button>
      <shapla-button outline theme="primary">Primary outline</shapla-button>
      <shapla-button outline disabled theme="primary">Primary outline disabled</shapla-button>
      <shapla-button outline theme="secondary">Secondary outline</shapla-button>
      <shapla-button outline disabled theme="secondary">Secondary outline disabled</shapla-button>
      <shapla-button outline rounded theme="primary">Primary outline rounded</shapla-button>
      <shapla-button outline rounded theme="secondary">Secondary outline rounded</shapla-button>
      <shapla-button outline theme="success">Success</shapla-button>
      <shapla-button outline theme="success" disabled>Success disabled</shapla-button>
      <shapla-button outline theme="warning">Warning</shapla-button>
      <shapla-button outline theme="warning" disabled>Warning disabled</shapla-button>
      <shapla-button outline theme="error">Error</shapla-button>
      <shapla-button outline theme="error" disabled>Error disabled</shapla-button>
    </div>
    <h4>FAB Button</h4>
    <div class="shapla-buttons">
      <shapla-button fab theme="primary">+</shapla-button>
      <shapla-button fab size="large" theme="secondary">+</shapla-button>
    </div>
    <h4>Button with shadow</h4>
    <div class="shapla-buttons">
      <shapla-button shadow>Default with shadow</shapla-button>
      <shapla-button shadow theme="primary">Primary with shadow</shapla-button>
      <shapla-button shadow theme="secondary">Secondary with shadow</shapla-button>
      <shapla-button fab shadow>+</shapla-button>
    </div>
  </div>
</template>

<script>
import ShaplaButton from '../src'

export default {
  name: "ExampleButton",
  components: {ShaplaButton},
  methods: {
    handleClick(event) {
      console.log(event);
    }
  }
}
</script>

<style lang="scss" scoped>
.shapla-buttons {
  > * {
    margin: 5px;
  }
}
</style>
