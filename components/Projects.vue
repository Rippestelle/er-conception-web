<script setup lang="ts"></script>

<template>
  <section class="container">
    <h2>Projets</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices
      sollicitudin sapien, id dictum odio ultricies sed. Vivamus ac sagittis
      sapien, id rhoncus nisl. Nullam sed elit ipsum. Etiam vitae tortor at
      metus iaculis venenatis rutrum eu dolor.
    </p>
    <div class="projects">
      <router-link
        to="https://maufitcoaching.fr/"
        class="projects__card"
        target="_blank"
      >
        <div class="projects__card__top">
          <img src="../public/assets/img/maufit-coaching.png" />
        </div>
        <div class="projects__card__bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices sollicitudin sapien, id dictum odio ultricies sed. Vivamus
            ac sagittis sapien, id rhoncus nisl. Nullam sed elit ipsum. Etiam
            vitae tortor at metus iaculis venenatis rutrum eu dolor.
          </p>
        </div>
      </router-link>
      <router-link
        to="https://www.quick-services-angouleme.fr/"
        class="projects__card"
        target="_blank"
      >
        <div class="projects__card__top">
          <img src="../public/assets/img/quick-services.png" />
        </div>
        <div class="projects__card__bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            ultrices sollicitudin sapien, id dictum odio ultricies sed. Vivamus
            ac sagittis sapien, id rhoncus nisl. Nullam sed elit ipsum. Etiam
            vitae tortor at metus iaculis venenatis rutrum eu dolor.
          </p>
        </div>
      </router-link>
    </div>
  </section>
  <!--   <p>
    Quick services, Mauranne, projets entreprises?, au cours de mon xp pro nombreux
    projets réalisés avec suivi clients.
  </p> -->
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
