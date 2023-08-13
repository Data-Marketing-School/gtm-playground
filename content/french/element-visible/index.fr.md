---
title: "Visibilité de l'élément"
meta_title: ""
description: "this is meta description"
draft: false
---

<button id="toggle-cta" class="mx-auto rounded-md bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" id="toggle_rectangle">Faire apparaître l'élément</button>

<div id="rectangle" style="margin:auto; display:none; width:80%; height:3000px;background-color:red;"></div>
<script>
    document.querySelector("#toggle-cta").addEventListener("click", function() {
        document.querySelector("#rectangle").style.display == "block" ? document.querySelector("#rectangle").style.display = "none" : document.querySelector("#rectangle").style.display = "block";
        document.querySelector("#rectangle").style.display == "block" ? document.querySelector("#toggle-cta").innerText = "Faire disparaître l'élément" : document.querySelector("#toggle-cta").innerText = "Faire apparaître l'élément";
    });
</script>