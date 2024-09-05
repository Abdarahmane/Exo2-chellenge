// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import ListeRecettes from '../components/ListeRecettes.vue';
import AjouterRecette from '../components/AjouterRecette.vue';
import ModifierRecette from '../components/ModifierRecette.vue';
import DetailRecette from '../components/DetailRecette.vue';
import SupprimerRecette from '../components/SupprimerRecette.vue'; // Importer le nouveau composant

const routes = [
  { path: '/', component: ListeRecettes },
  { path: '/ajouter', component: AjouterRecette },
  { path: '/modifier/:id', component: ModifierRecette, props: true },
  { path: '/detail/:id', component: DetailRecette, props: true },
  { path: '/supprimer/:id', component: SupprimerRecette, props: true }, // Nouvelle route pour la suppression
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
