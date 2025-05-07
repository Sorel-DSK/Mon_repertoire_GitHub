
const btnAjouter=document.getElementById('btnAjouter')

    btnAjouter.addEventListener('click',()=>{
         //recuperer les elements
        const tache=document.getElementById('todo-input').value.trim()
        const list=document.getElementById('list')
        //verifier si le champ est vide ou pas
        if (!tache) {
          return;
        }else{
           
            // cree la tache et l'ajouter a la liste
            const li=document.createElement('li')
            li.textContent=tache
            list.appendChild(li)
              //reinstialiser l'input
            tache.value=" "
            //cree un btn supprimer
            const delBtn=document.createElement('button')
            delBtn.textContent="Supprimer"
            delBtn.classList.add('delbtnstyle')
            delBtn.addEventListener('click',()=>{
                list.removeChild(li)
            })
            li.appendChild(delBtn)
        }
    })

//les hebergeurs gratuits    
// hostinger
// netlifly
// vercel
// github page

//stockage des taches dans le local storage du navigateur
function ajoutTache() {
  let numTache=document.getElementById();
  let tache=document.getElementById();
    localStorage.setItem(numTache,tache)
}




