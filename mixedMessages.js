//This program shall insult the user.

const userRelatedNounArray = ["Mother","Father","Family","Dog","Cat","Daughter","Son","Second Cousin Twice Removed","Brother","Sister"];
const insultNounArray = [["idiot","an"],["moron","a"],["scoundrel","a"],["knave","a"],["cur","a"],["slut","a"],["whore","a"],["bastard","a"],["vagabond","a"],["lowlife","a"],["pig","a"],["psycho","a"],] //The second element of each item array specifies whether to use 'an' or 'a' -- grammatical correctness is important!


function insult(){
    const firstNoun = userRelatedNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNounArray = insultNounArray[Math.floor((Math.random() * userRelatedNounArray.length))]
    const secondNoun = secondNounArray[0]
    const particle = secondNounArray[1]
    return("Your " + firstNoun + " is " + particle + " " + secondNoun)
}

console.log(insult())