
// Service qui va faire du CRUD avec les livres

export const insererLivre = (titre, auteur, resume, estLu) => {

    // 1. Créer un objet javascript à partir des données saisies

    const livre = {
        titre : titre,
        auteur : auteur,
        resume : resume,
        estLu : estLu,

        //ID unique :
        id : crypto.randomUUID(),

        //Date :
        createdAt : new Date().toDateString()

    }


    // 2. Sérialiser (transformer en JSON (chaine de caractères)

    //const livreJson = JSON.stringify(livre)


    // 3. Sauvegarder dans le localStorage

        // 3.1 Récupérer dans le localStorage la valeur liée à la clé "livres"

    const livresJson = localStorage.getItem("livres")


        // 3.2 Désérialiser le JSON dans un tableau JavaScript

    const livres = livresJson ? JSON.parse(livresJson) : []


        // 3.3 Ajouter l'objet livre dans le tableau livres

    livres.push(livre)

        // 3.4 Sauvegarder le tableau livres dans le localStorage sous la clé "livres"

    localStorage.setItem("livres",JSON.stringify(livres))


}



export const rechercherTousLesLivres = () => {

    // Récupérer dans le localStorage la valeur liée à la clé "livres"

    const livresJson = localStorage.getItem("livres")


    // Désérialiser le JSON dans un tableau JavaScript

    const livres = livresJson ? JSON.parse(livresJson) : []

    return livres

}

























