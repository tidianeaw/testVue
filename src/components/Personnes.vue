<template>

  <div v-if="currentPersonne">

    <div class="container" style="width:60%;border-radius: 5px;border-collapse:collapse;overflow:hidden;">
      <div class="row" style="height:20%">
        <div class="col"  style='background-color:#d2e1ec'>
          <br/>
          <span>{{ currentPersonne.name }}</span>
          <br>
          <p>{{ currentPersonne.surname }}</p>
        </div>
        <div class="col" style='background-color:#d2e1ec'>  
          <br/>        
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
          {{ currentPersonne.phone }}
          <br/>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          {{ currentPersonne.city }}
          <p></p>
        </div>
        <div class="col" style='background-color:#d2e1ec'>
          <br/>     
          <router-link style="border-collapse: collapse;border-radius: 5px;" :to="'/personnes/' + currentPersonne.id" class="badge badge-warning">Modifier</router-link>
        </div>
      </div>
    </div>

    <p></p>
  </div>
  <div v-else>
    <br />
    <p>Cliquez sur une des personnes pour afficher les détails.</p>

  </div>

    <p></p>
  
    <table width="60%" class="table table-bordered table-striped" style="border-radius: 15px;border-collapse:collapse;overflow:hidden;">
      <thead style="background-color: #d2e1ec;">
        <tr>
          <th scope="col" width="5%"># </th>
          <th scope="col" width="25%">Nom </th>
          <th scope="col" width="25%">Prénom </th>
          <th scope="col" width="20%">Ville</th>
          <th scope="col" width="25%">Telephone</th>
        </tr>
      </thead>
      <tbody>
        <tr onmouseover="this.style='font-weight:bold;'" onmouseout="this.style='font-weight:normal;'" class=""
          :class="{ active: id == currentIndex }"
          v-for="(personne, id) in personnes"
          :key="id"
          @click="setActivePersonne(personne, id)">
          <th scope="row">{{ personne.id }}</th>
          <td>{{ personne.surname }}</td>
          <td>{{ personne.name }}</td>
          <td>{{ personne.city }}</td>
          <td>{{ personne.phone }}</td>
        </tr>
      </tbody>
    </table>
  
  <!--
  <ul>
    <li onmouseover="this.style='font-weight:bold;'" onmouseout="this.style='font-weight:normal';" class=""
      :class="{ active: id == currentIndex }"
      v-for="(personne, id) in personnes"
      :key="id"
      @click="setActivePersonne(personne, id)"
    >
      {{ personne.surname }} {{ personne.name }}
    </li>
  </ul>
  -->

  

</template>

<script>
import PersonneDataService from "../services/PersonneDataService";

export default {
  name: "personnes",
  data() {
    return {
      personnes: [],
      currentPersonne: null,
      currentIndex: -1,
    };
  },
  methods: {
    getPersonnes() {
      PersonneDataService.getAll()
        .then(response => {
          this.personnes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    setActivePersonne(personne, index) {
      this.currentPersonne = personne;
      this.currentIndex = personne ? index : -1;
    },
  },
  mounted() {
    this.getPersonnes();
  }
};
</script>
