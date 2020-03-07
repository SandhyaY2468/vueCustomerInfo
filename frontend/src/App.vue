<template>
  <div id="app" class="header-container">
    <nav class="navbar navbar-expand- bg-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name:'Customer' }" class="nav-link">Customer Information Model One</router-link>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
 .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .gap {
      margin-top: 50px;
  }
</style>
