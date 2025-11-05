const fs = require('fs');
const data = fs.readFileSync('input.json','utf-8');


const companies = JSON.parse(data);

// console.log('Companies');
// companies.forEach(company => {
//     console.log(`${company.company} - ${company.role} - ${company.package}`)
// });

// const highPackage = companies.filter(c => c.package > 5);
// highPackage.forEach(c => {
//     console.log(`${c.company} - ${c.role} (${c.package}LPA)`);
// });


// const branch = "IT";
// const eligibleCompanies = companies.filter(c => c.eligible_branches.includes(branch));
// eligibleCompanies.forEach(c => {
//     console.log(`${c.company} - ${c.role}`);
// })


const branch = "CSE";
const eligibleCompanies = companies.filter(c => c.eligible_branches.includes(branch));
eligibleCompanies.forEach(c=>{
    console.log(`${c.company} - ${c.role}`);
});  