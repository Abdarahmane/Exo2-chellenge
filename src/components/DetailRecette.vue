<!-- src/components/DetailRecette.vue -->
<template>
  <div>
    <h2>Détails de la Recette</h2>
    <div v-if="recette">
      <h3>{{ recette.titre }}</h3>
      <p><strong>Ingrédients :</strong></p>
      <p>{{ recette.ingredients }}</p>
      <p><strong>Type :</strong> {{ recette.type }}</p>
      <router-link to="/">Retour à la liste</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecetteStore } from '../store/recetteStore';
import { useRoute } from 'vue-router';

const recetteStore = useRecetteStore();
const route = useRoute();
const recette = ref(null);

onMounted(() => {
  const recetteId = parseInt(route.params.id);
  recette.value = recetteStore.obtenirRecetteParId(recetteId);
});
</script>
