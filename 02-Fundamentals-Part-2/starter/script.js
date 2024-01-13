




function logger() {
    console.log("my name is raju")
}


logger();
logger();
logger();

// functions delecartion 
function myBirthDate1(age) {
    return 2024 - age;
}

const age1 = myBirthDate1(2001);


// functions expression
const dateBirth2 = function (age) {
    return 2024 - age;
}


const age2 = dateBirth2(2002);


console.log(age1, age2)


//  Arrow function

const dateBirth3 = age => 2024 - age;

const age3 = dateBirth3(2003)

console.log(age3)






