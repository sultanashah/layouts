console.log("only even numbers");
let evennum=[]
for (let i =0; i <= 100; i += 2) {
    evennum.push(i);
    }
console.log(evennum)

console.log("only odd numbers");
 let oddnum=[]
 for( let j=1; j<=100; j+=2){
    oddnum.push(j)
    }
    console.log(oddnum)









//  for( let j=0; j<=100; j++){
//      if (j % 2 !== 0);
//      console.log(j);
    //  oddnum.push(j)
 










// Use for loop to iterate from 0 to 100 and print
// only even numbers

// console.log("only even numbers");
// let num = 0;
// while (num <= 100) {
//     if (num % 2 === 0) {
//         console.log(num);
//         }
//         num++;
//         }

// Use for loop to iterate from 0 to 100 and print
// only odd numbers.


// console.log("only odd numbers");
// let nums = 0;
// while (nums <= 100) {
//     if (nums % 2 !== 0) {
//         console.log(nums);
//         }
//         nums++;
//         }

// for (let j=0; j<=20; j++){
//     console.log(j);{
//        for (let j=0; j<=20; j++)
//        console.log(j+'*'+ j + '='+ j*j);
//     }

// }

// Use for loop to iterate from 0 to 100 and print the
// sum of all numbers.



let sum=0;
for(let j=0; j<=100; j++){
    sum+=j;
    }
    console.log('sum:', sum);



    



    // Use for loop to iterate from 0 to 100 and print the
    // sum of all evens and the sum of all odds.
    let sumEvens=0;
    for(let j=0; j<=100;j++){
            if(j%2===0){
                sumEvens += j;
                }
            }
            console.log('Sum sum of all even numbers: ', sumEvens);
// oddddsummmmm
let sumOdds =0;
for(let j=0; j<=100;j++){
        if(j%2===0){
            sumOdds += j;
            }
        }
        console.log('Sum of all odd numbers: ', sumOdds);




        let odd=[],even=[];
    let sumEvensll=0, sumOddsll=0;
    for(let j=0; j<=100;j++){
          if(j%2===0){
                sumEvensll += j;
                }
                else{
                    sumOddsll+= j;
                    }
             }

                    let rsltrry=[sumEvensll,sumOddsll]
                    console.log(rsltrry);

                    
                    
let rry=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELANd","JAPAN","KENYA"];
console.log(rry);
console.log(`Length of countries array is: ${rry.length}`);

let rry2=["ALBANIA","BOLIVIA","CANADA","DENMARK","ETHIOPIA","FINLAND","GERMANY","HUNGARY","IRELANd","JAPAN","KENYA",];
let ltstcntry="";
for (let j=0; j<rry2.length; j++){
    if(rry2[j].length>ltstcntry.length){
        ltstcntry=rry2[j];
    }
    }
    console.log("Longest country :"+ltstcntry);

    // Using the above countries array, find the country
    // containing only 5 characters.
    // OP : [ ‘JAPAN’
    // ,
    // ‘KENYA’]
    let chrf=[];
    for(let j=0; j<rry2.length; j++){
        if(rry2[j].length==5){
            chrf.push(rry2[j]);
            }
            }
            console.log("Containing only 5 characters:"+chrf)

    let chrfr=[];
    for(let j=0;j<rry2[j].length; j++){
        if(rry2[j].length==4){
        chrfr.push(rry2[j]);
        }
        }
        console.log("Countries with 4 letters:"+chrfr);
        // Using the above countries array, reverse the order
        // using loop without using a reverse method.

        
        let rev=[''];
        for(let j=rry2.length-1; j>=0 ; j--){
            rev.push(rry2[j]);
            }
            console.log("Reversed:"+rev);
