<template>
  <b-navbar id="template-header" class="navbar default-layout-navbar p-0 fixed-top" toggleable="lg">
    <div class="horizontal-menu">

      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">

            <li class="nav-item mr-3">
              <router-link class="nav-link" :to="{ name: 'home' }">
                <b-icon-gear class="mr-2" />
                <span class="menu-title">Login</span>
              </router-link>
            </li>

            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'login' }">
                  <b-icon-files class="mr-2" />
                  <span class="menu-title">Login</span>
                </router-link>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "HeaderLayout"
}
</script>

<style>

</style>