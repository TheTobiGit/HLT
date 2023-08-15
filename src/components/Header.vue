<template>
  <section class="h-[50vh] bg-brandbg select-none">
    <div
      class="h-[10vh] flex items-center w-screen overflow-hidden text-brandtext px-10"
    >
      <div class="w-1/3 h-full uppercase flex items-center font-bold text-3xl">
        <p class="cursor-pointer">{{ logo }}</p>
      </div>
      <div
        class="w-1/3 h-full flex capitalize items-center justify-evenly font-normal"
      >
        <ul v-for="items in navItems" :key="items">
          <li class="cursor-pointer">{{ items }}</li>
        </ul>
      </div>
      <div class="w-1/3 h-full flex items-center justify-end">
        <button
          class="uppercase border p-2 w-[8vw] border-brand text-brand font-semibold"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const navItems = ["about", "features", "services", "pricing", "blog"];
    const button = "contact";
    const logo = "hlt";

    return {
      navItems,
      button,
      logo,
    };
  },
};
</script>
