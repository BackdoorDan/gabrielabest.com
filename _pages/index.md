---
permalink: /
layout: index
title: Homepage
description: Page desc here
featured_case_study:
   image_name: /assets/img/portfolio/featured-iconic
   image_extension: .jpg
   label: ICONIC DISC case study
   case_study_link: 
case_studies:
   -  label: Cubicflow Case Study
      case_study_link:
      image_path:

---

<header class="header header--dark">
<h1>Design. Web. Brand. UI/X.</h1>
   <span class="subheading">
      We are Cubicflow. We create brands and digital experiences.
   </span>
</header>

<main>
{% if page.featured_case_study.image_name %}
   <div class="featured-case-study">
   
      <img data-interchange="
         [{{page.featured_case_study.image_name}}{{page.featured_case_study.image_extension}}, small], 
         [{{page.featured_case_study.image_name}}{{site.med_prefix}}{{page.featured_case_study.image_extension}}, medium], 
         [{{page.featured_case_study.image_name}}{{site.large_prefix}}{{page.featured_case_study.image_extension}}, large]
      ">

      <div class="label">{{ page.featured_case_study.label}}</div>
   </div>
{% endif %}
</main>