<script setup lang="ts"></script>

<template>
  <section>
    <div class="container">
      <div class="flex">
        <!--         <div class="logo">
          <router-link to="/">
            <img
              loading="lazy"
              src="/assets/img/logoer.png"
              class="w-full"
              alt="Logo Estelle Rippe - Création de sites web"
            />
          </router-link>
        </div> -->
        <div class="infos">
          <ul class="links">
            <li class="links__item">
              <router-link to="/"> Conseils en stratégie digitale </router-link>
            </li>

            <li class="links__item">
              <router-link to="/"> Création de sites web sur mesure </router-link>
            </li>

            <li class="links__item">
              <router-link to="/"> Création de sites Wordpress </router-link>
            </li>

            <li class="links__item">
              <router-link to="/"> Conseils en référencement naturel SEO</router-link>
            </li>
          </ul>

          <ul class="links">
            <li class="links__item">
              <router-link to="/"> Projets</router-link>
            </li>
            <li class="links__item">
              <router-link to="/"> Contact</router-link>
            </li>

            <li class="links__item">
              <router-link to="/">Mentions légales</router-link>
            </li>

            <li class="links__item">
              <router-link to="/"> Politique de confidentialité</router-link>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <div class="container">
          <span>Copyright 2023</span> |
          <router-link to="/politique-confidentialite/">
            Politique de confidentialité
          </router-link>
          |
          <router-link to="/mentions-legales/"> Mentions légales </router-link>
        </div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  padding: 1em 0 1em 0;
}

.infos {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.links {
  list-style: none;

  &__item a {
    text-decoration: none;
    color: var(--text-primary-color);
  }
}

footer .container {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 0.5em;

  a {
    text-decoration: none;
    color: var(--text-primary-color);
  }
}
</style>
