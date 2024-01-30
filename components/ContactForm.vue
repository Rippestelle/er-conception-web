<template>
  <form
    name="Website Contact Form"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="Website Contact Form" />
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>

    <input
      type="text"
      class="right"
      required
      name="lastname"
      placeholder="Nom *"
    />

    <input type="text" class="left" name="firstname" placeholder="Prénom" />

    <input
      type="email"
      class="right"
      name="mail"
      placeholder="Email *"
      required
    />

    <input type="number" class="left" name="phone" placeholder="Téléphone" />

    <textarea
      name="message"
      class="right"
      placeholder="Message *"
      required
    ></textarea>

    <button
      type="submit"
      class="nav__link button-64"
      value="Envoyer le message"
    >
      <span>Envoyer</span>
    </button>
  </form>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  width: 50%;

  @media screen and (max-width: 840px) {
    width: 100%;
  }

  input,
  textarea {
    width: 80%;
    margin-bottom: 20px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(
      0.25turn,
      rgb(88, 44, 145),
      rgb(46, 128, 200) 50%,
      #22d49e
    );
    border-image-slice: 1;
    font-size: 18px;
    color: var(--text-primary-color);

    @media screen and (max-width: 840px) {
      width: 100%;
    }
  }

  ::placeholder {
    color: var(--text-primary-color);
    font-size: 18px;
    font-family: "Dosis", sans-serif;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  textarea {
    height: 250px;
  }

  button {
    width: fit-content;
    padding: 3px 3px 3px 3px;

    span {
      padding: 7px 15px;
      text-transform: uppercase;
      font-size: 14px;
      font-family: "Manrope", sans-serif;
      height: inherit;
      color: var(--text-primary-color);
    }
  }
}
</style>
