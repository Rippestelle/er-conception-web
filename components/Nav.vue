<script setup lang="ts">
/*import ContactFormModal from '../shared/ContactFormModal.vue';

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};*/

const header = ref();
const isMobile = ref(false);

const toggleNavbar = () => {
  header.value.classList.toggle("responsive");
};

const onNavigation = (services = false) => {
  toggleNavbar();
};

onMounted(() => {
  if (window.innerWidth < 1150) {
    isMobile.value = true;
  }
});
</script>

<template>
  <div id="top">
    <div class="responsive-logo">
      <router-link to="/">
        <img
          src="/assets/img/logoer.png"
          alt="Logo Estelle Rippe - Développement Web"
        />
      </router-link>
    </div>

    <div class="navbar">
      <header ref="header" class="container">
        <div class="nav__heading">
          <router-link to="/">
            <img
              src="/assets/img/logoer.png"
              alt="Logo Estelle Rippe - Développement Web"
            />
          </router-link>

          <MenuIcon class="responsive-menu" @click="toggleNavbar" />
        </div>

        <nav>
          <router-link
            class="nav__link"
            to="/#about"
            @click="() => onNavigation()"
          >
            A propos
          </router-link>

          <router-link
            class="nav__link"
            to="/#services"
            @click="() => onNavigation()"
          >
            Services
          </router-link>

          <router-link
            class="nav__link"
            to="/#projects"
            @click="() => onNavigation()"
          >
            Projets
          </router-link>
        </nav>

        <div class="flex">
          <router-link
            class="nav__link button-64"
            to="/#contact"
            @click="() => onNavigation()"
          >
            <span class="text">Contact</span>
          </router-link>
        </div>
      </header>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flex {
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
}

.nav__heading {
  display: flex;
  align-items: center;

  img {
    @media screen and (max-width: 1200px) {
      width: 60px;
    }
    @media screen and (min-width: 1200px) {
      width: 70px;
    }
  }
}

.responsive-menu {
  display: none;
  cursor: pointer;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px) !important;
  display: flex;
  justify-content: center;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3em 0 3.5em;

  nav {
    display: flex;
    align-items: center;
    width: 50%;

    @media screen and (max-width: 1200px) {
      margin-right: 2em;
    }
  }

  .nav__link,
  a:not(.button-link) {
    color: var(--title-primary-color);
    margin: 0.6em 0 0 0;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 3px solid transparent;
    margin-right: 1.2em;
    font-size: 14px;

    &.router-link-exact-active,
    &.router-link-exact-active > a {
      font-weight: 600;
    }

    ul {
      display: none;
      padding: 0.8em 2em;
      margin-bottom: 0;

      li {
        list-style: none;
      }
    }
  }

  span.nav__link {
    padding: 2em 3em calc(2em + 4px) 4em;
    margin: 0 0 -4px 0;
    cursor: pointer;
    z-index: 1;

    @media screen and (max-width: 1250px) {
      padding: 2em 2em calc(2em + 4px) 2em;
    }
  }
}

nav a:nth-child(3) {
  margin-right: 2em !important;
}
nav a:nth-child(4) {
  margin-right: 2em !important;
}

.responsive-logo {
  display: none;
}

@media screen and (max-width: 1175px) {
  img {
    width: 60px !important;
    height: auto;
  }

  nav {
    gap: 2em !important;
  }
}

@media screen and (max-width: 1175px) {
  .responsive-logo {
    display: block;
    position: absolute;
    z-index: 2000;

    img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 10px;
    }
  }

  header {
    padding: 1em;
  }

  nav {
    gap: 1em !important;
    width: 80%;

    .nav__link,
    a {
      width: fit-content;
      text-decoration: none;
      padding: 0 !important;
      margin: 0 !important;
      border-bottom: none !important;
    }

    ul {
      display: flex !important;
      flex-direction: column;
      gap: 1em;
    }
  }

  .nav__heading {
    width: 100%;

    img {
      display: none;
    }
  }

  .responsive-menu {
    display: block;
  }

  header {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 2em;

    &:not(.responsive) nav,
    &:not(.responsive) a {
      display: none;
    }

    &.responsive nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    &.responsive a {
      display: block;
    }
  }
}

.button-link {
  display: block;
  width: -moz-fit-content;
  width: fit-content;
  color: #fff !important;
  border: none;
  border-radius: 10px;
  padding: 10px 26px;
  font-size: 18px;
  text-decoration: none !important;
  margin-top: 15px;
  text-align: center;
  transition: all 0.3s;
}

@media screen and (max-width: 1175px) {
  ul li:nth-child(6) {
    display: none;
  }
}

@media screen and (max-width: 1200px) {
  nav a {
    margin-right: 16px !important;
  }
}
</style>
