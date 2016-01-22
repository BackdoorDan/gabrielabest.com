---
permalink: /
layout: index
title: Homepage
description: Page desc here
featured_case_study:
  image_path: /assets/img/portfolio/featured-iconic.jpg
  label: ICONIC DISC case study
  case_study_link: ''
case_studies:
  - image_path: /assets/img/portfolio/cs-tfc.jpg
    label: THE FOOD CONCIERGE case study
    case_study_link: ''
  - image_path: /assets/img/portfolio/cs-halo.jpg
    label: HALO case study
    case_study_link: LINK HERE
snapshots:
  - thumbnail_path: /assets/img/portfolio/more/amiotek-mark.jpg
    fullsize_path: /assets/img/portfolio/more/fullsize/amiotek-mark.jpg
    name: Amiotek Logotype
  - thumbnail_path: /assets/img/portfolio/more/avectous-concept.jpg
    fullsize_path: /assets/img/portfolio/more/fullsize/avectous-concept.jpg
    name: Avectous Logo
  - thumbnail_path: /assets/img/portfolio/more/avectous-mark.jpg
    fullsize_path: /assets/img/portfolio/more/fullsize/avectous-mark.jpg
    name: Avectous Mark
---

<header class="header header--dark">
   <h1>Design. Web. Brand. UI/X.</h1>
   <span class="subheading">
      We are Cubicflow. We create brands and digital experiences.
   </span>
</header>

<main>


   {% if page.featured_case_study.image_path %}
   <div class="featured-case-study">
   
      <div class="featured-case-study__image cf-responsive" style="background-image: url({{page.featured_case_study.image_path}})">
      </div>

      <div class="case-study__label">{{ page.featured_case_study.label}}</div>
   </div>
   {% endif %}
   
   <div class="case-study-grid">
   {% for item in page.case_studies %}
      <a href="{{item.case_study_link}}" class="case-study cf-responsive" style="background-image: url({{item.image_path}})">
         <div class="case-study__label">{{ item.label}}</div>
      </a>
   {% endfor %}
   </div>
   
   
   
   
   
   <header class="header header--dark">
      <h1>Snapshots.</h1>
      <span class="subheading">
         Here's a few shapshots of our current projects to give you a good look at our visual style.
      </span>
   </header>
   
   <div class="shapshots-grid">
   {% for item in page.snapshots %}
      <a class="shapshots-grid__snapshot">
         <img src="{{item.thumbnail_path}}">
      </a>
   {% endfor %}
   </div>

</main>