<template>
  <div class="test-dropdown-container">
    <dropdown :hoverable="false">
      <template v-slot:trigger>
        <button>From Left: Click</button>
      </template>
      <a href="https://example.com" class="shapla-dropdown-item is-link is-active">Link 1</a>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 2</a>
      <span class="dropdown-divider"></span>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 3</a>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 4</a>
    </dropdown>
    <dropdown :hoverable="true" :right="true">
      <template v-slot:trigger>
        <button>From Right: Hover</button>
      </template>
      <a href="https://example.com" class="shapla-dropdown-item is-link is-active">Link 1</a>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 2</a>
      <span class="dropdown-divider"></span>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 3</a>
      <a href="https://example.com" class="shapla-dropdown-item is-link">Link 4</a>
    </dropdown>
    <div class="mt-16">
      <dropdown :hoverable="false" :right="false" :up="true">
        <template v-slot:trigger>
          <button>From Bottom to top: Click</button>
        </template>
        <a href="https://example.com" class="shapla-dropdown-item is-link is-active">Link 1</a>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 2</a>
        <span class="dropdown-divider"></span>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 3</a>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 4</a>
      </dropdown>
    </div>
    <div class="mt-16">
      ---
    </div>
    <div class="mt-16">
      <dropdown :hoverable="false" :right="false">
        <template v-slot:trigger>
          <button>Auto direction: Click</button>
        </template>
        <a href="https://example.com" class="shapla-dropdown-item is-link is-active">Link 1</a>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 2</a>
        <span class="dropdown-divider"></span>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 3</a>
        <a href="https://example.com" class="shapla-dropdown-item is-link">Link 4</a>
      </dropdown>
    </div>
    <div class="mt-16">
      <dropdown :hoverable="false" :right="false" :max-items="5">
        <template v-slot:trigger>
          <button>Auto direction: Click</button>
        </template>
        <template v-slot:before-content>
          before content
        </template>
        <template v-slot:after-content>
          after content
        </template>
        <a v-for="item in range(2)" :key="item + 10" href="https://example.com"
           class="shapla-dropdown-item is-link">Link {{ item + 1 }}</a>
        <span class="shapla-dropdown-divider"></span>
        <a v-for="item in range(8)" :key="item" href="https://example.com"
           class="shapla-dropdown-item is-link">Link {{ item + 3 }}</a>
      </dropdown>
    </div>
  </div>
</template>

<script>
import dropdown from "../src/index";

export default {
  name: "TestDropdown",
  components: {dropdown},
  methods: {
    range(length = 20) {
      return Array.from({length: length}, (x, i) => i);
    }
  }
}
</script>

<style lang="scss">
.test-dropdown-container {
  padding: 2rem;
}
</style>
