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
   -  image_name: /assets/img/portfolio/cs-tfc
      image_extension: .jpg
      label: THE FOOD CONCIERGE case study
      case_study_link: 
   -  image_name: /assets/img/portfolio/cs-halo
      image_extension: .jpg
      label: HALO case study
      case_study_link: LINK HERE

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
   
      <div class="featured-case-study__image" data-interchange="
         [{{page.featured_case_study.image_name}}{{page.featured_case_study.image_extension}}, small], 
         [{{page.featured_case_study.image_name}}{{site.med_prefix}}{{page.featured_case_study.image_extension}}, medium], 
         [{{page.featured_case_study.image_name}}{{site.large_prefix}}{{page.featured_case_study.image_extension}}, large]
      ">
      </div>

      <div class="case-study__label">{{ page.featured_case_study.label}}</div>
   </div>
   {% endif %}
   
   <div class="case-study-grid">
   {% for item in page.case_studies %}
      <a href="{{item.case_study_link}}" class="case-study" data-interchange="
         [{{item.image_name}}{{item.image_extension}}, small], 
         [{{item.image_name}}{{site.med_prefix}}{{item.image_extension}}, medium], 
         [{{item.image_name}}{{site.large_prefix}}{{item.image_extension}}, large]">
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

</main>