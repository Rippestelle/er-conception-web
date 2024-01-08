<script setup lang="ts">
const off = ref(true);

const toggleLight = () => {
  off.value = !off.value;
};
</script>

<template>
  <section>
    <div class="container switch">
      <div class="switch__content" v-if="off">
        <p class="switch__content__text transparent">
          N'hésitez pas à me contacter pour votre projet ou pour tout renseignement?
        </p>
      </div>
      <div class="switch__content neon" v-else>
        <p class="switch__content__text">
          N'hésitez pas à me contacter pour votre projet ou pour tout renseignement?
        </p>
      </div>

      <button @click="toggleLight" class="switch-off" role="button">
          <img src="../assets/icons/power-button-svgrepo-com (1).svg" />
      </button>
      <h3>Démarrez votre projet</h3>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 2em 0 2em 0;
}

.switch {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  &__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 1.5em;
  }
}

.switch__content__text {
  font-size: 24px;
  text-align: center;
}

.neon p {
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px rgb(34 212 158),
    0 0 77px rgb(34 212 158), 0 0 100px rgb(34 212 158);
  animation: lumiere 1s infinite linear;
}

@keyframes lumiere {
  0% {
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 42px rgb(34 212 158),
      0 0 77px rgb(34 212 158), 0 0 100px rgb(34 212 158);
  }
  50% {
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 32px rgb(34 212 158),
      0 0 87px rgb(34 212 158), 0 0 120px rgb(34 212 158);
  }
}

.switch-off {
  border-radius: 50%;
  border: none;
  outline: none;
  color: var(--text-primary-color);
  background: var(--background-color-primary);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  position: relative;
  z-index: 0;

  img {
    width: 30px;
    padding: 1em .8em 1em .8em;
  }
}

.switch-off:before {
  content: "";
  background: linear-gradient(
    45deg,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  -webkit-filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing-button-85 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  border-radius: 50%;
}

@keyframes glowing-button-85 {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}

.switch-off:after {
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background-color-primary);
  left: 0;
  top: 0;
  border-radius: 50%;
}
</style>
