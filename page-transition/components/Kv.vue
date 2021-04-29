<template>
  <div class="kv">
    <ul class="kv__flex">
      <li class="kv__flex--left">
        <nuxt-link class="kv__flex--link" to="/dog/">
        </nuxt-link>
        <p class="kv__flex--title pc__only">
          DOGS
        </p>
        <nuxt-link class="kv__flex--title sp__only" to="/dog/">
          DOGS
        </nuxt-link>
      </li>
      <li class="kv__flex--right">
        <nuxt-link class="kv__flex--link" to="/cat/">
        </nuxt-link>
        <p class="kv__flex--title kv__flex--title-right">
          CATS
        </p>
        <nuxt-link class="kv__flex--title sp__only" to="/cat/">
          CATS
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.kv{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &__flex{
    display: flex;
    height: 100%;
    list-style-type: none;
    @media all and (max-width: 768px) {
      flex-wrap: wrap;
    }

    &--left,
    &--right{
      position: relative;
      width: 50%;
      height: 100%;
      transition: ease .8s;
      @media all and (max-width: 768px) {
        width: 100%;
        height: 50%;
      }

      &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: ease .3s;
      }

      &:hover{
        width: 70%;
        transition: ease .8s;
        transform: scale(1.05);
        @media all and (max-width: 768px) {
          width: 100%;
        }
        &>.kv__flex--title{
          color: #fff;
          transition: ease .3s;
        }

        &:after{
          opacity: 0;
          transition: ease .3s;
          visibility: hidden;
        }
      }
    }
    &--left{
      background-image: url('~@/assets/img/bg_dog.jpg');
      background-position: left;
      @media all and (max-width: 768px) {
        background-position: center;
      }

      &::after{
        background-color: #c23c48;
      }
    }
    &--right{
      background-image: url('~@/assets/img/bg_cat.jpg');
      background-position: right;
      @media all and (max-width: 768px) {
        background-position: center;
      }
      &::after{
        background-color: #efe1d9;
      }
    }
    &--link{
      display: block;
      height: 100%;
    }
    &--title{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: #eba13d;
      font-size: 80px;
      font-family: 'Coda Caption', sans-serif;
      transition: ease .3s;
      z-index: 5;
      @media all and (max-width: 768px) {
        font-size: 18vw;
      }

      &-right{
        color: #003b2d;
      }
    }
  }
}
</style>
