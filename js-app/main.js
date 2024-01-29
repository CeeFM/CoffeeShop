const url = "https://localhost:44346/api/beanvariety/";
const coffeeurl = "https://localhost:44346/api/coffee/";

const button = document.querySelector("#run-button");
const coffeeButton = document.querySelector("#coffee-button");
const coffeeForm = document.querySelector("#coffeeForm");
const addCoffee = document.querySelector("#add-coffee");
const results = document.querySelector("#results");
const beanForm = document.querySelector("#beanForm");
const coffeeList = document.querySelector("#beanVarieties");
let htmlList = "";

addCoffee.addEventListener("click", () => {
    getAllBeanVarieties()
    .then(beanVarieties => {
        console.log(beanVarieties);
        let submitbtn;
        for (let i = 0; i < beanVarieties.length; i++) {
            htmlList += `<option value="${i}">${beanVarieties[i].name}</option>`
            console.log(htmlList);
        }

        coffeeForm.innerHTML = `
        Gimme all the faxx on this new type of coffee you've created, my man, I won't tell a SOUL: <br />
        <input type="text" id="coffee" name="coffeeTitle" class="form-control" placeholder="Coffee Name" value="" required>
        <br />
        <label for="beanVarieties">Choose a dang bean:</label>
        <br>
        <select id="beanVarieties" name="beanVarieties">
        ${htmlList}
        </select>
        <br />
        <br />
        <button id="submit-coffee-btn" type="submit"">Submit</button>`;
    })
    .then(submitbtn = document.querySelector("#submit-coffee-btn"))
    .then(submitbtn.addEventListener("click", addNewCoffee))
    
})

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            results.innerHTML = "";
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> #${i + 1}: <strong>${beanVarieties[i].name}<strong> - <i>${beanVarieties[i].region}</i> <br /> `
            }
            results.innerHTML += `<br /><button id="clear">CLEAR</button><br />`
            let clearButton = document.querySelector("#clear");
            clearButton.addEventListener("click", () => {
            results.innerHTML = "";
            })
        })
});

coffeeButton.addEventListener("click", () => {
    getAllCoffees()
        .then(beanVarieties => {
            results.innerHTML = "";
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> #${i + 1}: <strong>${beanVarieties[i].title}</strong> <br /> `
            }
            results.innerHTML += `<br /><button id="clear">CLEAR</button><br />`
            let clearButton = document.querySelector("#clear");
            clearButton.addEventListener("click", () => {
                results.innerHTML = "";
            })
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(coffeeurl).then(resp => resp.json());
}

function addNewBean() {
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
}

function addNewCoffee() {
console.log("what the fuck is going on")
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

}