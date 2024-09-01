<!-- src/components/ModifierRecette.vue -->
<template>
  <div>
    <h2>Modifier la Recette</h2>
    <form @submit.prevent="modifier">
      <input v-model="recette.titre" placeholder="Titre de la recette" class="form-control mb-2" required />
      <textarea v-model="recette.ingredients" placeholder="Ingrédients" class="form-control mb-2" required></textarea>
      <select v-model="recette.type" class="form-control mb-2" required>
        <option value="entrée">Entrée</option>
        <option value="plat">Plat</option>
        <option value="dessert">Dessert</option>
      </select>
      <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRecetteStore } from '../store/recetteStore';
import { useRouter, useRoute } from 'vue-router';

const recetteStore = useRecetteStore();
const router = useRouter();
const route = useRoute();

const recette = ref({ titre: '', ingredients: '', type: 'entrée' });

onMounted(() => {
  const recetteId = parseInt(route.params.id);
  const recetteExistante = recetteStore.obtenirRecetteParId(recetteId);
  if (recetteExistante) {
    recette.value = { ...recetteExistante };
  }
});

const modifier = () => {
  recetteStore.modifierRecette(recette.value.id, recette.value);
  router.push('/');
};
</script>
