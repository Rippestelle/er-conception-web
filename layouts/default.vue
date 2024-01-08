<script setup lang="ts">
import Nav from "../components/Nav.vue";
</script>

<template>
  <NuxtLoadingIndicator
    :height="5"
    color="repeating-linear-gradient(
      to right,
      rgb(255, 57, 128),
      rgb(95, 52, 128),
      rgb(42, 201, 255),
      rgb(0, 201, 139),
      rgb(187, 203, 68),
      rgb(244, 45, 83)
    )"
  />
  <Nav />

  <main>
    <slot />
  </main>
</template>

<style>
main {
  margin-top: 52px !important;
  position: relative;
  margin: auto;
}

/* Define styles for the default root window element */
:root {
  --background-color-primary: #fff;
  --background-color-secondary: #121212;
  --accent-color: #fff;
  --text-primary-color: #121212;
  --title-primary-color: #22d49e;
  --title-secondary-color: #fff;
  --element-size: 4rem;
}

/* Define styles for the root window with dark - mode preference */
:root.light-theme {
  --background-color-primary: #121212;
  --background-color-secondary: #fff;
  --accent-color: #cacaca;
  --text-primary-color: #e7eaec;
  --title-primary-color: #22d49e;
  --title-secondary-color: #121212;
}

body {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}
</style>
