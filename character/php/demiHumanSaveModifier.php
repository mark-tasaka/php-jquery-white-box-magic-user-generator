<?php

function demiHumanBreathMod ($race)
{
    $saveMod = 0;
       
    if($race === "Dwarf")
    {
        $saveMod = 3;
    }
    else if($race === "Elf")
    {
        $saveMod = 0;
    }
    else if($race === "Halfling")
    {
        $saveMod = 3;
    }
    
    return $saveMod;
    
}


function demiHumanPoisonMod ($race)
{
    $saveMod = 0;
       
    if($race === "Dwarf")
    {
        $saveMod = 4;
    }
    else if($race === "Elf")
    {
        $saveMod = 0;
    }
    else if($race === "Halfling")
    {
        $saveMod = 4;
    }
    
    return $saveMod;
    
}


function demiHumanPetrifyMod ($race)
{
    $saveMod = 0;
       
    if($race === "Dwarf")
    {
        $saveMod = 4;
    }
    else if($race === "Elf")
    {
        $saveMod = 1;
    }
    else if($race === "Halfling")
    {
        $saveMod = 4;
    }
    
    return $saveMod;
    
}



function demiHumanWandMod ($race)
{
    $saveMod = 0;
       
    if($race === "Dwarf")
    {
        $saveMod = 4;
    }
    else if($race === "Elf")
    {
        $saveMod = 2;
    }
    else if($race === "Halfling")
    {
        $saveMod = 4;
    }
    
    return $saveMod;
    
}

function demiHumanSpellMod ($race)
{
    $saveMod = 0;
       
    if($race === "Dwarf")
    {
        $saveMod = 4;
    }
    else if($race === "Elf")
    {
        $saveMod = 2;
    }
    else if($race === "Halfling")
    {
        $saveMod = 4;
    }
    
    return $saveMod;
    
}


?>