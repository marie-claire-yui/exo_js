

// 0) créer un élément de type form  créer le input de type text et le mettre dans le form
// 1)créer un élément  input de type text (méthode poru créer un élément c'est create element)
// 2)insérer dans le body l'élement qu'on vient de créer poru qu'il apparaisse sur la page (= on injecte cet élément) grace à append
// 3) créer un élément paragraphe
// 4) refaire 2 même si n'affiche rien, visible dans l'inspecteur


// comportement naturel = capacité de faire un submit sans présence de bouton
let inputValue ="";  // déclaration de la variable et initialisation par du vide
let affichage = document.createElement("form"); // créer un élément form
let affichage1 = document.createElement("input"); // créer un élément input ...
affichage1.setAttribute("type","text"); // ... de type text
affichage.append(affichage1); // rentrer input dans form
document.body.append(affichage); // rentrer form dans body

affichage.addEventListener("submit", e => {
    e.preventDefault(); // permet d'empêcher le comportement naturel
    //   affichage2.append(affichage1.value);//récupérer la valeur rentrée dans l'input et le stocker dans la variable inputValue sur un évènement (soumission de formulaire submit, ou quand on rentre des données dans l'input input) et afficher cette valeur dans le paragraphe
    let affichage2 = document.createElement("p"); // on créer un nouveau paragraphe à chaque fois qu'on rentre une valeur dans l'input
    document.body.append(affichage2); // on rentre le paragraphe créer dans le body de l'html
 affichage2.innerHTML=affichage1.value; //on affiche dans le paragraphe la valeur de l'input
});

