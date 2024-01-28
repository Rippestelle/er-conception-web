<template>
  <section class="container headeralt">
    <div class="row" id="animation">
      <div class="animation">
        <img
          class="animation__one animation-img"
          data-parallax="30"
          speed="0.2"
          src="../../public/assets/icons/38.svg"
        />
        <img
          class="animation__two animation-img"
          data-parallax="60"
          speed="0.5"
          src="../../public/assets/icons/40.svg"
        />
        <img
          class="animation__three animation-img"
          data-parallax="120"
          speed="0.9"
          src="../../public/assets/icons/42.svg"
        />
      </div>
      <div class="title">
        <h1>Mentions légales</h1>
      </div>
      <div class="animation">
        <img
          class="animation__four"
          data-parallax="30"
          speed="0.2"
          src="../../public/assets/icons/36.svg"
        />
        <img
          class="animation__five"
          data-parallax="60"
          speed="0.5"
          src="../../public/assets/icons/42.svg"
        />
        <img
          class="animation__six"
          data-parallax="120"
          speed="0.9"
          src="../../public/assets/icons/41.svg"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="js">
import gsap from "gsap";

onMounted(() => {
  // Get the container's bounding rectangle
  let container = document.querySelector("#animation");
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
.headeralt {
  height: 300px;

  h1 {
    font-family: "Manrope", sans-serif;
    background: linear-gradient(
      0.25turn,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
    font-size: 30px;
  }
  .row {
    justify-content: space-between;
    align-items: center;
    height: 100%;

    .title {
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .animation {
      width: 30%;
      height: 100%;
      position: relative;

      img {
        position: absolute;
      }

      &__one {
        right: 0px;
        top: 0;
        width: 200px;
      }

      &__two {
        right: 70px;
        top: 0px;
        width: 200px;
      }

      &__three {
        right: 110px;
        top: 25px;
        width: 150px;
      }

      &__four {
        left: 0px;
        bottom: 0px;
        width: 200px;
        transform: rotate(180deg);
      }

      &__five {
        left: 70px;
        bottom: 0px;
        width: 200px;
      }

      &__six {
        left: 110px;
        bottom: 25px;
        width: 150px;
      }
    }
  }
}
</style>
