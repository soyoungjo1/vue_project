<template>
    <div>
     <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        {{ todoItem }}
        <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
          <i class="fas fa-trash"></i>
        </span>
      </li>
     </ul>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return{
        todoItems:[],
      }
    },

    created : function(){
      if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
          this.todoItems.push(localStorage.key(i));
        }
      }
    },
    methods : {
      removeTodo : function(todoItem, index){
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      }
    }
  }
  </script>
  
  <style scoped>
  ul{
    list-style:none;
    padding-left:0;
    margin-top:0;
    text-align:left;
  }
  li{
    display:flex;
    min-height:50px;
    height:50px;
    line-height:50px;
    margin:0.5rem 0;
    padding:0 0.9rem;
    background:#fff;
    border-radius: 5px;
  }
  .checkBox{
    line-height:45px;
    color:#62acde;
    margin-right:5px;
  }
  .checkBoxCompleted{
    color:#b3adad;
  }
  .textCompleted{
    text-decoration: line-through;
    color:#b3adad;
  }
  .removeBtn{
    margin-left:auto;
    color:red;
  }
  </style>