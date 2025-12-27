<template>
  <section v-if="faqs?.length" class="mt-5 pt-4 border-top" aria-labelledby="faq-heading">
    <h2 id="faq-heading" class="h4 mb-4">Frequently Asked Questions</h2>
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
.accordion-button:not(.collapsed) {
  background-color: rgba(76, 175, 80, 0.1);
  color: #2e7d32;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(76, 175, 80, 0.25);
}
</style>
