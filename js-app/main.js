const url = "https://localhost:44346/api/beanvariety/";

const button = document.querySelector("#run-button");
const results = document.querySelector("#results");
const beanForm = document.querySelector("#beanForm");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> ${beanVarieties[i].name} ${beanVarieties[i].region} <br /> `
            }
        })
});

beanForm.addEventListener("submit", (e) => {
    e.preventDefault();


})

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
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