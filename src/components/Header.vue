<template>
  <nav>
    <div class="nav-wrapper container">
      <router-link class="brand-logo" to="/">To do list</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="/list">List</router-link>
        </li>
        <li>
          <router-link to="/add">Add</router-link>
        </li>
        <li>
          <router-link to="/calendar">Calendar</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>