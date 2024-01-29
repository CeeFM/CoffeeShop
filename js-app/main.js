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
                results.innerHTML += `<br /> ${beanVarieties[i].name} ${beanVarieties[i].region} <br /> `
            }
        })
});

coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(beanVarieties => {
            console.log(beanVarieties);
            results.innerHTML = "";
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> ${beanVarieties[i].title} <br /> `
            }
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeurl).then(resp => resp.json());
}

function addNewBean(event) {
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