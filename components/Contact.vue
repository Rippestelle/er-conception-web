<template>
  <section class="container" id="contact">
    <h2>Me contacter</h2>
    <p>
      Vous souhaitez vous lancer dans la création ou l'optimisation de votre
      site internet ? Vous avez besoin de plus d'informations ou d'un devis?
    </p>
    <p>Contactez moi par mail ou téléphone</p>
    <p>Ou via le formulaire de contact suivant :</p>
    <div class="row">
      <ContactForm />
      <div class="parallax" id="parallax-effect">
        <img
          class="parallax__one"
          data-parallax="30"
          speed="0.2"
          src="../public/assets/icons/38.svg"
        />
        <img
          class="parallax__two"
          data-parallax="60"
          data-speed="0.5"
          src="../public/assets/icons/37.svg"
        />
        <img
          class="parallax__three"
          data-parallax="120"
          data-speed="0.9"
          src="../public/assets/icons/36.svg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import ContactForm from "./ContactForm.vue";
import gsap from "gsap";

onMounted(() => {
  // Get the container's bounding rectangle
  let container = document.querySelector("#parallax-effect");
  let rect = container.getBoundingClientRect();

  // Initialize mouse object with initial values
  let mouse = { x: 0, y: 0, moved: false, leave: false };

  // Add mousemove event listener to the container
  container.addEventListener("mousemove", function (e) {
    mouse.moved = true;
    mouse.leave = false;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  container.addEventListener("mouseleave", function (e) {
    mouse.moved = true;
    mouse.leave = true;
  });

  // Ticker event will be called on every frame
  gsap.ticker.add(function () {
    if (mouse.moved) {
      const parallaxEl = container.querySelectorAll("[data-parallax]");
      parallaxEl.forEach((element) => {
        const paraValue = mouse.leave ? 0 : element.dataset.parallax;
        const easing = mouse.leave ? "elastic.out" : "power2";
        const speed = mouse.leave ? 1 : 0.5;
        parallaxIt(element, paraValue, speed, easing);
      });
    }
    mouse.moved = false;
  });

  // Function to apply parallax effect to target elements
  function parallaxIt(target, movement, speed, easing) {
    gsap.to(target, {
      duration: speed,
      ease: easing,
      x: ((mouse.x - rect.width / 2) / rect.width) * movement,
      y: ((mouse.y - rect.height / 2) / rect.height) * movement,
    });
  }

  // Add resize and scroll event listeners to the window
  window.addEventListener("resize", updateRect);
  window.addEventListener("scroll", updateRect);

  // Function to update the container's bounding rectangle on resize and scroll
  function updateRect() {
    rect = container.getBoundingClientRect();
  }
});
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 100px;

  .row {
    justify-content: space-between;

    .parallax {
      width: 50%;
      position: relative;

      img {
        position: absolute;
      }

      &__one {
        left: 0;
        bottom: 0;
        transform: rotate(90deg);
        width: 75px;
      }

      &__two {
        left: 10px;
        bottom: 10px;
        transform: rotate(90deg);
        width: 100px;
      }

      &__three {
        left: 20px;
        bottom: 20px;
        transform: rotate(90deg);
        width: 125px;
      }
    }
  }
}
</style>
