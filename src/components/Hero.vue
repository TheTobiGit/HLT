<template>
  <section
    class="flex flex-col-reverse lg:flex-row items-center mx-5 p-5 md:px-10 md:mx-10 absolute top-[10vh] min-h-[90vh] bg-herobg bg-cover bg-no-repeat select-auto"
  >
    <div class="flex flex-col gap-5 lg:gap-10">
      <p class="text-brandtextlight uppercase tracking-widest">{{ text[0] }}</p>
      <p class="text-white text-3xl lg:text-7xl lg:leading-[80px]">
        {{ text[1] }}
      </p>
      <p class="text-brandtextfade">{{ text[2] }}</p>
      <button class="text-white uppercase self-start bg-brand px-4 py-2">
        {{ button }}
      </button>
    </div>
    <div class="mb-7 lg:mb-0">
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
