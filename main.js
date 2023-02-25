let manageApi = new APIManager()
let renderer = new Renderer()



$("#load").click(function () {
    manageApi.randomUserApi()
    manageApi.randomQuoteApi()
    manageApi.randomPokeApi()
    manageApi.randomMeatApi()

})

$("#display").click(function () {
    renderer.render(manageApi.data)
})                           