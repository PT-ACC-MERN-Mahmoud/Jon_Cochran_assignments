const express = require('express');
const app = express();
const PORT = 8000;
const {faker} = require('@faker-js/faker');

const Users = [];
const Companies = [];

function createUser(){
    return {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
    };
}

function createCompany(){
    return {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
    };
}
//create user and companies 
// Array.from({length: 3}).forEach(() => {
//     Users.push(createUser());
//     Companies.push(createCompany());
// })

app.get("/api", (req,res) => {
    res.json({message: "Hello from server"})
});

app.get("/api/users/new", (req,res)=> {
    Array.from({length: 1}).forEach(()=>{
        Users.push(createUser())
    })
    res.json(Users)
})

app.get("/api/companies/new", (req,res)=> {
    Array.from({length: 1}).forEach(()=>{
        Companies.push(createCompany())
    })
    res.json(Companies)
})

app.get("/api/user/company", (req,res) =>{
    const companyData = []
    
    Array.from({length: 1}).forEach(()=>{
        companyData.push(createUser())
        companyData.push(createCompany())
    })
    

    res.json(companyData)
})

app.listen(PORT, () => console.log(`server started and is listening on ${PORT}`));