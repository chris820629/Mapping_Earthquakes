# Mapping Earthquakes

This project focused on the application of web designing and visualization software, such as HTML-CSS-JavaScript, Leaflet, and Mapbox, and how I leveraged their useful functions for performing in-depth data analytics and visualizations.

## Table of Contents

- [Overview of Project](#overview-of-project)
  - [Resources](#resources)
- [Web Designing, Customization, and Analysis Results](#web-designing-customization-and-analysis-results)
  - [Deliverable 1: Add Tectonic Plate Data](#deliverable-1-add-tectonic-plate-data)
  - [Deliverable 2: Add Major Earthquake Data](#deliverable-2-add-major-earthquake-data)
  - [Deliverable 3: Add an Additional Map](#deliverable-3-add-an-additional-map)
- [Summary](#summary)
  - [Future Work](#future-work)
- [References](#references)

## Overview of Project

This project's objective focuses on web designing and data analysis through rigorous exercises for further understanding the concepts of integrating HyperText Markup Language (HTML), Cascading Style Sheet (CSS), JavaScript (JS), Leaflet (open source JS library for mobile-friendly interactive maps), and Mapbox (open source mapping libraries and applications) programs for building a dynamic and interactive webpage with optimized content, functionality, usability, and user experience. Using these knowledge and tools, I developed a webpage with in-depth analysis and visualized earthquake locations in relation to the Earth's tectonic plates. In addition, I added multiple overlay objects, and adding other map elements. 

### Resources

- Source code: [javascript](https://github.com/chris820629/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/js/challenge_logic.js), [html_file](https://github.com/chris820629/Mapping_Earthquakes/blob/main/Earthquake_Challenge/index.html)
- Source data: [USGS Past 7 Days All Earthquakes](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
- Image file: jpg/png files
- Technology: HTML, CSS, Javascript, Leafleat, Mapbox, Data-Driven Documents (D3)

## Web Designing, Customization, and Analysis Results

By using several web designing tools, such as HTML, CSS, JavaScript, Leaflet, Mapbox Maps, and Chrome DevTools, I designed and integrated maps for visualizing earthquakes that lets users explore the earthquake databases from U.S. Geological Survey (USGS)). The interface also includes user-friendly overlay selections, various map backgrounds, and map legend, good usability and user experience.

### Customization and Optimization

The detailed code of the visual customization can be referred in [javascript](https://github.com/chris820629/Mapping_Earthquakes/blob/main/Earthquake_Challenge/static/js/challenge_logic.js). Below are some features explained more in details.

- the marker customization functions are listed in below code function including size (radius), color, opacity, stroke and weight. for instance:

  ```
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  ```
  
- the sub-fuction: getColor matches the color based on the earthquake magnitude data as below\

  ```
  function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee0
  ```
