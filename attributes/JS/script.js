import data from "EECU-data.js";
// Career Stuff
let job = 
document.getElementById("job").addEventListener;
let j = 0;

// for (string of data) {

// }

// for(var i = 0; i < data.length; i++) {
//     if(job.isLower == data[i]
//     ) {
//         GAI = data[i];
//     }
//     j++;
// }

for(var i = 0; i < data.length; i++) {
    if(job.toLowerCase() === data[i]
    ) {
        const GAI = data[i];
    }
}
console.log(GAI)
// const GAI = data[j];
    let GMI = GAI / 12; // calclating the Gross Monthly Income
    let HA = GMI * 0.33; // Housing Affordability
    let MC = GMI * 0.0145; // Medicare 
    let FT = GMI * 0.12; // Federal Taxes
    let ST = GMI * 0.07; //State Taxes
    let SS = GMI * 0.82; // Sociall Security
    let SD = GMI * 0.01; // State Disability
    let RT = GMI * 0.05; // Retirement
    let MI = 180; // Medicare insurance
    let TD = MC+FT+ST+SS+SD+RT+MI;

// Return the Ammounts to the correct areas.
document.getElementById("GAI").innerHTML = data.number[i];
document.getElementById("GMI").innerHTML = GMI;
document.getElementById("GAI").innerHTML = GAI;
document.getElementById("HA").innerHTML = HA;
document.getElementById("M").innerHTML = MC;
document.getElementById("FT").innerHTML = FT;
document.getElementById("ST").innerHTML = ST;
document.getElementById("SS").innerHTML = SS;
document.getElementById("SD").innerHTML = SD;
document.getElementById("RT").innerHTML = RT;
document.getElementById("MI").innerHTML = MI;
document.getElementById("TD").innerHTML = TD;
// Checkbook
