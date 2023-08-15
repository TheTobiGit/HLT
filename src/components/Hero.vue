<template>
  <section
    class="flex items-center px-10 mx-10 absolute top-[10vh] min-h-[90vh] bg-herobg bg-cover bg-no-repeat select-auto"
  >
    <div class="flex flex-col gap-10">
      <p class="text-brandtextlight uppercase tracking-widest">{{ text[0] }}</p>
      <p class="text-white text-7xl leading-[80px]">{{ text[1] }}</p>
      <p class="text-brandtextfade">{{ text[2] }}</p>
      <button class="text-white uppercase self-start bg-brand px-4 py-2">
        {{ button }}
      </button>
    </div>
    <div>
      <img src="../assets/hero.png" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const text = [
      "Health Care",
      "Place Where You Receive Basic Primary Care",
      "Health is a state of complete physical, mental and social well being.",
    ];
    const button = "Explore Services";

    return {
      text,
      button,
    };
  },
};
</script>
