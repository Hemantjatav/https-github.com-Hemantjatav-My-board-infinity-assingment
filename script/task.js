 console.log("hey , this is a first script")
        console.log('this is a next statement')
        console.log('1'); console.log('2')*/
       // var a=10;
       // var b=20;
        //var c=30;

       /// var d=(a>b>c)
        //console.log(d) */
        const num1 = prompt("enter first number: ");
        const num2 = prompt("enter second number: ");
        const num3 = prompt("enter third number: ");
        let largest;
    
        if(num1 >= num2 && num1 >= num3) {
                largest = num1;
            }
        else if (num2 >= num1 && num2 >= num3) {
                largest = num2;
            }
         else {
                largest = num3;
            }

        console.log("the largest number is " +largest);

        //QUESTION-2
 //not sure about this answer
 const a1 = {
    admin : "john",
    name : "fname"
}
a1 ['admin'] = "fname"
console.log(a1) 

 //QUESTION-3
 let a = 2;
 let b = "Dev";
 let c = true;
 let d = undefined;
 let e = null;
 
 console.log(typeof a,b,c,d,e)


//QUESTION-4
5 > 4 //true
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false