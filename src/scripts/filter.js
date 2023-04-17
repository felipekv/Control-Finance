import { renderCards, removeValue } from "./render.js"

// export const filterEntries = (valuesData) => {

//     const entriesData = valuesData.filter(valuesData => Number(valuesData.categoryID) === 0)
//     return entriesData
// }

// export const filterExits = (valuesData) => {

//     const exitsData = valuesData.filter(valuesData => Number(valuesData.categoryID) === 1)
//     return exitsData
// }

export const filterEvents = (arrayData) => {
    const filterButtons = document.querySelectorAll(".filter__button")
    

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if(!button.classList.contains("filter__button--actived")){
                const buttonActived = document.querySelectorAll(".filter__button--actived")

                buttonActived.forEach(btn => {
                    btn.classList.remove("filter__button--actived")
                })

                button.classList.add("filter__button--actived")

                if(button.classList.contains("filter__button--entries")){
                    renderCards(arrayData.filter(arrayData => Number(arrayData.categoryID) === 0))
                    
                } else if(button.classList.contains("filter__button--exits")){
                    renderCards(arrayData.filter(arrayData => Number(arrayData.categoryID) === 1))
                    
                } else {
                    renderCards(arrayData)
                    
                }
            }
            
        })
    }
    
)}