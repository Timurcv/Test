<template>
    <div>
      <h1>Страница с постами</h1>
      <my-input
      v-model="searchQuery"
      placeholder="Поиск...."
      v-focus
      />
      <div class="app__btns">
        <my-button
      
      >
        Создать пост
      </my-button> 
      <my-select
      v-model="selectedSort"
      :options="sortOptions"
      />
      </div>
      <my-dialog v-model:show="dialogVisible">
   <post-form 
  
  
  />
      </my-dialog>
  
   <post-list 
      :posts="sortedAndSearchedPosts" 
      v-if="!isPostsLoading"
      >
  </post-list>
   <div v-else>Идет загрузка...</div>
   </div>
  </template>
  
  <script>
  import {ref} from 'vue'
  import PostForm from "@/components/PostForm.vue";
  import PostList from "@/components/PostList.vue";
  import MyDialog from "@/components/UI/MyDialog.vue";
  import MySelect from "@/components/UI/MySelect.vue";
  import axios from "axios";
  import MyButton from "@/components/UI/MyButton.vue";
  import MyInput from "@/components/UI/MyInput.vue";
  import useSortedPosts from '@/hooks/useSortedPosts';
  import { usePosts } from '@/hooks/usePosts';
  import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

  export default {
      components: {
      PostForm,
      PostList,
      MyDialog,
      MySelect,
      MyButton,
      MyInput,
      ref,
  },
    data() {
      return {
        dialogVisible: false,
        sortOptions: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
        ]
      }
    },
    setup(props) {
      const {posts, totalPages, isPostsLoading} = usePosts(10, 1);
      const {sortedPosts, selectedSort} = useSortedPosts(posts);
      const {searchQuery, } = useSortedAndSearchedPosts(sortedPosts)
     return {
      posts, 
      totalPages, 
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      // useSortedAndSearchedPosts,
     }
   }
}
  </script>
  
  <style>
  .app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
  .page__wrapper {
    display: flex;
    margin-top: 10px;
  }
  .page {
    border: 1px solid black;
    padding: 10px;
  }
  .current-page {
  border: 2px solid teal;
  }
  .obserser {
    height: 30px;
    background: green;
  }
  </style>
  