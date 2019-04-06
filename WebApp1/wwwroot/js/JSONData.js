//------------------------------------------------------------
//.. JSON data....
var strFunctionJSON =
    `{
        "CommandRules":
            {
            "CommandRule":
            [
                {
                    "CommandTableId": 0,
                    "Context": "Home",
                    "Command": "help",
                    "Function": "onRecipeHelp",
                    "Prompt": "Recipe Help. You can say. Start. Stop. Name. OR. Description"
                }, {
                    "CommandTableId": 1,
                    "Context": "Home",
                    "Command": "start",
                    "Function": "onStartRecipe",
                    "Prompt": "Shall we start cooking?"
                }, {
                    "CommandTableId": 2,
                    "Context": "Home",
                    "Command": "name",
                    "Function": "onAnnounceTitle"
                    ,"Prompt":"Recipe Title"
                }, {
                    "CommandTableId": 3,
                    "Context": "Home",
                    "Command": "title",
                    "Function": "onAnnounceTitle"
                    ,"Prompt":"Recipe Title"
                }, {
                    "CommandTableId": 4,
                    "Context": "Home",
                    "Command": "description",
                    "Function": "onAnnounceDescription"
                    ,"Prompt":"Recipe Description"
                }, {
                    "CommandTableId": 5,
                    "Context": "Home",
                    "Command": "ingredients",
                    "Function": "onListIngredients"
                    ,"Prompt":"Lets go over the ingredients needed."
                }, {
                    "CommandTableId": 6,
                    "Context": "Home",
                    "Command": "tools",
                    "Function": "onListToolsNeeded"
                    ,"Prompt":"Let's go over the tools needed"
                }, {
                    "CommandTableId": 7,
                    "Context": "Home",
                    "Command": "list steps",
                    "Function": "onListAllSteps"
                    ,"Prompt":"Here are the steps involved"
                }, {
                    "CommandTableId": 8,
                    "Context": "Home",
                    "Command": "add comment",
                    "Function": "onAddComment"
                    ,"Prompt": "Please state your comment to add..."
                }, {
                    "CommandTableId": 9,
                    "Context": "Home",
                    "Command": "read comments",
                    "Function": "onReadComments"
                    ,"Prompt":"I will read user comments now"
                }, {
                    "CommandTableId": 110,
                    "Context": "RecipeStep",
                    "Command": "help",
                    "Function": "onStepHelp",
                    "Prompt": "Step Help. You can say. Start. Stop. Name. OR. Description"
                }, {
                    "CommandTableId": 10,
                    "Context": "RecipeStep",
                    "Command": "start",
                    "Function": "onStartRecipe"
                    ,"Prompt": "Starting Step " 
                }, {
                    "CommandTableId": 11,
                    "Context": "RecipeStep",
                    "Command": "name",
                    "Function": "onAnnounceTitle"
                    ,"Prompt": "step name"
                }, {
                    "CommandTableId": 12,
                    "Context": "RecipeStep",
                    "Command": "title",
                    "Function": "onAnnounceTitle"
                    ,"Prompt": "step name"
                }, {
                    "CommandTableId": 13,
                    "Context": "RecipeStep",
                    "Command": "description",
                    "Function": "onAnnounceDescription"
                    ,"Prompt": "Step description"
                }, {
                    "CommandTableId": 14,
                    "Context": "RecipeStep",
                    "Command": "pause",
                    "Function": "onPauseStep"
                    ,"Prompt":"Paused!Say RESUME when ready to continue"
                }, {
                    "CommandTableId": 15,
                    "Context": "RecipeStep",
                    "Command": "continue",
                    "Function": "onContinueStep"
                    ,"Prompt":"Resuming Step "  
                }, {
                    "CommandTableId": 16,
                    "Context": "RecipeStep",
                    "Command": "stop",
                    "Function": "onStopStep"
                    ,"Prompt": "stopping step " 
                }, {
                    "CommandTableId": 17,
                    "Context": "RecipeStep",
                    "Command": "skip step",
                    "Function": "onSkipStep"
                    ,"Prompt":"skipping to the next step, step " 
                }, {
                    "CommandTableId": 18,
                    "Context": "RecipeStep",
                    "Command": "ingredients",
                    "Function": "onListIngredients"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 19,
                    "Context": "RecipeStep",
                    "Command": "tools",
                    "Function": "onListTools"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 20,
                    "Context": "RecipeStep",
                    "Command": "add comment",
                    "Function": "onAddComment"
                    ,"Prompt": "State your step comment"
                }, {
                    "CommandTableId": 21,
                    "Context": "RecipeStep",
                    "Command": "read comments",
                    "Function": "onReadComments"
                    ,"Prompt": "Read step comments"
                }, {
                    "CommandTableId": 22,
                    "Context": "RecipeStep",
                    "Command": "restart step",
                    "Function": "onStartStep"
                    ,"Prompt": "Restarting step "
                }, {
                    "CommandTableId": 23,
                    "Context": "",
                    "Command": "substitute",
                    "Function": "onIngredientSubstitute"
                    ,"Prompt":"What ingredient would you like to substitute?"
                }, {
                    "CommandTableId": 24,
                    "Context": "",
                    "Command": "convert",
                    "Function": "onUnitConverstion"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 25,
                    "Context": "",
                    "Command": "start timer",
                    "Function": "onStartTimer"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 26,
                    "Context": "",
                    "Command": "cancel timer",
                    "Function": "onCancelTimer"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 27,
                    "Context": "",
                    "Command": "end timer",
                    "Function": "onEndTimer"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 28,
                    "Context": "",
                    "Command": "list timers",
                    "Function": "onListTimers"
                    ,"Prompt":""
                }, {
                    "CommandTableId": 29,
                    "Context": "",
                    "Command": "unknown",
                    "Function": "onUnknown"
                    ,"Prompt":"sorry! I did not understand your request! Please say it again! Or say help for commands"
                }, {
                    "CommandTableId": 911,
                    "Context": "",
                    "Command": "exit",
                    "Function": "onExitRecipe"
                    ,"Prompt":"Do you want to quit cooking this recipe?"
                }
            ]
        }
    }`;
//------------------------------------------------------------
var JSONObj = JSON.parse(strFunctionJSON);
//var commandArray = [];

//for (item in JSONObj.CommandRules.CommandRule)
//{
//    commandArray.push(JSONObj.CommandRules.CommandRule[item].Function)
//}
