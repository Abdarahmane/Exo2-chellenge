// src/stores/recetteStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useRecetteStore = defineStore('recetteStore', () => {
  const recettes = ref([]);

  const ajouterRecette = (recette) => {
    recette.id = Date.now();
    recettes.value.push(recette);
  };

  const modifierRecette = (id, updatedRecette) => {
    const index = recettes.value.findIndex(r => r.id === id);
    if (index !== -1) {
      recettes.value[index] = { ...recettes.value[index], ...updatedRecette };
    }
  };

  const supprimerRecette = (id) => {
    recettes.value = recettes.value.filter(recette => recette.id !== id);
  };

  const obtenirRecetteParId = (id) => {
    return recettes.value.find(recette => recette.id === id);
  };

  return { recettes, ajouterRecette, modifierRecette, supprimerRecette, obtenirRecetteParId };
});
