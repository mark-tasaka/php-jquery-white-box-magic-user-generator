

function demiHumanStrength (race, abilityScore)
{
    let ability = 0;

    if(race === "Halfling")
    {
        
        if(abilityScore == 18)
        {
            ability = 17;
        }
        else
        {
            ability = abilityScore;
        }
        
    }
    else
    {
        ability = abilityScore;
    }
    
    return ability;
}


function demiHumanDexterity (race, abilityScore)
{
    let ability = 0;
    
    if(race === "Halfling")
    {
        
        if(abilityScore <= 9)
        {
            ability = 9;
        }
        else
        {
            ability = abilityScore;
        }
        
    }
    else
    {
        ability = abilityScore;
    }
    
    return ability;
}


function demiHumanConstitution (race, abilityScore)
{
    let ability = 0;
    
    if(race === "Dwarf")
    {
        if(abilityScore <= 9)
        {
            ability = 9;
        }
        else
        {
            ability = abilityScore;
        }
            
    }
    else if(race === "Elf")
    {1;
        
        if(abilityScore == 18)
        {
            ability = 17;
        }
        else
        {
            ability = abilityScore;
        }
        
    }
    else
    {
        ability = abilityScore;
    }
    
    return ability;
}


function demiHumanIntelligence (race, abilityScore)
{
    let ability = 0;
    
    if(race === "Elf")
    {     
        if(abilityScore <= 9)
        {
            ability = 9;
        }
        else
        {
            ability = abilityScore;
        }
    }
    else
    {
        ability = abilityScore;
    }
    
    return ability;
}


function demiHumanCharisma (race, abilityScore)
{
    let ability = 0;
    
    if(race === "Dwarf")
    {
        if(abilityScore == 18)
        {
            ability = 17;
        }
        else
        {
            ability = abilityScore;
        }
            
    }
    else
    {
        ability = abilityScore;
    }
    
    return ability;
}

