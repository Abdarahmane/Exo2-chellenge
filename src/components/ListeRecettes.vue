<!-- src/components/ListeRecettes.vue -->
<template>
  <div>
    <h2>Liste des Recettes</h2>
    <ul class="list-group">
      <li v-for="recette in recettes" :key="recette.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ recette.titre }}</span>
        <div>
          <button @click="modifier(recette.id)" class="btn btn-sm btn-warning mr-2">Modifier</button>
          <button @click="supprimer(recette.id)" class="btn btn-sm btn-danger mr-2">Supprimer</button>
          <button @click="voirDetail(recette.id)" class="btn btn-sm btn-info">Détails</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRecetteStore } from '../store/recetteStore';
import { useRouter } from 'vue-router';

const recetteStore = useRecetteStore();
const router = useRouter();

const recettes = recetteStore.recettes;

const modifier = (id) => {
  router.push(`/modifier/${id}`);
};

const supprimer = (id) => {
  recetteStore.supprimerRecette(id);
};

const voirDetail = (id) => {
  router.push(`/detail/${id}`);
};
</script>
