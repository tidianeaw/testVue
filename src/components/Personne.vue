<template>
    <div v-if="currentPersonne">
     
        <input type="hidden" name="id" v-model="currentPersonne.id">

        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="surname">Nom</label>
              <input type="text" class="form-control" id="surname" name="surname" v-model="currentPersonne.surname" onblur="javascript: if (surname.value=='') alert('Champ nom obligatoire');" required>              
            </div>
              
          </div>  
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="name">Prénom</label>
              <input type="text" class="form-control" id="name" name="name" v-model="currentPersonne.name"  onblur="javascript: if (name.value=='') alert('Champ prénom obligatoire');" required>              
            </div>
          </div>
       </div>

        <br/>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="phone">Téléphone</label>
              <input type="text" class="form-control" id="phone" name="phone" v-model="currentPersonne.phone" onblur="javascript: if (phone.value=='') alert('Champ téléphone obligatoire');" required>              
            </div>
          </div>          
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="city">Ville</label>
              <input type="text" class="form-control" id="city" name="city" v-model="currentPersonne.city"  onblur="javascript: if (city.value=='') alert('Champ ville obligatoire');" required>              
            </div>
          </div>
        </div>
        <br/>

        <div class="row g-2">
          <div class="col-md">
           &nbsp; 
         </div>
         <div  class="col-md">
            <button type="submit" class="badge badge-success" @click="updatePersonne">
              Modifier
            </button>
              &nbsp; &nbsp; &nbsp;
             <!-- A INCLURE DANS LE FORM -->
            <button class="badge badge-danger mr-2" @click="deletePersonne">
              Supprimer
            </button>
         </div>
        </div>
        <p></p>

        <p style="color:#080"><b>{{ message }}</b></p>     

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
      if (this.currentPersonne.surname == '' || this.currentPersonne.name == '' || this.currentPersonne.phone == '' || this.currentPersonne.city == '') {
        this.message = 'Les champs obligatoires doivent être renseignés';        
      }
      else {
      PersonneDataService.update(this.currentPersonne)
      .then(response => {
          //this.currentPersonne = response.data;
          this.message = 'Personne modifiée avec succès!';
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      }
    },

    deletePersonne() {
      PersonneDataService.delete(this.currentPersonne.id)
      .then(response => {          
          console.log(response.data);
          this.$router.push({path:'/personnes'});
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
