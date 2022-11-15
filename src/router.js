import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/personnes",
    name: "personnes",
    component: () => import("./components/Personnes")
  },
  {
    path: "/personnes/:id",
    name: "personne-details",
    component: () => import("./components/Personne")
  },
  {
    path: "/ajouter-personne",
    name: "ajouterPersonne",
    component: () => import("./components/AddPersonne")
  },
  {
    path: "/modifier-personne",
    name: "modifierPersonne",
    component: () => import("./components/modifierPersonne")
  },
  {
    path: "/supprimer-personne",
    name: "supprimerPersonne",
    component: () => import("./components/supprimerPersonne")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;