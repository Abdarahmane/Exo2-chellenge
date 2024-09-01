<!-- src/components/AjouterRecette.vue -->
<template>
  <div>
    <h2>Ajouter une Recette</h2>
    <form @submit.prevent="ajouter">
      <input v-model="titre" placeholder="Titre de la recette" class="form-control mb-2" required />
      <textarea v-model="ingredients" placeholder="Ingrédients" class="form-control mb-2" required></textarea>
      <select v-model="type" class="form-control mb-2" required>
        <option value="entrée">Entrée</option>
        <option value="plat">Plat</option>
        <option value="dessert">Dessert</option>
      </select>
      <button type="submit" class="btn btn-primary">Ajouter</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRecetteStore } from '../store/recetteStore';
import { useRouter } from 'vue-router';

const recetteStore = useRecetteStore();
const router = useRouter();

const titre = ref('');
const ingredients = ref('');
const type = ref('entrée');

const ajouter = () => {
  recetteStore.ajouterRecette({ titre: titre.value, ingredients: ingredients.value, type: type.value });
  router.push('/');
};
</script>
