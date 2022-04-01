<template>
  <div :class="['spacer', size]" />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.spacer {
  display: flex;
  width: 100%;
}

.xxs {
  height: 0.5rem;
}

.xs {
  height: 1rem;
}

.sm {
  height: 2rem;
}

.md {
  height: 3rem;
}

.lg {
  height: 8rem;
}
</style>
