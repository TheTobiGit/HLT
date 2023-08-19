<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import Appointment from "../components/Appointment.vue";
import BackgroundVue from "../components/Background.vue";
import About from "../components/About.vue";
import Features from "../components/Features.vue";
import Services from "../components/Services.vue";
</script>

<template>
  <BackgroundVue />
  <section class="flex flex-col absolute top-0">
    <Header />
    <Hero />
    <Appointment />
    <About />
    <Features />
    <Services />
  </section>
</template>
