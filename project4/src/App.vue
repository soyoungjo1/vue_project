<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  name: 'App',
  
  components: {
    TodoHeader : TodoHeader,
    TodoInput : TodoInput,
    TodoList : TodoList,
    TodoFooter : TodoFooter,
  }
}
</script>

<style>
@import './style.css';

body{
  text-align:center;
  background-color : #f6f6f6;
}

input {
  border-style : groove;
  width:200px;
}

button{
  border-style : groove;
}

.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
