---
title: "Formulaire AJAX"
meta_title: ""
description: "this is meta description"
draft: false
---

<div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <div id="form" class="space-y-6">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
        </div>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
  <input
    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    id="form_ok" />
  <label
    class="inline-block pl-[0.15rem] hover:cursor-pointer"
    for="checkboxChecked">
    Formulaire valide
  </label>
</div>
      <div>
        <button id="btn-form" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Envoyer le formulaire</button>
      </div>
          <div id="status">
          <p id="valid" class="rounded-sm hidden text-slate-100 bg-green-700 px-3 py-3">Le formulaire a bien été envoyé.</p>
          <p id="invalid" class="rounded-sm hidden text-slate-100 bg-red-500 px-3 py-3">Le formulaire n'est pas valide. Cochez la checkbox pour envoyer un formulaire valide.</p>
            </div>
    </div>

  </div>
</div>

<script>
    document.querySelector("#btn-form").addEventListener("click", (e) => {
        let email = document.querySelector("input[name='email']").value;
        let passwd = document.querySelector("input[name='password']").value;
        let form_valid = document.querySelector("#form_ok").checked;
        const xhr = new XMLHttpRequest();
       
        if(form_valid == true) {
            xhr.open("POST", "http://localhost:3333/ajax-form-ok", {email: email, password: passwd});
        } else {
            xhr.open("POST", "http://localhost:3333/ajax-form-ko", {email: email, password: passwd});
        }
        xhr.responseType = "json";
        xhr.onload = () => {
            if (xhr.readyState === xhr.DONE) {
                if (xhr.status === 200) {
                    document.querySelector("#invalid").style.display = "none";
                    document.querySelector("#valid").style.display = "block";
                } else if(xhr.status === 401) {
                    document.querySelector("#valid").style.display = "none";
                    document.querySelector("#invalid").style.display = "block";
                }
            }
        };
        xhr.send();
    });
</script>