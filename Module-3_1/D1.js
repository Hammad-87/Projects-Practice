/* 1)
Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. */

/* function testIntegers(a,b) {
    let result;
    if (a === b) {
      result = 3 * (a+b);
    } else {
      result = a + b;
    }
    return result;
  }
  
  console.log(testIntegers(2,3));
  console.log(testIntegers(2,2)); */

  /* 2)
Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

/* function testNums(a,b) {
    let result;
    if (a === 50 || b === 50 || (a+b===50)) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  
  console.log(testNums(50,3));
  console.log(testNums(2,50));
  console.log(testNums(25,25));
  console.log(testNums(25,251)); */
  
  /* 3)
  Write a JavaScript program to remove a character at the specified position of a given string and return the new string. */

/* function removeCharcter(str, charPos) {
    part1 = str.substring(0, charPos);
    part2 = str.substring(charPos + 1, str.length)
    return (part1 + part2);
  }
  
  console.log(removeCharcter("strive",0));
  console.log(removeCharcter("strive",2));
  console.log(removeCharcter("strive",3)); */

 /* 4)
Write a JavaScript program to find the largest of three given integers. */
/* function maxOfThree (x,y,z) {
maxVal = 0
if (x > y && x > z){
    return maxVal = x;
} else if (y > x && y > z) {
    return maxVal = y;
} else {
    return maxVal = z;
}
}

console.log(maxOfThree(1 , 2, 3));
console.log(maxOfThree(4 , 2, 3));
console.log(maxOfThree(1 , 4, 3)); */

/* 5)
Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive. */

/* function numberRanges(x, y){
    if ((x >= 40 && x <= 60 && y >= 40 && y <= 60)
    || (x >= 70 && x <= 100 && y >= 70 && y <= 100)) 
    {
        return true;
    } else {
        return false;
    }    
}

console.log(numberRanges(49,58));
console.log(numberRanges(72,100));
console.log(numberRanges(50,55));
console.log(numberRanges(20,120)); */

/* 6)
Write a JavaScript program to create a new string of specified copies (positive number) of a given string. */
/* function string_copies (str, n) 
{
  if (n < 0)
    return false;
  else
  return str.repeat(n);
}
console.log(string_copies("abc", 5));
console.log(string_copies("abc", 0));
console.log(string_copies("abc", -2)); */

/* 7)
Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank. */
/* function cityName(str) {
    if (str.length >= 3 && ((str.substring(0, 3) === 'Los')
                            || (str.substring(0, 3) === 'New')))
     
        {
            return str;
      }
  
    return '';
  }
  
  console.log(cityName("New York"));
  console.log(cityName("Los Angeles"));
  console.log(cityName("London")); */

  /* 8)
Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3. */

/* function sum_three(nums)
{
  return nums[0] + nums[1] + nums[2];
}

console.log(sum_three([10, 32, 20]));  
console.log(sum_three([5, 7, 9])); 
console.log(sum_three([0, 8, -11])); */

/* 9)
Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3. means length number of items  */
/* function contains1Or3(Nums){
    if(Nums.indexOf(1) !== -1 || Nums.indexOf(3) !== -1){
        return true;
    }else{
        return false
    }
}

console.log(contains1Or3([1,6]));
console.log(contains1Or3([5,3]));
console.log(contains1Or3([8,6])); */

/* 10) Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3 */
/* function notContains13(Nums){
    if(Nums.indexOf(1) !== -1 && Nums.indexOf(3) !== -1){
        return true;
    }else{
        return false
    }
}

console.log(notContains13([1,6]));
console.log(notContains13([5,3]));
console.log(notContains13([1,3,5]));  */

/* 11) Write a JavaScript to find the longest string from a given array of strings. */
/* let arr = [ 'fdgdfgdfg', 'gdfgf', 'gdfgdfhawsdgd', 'gdf', 'gdfhdfhjurvweadsd' ];
var longest = arr.sort(function (a, b) { return b.length - a.length; })[0];
let longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; }); */

/* function longString(a, b){
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

console.log(longString("asd", "asdf")); */

/* 12) Write a JavaScript program to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle. */

    /* function angleType(angle){
        if (angle < 90){
            return "Acute angle.";
        } else if (angle === 90){
            return "Right angle."
        } else if (angle>90 && angle<180){
            return "Obtuse angle.";
        } else if(angle === 180){
            return "Straight angle.";
        } else{
            return "Out of reange.";
        }
    }
    console.log(angleType(47))
    console.log(angleType(90))
    console.log(angleType(145))
    console.log(angleType(180)) */

    /* 13) Write a JavaScript program to find the index of the greatest element of a given array of integers */

    /* function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

console.log(indexOfMax([23,123,2336])); */

/* 14) Write a JavaScript program to get the largest even number from an array of integers. */

/* function largestEvenNumber(arr){
   arr.sort((x,y) => y-x);

   for (let i = 0; i < arr.length; i++) {
       if (arr[i] % 2 === 0)
       return arr[i];
   }
}

console.log(largestEvenNumber([20, 40, 200]));
console.log(largestEvenNumber([20, 40, 200, 301])); */

/* 15) Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. */

/* function checkNumber(x,y){
    if (x === 50 || y === 50 || (x + y === 50)){
        return true;
    } else{
        return false;
    }
}
console.log(checkNumber(50, 25));
console.log(checkNumber(25, 25)); */

/* 16) Write a JavaScript program to check from two given integers, whether one is positive and another one is negative. */
/* function posOrNeg(a,b){
    if (a < 0 && b < 0) {
        return "both are negative";
    } else if (a<0 && b>0) {
        return " a is negative"
    } else if (b<0 && a>0){
        return "b is negative"
    } else{
        return "both are same"
    }
}
console.log(posOrNeg(2, 2));
console.log(posOrNeg(-2, 2));
console.log(posOrNeg(2, -2));
console.log(posOrNeg(-2, -2)); */

/* 17) Write a JavaScript program to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.  */
/* function upper_lower(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front_part = (str.substring(0, 3)).toLowerCase();
    back_part = (str.substring(3, str.length)).toUpperCase();  
    return front_part + back_part;
  }
  console.log(upper_lower("Python"));
  console.log(upper_lower("Py"));
  console.log(upper_lower("JAVAScript")); */

 /*  18) Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80. */
 /* function compute(x,y){
     if ((x+y) < 80 && (x+y)>50){
         return 65;
     }
     return 80;
 }

 console.log(compute(25,30));
 console.log(compute(125,30)); */

 /* 19)

Convert a number to a string, the contents of which depend on the number's factors.

If the number has 3 as a factor, output 'Pling'.
If the number has 5 as a factor, output 'Plang'.
If the number has 7 as a factor, output 'Plong'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
In raindrop-speak, this would be a simple "Plong".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
In raindrop-speak, this would be a "PlingPlang".
34 has four factors: 1, 2, 17, and 34.
In raindrop-speak, this would be "34". */
/* 
function stringNumberFactors(num){
    if ((num % 3) === 0){
        return "Pling"
    } else if ((num % 5)=== 0){       
            return "Plang"
        
    } else if ((num % 7)=== 0){       
        return "Plong"
    
}else{
    return num;
}
}

console.log(stringNumberFactors(15));
console.log(stringNumberFactors(35));
console.log(stringNumberFactors(28));
console.log(stringNumberFactors(97)); */

/*20) Convert a phrase to its acronym, like Portable Network Graphics to its acronym (PNG). */
/* function Acronyms(phrase) {
      let acronym = '';
      let colon = phrase.indexOf(":");
      if (colon > 0) {
        return phrase.slice(0, colon);
      }
  
      let dash = phrase.indexOf('-');
      if (dash > 0) {
        phrase = phrase.replace('-', ' ');
      }
  
      let words = phrase.split(' ');
      for (let i = 0; i < words.length; i++) {
        let word = words[i];
        acronym += word.charAt(0);
        for (let j = 1; j < word.length; j++) {
          if (word.charCodeAt(j) >= 65 && word.charCodeAt(j) <= 90) {
            acronym += word.charAt(j);
          }
        }
      }
      return acronym.toUpperCase();
    }
console.log(Acronyms("Portable Network Graphics")); */
