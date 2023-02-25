
class Renderer {




    renderUsers(mainUser) {


        let source = $("#user-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template(mainUser)

        $(".user-container").empty().append(newHTML);
    }


    renderFriends(friends) {
        let source = $("#friends-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({friends})
       
        $(".friends-container").empty().append(newHTML);
    }


    renderQuote(quote) {


        let source = $("#quote-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({quote})

        $(".quote-container").empty().append(newHTML);
    }



    
    renderPokemon(pokemon) {


        let source = $("#pokemon-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template(pokemon)
        
        $(".pokemon-container").empty().append(newHTML);
    }



    renderMeat(meat) {


        let source = $("#meat-template").html();
        let template = Handlebars.compile(source);
        let newHTML = template({meat})

        $(".meat-container").empty().append(newHTML);
    }


 render(data) {
    console.log(data);
        this.renderUsers(data.mainUser)
        this.renderFriends(data.friends)
        this.renderQuote(data.quote)
        this.renderPokemon(data.pokemon)
        this.renderMeat(data.meat)
    }
}