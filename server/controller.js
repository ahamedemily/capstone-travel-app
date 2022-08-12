const places = [
    {
        id:1,
        name:'Brazil',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Map_of_Brazil_with_flag.svg/1200px-Map_of_Brazil_with_flag.svg.png'
    },
    {
        id:2,
        name:'Costa Rica',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Map_and_flag_of_Costa_Rica.svg/2154px-Map_and_flag_of_Costa_Rica.svg.png'
    },
    {
        id:3,
        name:'Italy',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_map_of_Italy.svg/1791px-Flag_map_of_Italy.svg.png'
    },
    {
        id:4,
        name:'France',
        img:'https://cdn.pixabay.com/photo/2016/03/31/22/02/borders-1296793__340.png'
    },
    {
        id:5,
        name:'Hawaii',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag-map_of_Hawaii.svg/800px-Flag-map_of_Hawaii.svg.png'
    },
    {
        id:6,
        name:'Jamaica',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Flag-map_of_Jamaica.svg/2560px-Flag-map_of_Jamaica.svg.png'
    },
    {
        id:7,
        name:'Tulum',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mexico_Flag_Map.svg/1200px-Mexico_Flag_Map.svg.png'
    },
    {
        id:8,
        name:'Dubai',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Flag_map_of_the_United_Arab_Emirates.svg/915px-Flag_map_of_the_United_Arab_Emirates.svg.png'
    },
    {
        id:9,
        name:'Turks & caicos',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag-map_of_the_Turks_and_Caicos_Islands.svg/2560px-Flag-map_of_the_Turks_and_Caicos_Islands.svg.png'
    },
    {
        id:10,
        name:'Barcelona',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Flag_map_of_Spain.svg/2492px-Flag_map_of_Spain.svg.png'
    },
]
module.exports = {
    
    getDestination: (req, res) => {
        const destinations = ["COSTA RICA","BALI","HAWAII","DUBAI","ITALY","FRANCE","BRAZIL","JAMAICA","FLORIDA","BORA BORA","TULUM","TURKS & CAICOS","MALDIVES","TOKYO","BARCELONA","ST. LUCIA","AUSTRALIA","GREECE","MEXICO"];
      
        // choose random destination
        let randomIndex = Math.floor(Math.random() * destinations.length);
        let randomDestination = destinations[randomIndex];
      
        res.status(200).send(randomDestination);
    },
    getPlaces: (req,res) => res.status(200).send(places),
    
    alreadyVisited: (req,res) => {
        const {id} = req.query;
        const index = places.findIndex((place) => place.id === +id)
        if(index === -1){
            res.status(400).send("place not found")
        } else {
            places.splice(index,1)
            res.status(200).send(places)
        }
    }
}