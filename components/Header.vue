<script lang="ts"></script>

<template>
  <header class="header">
    <div class="container flex">
      <div class="header__left">
        <div class="header-main fade-in">
          <h1 class="text-container">
            <span class="primary-txt">Création de site</span> internet,<br />
            &amp; conseils en stratégie <span class="primary-txt">digitale</span>.<br />
          </h1>
        </div>
      </div>
      <div class="header__right"></div>
      <div class="header__right-bis">
        <ul>
          <li>A propos</li>
          <li>Services</li>
          <li>Projets</li>
        </ul>
      </div>
    </div>
    <div class="arrow-down bounce">
      <a href="#theme-btn" class="arrow-down"> </a>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  min-height: 100%;
  height: 100%;
  height: 100vh;
  overflow: hidden;
  width: 100%;

  &__left {
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__right {
    width: 50%;
    background: url("../assets/bg.png") no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    overflow: hidden;

    &:hover {
      animation: rotation 2s infinite linear;
    }
  }

  &__right-bis {
    position: absolute;
    top: 20%;
    right: 0;
    width: 50%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

@media screen and (min-width: 840px) {
  .header {
    /*background: url("@/assets/bg.png") no-repeat center center fixed;
    background-size: cover;*/
    min-height: 100%;
    max-width: 100%;
    height: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
  }
}

.text-container {
  display: block;
  font-size: 3.8vh;
  color: var(--text-primary-color);
  font-family: "Manrope", sans-serif;
}

.primary-txt {
  color: var(--title-primary-color);
  font-family: "Manrope", sans-serif;
}

.header-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
}

.first-part {
  font-family: "Manrope", sans-serif;
}

.second-part {
  font-weight: 700;
}

.nav a {
  color: #22d49e;
}

.nav__list {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-weight: 400;
}

.nav__list__item {
  text-transform: uppercase;
}

@media screen and (max-width: 640px) {
  nav {
    display: none;
  }
  .nav__list__item {
    display: none;
  }
  .nav__list {
    display: none;
  }
}

.arrow-down {
  color: var(--title-secondary-color);
  font-size: 4.5vh;
  background-image: url("../assets/icons/arrow-thin-chevron-bottom-icon.svg");
  background-repeat: no-repeat;
  background-size: 100%;
}
.bounce {
  -moz-animation: bounce 3s infinite;
  -webkit-animation: bounce 3s infinite;
  animation: bounce 3s infinite;
}
@-moz-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@-webkit-keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -moz-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    -webkit-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -moz-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    -webkit-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>
