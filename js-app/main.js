const url = "https://localhost:44346/api/beanvariety/";
const coffeeurl = "https://localhost:44346/api/coffee/";

const button = document.querySelector("#run-button");
const coffeeButton = document.querySelector("#coffee-button");
const results = document.querySelector("#results");
const beanForm = document.querySelector("#beanForm");

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            results.innerHTML = "";
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> #${i + 1}: <strong>${beanVarieties[i].name}<strong> - <i>${beanVarieties[i].region}</i> <br /> `
            }
        })
});

coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(beanVarieties => {
            results.innerHTML = "";
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> #${i + 1}: <strong>${beanVarieties[i].title}</strong> <br /> `
            }
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeurl).then(resp => resp.json());
}

function addNewBean(e) {
    e.preventDefault();
    let name = document.getElementById("beanTitle").value;
    let region = document.getElementById("beanRegion").value;
    let notes = document.getElementById("beanNotes").value;

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            Name: name,
            Region: region,
            Notes: notes
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    beanForm.reset();
}

// function addNewCoffee() {
// console.log("what the fuck is going on")
    // let title = document.getElementById("coffee").value;
    // let beanvarietyid = document.getElementById("beanVarieties").value;

    // fetch(coffeeurl, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         Title: title,
    //         BeanVarietyId: beanvarietyid 
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //     }
    // })
    // .then(console.log("got to this then block"))
