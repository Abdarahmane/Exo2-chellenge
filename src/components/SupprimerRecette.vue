<template>
  <div>
    <h2>Supprimer la Recette</h2>
    <p>Êtes-vous sûr de vouloir supprimer la recette <strong>{{ recette?.titre }}</strong> ?</p>
    <button @click="confirmerSuppression" class="btn btn-danger">Confirmer</button>
    <router-link to="/"><button class="btn btn-secondary">Annuler</button></router-link>
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
  const recetteId = parseInt(route.params.id); // Récupère l'ID de la recette depuis les paramètres de la route
  recette.value = recetteStore.obtenirRecetteParId(recetteId); // Récupère la recette correspondante depuis le store
});

const confirmerSuppression = () => {
  recetteStore.supprimerRecette(recette.value.id); // Supprime la recette du store
  router.push('/'); // Retourne à la liste des recettes
};
</script>
