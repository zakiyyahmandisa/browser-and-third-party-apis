//get list of 100 pictures
fetch(`https://picsum.photos/v2/list?page=2&limit=100`)
  .then((response) => {
    //look into further: should you be using a POST request? to post the images on the webpage?
    return response.json();
  })
  .then((responseJson) => {
    //injectInfo(responseJson);
    console.log(responseJson);

    const photos = document.getElementById("photos");
    for (let i = 0; i <= 100; i++) {
      let img = document.createElement("img");
      img.src = responseJson[i].download_url;
      img.width = "500";
      img.height = "600";
      img.style.paddingLeft = "100em";
      photos.appendChild(img);

      //addd the photo information to the photos
      const information = document.getElementById("photos");
      let info = document.createElement("h1");
      info.textContent = `${responseJson[i].id} ` + responseJson[i].author;
      information.appendChild(info);
    }
  });

//get random photo
const form = document.getElementById("form");
const random = Math.floor(Math.random() * 1500);
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let url = `https://picsum.photos/id/${random}/200/300`;
  let image = document.getElementById("img");
  image.src = url;
  image.width = "500";
  image.height = "600";
});

//const img = document.queryselector("images")
//img = innerHTML = `${--insert data--}`;
