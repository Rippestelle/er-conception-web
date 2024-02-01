<template>
  <div class="bg">
    <div class="back-home-btn">
      <router-link to="/"><span>Accueil</span></router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.bg {
  background-color: #000;
}
.back-home-btn {
  margin: 50px auto;
  width: 600px;
  text-align: center;
  position: relative;
  color: #ffffff;
  text-decoration: none;
  border-radius: 6px;
  box-sizing: border-box;
  display: block;
  z-index: 2;
  overflow: hidden;
  padding: 8px;
  height: 100px;
}
.back-home-btn:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    115deg,
    #4fcf70,
    #fad648,
    #a767e5,
    #12bcfe,
    #44ce7b
  );
  background-size: 50% 100%;
}
.back-home-btn span {
  position: relative;
  z-index: 2;
  padding: 0.875rem 0;
  font-size: 1.1rem;
  text-decoration: none;
  align-items: center;
  background: #000;
  border-radius: 3px;
  display: block;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
  font-size: 50px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.back-home-btn:focus:before,
.back-home-btn:hover:before {
  animation: back-home-btn 0.75s linear infinite;
}

@keyframes back-home-btn {
  to {
    transform: translateX(-50%);
  }
}
</style>
