<template>
  <div class="app">
    <form>
      <h4>Создание поста</h4>
      <input
        v-bind:value="title"
        @input="inputTitle"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input v-bind:value="body" class="input" type="text" placeholder="Описание" />
      <button class="btn" @click="createPost">Создать</button>
    </form>
  </div>
</template>

<script></script>

<style></style>
