// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ListeRecettes from '../components/ListeRecettes.vue';
import AjouterRecette from '../components/AjouterRecette.vue';
import ModifierRecette from '../components/ModifierRecette.vue';
import DetailRecette from '../components/DetailRecette.vue';
import SupprimerRecette from '../components/SupprimerRecette.vue';


const routes = [
  { path: '/', component: ListeRecettes },
  { path: '/ajouter', component: AjouterRecette },
  { path: '/modifier/:id', component: ModifierRecette },
  { path: '/detail/:id', component: DetailRecette },
  { path: '/supprimer/:id', component: SupprimerRecette },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
