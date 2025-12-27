<template>
  <section v-if="faqs?.length" class="mt-5 pt-4 border-top" aria-labelledby="faq-heading">
    <h2 id="faq-heading" class="section-title mb-4">FAQ</h2>
    <div class="accordion" id="gameFaqAccordion">
      <div class="accordion-item" v-for="(faq, index) in faqs" :key="index">
        <h3 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="`#gameFaq${index}`"
            :aria-expanded="false"
            :aria-controls="`gameFaq${index}`"
          >
            {{ faq.question }}
          </button>
        </h3>
        <div :id="`gameFaq${index}`" class="accordion-collapse collapse" data-bs-parent="#gameFaqAccordion">
          <div class="accordion-body text-muted">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  faqs: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped>
.section-title {
  font-size: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #000;
}
</style>
