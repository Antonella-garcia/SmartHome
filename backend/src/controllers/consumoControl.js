const conControl = {};
const db = require("./database.js");


conControl.getTop10 = (req,res)=>{
    var Claves = new Array();
    var Valores = new Array();
    //var result2;
    //var result3;
    //var result4;
    db.query("Select AVG(Well), AVG(Barn), AVG(Solar), AVG(Garage_door) FROM OUTSIDE", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        Claves = Claves.concat(Object.keys(result[0]));
        Valores = Valores.concat(Object.values(result[0]));
        
    });
    db.query("Select AVG(Living_Room), AVG(Home_office), AVG(Wine_cellar) FROM ROOM", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        Claves = Claves.concat(Object.keys(result[0]));
        Valores = Valores.concat(Object.values(result[0]));
    });
    db.query("Select AVG(Furnace1), AVG(Furnace2) FROM ATTIC", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        Claves = Claves.concat(Object.keys(result[0]));
        Valores = Valores.concat(Object.values(result[0]));
    });
    db.query("Select AVG(Dishwasher), AVG(Fridge), AVG(Microwave), AVG(Kitchen12), AVG(Kitchen14), AVG(Kitchen38) FROM KITCHEN", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        Claves = Claves.concat(Object.keys(result[0]));
        Valores = Valores.concat(Object.values(result[0]));
        function comparar(a, b) {
            return b - a;
        }
        var resultado = new Array(0);
        var vectorOrden = Valores.slice().sort(comparar);
        var cont = 0;
        while(cont<10){
            ind = Valores.indexOf(vectorOrden[cont])
            resultado.push({"Puesto":(cont+1),"Electrodomestico":Claves[ind].slice(4,-1),"Consumo":Valores[ind]});
            cont=cont+1;
        }
        res.json(resultado);
    });    
}

conControl.getconsuRefri = (req,res)=>{
    var consumos = new Array();
    var tiempo = new Array();
    db.query("Select Fridge, id_registro FROM KITCHEN ORDER BY Fridge DESC LIMIT 20", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        for(e in result){
            consumos = consumos.concat(Object.values(result[e])[0]);
            tiempo = tiempo.concat(Object.values(result[e])[1]);
        }
        function comparar(a, b) {
            return a - b;
        }
        var resultado = new Array(0);
        var vectorOrden = tiempo.slice().sort(comparar)
        for(t in vectorOrden){
            ind = tiempo.indexOf(vectorOrden[t])
            resultado.push({"Consumo":consumos[ind],"Tiempo":Math.round((tiempo[ind])/60)});
        }
        res.json(resultado);
    });
}

conControl.getconsuCocina = (req,res)=>{
    var Claves = new Array();
    var Valores = new Array();
    db.query("Select AVG(Kitchen12), AVG(Kitchen14), AVG(Kitchen38) FROM KITCHEN", (err,result,fields)=>{
        if (err) {
            res.status(500).send(err);
            console.log(err);
            return;
        }
        Claves = Claves.concat(Object.keys(result[0]));
        Valores = Valores.concat(Object.values(result[0]));
        function comparar(a, b) {
            return a - b;
        }
        var resultado = new Array(0);
        var vectorOrden = Valores.slice().sort(comparar);
        var cont = 0;
        while(cont<3){
            ind = Valores.indexOf(vectorOrden[cont])
            resultado.push({"Puesto":(cont+1),"Electrodomestico":Claves[ind].slice(4,-1),"Consumo":Valores[ind]});
            cont=cont+1;
        }
        res.json(resultado);
    });
}


module.exports = conControl;
