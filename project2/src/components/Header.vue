<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">실무자조씨 Blog</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/list">List</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/detail">Detail</router-link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .navbar.navbar-expand-lg{
    padding: 10px 15px;
  }
  </style>