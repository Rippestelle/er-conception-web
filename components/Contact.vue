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
      <!--       <div class="parallax">
        <img src="../assets/icons/34.svg" />
        <img src="../assets/icons/35.svg" />
      </div> -->
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

      img {
        width: 150px;
      }
    }
  }
}
</style>
