//This program shall insult the user. It's the first thing that came to mind. Is this why I have no friends?

const userRelatedNounArray = ["mother","father","dog","cat","daughter","son","second cousin twice removed","brother","sister"];
const insultAdjectiveArray = [["detestable","a"],["worthless","a"],["miserable","a"],["pathetic","a"],["unlovable","an"],["unapologetic","an"],["complete","a"],["total","a"],["rude","a"],["ugly","a"],["fat","a"],["stupid","a"]];
const insultNounArray = ["idiot","moron","scoundrel","knave","cur","slut","whore","bastard","vagabond","lowlife","pig","psycho"]; //The second element of each item array specifies whether to use 'an' or 'a' -- grammatical correctness is important!


function insult(){
    const adjectiveArray = insultAdjectiveArray[Math.floor((Math.random() * insultAdjectiveArray.length))]
    const firstNoun = userRelatedNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNoun = insultNounArray[Math.floor((Math.random() * insultNounArray.length))]
    const adjective = adjectiveArray[0]
    const particle = adjectiveArray[1]

    return("\nYour " + firstNoun + " is " + particle + " " + adjective + " " + secondNoun + "!\n")
}

console.log(insult())

//If I think of any ways to increase the intensity of the insults, I will add them. But otherwise this code accomplishes its objective in a concise fashion and I see no need to bloat it.