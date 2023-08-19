<template>
  <section class="flex flex-col gap-10 items-center mb-[10vh]">
    <p class="text-center uppercase text-brand">{{ text[0] }}</p>
    <p class="text-center capitalize text-5xl font-bold">{{ text[1] }}</p>
    <div class="flex flex-col md:flex-row gap-[5vh] md:gap-[10vw]">
      <div class="flex flex-col items-center gap-3">
        <div
          class="border rounded-[50%] w-[200px] p-8 h-[30vh] lg:w-[9vw] lg:h-auto grid place-items-center"
        >
          <img src="../assets/health-care.png" alt="" class="" />
        </div>
        <p class="text-center max-w-[40vw] lg:max-w-[9vw]">{{ features[0] }}</p>
      </div>
      <div class="flex flex-col items-center gap-3">
        <div
          class="border rounded-[50%] w-[200px] p-8 h-[30vh] lg:w-[9vw] lg:h-auto grid place-items-center"
        >
          <img src="../assets/charity.png" alt="" />
        </div>
        <p class="text-center max-w-[40vw] lg:max-w-[9vw]">{{ features[1] }}</p>
      </div>
      <div class="flex flex-col items-center gap-3">
        <div
          class="border rounded-[50%] w-[200px] p-8 h-[30vh] lg:w-[9vw] lg:h-auto grid place-items-center"
        >
          <img src="../assets/health-report.png" alt="" />
        </div>
        <p class="text-center max-w-[40vw] lg:max-w-[9vw]">{{ features[2] }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const text = ["features", "healthy life cycle"];

    const features = [
      "Provides quality healthcare services",
      "Prevent the spread of diseases",
      "Petailed, actionable information",
    ];

    return {
      text,
      features,
    };
  },
};
</script>
