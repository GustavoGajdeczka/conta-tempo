<template>
  <section class="main-view">
    <div class="container-scroller">
      <Header />
      <div class="container-fluid page-body-wrapper">
        <div class="main-panel">
          <div class="content-wrapper">
            <router-view :key="$route.path"></router-view>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import Header from "./components/header"
import Footer from "./components/footer"
export default {
  name: "LayoutIndex",
  components: {
    Header,
    Footer
  }
}
</script>