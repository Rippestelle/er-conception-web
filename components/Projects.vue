<script setup lang="ts"></script>

<template>
  <section class="container" id="projects">
    <h2>Projets</h2>
    <p>
      En dehors de nombreux projets réalisés en entreprise (sites vitrines,
      sites institutionnels, applications métier ou encore landing-page), voici
      mes premiers projets réalisés en freelance.
    </p>
    <div class="projects">
      <a
        href="https://maufitcoaching.fr/"
        class="projects__card"
        target="_blank"
      >
        <div class="projects__card__top">
          <img src="../public/assets/img/maufit-coaching.png" />
        </div>
        <div class="projects__card__bottom">
          <p>
            Mau-Fit Coaching est une micro-entreprise de coaching à domicile. La
            cliente m'a contacté pour une création de site WordPress,
            Référencement local et début prometteur pour un bon positionnement
            sur les moteurs de recherches.
          </p>
        </div>
      </a>
      <a
        href="https://www.quick-services-angouleme.fr/"
        class="projects__card"
        target="_blank"
      >
        <div class="projects__card__top">
          <img src="../public/assets/img/quick-services.png" />
        </div>
        <div class="projects__card__bottom">
          <p>
            Le client souhaitait refaire le site de sa Cordonnerie - Serrurerie,
            mettre en valeurs certains produits et optimiser son référencement.
            Amélioration du contenu et du référencement, modernisation du
            design.
          </p>
        </div>
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container p {
  margin-bottom: 25px;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-wrap: wrap;

    &__card {
      &__top {
        width: 100%;
        height: 250px;

        img {
          width: 100%;
          object-fit: cover;
          height: 100%;
        }
      }
    }
  }

  &__card {
    &__top {
      width: 100%;
      height: 50%;

      img {
        width: 100%;
        object-fit: cover;
        height: 100%;
      }
    }
  }
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: #fff !important;
  background: none;
  -webkit-text-fill-color: inherit;
}
</style>
