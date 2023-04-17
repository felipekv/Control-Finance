import { closeModal } from "./modal.js";
import { renderCards } from "./render.js";

export const registerValue = (arrayData) => {
    const formInput = document.querySelector(".number-input");
    const submitButton = document.querySelector(".submit-button");


    let newValue = {};

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
    
        newValue.id = arrayData.length + 1;
        newValue.value = Number(formInput.value)
        const categoryButtonActived = document.querySelector(".label--actived")
        newValue.categoryID = Number(categoryButtonActived.id)
        arrayData.push(newValue);
        newValue = {};
        
        formInput.value = ''
        renderCards(arrayData.reverse());
        closeModal()
    });
  };

export const typeChanger = () => {
    const typeButtons = document.querySelectorAll(".radio-label")

    typeButtons.forEach(button => button.addEventListener("click", (event) => {
        event.preventDefault()
        if(!button.classList.contains("label--actived")){
            const actived = document.querySelector(".label--actived")
            actived.classList.remove("label--actived")
            button.classList.add("label--actived")
        }
    }))

}