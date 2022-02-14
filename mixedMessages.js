//This program shall insult the user. It's the first thing that came to mind. Is this why I have no friends?

const userRelatedNounArray = ["Mother","Father","Dog","Cat","Daughter","Son","Second Cousin Twice Removed","Brother","Sister"];
const insultNounArray = [["idiot","an"],["moron","a"],["scoundrel","a"],["knave","a"],["cur","a"],["slut","a"],["whore","a"],["bastard","a"],["vagabond","a"],["lowlife","a"],["pig","a"],["psycho","a"],] //The second element of each item array specifies whether to use 'an' or 'a' -- grammatical correctness is important!


function insult(){
    const firstNoun = userRelatedNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNounArray = insultNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNoun = secondNounArray[0]
    const particle = secondNounArray[1]
    return("\nYour " + firstNoun + " is " + particle + " " + secondNoun + "!\n")
}

console.log(insult())

//If I think of any ways to increase the intensity of the insults, I will add them. But otherwise this code accomplishes its objective in a concise fashion and I see no need to bloat it.