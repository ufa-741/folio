<template>
  <div class="app">
    <aside class="sidebar">
      <h1>Amoussou Ulrich</h1>
      <p class="job">Web Developer</p>
      <p>À propos de moi
      <br>
      <br>
      Du code, des idées, et l’envie de créer  c’est ce qui guide mon parcours en tant que développeur web.
      
      <br>
      <br> Pour transformer mes idées en projets concrets, avec des interfaces modernes et fonctionnelles.
      <br>
      <br>
      Passionné par le web, je suis toujours prêt à apprendre de nouvelles technologies pour coder et améliorer mes réalisations.
      </p>
      <!--
      <button class="cv-button">Télécharger CV</button>
      -->

      <div class="skills-list">
        <h2>Compétence</h2>
        <ul>
          <li><span class="badge">HT</span> HTML</li>
          <li><span class="badge">CS</span> CSS</li>
          <li><span class="badge">JS</span> JavaScript</li>
          <li><span class="badge">VUE</span> Vue.js</li>
        </ul>
      </div>

      <div class="skills-blocks">
        <h2>Logiciel</h2>
        <ul class="block-row">
          <li><span class="skill-block">VS Code</span></li>
          <li><span class="skill-block">GitHub</span></li>
          <li><span class="skill-block">Supabase</span></li>
        </ul>
      </div>
    </aside>

    <main class="main">
      <section class="banniere">
        <img :src="banniere" alt="Bannière" />
      </section>
 <section class="stats">
  <h2>Mes réalisations</h2>

<div class="stats-grid">


  <article class="stat-card">
    <div class="stat-icon accent">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
        <path d="M14 17l2.5 3 2.5-3"></path>
        <path d="M8 7h5M8 10h5"></path>
      </svg>
    </div>
    <div class="stat-value">2</div>
    <div class="stat-label">Certifications</div>
  </article>

  
  <article class="stat-card">
    <div class="stat-icon">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 9l-4 3 4 3"></path>
        <path d="M16 9l4 3-4 3"></path>
        <path d="M13 7l-2 10"></path>
      </svg>
    </div>
    <div class="stat-value">12</div>
    <div class="stat-label">Projets</div>
  </article>

</div>

</section>
<section class="home-grid">
  <div class="project-card">
    <h2>Mes Projets</h2>

    <div class="image-container">
      <img src="../assets/photo/laptop.png" alt="Aperçu du projet">
      <router-link to="/projects" class="btn btn-view overlay-btn">Voir</router-link>
    </div>

  </div>

  <div class="logo-card">
    <a href="https://github.com/ufa-741?tab=repositories" target="_blank">
      <img src="../assets/photo/github.png" alt="GitHub">
    </a>
  </div>
  

</section>




<section class="contact-card">
  <h2>Contact</h2>
  <a href="mailto:amoussouulrich@protonmail.com" class="email-btn">Email</a>
</section>

    </main>
  </div>
</template>



<script setup>
import banniere from '../assets/photo/banniere.png'

</script>
