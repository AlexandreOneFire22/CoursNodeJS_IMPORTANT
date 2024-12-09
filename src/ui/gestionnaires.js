// Gestionnaires d'événements

export const setupGestionnaires = () => {

    // Récuérer les éléments dans le DOM
    const  toggleFormBtn = document.querySelector("#toggleFormBtn")
    const formSection = document.querySelector("#formSection")
    const formCollapse = new bootstrap.Collapse(formSection, {toggle: false})
    const livreForm = document.querySelector("#bookForm")

    //gestionnaire clic bouton toggleFormBtn
    toggleFormBtn.addEventListener("click",() => {
        formCollapse.toggle()
    })

    //On reset le formulaire quand celui-ci est caché

    formSection.addEventListener("hidden.bs.collapse",() => {
        livreForm.reset()
    })

    // Traitement du formulaire

    livreForm.addEventListener("submit", (evt) => {

        // Empêcher le rechargement de la page
        evt.preventDefault()

        console.log(evt.target)
    })


}