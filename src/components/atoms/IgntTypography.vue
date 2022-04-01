<template>
  <div :class="['typography', inverse && 'inverse', feedback, modifier, size]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  inject: {
    inverse: {
      default: false
    }
  },

  props: {
    modifier: {
      type: String,
      // highlight, content
      required: true
    },

    feedback: {
      type: String,
      required: false,
      default: ''
    },

    size: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.typography {
}

.typography::selection {
  color: #fff;
  background: #000;
}

.typography.inverse::selection {
  color: #000;
  background: #fff;
}

/* Highlight */
.highlight {
  font-family: Druk Wide;
  line-height: 100%;
  letter-spacing: -0.03em;
  font-feature-settings: 'zero' on;
  color: #000;
}

.highlight.inverse {
  color: #fff;
}

.highlight.marquee {
  font-size: 1.75rem;
}

.highlight.xxs {
  font-size: 1rem;
}

.highlight.xs {
  font-size: 1.125rem;
}

.highlight.sm {
  font-size: 2rem;
}

.highlight.sm-inflated {
  font-size: 2rem;
}

.highlight.md {
  font-size: 1.75rem;
}

.highlight.lg {
  font-size: 1.75rem;
}

.highlight.xl {
  font-size: 1.75rem;
  line-height: 108%;
}

.highlight.xxl {
  font-size: 1.75rem;
}

.highlight.stat {
  font-size: 1.75rem;
}

.highlight.marquee {
  font-size: 1.75rem;
}

@media (min-width: 640px) {
  .highlight.xxs {
    font-size: 1.125rem;
  }

  .highlight.xs {
    font-size: 1.125rem;
  }

  .highlight.sm {
    font-size: 2rem;
  }

  .highlight.sm-inflated {
    font-size: 2rem;
  }

  .highlight.md {
    font-size: 2.375rem;
  }

  .highlight.lg {
    font-size: 2.375rem;
  }

  .highlight.xl {
    font-size: 2.375rem;
    line-height: 108%;
  }

  .highlight.xxl {
    font-size: 2.375rem;
  }

  .highlight.stat {
    font-size: 3rem;
  }

  .highlight.marquee {
    font-size: 4.375rem;
  }
}

@media (min-width: 1024px) {
  .highlight.xxs {
    font-size: 1.125rem;
  }

  .highlight.xs {
    font-size: 1.125rem;
  }

  .highlight.sm {
    font-size: 2rem;
  }

  .highlight.sm-inflated {
    font-size: 2.375rem;
    line-height: 108%;
  }

  .highlight.md {
    font-size: 2.375rem;
    line-height: 108%;
  }

  .highlight.lg {
    font-size: 3rem;
    line-height: 108%;
  }

  .highlight.xl {
    font-size: 3.625rem;
    line-height: 108%;
  }

  .highlight.xxl {
    font-size: 4rem;
    line-height: 108%;
  }

  .highlight.stat {
    font-size: 3rem;
    line-height: 108%;
  }

  .highlight.marquee {
    font-size: 4.375rem;
    line-height: 108%;
  }
}

/* Content */
.content {
  font-family: Inter;
  letter-spacing: -0.007em;
  font-feature-settings: 'zero' on;
  color: #000;
}

.content.inverse {
  color: #fff;
}

.content.success {
  color: #4251fa;
}

.content.error {
  color: #cc0025;
}

.content.sm {
  font-size: 0.8125rem;
  line-height: 164.5%;
}

.content.md {
  font-size: 1rem;
  line-height: 162.5%;
}

.content.lg {
  font-weight: 500;
  font-size: 1rem;
  line-height: 100%;
}

.content.xl {
  font-size: 1rem;
  line-height: 162.5%;
}

.content.xxl {
  font-size: 1rem;
  line-height: 162.5%;
}

@media (min-width: 640px) {
  .content.sm {
    font-size: 0.8125rem;
    line-height: 164.5%;
  }

  .content.md {
    font-size: 1rem;
    line-height: 162.5%;
  }

  .content.lg {
    font-weight: 500;
    font-size: 1rem;
    line-height: 100%;
  }

  .content.xl {
    font-size: 0.8125rem;
    line-height: 159.8%;
  }

  .content.xxl {
    font-size: 0.8125rem;
    line-height: 159.8%;
  }
}

@media (min-width: 1024px) {
  .content.sm {
    font-size: 0.8125rem;
    line-height: 164.5%;
  }

  .content.md {
    font-size: 1rem;
    line-height: 162.5%;
  }

  .content.lg {
    font-weight: 500;
    font-size: 1rem;
    line-height: 130%;
  }

  .content.inverse.md {
    color: rgba(255, 255, 255, 0.82);
  }

  .content.xl {
    font-size: 0.8125rem;
    line-height: 159.8%;
  }

  .content.inverse.xl {
    color: rgba(255, 255, 255, 0.82);
  }

  .content.xxl {
    font-size: 1.75rem;
    line-height: 156.2%;
    font-weight: 300;
  }
}
</style>
