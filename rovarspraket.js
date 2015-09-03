/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    if(typeof a === 'string' || typeof b === 'string')
    {
    	return NaN;
    }
    else if(a>b)
    {
    	return a;
    }
    else return b;
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    var firstN=max(a,b);
    var maxN=max(firstN,c);
    return maxN

}


console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
   
   var vowels=["A","a", "E","e", "I","i", "O","o","U","u"];
   for(var i=0;i<vowels.length;i++ ){
   		if(char===vowels[i]){
   			return true;
   	}
   }
   return false;
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(word){
   
		if (typeof word!='string')
		 {
		 	return word.toString();
		}

     	var newWord="";

     	for (var j= 0; j < word.length; j++) {
     		if(isVowel(word.charAt(j))===false)
     		{
     			newWord+=word.charAt(j)+"o"+word.charAt(j);
     			
     		}
     		else
     		{
     			newWord+=word.charAt(j);
     		}

     		}


     	
     	return newWord;
 }


console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
var string="";


for(var i=0; i<=str.length; i++)
{
	string+=str.charAt(str.length-i);
}

return string;
}


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 // * Part 5
//  *
//  * Write a function findLongestWord() that takes an
//  * string returns the first, longest word in the array.
//  *
//  * i.e. findLongestWord("book dogs") should return "book"
//  */

function findLongestWord(sentence){
    
    var wordsArray=sentence.split(" ");
    
    var flag=0;
    var maxL=0;
    var maxW=0;

// console.log(wordsArray);

    for(var i=0; i<wordsArray.length; i++)
    {
    	flag=0;

    	if(wordsArray[i].length>maxL)
    	{
    		for (var j = 0; j < wordsArray[i].length; j++) {
    		
    		if(65<=wordsArray[i].charCodeAt(j) && wordsArray[i].charCodeAt(j)<=90 
    			|| 97<=wordsArray[i].charCodeAt(j) && wordsArray[i].charCodeAt(j)<=122 )
    		{
    			continue;
    		}

    	else{
    		flag=1;
    		
    		}
	}

		
		if (flag===0)
		{
		maxL=wordsArray[i].length
		maxW=wordsArray[i];
		
		}
}

    }



return maxW;
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")


