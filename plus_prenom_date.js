let regex=/^(([a-zèéê]+)?(\-|')?(\s+)?([a-zèéê]+?)(\s+)?)+$/gi
function valide_nom()
{ 
   let nom = document.querySelector("#nom").value;
   let nomInput = document.querySelector("#nom");
  
   if(nom.match(regex))
     { 
    nomInput.style.borderColor="green"; document.getElementById('valide1').innerHTML="Nom valide";
     }
   else 
       {
    nomInput.style.borderColor="red"; 
    document.getElementById('erreur1').innerHTML="Nom invalide";
       } 


 let prenom = document.querySelector("#prenom").value;
   let preInput = document.querySelector("#prenom");

       if(prenom.match(regex))
     { 
    preInput.style.borderColor="green"; document.getElementById('valide2').innerHTML="Prénom valide <br> ";
     }
   else 
       {
    preInput.style.borderColor="red"; 
    document.getElementById('erreur2').innerHTML="Prénom invalide <br> ";
       } 
}

function vider()
{
    document.getElementById('erreur1').innerHTML="";
    document.getElementById('valide1').innerHTML="";
    document.getElementById('erreur2').innerHTML="";
    document.getElementById('valide2').innerHTML="";
}


function ajouter()
{
    let div = document.getElementById("test");
//ajout du label  
    let label_prenom=document.createElement("label");
    label_prenom.setAttribute("id","label");
    label_prenom.setAttribute("class","col-sm-2 col-form-label");
    div.appendChild(label_prenom);
 document.getElementById('label').innerHTML =' Prénom:'; 
//ajout du champ 
 let prenom=document.createElement("input");
    prenom.setAttribute("type","text");
    prenom.setAttribute("id","prenom");
    prenom.setAttribute("class","form-control");
    prenom.setAttribute("onclick","vider()");
    div.appendChild(prenom);

// ajout place message
   //message valide
 let valide=document.createElement("span");
    
    valide.setAttribute("id","valide2");
    valide.setAttribute("class","alert-success" );
    div.appendChild(valide);
      //message erreur
 let err=document.createElement("span"); 
    err.setAttribute("id","erreur2");
    err.setAttribute("class","alert-danger" );
    div.appendChild(err);


//changemant valeur et comportement du bouton ajouter 
 
 document.getElementById('ajout').innerHTML ='<input type="submit" class="btn btn-secondary" onclick="ajouter1()" value="Ajouter date naissance" id="btn">';


 } 
function ajouter1()
{
    let div = document.getElementById("test");

//ajout du label  
    let label_date=document.createElement("label");
    label_date.setAttribute("id","date");
    label_date.setAttribute("class","col-sm-2 col-form-label");
    div.appendChild(label_date);
 document.getElementById('date').innerHTML =' Date naissance :'; 
//ajout du champ 
 let date=document.createElement("input");
    date.setAttribute("type","date");
    date.setAttribute("class","form-control");
    date.setAttribute("onclick","vider()");
    div.appendChild(date);
//supprression bouton d'ajout DOM
document.getElementById('ajout').innerHTML =''; 
}





