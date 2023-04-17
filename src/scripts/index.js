/* Desenvolva sua lógica aqui */
import { renderCards } from "./render.js";
import { insertedValues, valuesCategory } from "./valuesData.js";
import { filterEvents } from "./filter.js";
import { registerValue } from "./form.js";




renderCards(insertedValues)
registerValue(insertedValues)
filterEvents(insertedValues)

