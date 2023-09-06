
console.log(process.env);

// destructuracion de objetos   

const {USERDOMAIN, USERPROFILE} = process.env;

console.table({USERDOMAIN , USERPROFILE});

// destructuracion de array 

const marcasAutos = ['Toyota', 'Mazda', 'Renault'];

const [,,Renault] = marcasAutos;

console.log(Renault);