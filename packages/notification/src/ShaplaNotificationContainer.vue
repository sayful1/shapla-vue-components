<template>
  <div class="shapla-notification-container" :class="containerClasses" v-if="items.length">
    <transition-group name="shapla-notification-transition" tag="div">
      <shapla-notification
        v-for="item in items"
        :key="item.id"
        :type="item.type"
        :title="item.title"
        :message="item.message"
        :timeout="item.timeout"
        :show-dismisses="showDismisses"
        @close="removeItemFromQueue(item)"
      />
    </transition-group>
  </div>
</template>

<script>
import ShaplaNotification from "./ShaplaNotification.vue";
import Notify from "./Notify.js";
import {ref, onMounted, computed} from 'vue'

export default {
  name: "ShaplaNotificationContainer",
  components: {ShaplaNotification},
  model: {prop: 'options', event: 'queued'},
  props: {
    showDismisses: {type: Boolean, default: true,},
    timeout: {type: Number, default: 4000,},
    position: {
      type: String,
      default: 'top-right',
      validator: value => ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'center-center'].indexOf(value) !== -1
    }
  },
  setup(props) {
    let items = ref([]);

    const containerClasses = computed(() => {
      let position = props.position.split('-');
      return [
        'shapla-notification--' + props.position,
        'is-position-' + position[0],
        'is-align-' + position[1],
      ]
    })

    const addItemToQueue = (options) => {
      if (!(options && options.message)) {
        return;
      }
      let position = props.position.split('-');
      if (position[0] === 'bottom') {
        items.value.push(options);
      } else {
        items.value.unshift(options);
      }
    }

    const removeItemFromQueue = (options) => {
      let _items = items.value, index = _items.findIndex(item => item.id === options.id);
      if (index > -1) {
        _items.splice(index, 1);
      }
    }

    onMounted(() => {
      // if event specified use it, else if no snack prop then use default.
      Notify.on(options => addItemToQueue(options));
    })
    return {
      items,
      containerClasses,
      removeItemFromQueue
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
