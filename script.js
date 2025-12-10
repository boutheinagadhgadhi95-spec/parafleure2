let nombreProduits = 0;

function ajouterAuPanier(nomProduit, prix) {
    // Nzidou 1 fil 7seb
    nombreProduits = nombreProduits + 1;
    
    // Nbaddlou el ra9m elli fou9 el panier
    document.getElementById("panier-count").innerText = nombreProduits;
    
    // Ntall3ou message sghir (Alert)
    alert(nomProduit + " tzed fil panier mte3ek! (Prix: " + prix + " DT)");
}
