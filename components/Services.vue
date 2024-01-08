<template>
  <section>
    <div class="container">
    <h2>Mes services</h2>
<!--       <p>
        Spécialisée en WordPress, j'intègre des sites web en créant des thèmes maison ou
        via un constructeur de thème comme Elementor afin de donner un maximum
        d'autonomie à mes clients.
      </p>
      <p></p>
      <p>
        WordPress, Elementor, Custom, Formation (autonomie client, accompagnement). Projet
        en JS. Conseils SEO et stratégie digitale. Autres prestatires possibles pour
        autres solutions
      </p>

      <ul class="services">
        <li class="services__item">Création de site WordPress</li>
        <li class="services__item">
          Création de site sur mesure (WordPress,Vue.js, Nuxt ...)
        </li>
        <li class="services__item">Conseils en stratégie digitale</li>
        <li class="services__item">Conseils en référencement naturel SEO</li>
        <li class="services__item">Refonte site internet</li>
        <li class="services__item">Formation WordPress</li>
      </ul> -->
    </div>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
h2 {
  border-bottom-style: double;
  border-bottom-width: 5px;
  border-bottom-color: var(--title-primary-color);
  border-left-style: double;
  border-left-width: 5px;
  border-left-color: var(--title-primary-color);
  padding-left: .5em;
  width: 200px;
  border-bottom-left-radius: 25px;
}

.services {
  list-style-type: none;

  &__item::marker {
    content: " ";
  border-style: double;
  border-width: 5px;
  border-color: var(--title-primary-color);
  width: 10px;
  height: 10px;
  border-radius: 20px;
  font-size: 25px;
  }
}
</style>
