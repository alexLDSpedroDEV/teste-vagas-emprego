<template>
    <div>
      <h2>CRUD de Itens</h2>
      <form @submit.prevent="addItem">
        <input type="text" v-model="newItem" placeholder="Novo item" required>
        <button type="submit">Adicionar</button>
      </form>
  
      <ul>
        <li v-for="(item, index) in items" :key="index">
          {{ item }}
          <button @click="deleteItem(index)">Excluir</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newItem: '',
        items: []
      };
    },
    methods: {
      addItem() {
        if (this.newItem.trim() !== '') {
          this.items.push(this.newItem.trim());
          this.newItem = '';
        }
      },
      deleteItem(index) {
        this.items.splice(index, 1);
      }
    }
  };
  </script>