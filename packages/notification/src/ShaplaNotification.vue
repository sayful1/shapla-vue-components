<template>
  <div class="shapla-notification" :class="itemClass">
    <shapla-cross v-if="showDismisses" @click="requestClose"/>
    <div class="shapla-notification__title" v-if="title">{{ title }}</div>
    <div class="shapla-notification__message" v-if="message" v-html="message"/>
  </div>
</template>

<script>
import ShaplaCross from "@shapla/vue-cross";
import {computed, onMounted, onUnmounted} from 'vue';

export default {
  name: "ShaplaNotification",
  components: {ShaplaCross},
  emits: ['close'],
  props: {
    type: {
      type: String,
      default: 'info',
      validator: value => ['primary', 'success', 'info', 'warning', 'error'].indexOf(value) !== -1
    },
    title: {type: String, default: ''},
    message: {type: String, default: ''},
    showDismisses: {type: Boolean, default: true},
    timeout: {type: Number, default: 3000},
  },
  setup(props, {emit}) {
    let timer = 0;

    const itemClass = computed(() => {
      return [`has-${props.type}`];
    })

    const requestClose = () => {
      emit('close');
    }

    onMounted(() => {
      if (props.timeout !== 0) {
        timer = setTimeout(requestClose, props.timeout);
      }
    })

    onUnmounted(() => {
      if (timer) {
        clearTimeout(timer);
      }
    })

    return {
      requestClose,
      itemClass
    }
  }
}
</script>
