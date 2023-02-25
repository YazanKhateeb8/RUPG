//This is the class that will manage all your APIs

class APIManager {
  constructor() {
    this.data = {};
  }



  randomUserApi() {

    $.get("https://randomuser.me/api/?results=7")
        .then((data) => {
        let users = data.results;
        let firstUser = data.results.splice(0,1)[0]


        const mainUser = {
            firstName : firstUser.name.first,
            lastName : firstUser.name.last,
            city : firstUser.location.city,
            state : firstUser.location.state,
            picture : firstUser.picture.large
        }


        const friends = users.map(u => {
            return {
            firstName : u.name.first,
            lastName : u.name.last,
            }
        })

        this.data.mainUser = mainUser;
        this.data.friends = friends;
        
    })


    .catch(error =>{
        console.log(error);
    })


  }



  

  randomQuoteApi(){

    $.get("https://api.kanye.rest/")
        .then((data) =>{
            this.data.quote = data.quote;
        })
        .catch(error =>{
            console.log(error);
        })

  }




  randomPokeApi(){
    let randomNumber = Math.floor(Math.random() * 800)
    
    $.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
        .then((data) =>{
            
            let pokemon = {
                name: data.name,
                image : data.sprites.front_default
            }

            this.data.pokemon = pokemon;

        })
        .catch(error =>{
            console.log(error);
        })

  }


  randomMeatApi(){
    $.get("https://baconipsum.com/api/?type=all-meat&paras=1")
        .then((data) =>{
            this.data.meat = data;
        })
        .catch(error =>{
            console.log(error);
        })

  }




}
