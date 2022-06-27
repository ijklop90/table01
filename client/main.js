import {User} from '/models/User.js'
let tableId = window.location.pathname;
tableId = tableId.split("/list/")
tableId = tableId[1]
const url = 'http://localhost:80/api/main/'+tableId;

let id = (id) => {
    return document.getElementById(id)
}
//insert table tags
id("tablejs").insertAdjacentHTML(`beforeend`, `
<table id="table" class="table table-bordered table-striped">
    <thead id="thead">
        <tr>
            <th>Показатель</th>
            <th>Количество</th>
            <th>Примечание</th>
        </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
</table>
`)

const UserAuth = { getAuth: (name, age, male) => new User(name, age, male)}

//create data table content
fetch(url)
    .then(data=> data.json())
    .then(res=>res.forEach((data) => {
    // console.log(data.index)
    
const users = UserAuth.getAuth(data.index, data.amount, data.list_id)
    id("tbody").insertAdjacentHTML('beforeend', 
    `<tr>
         <td>${users.getName()}</td>
         <td>${users.getAge()}</td>
         <td>${users.getGender()}</td>
    </tr>`)
    }))
