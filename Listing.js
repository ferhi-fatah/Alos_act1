var unirest = require("unirest");

// la 1ere question : afficher les 10 premiers enregistrements :
var req = unirest( "GET" , "http://localhost:3000/currencies?_limit=10" );


// la fonction qui permet de filtrer les ressources qui commence par M :
function filtrer_M( URL ) {
    
    URL = URL + "?$filter=startswith(name,'M')" ;
    var req = unirest( "GET" , URL ) ;
}


req.headers({
        "cache-control": "no-cache",
    })
    

req.end(function (res) {
        if (res.error) throw new Error(res.error)
        console.log(res.body)
    })
 
