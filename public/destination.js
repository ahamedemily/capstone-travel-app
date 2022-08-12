// const { default: axios } = require("axios");

const baseURL =  `http://localhost:4444/api`
const placesContainer = document.querySelector('#places-container')

const destinationBtn = document.getElementById("destinationSelector")

const getDestination = () => {
    axios.get("http://localhost:4444/api/destination/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

destinationBtn.addEventListener('click', getDestination)

const getPlaces = () => {
    axios.get(`${baseURL}/places`)
    .then((res)=>{
        console.log(res.data)
        displayPlaces(res.data)
    })
    .catch((err) => console.log(err))
};

function createPlaceCard(place){
    console.log(place)
    const placeCard = document.createElement('div')
    placeCard.classList.add('place-card')
    placeCard.setAttribute("id",place.id)
    placeCard.innerHTML = `<img alt='${place.name}' src=${place.img} class="place-image"/>
    <p class="name" style="color: #fff;">${place.name}</p>
    <button class="place-btn" onclick="alreadyVisited(${place.id})">ALREADY VISITED</button>
    `
    placesContainer.appendChild(placeCard)
}

function displayPlaces(arr){
    placesContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createPlaceCard(arr[i])
    }
}

getPlaces();


function alreadyVisited(e){
   const card = (document.getElementById(e))
   console.log(card)
   card.remove()
    // console.log(e)
    // axios.delete(`${baseURL}/remove?id=${e}`)
    // .then((res) => {placesContainer.remove(document.getElementById(`place-card-${e}`))
    // console.log(res.data)
    // })
    // .catch(err => console.log(err))
}
