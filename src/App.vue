<template>
  <div id="app" style="font-family:Bookman Old Style;Arial;Verdana;">
    <!--
    <nav class="navbar navbar-expand navbar-light bg-light" style="background-color: #e3f2fd;">
    -->
    <nav class="navbar navbar-expand navbar-light" style="background-color: #d2e1ec;">
      <router-link to="/" class="navbar-brand" style="font-weight:bold">UV TSIO > Front SpringBoot App</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item" onmouseover="this.style='font-weight:bold;'" onmouseout="this.style='font-weight:normal';">
          <router-link to="/personnes" class="nav-link">Personnes</router-link>
        </li>
        <li class="nav-item" onmouseover="this.style='font-weight:bold;'" onmouseout="this.style='font-weight:normal';">
          <router-link to="/ajouter-personne" class="nav-link">Ajouter</router-link>
        </li>

      </div>
      <img src="/cropped-IMT_Nord_Europe_.png" style="max-width:10%;max-height:10%"/>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
