<template>
  <section class="app-footer">
    <footer class="footer">
      <div class="container-fluid clearfix">
        <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">
          Copyright © 2022
        </span>
        <span class="text-muted float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          <a href='https://github.com/GustavoGajdeczka' target="_blank">Gustavo Gajdeczka</a>
        </span>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterLayout"
}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(19, 14, 24);
  color: white;
  text-align: center;
}
</style>