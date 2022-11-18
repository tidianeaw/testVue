<template>
    <div v-if="currentPersonne">
      <!--
      {{ currentPersonne.name }}
      {{ currentPersonne.surname }}
      {{ currentPersonne.phone }}
      {{ currentPersonne.city }}
      -->

      <!--<form method="post" action="/modifier-personne"> -->
        <input type="hidden" name="id" v-model="currentPersonne.id">

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Surname</span>
            <input type="text" class="form-control" id="surname" name="surname" placeholder="currentPersonne.surname" required="" v-model="currentPersonne.surname">
            <div class="invalid-feedback">
              The surname is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Name</span>
            <input type="text" class="form-control" id="name" name="name" placeholder="currentPersonne.name" required="" v-model="currentPersonne.name">
            <div class="invalid-feedback">
              The name is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">Phone</span>
            <input type="text" class="form-control" id="phone" name="phone" placeholder="currentPersonne.phone" required="" v-model="currentPersonne.phone">
            <div class="invalid-feedback">
              The phone # is required.
            </div>
          </div>
          <br/>
        </div>

        <div class="col-sm-6">              
          <div class="input-group has-validation">
            <span class="input-group-text">City</span>
            <input type="text" class="form-control" id="city" name="city" placeholder="currentPersonne.city" required="" v-model="currentPersonne.city">
            <div class="invalid-feedback">
              The city value is required.
            </div>
          </div>
          <br/>
        </div>

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
        
        <p></p>

        <p><b>{{ message }}</b></p> 

      <!--</form> -->

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
