<template>
  <div class="header">
    <ul class="header__flex">
      <li class="header__flex--item">
        <nuxt-link class="header__flex--link" to="/">TOP</nuxt-link>
      </li>
      <li class="header__flex--item">
        <nuxt-link class="header__flex--link" to="/dog">DOG</nuxt-link>
      </li>
      <li class="header__flex--item">
        <nuxt-link class="header__flex--link" to="/cat">CAT</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;

  &__flex{
    display: flex;
    list-style-type: none;

    &--item{
      margin: 0 30px;
      @media all and (max-width: 768px) {
        margin: 0 3vw;
      }
    }

    &--link{
      display: block;
      transition: ease .3s;
      padding: 10px 0;
      font-family: 'Coda Caption', sans-serif;
      @media all and (max-width: 768px) {
        padding: 2vw 0;
        font-size: 4vw;
      }

      &:hover{
        color: #eba13d;
        transition: ease .3s;
      }
    }
  }
}
</style>
