<template>
    <div v-if="currentPersonne">
      <!--
      {{ currentPersonne.name }}
      {{ currentPersonne.surname }}
      {{ currentPersonne.phone }}
      {{ currentPersonne.city }}
      -->

      
        <input type="hidden" name="id" v-model="currentPersonne.id">
        <div class="col-sm-6">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" v-model="currentPersonne.name">
        </div>

        <div class="col-sm-6">
          <label for="surname" class="form-label">Surname</label>
          <input type="text" class="form-control" id="surname" name="surname" v-model="currentPersonne.surname">
        </div>

        <div class="col-sm-6">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" name="phone" v-model="currentPersonne.phone">
        </div>
        
        <div class="col-sm-6">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" name="city" v-model="currentPersonne.city">
        </div>
        <br/>

        <!-- A INCLURE DANS LE FORM -->
         &nbsp; 
        <button type="submit" class="badge badge-success" @click="updatePersonne">
          Modifier
        </button>
          &nbsp; &nbsp; &nbsp;
         <!-- A INCLURE DANS LE FORM -->
        <button class="badge badge-danger mr-2" @click="deletePersonne">
          Supprimer
        </button>
        
        <p>{{ message }}</p> 

     

    </div>
    
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personne",
  data() {
    return {
      currentPersonne: null,
      message: ''
    };
  },
  methods: {
    getPersonne(id) {
      PersonneDataService.get(id) 
      .then(response => {
          this.currentPersonne = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updatePersonne() {
      PersonneDataService.update(this.currentPersonne)
      .then(response => {
          //this.currentPersonne = response.data;
          this.message = 'Personne modifiée avec succès!';
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePersonne() {
      PersonneDataService.delete(this.currentPersonne.id)
      .then(response => {          
          console.log(response.data);
          this.$router.push({ name:"/personnes" });
        })
        .catch(e => {
          console.log(e);
        });        
    }
  },
  mounted() {
    this.message = '';
    this.getPersonne(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
