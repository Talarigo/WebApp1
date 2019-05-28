// JavaScript source code
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

class Ingredients
{
    constructor(ingredients)
    {
        this.ingredients = ingredients;
        this.currentIngredientIndex = 0;
        this.TotalIngredients = this.ingredients.length;

        //.. this.initSpeech();
    }

    initSpeech()
    {

    }
}