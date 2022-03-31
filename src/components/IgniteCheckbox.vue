<template>
  <label class="grid grid-cols-2">
    <input type="checkbox" class="ignite-checkbox" />
    <span class="sr-only">Select request</span>
  </label>
</template>

<style scoped lang="postcss">
.ignite-checkbox {
  @apply w-6 h-6 m-0 grid place-content-center border-2 border-current appearance-none rounded-[6px];

  transform: translateY(-0.075em);

  &::before {
    @apply w-4 h-4;

    content: '';
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform-origin: bottom left;
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color);
    background-color: CanvasText;
  }
}
</style>
