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
      </p>  -->

      <ul class="services">
        <li class="services__item">
          <span class="left">Création de site WordPress</span>
          <p>
            WordPress est un outil qui permet d'obtenir des sites clés en mains
            rapidement et facile d'accès.<br />
            Que ce soit avec un thème existant ou avec un thème sur mesure,
            obtenez un site clé en main facile d'accès.
          </p>
        </li>
        <li class="services__item-right">
          <span class="right">Création de site sur mesure</span>
          <p>
            Création de thèmes et d'extensions WordPress<br />
            & conception de sites avec les technologies Vue.js et Node.js
          </p>
        </li>
        <li class="services__item">
          <span class="left">Suivi & Accompagnement</span>
          <p>
            Bénéficiez d'un suivi personnalisé, avec une mise à jour régulière
            de votre site.
          </p>
        </li>
        <li class="services__item-right">
          <span class="right">Conseils en référencement naturel SEO</span>
          <p>
            Référencement naturel optimisé et conseils en stratégie de
            référencement.
          </p>
        </li>
        <li class="services__item">
          <span class="left">Refonte site internet</span>
          <p>
            Vous avez déjà un site internet et souhaitez l'optimiser ?<br />
            Optenez des conseils pour donner plus de visibilité à votre site.
          </p>
        </li>
        <li class="services__item-right">
          <span class="right">Formation WordPress</span>
          <p>
            Je vous forme au back-office WordPress afin de vous garantir un
            maximum d'autonomie.<br />
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.services {
  list-style-type: none;
  width: 100%;

  &__item {
    width: 100%;
    margin-top: 1em;

    .left {
      border-bottom-style: double;
      border-bottom-width: 5px;
      border-bottom-color: var(--title-primary-color);
      padding-left: 0.5em;
      width: fit-content;
      border-bottom-left-radius: 25px;
      font-size: 25px;
    }
  }

  &__item-right {
    text-align: end;
    width: 100%;
    margin-top: 1em;

    .right {
      border-bottom-style: double;
      border-bottom-width: 5px;
      border-bottom-color: var(--title-primary-color);
      padding-right: 0.5em;
      width: fit-content;
      border-bottom-right-radius: 25px;
      font-size: 25px;
      text-align: end;
    }
  }
}
</style>
