<template>

  <div class="submit-form">
    <div v-if="!submitted">
        <input type="hidden" name="id" v-model="personne.id">

        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="surname">Nom</label>
              <input type="text" class="form-control" id="surname" name="surname" v-model="personne.surname" placeholder="DJOKOVIC" onblur="javascript: if (surname.value=='') alert('Champ nom obligatoire');" required>              
            </div>
              
          </div>  
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="name">Prénom</label>
              <input type="text" class="form-control" id="name" name="name" v-model="personne.name" placeholder="Novak" >              
            </div>
          </div>
       </div>

        <br/>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="phone">Téléphone</label>
              <input type="text" class="form-control" id="phone" name="phone" v-model="personne.phone" placeholder="121212" onblur="javascript: if (phone.value=='') alert('Champ téléphone obligatoire');" required>              
            </div>
          </div>          
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="city">Ville</label>
              <input type="text" class="form-control" id="city" name="city" v-model="personne.city" placeholder="Belgrade" >              
            </div>
          </div>
        </div>
        <br/>

        <div class="row g-2">
          <div class="col-md">
           <p style="color:#f00">{{ message }}</p>               
         </div>
         <div  class="col-md">
            <!--
            <button @click="creerPersonne" class="w-20 btn btn-lg btn-dark">Ajouter</button>
            -->
            <button type="submit" class="badge badge-success" @click="creerPersonne">Ajouter</button>
         </div>
        </div>
                  
        <br/>
          
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
      if (this.personne.surname == '' || this.personne.phone == '') {
        this.message = 'Les champs obligatoires doivent être renseignés';
        this.submitted = false;   
      }
      else {
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
      }
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
