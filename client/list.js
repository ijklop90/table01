let id = id => {
    return document.getElementById(id)
}
const url = 'http://localhost/api/all'


fetch(url)
    .then(data=> data.json())
    .then(res=>res.forEach((data, index) => {
        for(i=0; i<10; i++){
        if(data.group_class == i){
        id("all").insertAdjacentHTML(`beforeend`, `
        <div id='id_${index}' class="col">
        <div class="card text-bg-light mb-3 text-center" style="max-width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            <a href="/list/${data.id_table}" class="btn btn-primary">Посмотреть</a>
        </div>
        </div>
        `)
        }
    }
}
))

    