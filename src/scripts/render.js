import { insertedValues } from "./valuesData.js"
import { openModal } from "./modal.js"


export const renderCards = (arrayData) => {

    const valuesList = document.querySelector(".values__list")
    const allValuesSection = document.querySelector(".all-values__container")

    valuesList.innerHTML = ''

    if(arrayData.length > 0){
        arrayData.forEach(data => {
            const card = createCard(data)
    
            valuesList.appendChild(card)

            
        })
        
        allValuesSection.innerHTML = ''
        allValuesSection.appendChild(renderAllValues(arrayData))
        
        
    }else{
        allValuesSection.innerHTML = ''
        allValuesSection.appendChild(renderAllValuesVoid())
        valuesList.appendChild(renderValuesVoid())


    }
    removeValue(arrayData)
    openModal()
}

export const removeValue = (arrayData) => {
    const deleteButton = document.querySelectorAll(".delete-button")
    deleteButton.forEach(button => button.addEventListener("click", (event) => {
        const buttonId = event.target.dataset.valueId
        
        const findDataIndex = arrayData.findIndex(data => data.id === Number(buttonId))

        const removedData = arrayData.splice(findDataIndex, 1)
        renderCards(arrayData)
    }))
}

const createCard = (arrayData) => {

    const valuesUnit = document.createElement("li")
    const valuesValue = document.createElement("p")
    const valuesButtons = document.createElement("div")
    const typeValue = document.createElement("span")
    const deleteButton = document.createElement("button")
    const deleteImage = document.createElement("span")

    valuesUnit.classList.add("values__unit")
    valuesValue.classList.add("values__value")
    valuesButtons.classList.add("values__buttons")
    typeValue.classList.add("type-value")
    deleteButton.classList.add("delete-button")

    valuesValue.innerText = arrayData.value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    if(arrayData.categoryID === 0){
        typeValue.innerText = 'Entrada'
    }else {
        typeValue.innerText = 'Saída'
    }
    deleteImage.innerText = 'delete'
    deleteImage.classList.add('material-symbols-rounded')
    
    deleteImage.dataset.valueId = arrayData.id

    deleteButton.appendChild(deleteImage)
    valuesButtons.append(typeValue, deleteButton)
    valuesUnit.append(valuesValue, valuesButtons)
    

    return valuesUnit
}

const accValues = (arrayData) => {
    
    if (arrayData.length > 0){
        const valueTotal = arrayData.reduce((acc, actual)=>{
            return acc + Number(actual.value)
        }, 0)
        
        return valueTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })
    }
}

const renderAllValues = (arrayData) => {
    const allValuesDiv = document.createElement("div")
    const allValuesTitle = document.createElement("h2")
    const allValuesText = document.createElement("p")

    allValuesDiv.classList.add("all-values")
    allValuesTitle.classList.add("all-values__title")
    allValuesText.classList.add("all-values__values")

    allValuesTitle.innerText = 'Soma dos valores'
    allValuesText.innerText = accValues(arrayData)

    allValuesDiv.append(allValuesTitle, allValuesText)

    return allValuesDiv
}

const renderAllValuesVoid = () => {
    const allValuesDiv = document.createElement("div")
    const allValuesTitle = document.createElement("h2")
    const allValuesText = document.createElement("p")

    allValuesDiv.classList.add("all-values")
    allValuesTitle.classList.add("all-values__title")
    allValuesText.classList.add("all-values__values")

    allValuesTitle.innerText = 'Soma dos valores'
    allValuesText.innerText = 'R$ 0,00'

    allValuesDiv.append(allValuesTitle, allValuesText)

    return allValuesDiv
}

const renderValuesVoid = () => {
    const allValuesVoidDiv = document.createElement("button")
    const allValuesVoidTitle = document.createElement("h2")
    const allValuesVoidText = document.createElement("p")

    allValuesVoidDiv.classList.add("all-values-void")
    allValuesVoidDiv.classList.add("add-button")
    allValuesVoidTitle.classList.add("all-values__void-title")
    allValuesVoidText.classList.add("all-values__void-text")

    allValuesVoidTitle.innerText = 'Nenhum valor cadastrado'
    allValuesVoidText.innerText = 'Registrar novo valor'

    allValuesVoidDiv.append(allValuesVoidTitle, allValuesVoidText)

    return allValuesVoidDiv
}