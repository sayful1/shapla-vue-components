<template>
  <div class="test-toggle-container">
    <toggles :accordion="true" iconPosition="left" :boxed-mode="false" :show-divider="true" title-color="primary">
      <toggle :name="`Toggle ${_range + 1}`" :key="_range" v-for="_range in range" :selected="_range === 1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam at et itaque magnam nulla officiis
        perferendis ratione velit, veritatis.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur assumenda at autem beatae
        consectetur consequatur culpa debitis dolorem doloremque eligendi eum ex expedita fugiat inventore iste
        iusto laborum laudantium natus officiis, pariatur placeat porro quam quisquam, repudiandae sit suscipit
        ut. Aliquid beatae culpa doloribus dolorum ea earum et exercitationem, hic, incidunt ipsum laborum minus
        necessitatibus officia quasi rerum sapiente tenetur unde. Accusamus adipisci aliquid animi asperiores
        et, impedit laborum maiores, molestias natus nisi quae quo repudiandae velit! Dignissimos ex impedit
        laborum nisi qui suscipit temporibus voluptas? Ipsam, mollitia, natus? Assumenda dignissimos expedita
        ipsum laboriosam molestiae quos recusandae, soluta vel?
      </toggle>
    </toggles>
  </div>
</template>

<script>
import {toggle, toggles} from "../src/index";

export default {
  name: "TestToggles",
  components: {toggles, toggle},
  computed: {
    range() {
      return [...Array(5000).keys()];
    }
  }
}
</script>

<style lang="scss" scoped>
.test-toggle-container {
  padding: 2rem;
}
</style>
