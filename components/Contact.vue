<script setup lang="ts">
import ContactForm from "./ContactForm.vue";
</script>

<template>
  <section class="container" id="contact">
    <h2>Me contacter</h2>
    <p>
      Vous souhaitez vous lancer dans la création ou l'optimisation de votre
      site internet ? Vous avez besoin de plus d'informations ou d'un devis?
    </p>
    <p>Contactez moi par mail ou téléphone</p>
    <p>Ou via le formulaire de contact suivant :</p>
    <div class="row">
      <ContactForm />
      <div class="parallax">
        <img class="parallax__one" src="../public/assets/icons/38.svg" />
        <img class="parallax__two" src="../public/assets/icons/37.svg" />
        <img class="parallax__three" src="../public/assets/icons/36.svg" />
      </div>
    </div>
  </section>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
section {
  margin-bottom: 100px;

  .row {
    justify-content: space-between;

    .parallax {
      width: 50%;
      position: relative;

      img {
        width: 150px;
        position: absolute;
      }

      &__one {
        left: 0;
        bottom: 0;
        transform: rotate(90deg);
      }

      &__two {
        left: 20px;
        bottom: 20px;
        transform: rotate(90deg);
      }

      &__three {
        left: 40px;
        bottom: 40px;
        transform: rotate(90deg);
      }
    }
  }
}
</style>
