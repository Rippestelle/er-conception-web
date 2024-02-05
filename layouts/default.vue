<script setup lang="ts">
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";
import ThemeButon from "../components/shared/ThemeButon.vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

const { gtag, grantConsent, revokeConsent } = useGtag();

watch(
  () => cookiesEnabledIds.value,
  (current) => {
    if (current?.includes("google-analytics")) {
      grantConsent();
    }
  },
  { deep: true, immediate: true }
);
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
  <CookieControl locale="fr" />

  <Nav />
  <ThemeButon />
  <main>
    <slot />
  </main>
  <Footer />
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
  --text-secondary-color: #fff;
  --title-primary-color: #22d49e;
  --title-secondary-color: #fff;
  --element-size: 4rem;
  --tilt-color: rgba(255, 255, 255, 0.67);
}

/* Define styles for the root window with dark - mode preference */
:root.light-theme {
  --background-color-primary: #121212;
  --background-color-secondary: #fff;
  --accent-color: #cacaca;
  --text-primary-color: #e7eaec;
  --text-secondary-color: #121212;
  --title-primary-color: #22d49e;
  --title-secondary-color: #121212;
  --tilt-color: rgba(40, 40, 40, 0.67);
}

body {
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}

.cookieControl__ControlButton {
  left: 20px !important;
}
</style>
