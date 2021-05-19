$(function () {
//    console.log(tarsasJson);
//    var tarsasTomb = JSON.parse(tarsasJson);
//    console.log(tarsasTomb);

    $.ajax({
        url: "termekek.json",
        success: function (result) {
            console.log(result);
            tarsasTomb = result;
            kiir();
        }}
    );
    
    $("#OK").click(betolt);
    
});
var tarsasTomb = [];

function betolt(){
    var ujAdat = {};
    ujAdat.termeknev = $("#nev").val();
    ujAdat.ar = $("#ar").val();
    ujAdat.tipus = "Táblás";
    
    console.log(ujAdat);
    
    tarsasTomb.push();
    kiir();
}

function kiir (){
    console.log(tarsasTomb);
    
    $("article").append("<table>");
    $("article table").append("<tr>");
    $("article table tr").append("<th>Terméknév: </th>");
    $("article table tr").append("<th>Ár: </th>");
    $("article table tr").append("<th>Típus: </th>");
    
    for (var i = 0; i < tarsasTomb.length; i++) {
        $("article table").append("<tr>");
        
        for (var item in tarsasTomb[i]) {
            $("article table tr").eq(i+1).append("<td>" + tarsasTomb[item] + "</td>");
        }
//        $("article table tr").eq(i+1).append("<td>" + tarsasTomb[0].termeknev + "</td>");
//        $("article table tr").eq(i+1).append("<td>" + tarsasTomb[1].ar + "</td>");
//        $("article table tr").eq(i+1).append("<td>" + tarsasTomb[2].tipus + "</td>");
    }
}
//objektum szerkezet létrehozása
//var tarsasTomb = [
//    {
//        termeknev:"Monopoly",
//        ar:1500,
//        tipus:"táblajáték"
//    },
//    {
//        termeknev:"Uno",
//        ar:1000,
//        tipus:"kártyajáték"
//    }
//];
//JSON: szöveges, szabványos adatleíró formátum -> megfeleltethető a java script objektumának
//var tarsasJson = '[{"termeknev":"Monopoly","ar":1500,"tipus":"táblajáték"},{"termeknev":"Uno","ar":1000,"tipus":"kártyajáték"}]';