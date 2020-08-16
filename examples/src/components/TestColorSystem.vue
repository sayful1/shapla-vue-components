<template>
  <div class="shapla-color-system">
    <div class="column">
      <div class="box shapla-color--on-primary shapla-color--primary-bg">
        background primary<br>
        color on-primary
      </div>
    </div>
    <div class="column">
      <div class="box shapla-color--on-secondary shapla-color--secondary-bg">
        background secondary<br>
        color on-secondary
      </div>
    </div>
    <div class="column">
      <div class="box shapla-color--success-bg shapla-color--on-success">
        background success<br>
        color on-success
      </div>
    </div>
    <div class="column">
      <div class="box shapla-color--error-bg shapla-color--on-error">
        background error<br>
        color on-error
      </div>
    </div>
    <div class="column">
      <div class="box shapla-color--surface shapla-color--on-surface">
        background surface<br>
        color on-surface
      </div>
    </div>

    <div class="column">
      <div class="box shapla-color--background">
        <div>background color</div>
        <div class="shapla-color--primary">color primary</div>
        <div class="shapla-color--secondary">color secondary</div>
        <div class="shapla-color--success">color success</div>
        <div class="shapla-color--error">color error</div>
        <div class="shapla-color--text-primary">Text primary</div>
        <div class="shapla-color--text-secondary">Text secondary</div>
        <div class="shapla-color--text-hint">Text hint</div>
        <div class="shapla-color--text-disabled">Text disabled</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestColorSystem"
}
</script>

<style lang="scss">
@import "~shapla-color-system/src/theme";

.shapla-color-system {
  background: #f1f1f1;
  display: flex;
  flex-wrap: wrap;
}

.column {
  flex-grow: 1;
  padding: 1rem;
}

.box {
  border: 1px solid rgba(#000, .12);
  border-radius: 4px;
  padding: 1rem;
  text-align: center;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
