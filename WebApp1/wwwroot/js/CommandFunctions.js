//------------------------------------------------------------
function onStartRecipe()
{
    say("lets start cooking! ");
    onAnnounceTitle();
    onAnnounceDescription();
    onListIngredients();
    onListToolsNeeded();

    onStartStep();
}

function onAnnounceTitle()
{
    say("Announcing Recipe Title");
}

function onAnnounceDescription()
{
    say("Announcing Recipe Description");
}

function onListIngredients()
{
    say("Lets go over the ingredients needed.");
}

function onListToolsNeeded()
{
    say("Let's go over the tools needed");
}

function onListSteps()
{
    say("Here are the steps involved");
}

function onReadComments()
{
    say("I will read user comments now");
}

function onAddComment()
{
    say("What are your comments?");
}

function onStartStep()
{
    say("Step 1");

    //.. Launch checklists

    //.. Launch step 1
}

function onStopStep()
{
    //.. Note where you were.  Just in case user decides to continue...

    //.. Confirm 

    //.. Turn off times

    say("Stopping the step. Do you want to end cooking this recipe?");
}

function onPauseStep()
{
    say("Paused!Say RESUME when ready to continue");
}

function onUnknown()
{
    say("Sorry! I did not understand your request!");
}
//------------------------------------------------------------
