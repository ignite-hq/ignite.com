<script setup lang="ts">
defineProps({
  size: {
    // sm, md, lg
    type: String,
    default: 'md'
  }
})
</script>

<template>
  <svg
    v-if="size === 'sm'"
    class="mx-auto my-6 md:absolute md:right-9 md:top-[50%] md:my-0 md:translate-y-[-50%] lg:right-0 lg:right-auto lg:left-[19rem] xl:left-auto xl:right-9"
    width="164"
    height="115"
    viewBox="0 0 164 115"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C4.47715 0 0 4.47715 0 10V45V48V55.5858C0 56.4767 1.07714 56.9229 1.70711 56.2929L10 48H118C123.523 48 128 43.5229 128 38V10C128 4.47715 123.523 0 118 0H10Z"
      fill="#094EFD"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M154 58C159.523 58 164 62.4772 164 68V103V106V113.586C164 114.477 162.923 114.923 162.293 114.293L154 106H46C40.4772 106 36 101.523 36 96V68C36 62.4772 40.4772 58 46 58H154Z"
      fill="#094EFD"
    />
  </svg>

  <svg
    v-if="size === 'md'"
    class="my-5 mx-auto h-auto max-w-full md:my-7"
    width="424"
    height="221"
    viewBox="0 0 424 221"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.8"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M414 130C419.523 130 424 134.477 424 140V206V208V219.131C424 219.93 423.11 220.407 422.445 219.964L404.5 208H224C218.477 208 214 203.523 214 198V140C214 134.477 218.477 130 224 130H414Z"
      fill="#094EFD"
    />
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C4.47715 0 0 4.47715 0 10V92V96V111.099C0 111.904 0.903027 112.379 1.56653 111.923L24.7273 96H254C259.523 96 264 91.5228 264 86V10C264 4.47715 259.523 0 254 0H10Z"
      fill="#094EFD"
    />
  </svg>

  <svg
    v-if="size === 'lg'"
    class="my-5 h-auto w-full md:absolute md:top-[50%] md:right-6 md:my-0 md:max-w-[40%] md:translate-y-[-50%] lg:right-[30%] lg:max-w-[45%] lg:translate-x-[50%] xl:h-[80%] xl:w-auto xl:max-w-[31rem]"
    width="491"
    height="156"
    viewBox="0 0 491 156"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.8"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M481 65C486.523 65 491 69.4772 491 75V141V143V154.131C491 154.93 490.11 155.407 489.445 154.964L471.5 143H291C285.477 143 281 138.523 281 133V75C281 69.4772 285.477 65 291 65H481Z"
      fill="#094EFD"
    />
    <path
      opacity="0.2"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10 0C4.47715 0 0 4.47715 0 10V92V96V111.099C0 111.904 0.903027 112.379 1.56653 111.923L24.7273 96H254C259.523 96 264 91.5228 264 86V10C264 4.47715 259.523 0 254 0H10Z"
      fill="#094EFD"
    />
  </svg>
</template>
