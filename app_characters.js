fetch("https://hp-api.onrender.com/api/characters").then((data)=>{
    return data.json();
})
.then((objectData)=>{
    console.log(objectData[0].name);
    console.log(objectData);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`          <tr>
        <td class="img"><img src="${values.image}" onerror="this.style.display='none'"></td>
        <td class="name">${values.name}</td>
        <td class="species">${values.species}</td>
        <td class="actor">${values.actor}</td>
        </tr>`;
        // count+=1;
        // if(count>=4){
            
        // }
});
document.getElementById("table_body").innerHTML=tableData;
})
let count=0;