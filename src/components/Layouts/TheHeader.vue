<template>
  <header>
    <nav>
      <h1><router-link to="/">Dev Finder</router-link></h1>
      <ul>
        <li><router-link to="/developers">All Devs</router-link></li>
        <li><router-link to="/requests">Requests Received</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  align-items: center;
  background-color: #00658d;
  display: flex;
  height: 4.5rem;
  justify-content: center;
  width: 100%;
}

header a {
  color: #c7e8ec;
  display: inline-block;
  padding: 0.75rem 1.2rem;
  border: 1px solid transparent;
  text-decoration: none;
}

a:active,
a:hover,
a.router-link-active {
  border-radius: 0.2rem;
  border-bottom: 1px solid #faf5d7;
  color: #fff;
  padding: 0.5rem 0.75rem;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
