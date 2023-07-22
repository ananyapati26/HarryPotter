fetch("https://hp-api.onrender.com/api/characters")
  .then((response) => response.json())
  .then((objectData) => {
    const charactersWithImages = objectData.filter((character) => {
      return isValidImageURL(character.image);
    });
    function isValidImageURL(url) {
      return url && url.trim() !== ':';
    }
    let tableData = "";
    charactersWithImages.map((values) => {
      tableData += `
        <tr>
          <td class="img"><img src="${values.image}" onerror="this.style.display='none'"></td>
          <td class="name">${values.name}</td>
          <td class="species">${values.species}</td>
          <td class="actor">${values.actor}</td>
        </tr>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
  });
