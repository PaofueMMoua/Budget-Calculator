let data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Electrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nuse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]

// Career Stuff

let Job = document.getElementById('job');
Job.addEventListener('change', checking);

function checking() {
    let Care = document.getElementById('job').value;
        for (let i = 0; i < data.length; i++) {
            if (Care == data[i][0]) {
                let GAI = Number(data[i][1]);
                let GMI = Math.round(GAI / 12); // calclating the Gross Monthly Income
                let HA = Math.round(GMI * 0.33); // Housing Affordability
                let MC = Math.round(GMI * 0.0145); // Medicare 
                let FT = Math.round(GMI * 0.12); // Federal Taxes
                let ST = Math.round(GMI * 0.07); //State Taxes
                let SS = Math.round(GMI * 0.062); // Sociall Security
                let SD = Math.round(GMI * 0.01); // State Disability
                let RT = Math.round(GMI * 0.05); // Retirement
                let MI = 180; // Medicare insurance
                let TD = MC + FT + ST + SS + SD + RT + MI;
                let NMI = Math.round(GMI - TD);
                // Return the Ammounts to the correct areas.
                document.getElementById("GAI").innerHTML = GAI;
                document.getElementById('GAI-2').innerHTML = GAI;
                document.getElementById("GMI").innerHTML = GMI;
                document.getElementById('GMI-3').innerHTML = GMI;
                document.getElementById('GMI-4').innerHTML = GMI;
                document.getElementById("HA").innerHTML = HA;
                document.getElementById("M").innerHTML = MC;
                document.getElementById("FT").innerHTML = FT;
                document.getElementById("ST").innerHTML = ST;
                document.getElementById("SS").innerHTML = SS;
                document.getElementById("SD").innerHTML = SD;
                document.getElementById("RT").innerHTML = RT;
                document.getElementById("MI").innerHTML = MI;
                document.getElementById("TD").innerHTML = TD;
                document.getElementById("TD-2").innerHTML = TD;
                document.getElementById("NMI").innerHTML = NMI;
        }
    }
} 

// Checking(TEMP)
// Checkbook

let withdrawl_1 = Number(document.getElementById("withdrawl-1").addEventListener("change"));
let withdrawl_2 = Number(document.getElementById("withdrawl-2").addEventListener("change"));
let withdrawl_3 = Number(document.getElementById("withdrawl-3").addEventListener("change"));
let withdrawl_4 = Number(document.getElementById("withdrawl-4").addEventListener("change"));
let deposit_1 = Number(document.getElementById("deposit-1").addEventListener("change"));
let deposit_2 = Number(document.getElementById("deposit-2").addEventListener("change"));
let deposit_3 = Number(document.getElementById("deposit-3").addEventListener("change"));
let deposit_4 = Number(document.getElementById("deposit-4").addEventListener("change"));

let bal_1 = 0;
let bal_2 = output_1;
let bal_3 = output_2;
let bal_4 = output_3;
let bal_5 = output_4;

let output_1 = withdrawl_1 - bal_1 + deposit_1;
let output_2 = withdrawl_2 - bal_2 + deposit_2;
let output_3 = withdrawl_3 - bal_3 + deposit_3;
let output_4 = withdrawl_4 - bal_4 + deposit_4;

document.getElementById('output-1') = output_1;
document.getElementById('output-2') = output_2;
document.getElementById('output-3') = output_3;
document.getElementById('output-4') = output_4;