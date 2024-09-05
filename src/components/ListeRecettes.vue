<template>
  <div>
    <h2>Liste des Recettes</h2>
    <ul class="list-group">
      <li v-for="recette in recettes" :key="recette.id" class="list-group-item d-flex justify-content-between align-items-center">
        <span>{{ recette.titre }}</span>
        <div>
          <button @click="modifier(recette.id)" class="btn btn-sm btn-warning mr-2">Modifier</button>
          <button @click="voirDetail(recette.id)" class="btn btn-sm btn-info">Détails</button>
          <router-link :to="`/supprimer/${recette.id}`" class="btn btn-danger btn-sm">Supprimer</router-link> <!-- Lien pour la suppression -->
        </div>
      </li>
    </ul>
    <p v-if="recettes.length === 0">Aucune recette disponible.</p>
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

const voirDetail = (id) => {
  router.push(`/detail/${id}`);
};
</script>
