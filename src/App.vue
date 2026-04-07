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
      <h1> About Me </h1>

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

<style scoped>
h1 {
  padding: 1rem 1.5rem;
  margin: 1rem 1.5rem;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-section {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
