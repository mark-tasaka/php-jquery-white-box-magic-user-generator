
function lightLoad (race, strengthMod)
{
    let load = 60;
    
    if(race === "Halfling")
    {
            if(strengthMod == -3)
            {
                load = 20;
            }
            else if(strengthMod == -2)
            {
                load = 30;
            }
            else if(strengthMod == -1)
            {
                load = 40;
            }
            else if(strengthMod == 1)
            {
                load = 55;
            }
            else if(strengthMod == 2)
            {
                load = 60;
            }
            else if(strengthMod == 3)
            {
                load = 65;
            }
            else
            {
                load = 50;
            }
    }
    else
        {
            if(strengthMod == -3)
            {
                load = 25;
            }
            else if(strengthMod == -2)
            {
                load = 35;
            }
            else if(strengthMod == -1)
            {
                load = 50;
            }
            else if(strengthMod == 1)
            {
                load = 65;
            }
            else if(strengthMod == 2)
            {
                load = 70;
            }
            else if(strengthMod == 3)
            {
                load = 80;
            }
        }
    
    return load;
    
}


function heavyLoad (race, strengthMod)
{
    let load = 150;
    
    if(race === "Halfling")
    {
            if(strengthMod == -3)
            {
                load = 40;
            }
            else if(strengthMod == -2)
            {
                load = 60;
            }
            else if(strengthMod == -1)
            {
                load = 80;
            }
            else if(strengthMod == 1)
            {
                load = 110;
            }
            else if(strengthMod == 2)
            {
                load = 120;
            }
            else if(strengthMod == 3)
            {
                load = 130;
            }
            else
            {
                load = 100;
            }
    }
    else
        {
            if(strengthMod == -3)
            {
                load = 60;
            }
            else if(strengthMod == -2)
            {
                load = 90;
            }
            else if(strengthMod == -1)
            {
                load = 120;
            }
            else if(strengthMod == 1)
            {
                load = 165;
            }
            else if(strengthMod == 2)
            {
                load = 180;
            }
            else if(strengthMod == 3)
            {
                load = 195;
            }
        }
    
    return load;
    
}

function lightLoadCheck (lightLoad, encumbrance)
{
    let checked = "";
    
    if(encumbrance <= lightLoad)
        {
            checked = "X";
        }
    else
        {
            checked = "";
        }
    
    return checked;
}

function heavyLoadCheck (lightLoad, encumbrance)
{
    let checked = "";
    
    if(encumbrance > lightLoad)
        {
            checked = "X";
        }
    else
        {
            checked = "";
        }
    
    return checked;
}

function encumberanceMove (lightLoad, encumbrance)
{
    let move = 40;
    
    let adjustedMove = 40;

    let heavyDeduction = 0;
    
    
    if(encumbrance > lightLoad)
        {
            heavyDeduction = 10;
        }
  
    adjustedMove = move - heavyDeduction;
    
    return adjustedMove;

}


