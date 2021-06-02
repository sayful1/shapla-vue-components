<template>
  <div class="shapla-tabs__panel" :class="tabClass">
    <slot :active="isActive"/>
  </div>
</template>

<script>
import {computed, onBeforeMount, onMounted, ref, watch, inject} from "vue";

export default {
  name: "ShaplaTab",
  props: {
    name: {type: String, required: true},
    selected: {type: Boolean, required: false, default: false},
    navItemClass: {type: String, required: false, default: ''}
  },
  setup(props) {
    const isActive = ref(false);
    const index = ref(0);
    const panelId = computed(() => props.name.toLowerCase().replace(/ /g, '-'))
    const href = computed(() => '#' + panelId.value);
    const tabClass = computed(() => isActive.value ? ['is-active'] : []);

    const tabs = inject("ShaplaTabsProvider");

    watch(() => tabs.selectedIndex, () => {
      isActive.value = index.value === tabs.selectedIndex;
    });

    onBeforeMount(() => {
      index.value = tabs.count;
      tabs.count++;
      isActive.value = index.value === tabs.selectedIndex;
    });

    onMounted(() => {
      isActive.value = props.selected;
      tabs.selectedIndex = index.value;
    })

    return {panelId, href, tabClass, isActive}
  }
}
</script>
