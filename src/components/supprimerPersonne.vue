<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <!-- A COMPLETER -->

      <button @click="supprimerPersonne" class="btn btn-success">Supprimer</button>
    </div>

    <div v-else>
      <h4>Personne supprimée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
</script>