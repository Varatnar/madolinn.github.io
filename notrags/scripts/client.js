_trigger = { };

/*
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////			Shit to do			//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Game Text
	---Work
	---Object of Interests / Characters

Graphics?
	Fuck it

Compass
	U/D
	Directions
	
Portrait
	Examine
	Eat Objects
	
Room Objects
	Examine
	Options
	
Characters
	Examine
	Options
		Kill
		
Inventory
	Examine
	Eat

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

moduLoad("navigation");
moduLoad("gametext");
moduLoad("room");
moduLoad("rooms");
moduLoad("object");
moduLoad("objects");
moduLoad("character");
moduLoad("characters");
//moduLoad("graphics"); Fuck this
//moduLoad("compass");
//moduLoad("portrait");

moduLoad.ready = function() {
	
	room.load("foyer_basement");
	
	navigation.bindCompass();
	
}