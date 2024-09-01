<!-- src/components/SupprimerRecette.vue -->
<template>
  <div>
    <h2>Supprimer la Recette</h2>
    <div v-if="recette">
      <p>Êtes-vous sûr de vouloir supprimer la recette suivante ?</p>
      <h3>{{ recette.titre }}</h3>
      <p><strong>Ingrédients :</strong> {{ recette.ingredients }}</p>
      <p><strong>Type :</strong> {{ recette.type }}</p>
      <div class="mt-3">
        <button @click="confirmerSuppression" class="btn btn-danger">Supprimer</button>
        <router-link to="/" class="btn btn-secondary ml-2">Annuler</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecetteStore } from '../store/recetteStore';
import { useRoute, useRouter } from 'vue-router';

const recetteStore = useRecetteStore();
const route = useRoute();
const router = useRouter();

const recette = ref(null);

onMounted(() => {
  const recetteId = parseInt(route.params.id);
  recette.value = recetteStore.obtenirRecetteParId(recetteId);
});

const confirmerSuppression = () => {
  if (recette.value) {
    recetteStore.supprimerRecette(recette.value.id);
    router.push('/');
  }
};
</script>
