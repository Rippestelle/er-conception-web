<template>
  <section class="container" id="process">
    <h2>Méthode</h2>
    <p>
      Mes diverses expériences me permettent de vous proposer des solutions clés
      en main réalisées dans les bonnes pratiques et normes de qualité web. Je
      réalise des sites vitrines, sites institutionnels, landing page, sites
      e-commerce ou encore des applications métiers, avec une conception et un
      accompagnement sur mesure afin de m'adapter à votre vision et vos
      objectifs.
    </p>

    <ul class="process">
      <li class="process__item">
        <span class="left green">1. Conception</span>
        <p>
          WordPress est un outil qui permet d'obtenir des sites clés en mains
          rapidement et facile d'accès.<br />
          Que ce soit avec un thème existant ou avec un thème sur mesure,
          obtenez un site clé en main facile d'accès.
        </p>
      </li>
      <li class="process__item-right">
        <span class="right blue">2. Développement</span>
        <p>
          Création de thèmes et d'extensions WordPress<br />
          & conception de sites avec les technologies Vue.js et Node.js
        </p>
      </li>
      <li class="process__item">
        <span class="left purple">3. Mise en ligne</span>
        <p>
          Bénéficiez d'un suivi personnalisé, avec une mise à jour régulière de
          votre site.
        </p>
      </li>
      <li class="process__item-right">
        <span class="right green">4. Formation</span>
        <p>
          Référencement naturel optimisé et conseils en stratégie de
          référencement. Des pages bien construites pour un
          référencementoptimal.
        </p>
      </li>
      <li class="process__item">
        <span class="left blue">5. Suivi & Maintenance</span>
        <p>
          Vous avez déjà un site internet et souhaitez l'optimiser ?<br />
          Optenez des conseils pour donner plus de visibilité à votre site.
        </p>
      </li>
    </ul>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
h2 {
  padding-top: 80px;

  @media screen and (max-width: 840px) {
    padding-top: 40px;
  }
}
.process {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__item {
    width: 30%;
    margin-top: 1em;
    margin-bottom: 1em;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }

    .left {
      border-bottom-style: double;
      border-bottom-width: 5px;
      border-bottom-style: double;
      border-bottom-width: 5px;
      padding: 0 0.3em 0.3em 0.7em;
      width: fit-content;
      border-bottom-left-radius: 25px;
      font-size: 25px;
    }

    p {
      margin-top: 2em;
    }
  }

  &__item-right {
    text-align: end;
    width: 30%;
    margin-top: 1em;
    margin-bottom: 1em;

    @media screen and (max-width: 1100px) {
      width: 100%;
    }

    .right {
      border-bottom-style: double;
      border-bottom-width: 5px;
      padding: 0 0.7em 0.3em 0.3em;
      width: fit-content;
      border-bottom-right-radius: 25px;
      font-size: 25px;
      text-align: end;
    }

    p {
      margin-top: 2em;
    }
  }
}

.green {
  border-bottom-color: var(--title-primary-color);
}

.blue {
  border-bottom-color: rgb(46, 128, 200);
}

.purple {
  border-bottom-color: rgb(140, 59, 220);
}
</style>
