const url = "https://localhost:44346/api/beanvariety/";

const button = document.querySelector("#run-button");
const results = document.querySelector("#results");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
            for (let i = 0; i < beanVarieties.length; i++) {
                results.innerHTML += `<br /> ${beanVarieties[i].name} ${beanVarieties[i].region} <br /> `
            }
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}