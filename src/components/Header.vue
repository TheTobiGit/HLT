<template>
  <section class="h-[50vh] bg-brandbg select-none">
    <div
      class="h-[10vh] flex items-center w-screen overflow-hidden text-brandtext px-5 md:px-10"
    >
      <div
        class="md:w-1/4 lg:w-1/3 h-full uppercase flex items-center font-bold text-3xl border"
      >
        <p class="cursor-pointer">{{ logo }}</p>
      </div>
      <div
        v-show="navShow"
        class="absolute top-0 left-0 w-screen z-20 md:z-0 bg-white md:bg-transparent flex-col md:flex-row justify-center gap-6 md:static md:w-2/4 lg:w-1/3 h-screen md:h-full flex capitalize items-center md:justify-evenly md:gap-0 font-normal"
      >
        <ul v-for="items in navItems" :key="items" class="z-30">
          <li class="cursor-pointer">{{ items }}</li>
        </ul>
        <ul>
          <li v-show="navShow" class="md:hidden">contact</li>
        </ul>
      </div>
      <div
        class="md:w-1/4 lg:w-1/3 h-full hidden md:flex items-center justify-end border"
      >
        <button
          class="uppercase border p-2 lg:w-[8vw] border-brand text-brand font-semibold"
        >
          {{ button }}
        </button>
      </div>
      <div
        @click="toggleNav()"
        class="flex md:hidden border border-brand text-brand text-lg p-3 ml-auto"
      >
        <span v-if="!navShow" class="material-symbols-outlined"> menu </span>
        <span v-else class="material-symbols-outlined z-20"> close </span>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    const navItems = ["about", "features", "services", "pricing", "blog"];
    const button = "contact";
    const logo = "hlt";
    const navShow = ref(false);

    const toggleNav = () => {
      navShow.value = !navShow.value;
      console.log("clicked");
    };

    // Function to handle initial visibility of navShow
    const setInitialNavVisibility = () => {
      if (window.innerWidth >= 768) {
        navShow.value = true;
      }
      if (window.innerWidth < 768) {
        navShow.value = false;
      }
    };

    // Call the function when the component is mounted
    onMounted(() => {
      setInitialNavVisibility();
    });

    // Update navShow on window resize
    const handleResize = () => {
      setInitialNavVisibility();
    };

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component is unmounted
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      navItems,
      button,
      logo,
      navShow,
      toggleNav,
    };
  },
};
</script>
