<template>
  <section></section>
</template>

<script>
export default {
  setup() {
    const button = "appointment";
    const hours = [
      "8:00 am - 9:00 pm",
      " 9:00 am - 8:00 pm",
      "10:00 am - 7:00 pm",
    ];
    const number = "+1 (234) 567-89-00";
    const label = ["emergency", "doctors timetable", "opening hours"];

    return {
      button,
      hours,
      number,
      label,
    };
  },
};
</script>
