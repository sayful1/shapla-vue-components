<template>
  <div :class="modalClasses">
    <div :class="backgroundClasses" @click="backgroundClick"></div>
    <delete-icon v-if="showCloseIcon" fixed large @click="close"></delete-icon>
    <div :class="contentClasses">
      <slot/>
    </div>
  </div>
</template>

<script>
import deleteIcon from '../../delete/deleteIcon.vue';

export default {
  name: "ModalCore",
  components: {deleteIcon},
  props: {
    active: {type: Boolean, required: true},
    showCloseIcon: {type: Boolean, default: true},
    closeOnBackgroundClick: {type: Boolean, default: true},
    contentClass: {type: String, default: ''},
    backgroundTheme: {
      type: String, default: 'dark',
      validator: value => ['dark', 'light'].indexOf(value) !== -1
    },
    contentSize: {
      type: String, default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
  },
  computed: {
    modalClasses() {
      let classes = ['shapla-modal'];
      if (this.active) {
        classes.push('is-active');
      }
      return classes;
    },
    backgroundClasses() {
      return ['shapla-modal-background', `is-${this.backgroundTheme}`];
    },
    contentClasses() {
      let classes = ['shapla-modal-content', `is-${this.contentSize}`];
      if (this.contentClass) {
        classes.push(this.contentClass);
      }
      return classes
    }
  },
  watch: {
    active(newValue) {
      this.refreshBodyClass(newValue);
    }
  },
  mounted() {
    this.refreshBodyClass(this.active);
  },
  methods: {
    close() {
      this.$emit('close');
    },
    backgroundClick() {
      if (this.closeOnBackgroundClick) {
        this.close();
      }
    },
    refreshBodyClass(active) {
      let body = document.querySelector('body');
      if (active) {
        body.classList.add('has-shapla-modal');
      } else {
        setTimeout(() => {
          if (document.querySelectorAll('.shapla-modal.is-active').length === 0) {
            body.classList.remove('has-shapla-modal');
          }
        }, 50);
      }
    }
  }
}
</script>
