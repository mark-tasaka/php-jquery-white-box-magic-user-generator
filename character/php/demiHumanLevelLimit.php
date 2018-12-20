<?php
/*Magic-User Class*/

function levelLimit ($race, $level)
{
    $characterLevel = 0;
    
    if($race === "Elf")
    {
        if($level <= 8)
        {
            $characterLevel = $level;
        }
        else
        {
            $characterLevel = 8;
        }
    }
    else
    {
        $characterLevel = $level;
    }
    
    
    return $characterLevel;
}




?>