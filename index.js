//uso de fertch
let data;
const div = document.querySelector(".container");
const arreglo = [];
window
    .fetch("https://platzi-avo.vercel.app/api/avo")
    .then((response) => response.json())
    .then((responsejson) => {
        data = responsejson.data;
        for(i = 0; i < data.length; i++){
            const img = `https://platzi-avo.vercel.app/${data[i].image}`
            let card = `
            <div class="d-flex col-6 justify-content-center mb-2">
                <div class="card border border-info" style="width: 18rem;">
                    <img src="${img}" class="card-img-top" alt="imagen loca :s">
                    <div class="card-body bg-secondary bg-dark">
                        <h5 class="card-title text-white">${data[i].name}</h5>
                        <p class="card-text text-white">Q${data[i].price}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>`;
            arreglo.push(card)
        }
        div.innerHTML = [...arreglo].join("<br>");
    })