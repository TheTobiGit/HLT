<template>
  <section
    class="flex flex-col md:flex-row px-5 md:px-10 m-0 md:mx-10 mb-[10vh] justify-around md:items-center gap-10"
  >
    <div>
      <img src="../assets/about.png" alt="" />
    </div>
    <div class="flex flex-col gap-5">
      <p class="uppercase text-brand">{{ text[0] }}</p>
      <p class="capitalize text-5xl font-bold md:max-w-[25vw]">{{ text[1] }}</p>
      <p class="md:max-w-[30vw]">{{ text[2] }}</p>
      <button
        class="uppercase border p-2 w-fit lg:min-w-[8vw] border-brandlight text-brand mt-auto"
      >
        {{ button }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const text = [
      "about",
      "Mental & Social Well Being",
      "Mental and social well being. For a healthy life cycle, a person needs to have a balanced diet and has to regularly exercise. Our social environment is an important factor in our individual health.",
    ];
    const button = "about us";

    return {
      text,
      button,
    };
  },
};
</script>
