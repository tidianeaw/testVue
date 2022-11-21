<template>
    <div v-if="currentPersonne">
     
        <input type="hidden" name="id" v-model="currentPersonne.id">

        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="surname">Nom</label>
              <input type="text" class="form-control" id="surname" name="surname" v-model="currentPersonne.surname">              
            </div>
              
          </div>  
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="name">Prénom</label>
              <input type="text" class="form-control" id="name" name="name" v-model="currentPersonne.name">              
            </div>
          </div>
       </div>

        <br/>
        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="phone">Téléphone</label>
              <input type="text" class="form-control" id="phone" name="phone" v-model="currentPersonne.phone">              
            </div>
          </div>          
          <div class="col-md">
            <div class="form-floating mb-6">
              <label for="city">Ville</label>
              <input type="text" class="form-control" id="city" name="city" v-model="currentPersonne.city">              
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
          this.$router.push({path:'/personnes'});
          //this.$router.push({ name:"/personnes" });
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
