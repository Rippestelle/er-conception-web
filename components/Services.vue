<template>
  <section class="container" id="services">
    <h2>Mes services</h2>
    <p>
      Mes diverses expériences me permettent de vous proposer des solutions clés
      en main réalisées dans les bonnes pratiques et normes de qualité web. Je
      réalise des sites vitrines, sites institutionnels, landing page, sites
      e-commerce ou encore des applications métiers, avec une conception et un
      accompagnement sur mesure afin de m'adapter à votre vision et vos
      objectifs.
    </p>
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
        <img src="../public/assets/icons/wp.png" />
        <h4>Création de site WordPress</h4>
        <p>
          WordPress est un outil qui permet d'obtenir des sites clés en mains
          rapidement et facile d'accès.<br />
          Que ce soit avec un thème existant ou avec un thème sur mesure,
          obtenez un site clé en main facile d'accès.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/sur-mesure.png" />
        <h4>Création de site sur mesure</h4>
        <p>
          Création de thèmes et d'extensions WordPress<br />
          & conception de sites avec les technologies Vue.js et Node.js
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/landing-page.png" />
        <h4>Mini-sites et landing page</h4>
        <p>
          Bénéficiez d'un suivi personnalisé, avec une mise à jour régulière de
          votre site.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/seo1.png" />
        <h4>Conseils en référencement naturel - SEO</h4>
        <p>
          Référencement naturel optimisé et conseils en stratégie de
          référencement. Des pages bien construites pour un
          référencementoptimal.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/refonte.png" />
        <h4>Refonte site internet</h4>
        <p>
          Vous avez déjà un site internet et souhaitez l'optimiser ?<br />
          Optenez des conseils pour donner plus de visibilité à votre site.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/formation.png" />
        <h4>Formation WordPress</h4>
        <p>
          Je vous forme au back-office WordPress afin de vous garantir un
          maximum d'autonomie.<br />
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/responsive.png" />
        <h4>Responsive design</h4>
        <p>
          Vous avez déjà un site internet et souhaitez l'optimiser ?<br />
          Optenez des conseils pour donner plus de visibilité à votre site.
        </p>
      </li>
      <li class="services__item">
        <img src="../public/assets/icons/tools.png" />
        <h4>Suivi & Maintenance</h4>
        <p>
          Je vous forme au back-office WordPress afin de vous garantir un
          maximum d'autonomie.<br />
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
h2 {
  padding-top: 80px;
}
.services {
  list-style-type: none;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  &__item {
    width: 100%;
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
    }
  }
}
</style>
