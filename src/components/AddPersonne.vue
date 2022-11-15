<template>
  <div class="submit-form">
    <div v-if="!submitted">
      
        <div class="col-sm-9">
          <label for="name" class="form-label">Surname</label>
          <input type="text" class="form-control" id="surname" name="surname" v-model="personne.surname">
        </div>

        <div class="col-sm-9">
          <label for="surname" class="form-label">Name</label>
          <input type="text" class="form-control" id="name" name="name" v-model="personne.name">
        </div>

        <div class="col-sm-9">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone" name="phone" v-model="personne.phone">
        </div>
        
        <div class="col-sm-9">
          <label for="city" class="form-label">City</label>
          <input type="text" class="form-control" id="city" name="city" v-model="personne.city">
        </div>

        <div class="col-sm-9">       
          <p>{{ message }}</p>       
          <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
        </div>

        
      
    </div>

    <div v-else>
      <h4>Personne ajoutée avec succès!</h4>
      <button class="btn btn-success" @click="resetForm">Ajouter une nouvelle personne</button>
    </div>
  </div>
</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "add-personne",
  data() {
    return {
      personne: {
        id: null,
        name: "",
        surname: "",
        phone: "",
        city: ""
      },
      message: "",
      submitted: false
    };
  },
  methods: {
    creerPersonne() {
      var data = {
        id: null,
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city
      };
      console.log(data);

      // A COMPLETER      
      PersonneDataService.create(data)
      .then(response => {          
          console.log(response.data);          
          this.submitted = true;               
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    resetForm() {
      this.submitted = false;
      this.personne = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 600px;
  margin: auto;
}
</style>
