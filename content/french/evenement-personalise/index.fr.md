---
title: "Événement personnalisé"
meta_title: ""
description: "this is meta description"
draft: false
---


<div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <div id="form" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Nom de l'événement</label>
        <div class="mt-2">
          <input id="event" name="event" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <button id="btn-form" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer l'événement dans la dataLayer</button>
      </div>
          <div id="status">
            <p id="valid" class="rounded-sm hidden text-slate-100 bg-green-700 px-3 py-3">L'événement a bien été envoyé.</p>
          </div>
    </div>

  </div>
</div>

<script>
    document.querySelector("#btn-form").addEventListener("click", (e) => {
        let evenement = document.querySelector("input[name='event']").value;
        if(evenement.length > 0) {
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                event: evenement
            });
            document.querySelector("#valid").style.display = "block";
        }
    });
</script>