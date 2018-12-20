# php-jquery-white-box-magic-user-generator
The White Box Fantastic Medieval Adventures Magic-User Character Generator is designed primarily with PHP and jQuery/JavaScript.  The Launch Page has a series of drop-down menus, input fields and checkboxes, where alignments, weapons, armour, gear, character level, etc., are added to the character sheet.  When the submit button is entered, the information (variables) is collected through POST methods and added to the character sheet.  Several of the variables POSTED modify the values on the character sheet; therefore, jQuery or PHP functions have been created to make these adjustments possible. Several of the jQuery/JavaScript functions are stored in external files, as a means of creating greater design efficiency, with the goal of designing a program with high cohesion and low coupling.  In this way, this program replicates Object-Oriented design.  JSON is used to store multi-column variables, with jQuery functions used to retrieve these variables.    
