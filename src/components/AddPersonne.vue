<template>
  <div class="submit-form">
    <div v-if="!submitted">

        <input type="hidden" name="id" v-model="personne.id">
        
        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Surname</span>
            <input type="text" class="form-control" id="surname" name="surname" placeholder="JORDAN" required="" v-model="personne.surname">
            <div class="invalid-feedback">
              The surname is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" id="name" name="name" placeholder="Michael" required="" v-model="personne.name">
            <div class="invalid-feedback">
              The name is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Phone</span>
            <input type="text" class="form-control" id="phone" name="phone" placeholder="000-0000-000" required="" v-model="personne.phone">
            <div class="invalid-feedback">
              The phone # is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">City</span>
            <input type="text" class="form-control" id="city" name="city" placeholder="Chicago" required="" v-model="personne.city">
            <div class="invalid-feedback">
              The city value is required.
            </div>
          </div>
          <br/>
        </div>    
        

        <!--
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
        -->

        <div class="col-sm-9">       
          <p>{{ message }}</p>       
          <!--
            <button @click="creerPersonne" class="btn btn-success">Ajouter</button>
          -->
          <button @click="creerPersonne" class="w-20 btn btn-lg btn-primary">Ajouter</button>
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
  nextId : 0,
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
      PersonneDataService.getAll()
      .then(response => {
        this.nextId = response.data.length + 1;
        console.log(this.nextId);
      })
      .catch(e => {
        console.log(e);
      });

      //Appel à PersonneDataService.getAll()
      // dans le then : compter le nombre de personnes dans le tableau
      // stocker ce nombre dans une variable
      // id = variable +1
      var data = {
        id: this.nextId,
        name: this.personne.name,
        surname: this.personne.surname,
        phone: this.personne.phone,
        city: this.personne.city
      };
      //console.log(data);

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
