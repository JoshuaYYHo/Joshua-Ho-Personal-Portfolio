<script setup lang="ts">
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import ProjectCard from './components/ProjectCard.vue';

// JSON for the My Work section

</script>

<template>
  <NavBar />

  <main>

    <section id="home">
      <h1> Joshua Ho </h1>
      <p> Hello, my name is Joshua and I currently live in the Bay Area developing software for the government. </p>

      <div class="professional-links">
        <a target="_blank" href="https://github.com/JoshuaYYHo"> Github </a>
        <a target="_blank" href="https://www.linkedin.com/in/joshuayyho/"> LinkedIn </a>
        <a href="mailto:joshua.yuyaw.ho@gmail.com"> Email </a>

      </div>

    </section>

    <section id="work">
      <h1> My Work </h1>
      <div class="card-section">
        <ProjectCard header="Example Title" description="Example Description" />

      </div>
      
    </section>

    <section id="contact">
      <h1> Contact Me </h1>
    </section>


  </main>

  <Footer />
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
h1 {
  padding: 1rem 1.5rem;
  margin: 1rem 1.5rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 1rem 1.5rem;
}

.card-section {
  display: flex;
  justify-content: center;
  width: 100%;
}

.professional-links {
  display: flex;
  justify-content: center;
}

.professional-links a {
  text-decoration: none;
  color: #F5E9DA;
  margin: 1rem 1.5rem;
  padding: 1rem 1.5rem;
}

.professional-links a:hover {
  text-decoration: none;
}
</style>
