<template>
  <section class="flex px-5 md:px-10 m-0 md:mx-10 min-h-[20vh] mt-[5vh]">
    <div
      class="flex flex-col md:flex-row justify-evenly w-full font-semibold gap-9 md:gap-0"
    >
      <div class="flex flex-col h-full md:min-w-[20vw] lg:w-[20vw]">
        <div class="flex flex-col md:flex-row gap-2 md:gap-5">
          <span
            class="material-symbols-outlined border border-gray-400 rounded-full p-2 h-fit w-fit"
          >
            phone_in_talk
          </span>
          <div class="flex flex-col h-full gap-3 mt-2">
            <p class="text-base capitalize">{{ label[0] }}</p>
            <p class="font-normal">{{ text[0] }}</p>
            <p class="">{{ number }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col h-full md:min-w-[20vw] lg:w-[20vw]">
        <div class="flex flex-col md:flex-row gap-2 md:gap-5">
          <span
            class="material-symbols-outlined border border-gray-400 rounded-full p-2 h-fit w-fit"
          >
            calendar_month
          </span>
          <div class="flex flex-col h-full gap-3 mt-2">
            <p class="text-base capitalize">{{ label[1] }}</p>
            <p class="font-medium">{{ text[1] }}</p>
            <button
              class="uppercase border p-2 w-fit lg:w-[8vw] border-brandlight text-brand mt-auto"
            >
              {{ button }}
            </button>
          </div>
        </div>
      </div>
      <div class="flex flex-col h-full md:min-w-[20vw] lg:w-[20vw]">
        <div class="flex flex-col md:flex-row gap-2 md:gap-5">
          <span
            class="material-symbols-outlined border border-gray-400 rounded-full p-2 h-fit w-fit"
          >
            history_toggle_off
          </span>
          <div class="flex flex-col h-full gap-3 mt-2">
            <p class="text-base capitalize">{{ label[2] }}</p>
            <div class="flex">
              <ul class="flex flex-col gap-3">
                <li class="flex gap-5">
                  <span class="font-normal">{{ days[0] }}</span>
                  <span class="">{{ hours[0] }}</span>
                </li>
                <li class="flex">
                  <span class="font-normal">{{ days[1] }}</span>
                  <span class="ml-auto">{{ hours[0] }}</span>
                </li>
                <li class="flex">
                  {{ days[2] }} <span class="ml-auto">{{ hours[0] }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const button = "appointment";
    const days = ["Mon - Fri", "Saturday", "Sunday"];
    const hours = [
      "8:00 am - 9:00 pm",
      " 9:00 am - 8:00 pm",
      "10:00 am - 7:00 pm",
    ];
    const number = "+1 (234) 567-89-00";
    const label = ["emergency cases", "doctors timetable", "opening hours"];
    const text = [
      "State of complete physical, mental and social well being a healthy life cycle.",
      "Complete physical, mental and social well being a healthy life cycle.",
    ];

    return {
      button,
      hours,
      number,
      label,
      text,
      days,
    };
  },
};
</script>
