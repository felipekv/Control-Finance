/* Desenvolva sua lógica aqui */
import { typeChanger } from "./form.js"

export const openModal = () => {
    const addButton = document.querySelectorAll(".add-button")
    const modalTag = document.querySelector(".modal__container")
    addButton.forEach(button => button.addEventListener("click", () => {

        modalTag.classList.remove("modal__container--hiden")

    }))
    typeChanger()
    
    closeModal()
    
}

export const closeModal = () => {
    const closeModal = document.querySelectorAll(".close-modal")
    const modalTag = document.querySelector(".modal__container")
    closeModal.forEach(button => button.addEventListener("click", (event) => {
        event.preventDefault()

        modalTag.classList.add("modal__container--hiden")

    }))
}
