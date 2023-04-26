//pair 
let T3 = [0,1,2,3,4,5,6,7,8,9,10]
console.log(T3);



function elementPair(tab) {
    const T2 = []

    for ( let i = 0; i < tab.length; i++){
        if(tab[i]%2 == 0){
         T2.push(tab[i])
        }
     } 
     return T2;
}
console.log(elementPair(T3));

//impair

function elementImpair(tab){
    const T2 =[]

    for (let i = 0; i < tab.length; i++) {
        if(tab[i]%2 !== 0){
            T2.push(tab[i])
        }
    }
    return T2;
}
console.log(elementImpair(T3));


//nombre le plus grand 

function nombreLePlusGrand(tab) {
    let plusGrand = tab[0];
    for(let i = 1; i < tab.length; i++){
        if(tab[i] > plusGrand){
            plusGrand = tab[i]
        }
    }
    return plusGrand;
}
console.log(nombreLePlusGrand(T3));


//function fullName
let nom = ["Ranaivoson", "Randriarilaza"];
let prenom = ["Nomena", "Antso"];
let nomComplet = fullName(nom, prenom);


function fullName(nom, prenom) {
    let resultat=[]
    if(nom.length === prenom.length) {
        for(let i = 0; i< prenom.length; i++){
            let nomComplet = nom[i] + `` + prenom[i]; 
            resultat.push(nomComplet);
        }
    } else{
        console.log("les tableaux n'ont pas les mêmes longuer")
    }
   return resultat;
}
console.log(nomComplet);

//Average 
let T4 = [0,1,2,3,4,5,6,7,8,9,10]
const average = calculAverage(T4)

function calculAverage(tab) {
    let sum = 0;
    for (let i = 0; i < tab.length; i++) {
        sum += tab[i];
    }
const average = sum / tab.length;

return average;
}
console.log(calculAverage(T4));