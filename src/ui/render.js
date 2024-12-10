
// Rendu des livres

import {rechercherTousLesLivres} from "../services/livreService.js";

export const afficherLivres = () => {

    //Récupérer la div avec l'id "booksList"

    const ListeLivres = document.querySelector("#booksList")

    // Récupérer la liste des livres dans le localStorage (sous la forme d'un tableau)

    const livres = rechercherTousLesLivres()

    //afficher chaque livre sous la forme d'une card

        ListeLivres.insertAdjacentHTML("afterbegin", "<div className = 'card' style = 'width: 18rem;'>" +
            "< div className = 'card-body' >"
        < h5 className = 'card-title' > {livres.title} < /h5>
        <p className='card-text'> {livres.resume}</p>
        <a href="#" className='btn btn-primary'>Go somewhere</a>
</div>
</div>")


}