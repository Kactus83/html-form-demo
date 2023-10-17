document.addEventListener("DOMContentLoaded", function() {
    var header = document.createElement("header");

    var svgCode = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="auto" height="100%" viewBox="0 0 300 300" class="svg-logo">

    <title>SVG Logo</title>
    <desc>Designed for the SVG Logo Contest in 2006 by Harvey Rayner, and adopted by W3C in 2009. It is available under the Creative Commons license for those who have an SVG product or who are using SVG on their site.</desc>
   
     <metadata id="license">
       <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://web.resource.org/cc/">
         <cc:Work rdf:about="">
           <dc:title>SVG Logo</dc:title>
           <dc:date>14-08-2009</dc:date>
           <dc:creator>
             <cc:Agent><dc:title>W3C</dc:title></cc:Agent>
             <cc:Agent><dc:title>Harvey Rayner, designer</dc:title></cc:Agent>
           </dc:creator>
           <dc:description>See document description</dc:description>
           <cc:license rdf:resource="http://creativecommons.org/licenses/by-nc-sa/2.5/"/>
           <dc:format>image/svg+xml</dc:format>
           <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
         </cc:Work>
         <cc:License rdf:about="http://creativecommons.org/licenses/by-nc-sa/2.5/">
           <cc:permits rdf:resource="http://web.resource.org/cc/Reproduction"/>
           <cc:permits rdf:resource="http://web.resource.org/cc/Distribution"/>
           <cc:requires rdf:resource="http://web.resource.org/cc/Notice"/>
           <cc:requires rdf:resource="http://web.resource.org/cc/Attribution"/>
           <cc:prohibits rdf:resource="http://web.resource.org/cc/CommercialUse"/>
           <cc:permits rdf:resource="http://web.resource.org/cc/DerivativeWorks"/>
           <cc:requires rdf:resource="http://web.resource.org/cc/ShareAlike"/>
         </cc:License>
       </rdf:RDF>
     </metadata>
     
  
     <defs>
       <g id="SVG" class="path-svg" transform="scale(2) translate(20,79)">
          <path id="S" d="M 5.482,31.319 C2.163,28.001 0.109,23.419 0.109,18.358 C0.109,8.232 8.322,0.024 18.443,0.024 C28.569,0.024 36.782,8.232 36.782,18.358 L26.042,18.358 C26.042,14.164 22.638,10.765 18.443,10.765 C14.249,10.765 10.850,14.164 10.850,18.358 C10.850,20.453 11.701,22.351 13.070,23.721 L13.075,23.721 C14.450,25.101 15.595,25.500 18.443,25.952 L18.443,25.952 C23.509,26.479 28.091,28.006 31.409,31.324 L31.409,31.324 C34.728,34.643 36.782,39.225 36.782,44.286 C36.782,54.412 28.569,62.625 18.443,62.625 C8.322,62.625 0.109,54.412 0.109,44.286 L10.850,44.286 C10.850,48.480 14.249,51.884 18.443,51.884 C22.638,51.884 26.042,48.480 26.042,44.286 C26.042,42.191 25.191,40.298 23.821,38.923 L23.816,38.923 C22.441,37.548 20.468,37.074 18.443,36.697 L18.443,36.692 C13.533,35.939 8.800,34.638 5.482,31.319 L5.482,31.319 L5.482,31.319 Z"/>
  
          <path id="V" d="M 73.452,0.024 L60.482,62.625 L49.742,62.625 L36.782,0.024 L47.522,0.024 L55.122,36.687 L62.712,0.024 L73.452,0.024 Z"/>
  
          <path id="G" d="M 91.792,25.952 L110.126,25.952 L110.126,44.286 L110.131,44.286 C110.131,54.413 101.918,62.626 91.792,62.626 C81.665,62.626 73.458,54.413 73.458,44.286 L73.458,44.286 L73.458,18.359 L73.453,18.359 C73.453,8.233 81.665,0.025 91.792,0.025 C101.913,0.025 110.126,8.233 110.126,18.359 L99.385,18.359 C99.385,14.169 95.981,10.765 91.792,10.765 C87.597,10.765 84.198,14.169 84.198,18.359 L84.198,44.286 L84.198,44.286 C84.198,48.481 87.597,51.880 91.792,51.880 C95.981,51.880 99.380,48.481 99.385,44.291 L99.385,44.286 L99.385,36.698 L91.792,36.698 L91.792,25.952 L91.792,25.952 Z"/>
        </g>
     </defs>
  
     <path id="base" class="path-base" d="M8.5,150 H291.5 V250 C291.5,273.5 273.5,291.5 250,291.5 H50 C26.5,291.5 8.5,273.5 8.5,250 Z"/>
     <g stroke-width="38.0086" class="path-star-stroke">
       <g id="svgstar" transform="translate(150, 150)">
         <path id="svgbar" class="path-star" d="M-84.1487,-15.8513 a22.4171,22.4171 0 1 0 0,31.7026 h168.2974 a22.4171,22.4171 0 1 0 0,-31.7026 Z"/>
         <use xlink:href="#svgbar" transform="rotate(45)"/>
         <use xlink:href="#svgbar" transform="rotate(90)"/>
         <use xlink:href="#svgbar" transform="rotate(135)"/>
       </g>
     </g>
     <use xlink:href="#svgstar"/>
     <use xlink:href="#base" opacity="0.85"/>
     <use xlink:href="#SVG"/>
  
  </svg>`;

    header.innerHTML += svgCode;

    document.getElementById("header").appendChild(header);
});
