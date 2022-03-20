var unirest = require("unirest");

// la 1ere question : afficher les 10 premiers enregistrements.
var req = unirest( "GET" , "http://localhost:3000/currencies?_limit=10" );


// la fonction qui permet de filtrer les ressources qui commence par M .
function filtrer_M(lien) {
    lien = lien + "?$filter=startswith(informations_generals.name,'M')" ;
    var req = unirest( "GET" , url ) ;
}

req.headers({
        "cache-control": "no-cache",
    })
    
req.end(function (res) {
        if (res.error) throw new Error(res.error)
        console.log(res.body)
    })
 