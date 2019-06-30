(() => {
    // ~~ PARTIE 1 ~~
    // déclaration de variable avec le contenu "Hello world"
    let uneVariable = "hello world";

    // déclara de constante
    const pasBouger = "Bouh";

    // déclaration d'un tableau de fruits : pomme, banane, poire
    let fruits = ["pomme", "banane", "poire"];

    // avec une alerte(ou dans la console) affiche le 2eme element du tableaus (banane)
    console.log(fruits[1]);

    // Les tableaux
    // à la liste(tableau) de fruits rajoute "kiwi"
    fruits.push("kiwi");

    // à la liste(tableau) de fruits trouve l'index de "poire"
    console.log("L'index de poire est : " + fruits.indexOf("poire"));

    // à la liste(tableau) de fruits regarde s'il y a "abrico"
    if(fruits.includes("abrico")){
        console.log("oui il y a l'abrico");
    }else{
        console.log("Non, il n'y a pas d'abrico");
    }

    // avec un boucle FOR affiche tout les élément dans la console
    console.log("Tableau fruit avec boucle FOR : ");
        /* votre boucle ici */
        for(let i = 0; i < fruits.length; i++){
            console.log(fruits[i]);
        }
    
    // avec un boucle FOREACH affiche tout les élément dans la console
        console.log("Tableau fruit avec boucle FOREACH : ");
        /* votre boucle ici */
        fruits.forEach(element => {
            console.log(element);
        });
    
    // demander à l'utilisateur d'entrer son age (avec prompt) et affichez le dans la console ou via une alert
    let ageUser = parseFloat(prompt("Quel est votre age ?"));
    console.log(ageUser);
    // écrit une condition qui vérfie si l'âge de l'utilisateur est plus grand que 18 (n'oubies pas le parseFloat)
        // si c'est le cas affiche "+18"
        // si c'est moins que 18 affiche "-18"
        // si c'est égale à 18 affiche ""=18"
        if(ageUser > 18){
            alert("+18");
        }else if (ageUser < 18){
            alert("-18")
        }else if(ageUser === 18){
            alert("=18");
        }

    // avec une boucle WHILE demandes lui s'il râle et tant qu'il ne dit pas "oui", re-demande lui. (tu peux aussi te rensigner sur la boucle do...while)
    let rep = "";
    do{
        rep = prompt("Est-ce que tu râles ?");
        rep = rep.toLocaleLowerCase();
    }while(rep != "oui");

    // ~~ PARTIE 2 ~~
    // 1.1 Récuperes le text "J'aime les cacaouette paprika" dans via son ID (id = traget1) - document.getElementById("id").innerText
    console.log(document.getElementById("target1").innerText);

    // 1.2 Modifie la phrase juste avant par autre chose va innerText ou innerHtml ou textContent (id = traget1)
    document.getElementById("target1").innerText = "J'aime les citrouilles"

    // 2 Rajoute l'évement click au bonton (id = buttonAlert) et affiche une alerte lorsque l'on click dessus !
    document.getElementById("buttonAlert").addEventListener("click", () => {
        alert("Ouuuuuui !");
    });

    // 3.1 au clic sur le bouton (id = buttonInput), récupere le contenu de l'input (id = inputT)
    document.getElementById("buttonInput").addEventListener("click", () => {
        let valuePseudo = document.getElementById("inputT").value;
        alert(valuePseudo);
    })

    //3.2 modifier le tagert (id = targetInputLength) pour qu'il affiche le nombre de caractère que possède l'input
        //(le changement doit se faire en temps réel et non juste quand on clic sur le bouton)
        document.getElementById("inputT").addEventListener("input", () => {
            document.getElementById("targetInputLength").innerText = document.getElementById("inputT").value.length;
        });

    // ~~ BONUS ~~
    // rajoutes un bouton dans l'html et au clic créer un genre de dark theme et light theme !
        let theme = "light";
        document.getElementById("darkTheme").addEventListener("click", () => {
            if(theme === "light"){
                document.body.style.color = "white";
                document.body.style.backgroundColor = "black";
                theme = "dark";
                document.getElementById("darkTheme").innerText = "Light";
            }else{
                document.body.style.color = "black";
                document.body.style.backgroundColor = "white";
                theme = "light";
                document.getElementById("darkTheme").innerText = "Dark";
            }
        })

    
    // ~~ PARTIE 3 ~~
    // 1.1 Réecrit dans le code la fonction <code>getRandomInt</code>
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    // 1.2 appele là une fois avec un min de 1 et un max de 3 et une autre fois avec un min de 0 et un max de 101
    //affiche le résultat dans la console sous ce format : "Random min à max : x" (en remplace min par le minimum, max par le maximum et x par le nombre aléatoire).
    console.log(`Random ${1} à ${3} : ${getRandomInt(1, 3)}`);
    console.log(`Random ${0} à ${101} : ${getRandomInt(0, 101)}`);


    // 2 Créer une fonction pour calculer le périmètre d'un carré, et son aire
    function perimetre(longeur, largeur){
        return (longeur + largeur) * 2;
    }

    function aire(longeur, largeur){
        return longeur * largeur;
    }

    // ~~ PARTIE 4 ~~
    // 1.1 créer un objet nommé chat avec les propriétés nom et couleur.
    let chat = {
        nom : "Pixel",
        couleur : "roux"
    }

    // 1.2 affiche dans la console le nom du chat et sa couleur sous cette forme "Mon chat NOM est de couleur COULEUR" (remplaces NOM par le nom du chat et COULEUR par sa couleur)
    console.log(`Mon chat ${chat.nom} est de couleur ${chat.couleur}`);

    // 2.1 créer une class Personne qui possèdera le nom et prénom
    class Personne{
        constructor(nom, prenom){
            this.nom = nom;
            this.prenom = prenom;
        }
    }

    // 2.2 créer une liste dans laquelle tu ajouteras une nouvelle personne à chaque fois que quelqu'un clic sur le bouton (id = personneClass)
        // /!\ ne créer pas une personne si les 2 champs sont vides
    let personTab = [];
    document.getElementById("personneClass").addEventListener("click", () => {
        let prenom = document.getElementById("prenomClass").value;
        let nom = document.getElementById("nomClass").value;
        if(prenom != "" && nom != ""){
            personTab.push(new Personne(nom, prenom));
            console.log(personTab);
        }
    });
        


})()