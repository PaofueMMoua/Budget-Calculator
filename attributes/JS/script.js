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

let Job = document.getElementById("job");
let GAI = 0;
Job.addEventListener("change", (e) => FS());
function FS() {
    let jobI = Job.value;
    for(string of data){
        if(string[0]=jobI) {
            GAI=data[1];
            return GAI
        }
    }
}
// GAI = FS(Job)

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
document.getElementById("GAI").innerHTML =FS(Job);
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
