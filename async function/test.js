
async function start(){
    let users = await dbUsers();
    let companies = await dbCompanies();
    let data = document.getElementById('finalTable');

    console.log(companies);
    console.log(users);

    for(let i=0; i<companies.length; i++){

        let row = data.insertRow(i+1);
        let comp = row.insertCell(0);
        let usr = row.insertCell(1);

        comp.innerText = companies.filter(function (el) {
            return el.uri === `/companies/${i}`;
        }).map(a => a.name);
        usr.innerText = users.filter(function (el) {
            return el.uris.company === `/companies/${i}`;
        }).map(a => a.name);
    }
}


    async function dbUsers() {                                  // usr fetch
        let users;

        const usersData = fetch(`http://localhost:3000/users`)
            .then(res => res.json());

        await usersData.then(res => users = res); 

        return users;
    }

    async function dbCompanies() {                              // companies fetch
        let companies;

        const companiesData = fetch(`http://localhost:3000/companies`)
            .then(res => res.json());

        await companiesData.then(res => companies = res); 

        return companies;
    }

    start();
