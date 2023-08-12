---
title: "Erreur Javascript"
meta_title: ""
description: "this is meta description"
draft: false
---

<button class="rounded-md bg-red-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" id="erreur-js">Générer erreur Javascript</button>

<script>
    document.querySelector("#erreur-js").addEventListener("click", function() {
        throw new Error("Message d'erreur");
    });
</script>