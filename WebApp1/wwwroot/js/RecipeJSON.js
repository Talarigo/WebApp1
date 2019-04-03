//------------------------------------------------------------
//.. JSON data....
var strRecipeJSON = 
    `{
        "RecipeID": 1,
            "Title": "Basic 1-2-3-4 Cake",
                "Description": "A delicious simple vanilla cake.",
                    "Cuisine": "cake",
                        "Tags": "vanilla, cake, simple, dessert",
                            "Source": "bakefromscratch.com",
                                "Author": "anonymous",
                                    "DateAdded": "03\/18\/2019",
                                        "CookTime": 75,
                                            "PrepTime": 15,
                                                "Yield": 12,
                                                    "SkillLevel": "Newborn Cook                                                                                        ",
                                                        "Ingredients": [{
                                                            "Ingredient": {
                                                                "IngredientId": 1,
                                                                "Ingredient": "1 cup unsalted butter, softened"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 2,
                                                                "Ingredient": "2 cups (370 grams) granulated sugar"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 3,
                                                                "Ingredient": "4 large eggs"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 4,
                                                                "Ingredient": "3 cups (300 grams) cake flour"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 5,
                                                                "Ingredient": "1 tablespoon (12 grams) baking powder"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 6,
                                                                "Ingredient": "1 cup milk"
                                                            }
                                                        }, {
                                                            "Ingredient": {
                                                                "IngredientId": 7,
                                                                "Ingredient": "2 teaspoons vanilla extract"
                                                            }
                                                        }],
                                                            "Steps": [{
                                                                "Step": {
                                                                    "StepId": 1,
                                                                    "StepNumber": 1,
                                                                    "Info": "Preheat oven to 350°. Grease and flour 2 (9-inch) round cake pans. "
                                                                }
                                                            }, {
                                                                "Step": {
                                                                    "StepId": 2,
                                                                    "StepNumber": 2,
                                                                    "Info": "In a large bowl, beat butter and sugar with a mixer at medium speed until fluffy, 3 to 4 minutes. Add eggs, one at a time, beating well after each addition."
                                                                }
                                                            }, {
                                                                "Step": {
                                                                    "StepId": 3,
                                                                    "StepNumber": 3,
                                                                    "Info": "In a medium bowl, stir together dry ingredients. Gradually add flour mixture to butter mixture alternately with milk, beginning and ending with flour mixture, beating just until combined after each addition. Stir in vanilla."
                                                                }
                                                            }, {
                                                                "Step": {
                                                                    "StepId": 4,
                                                                    "StepNumber": 4,
                                                                    "Info": "Pour batter into prepared pans (smoothing tops if necessary). Bake until a wooden pick inserted in center comes out clean, 28 to 30 minutes. Let cool in pans for 10 minutes. Remove from pans, and let cool completely on wire racks."
                                                                }
                                                            }]
    }`

var JSONRecipeObj = JSON.parse(strRecipeJSON);
var cuisine = JSONRecipeObj.Cuisine
