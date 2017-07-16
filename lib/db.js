var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
require('dotenv').config();

var url = 'mongodb://'+ process.env.DB_HOST+'/'+process.env.DB_NAME;

// Connect using MongoClient

/**/
function readAll(collection, results){
  collection.find({}, results);
};

/**/
function printResults(results) {  
    // make sure you found your account!
    var result = JSON.stringify(results);
    if (!result) {
        console.log("Couldn't find the account you asked for!");
    }
    console.log("= " + typeof(result) + " and " + results);
}

module.exports= {
	get_user: function(){
	  MongoClient.connect(url, function(err, db) {
              if (err) throw err;
              /**/
            });
	},
	get_toppings: function(results){
	  MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
      var toppings = db.collection("toppings");
      
      /**/
      /*function process_toppings(err, toppings){
        if (err) throw err;
        toppings.each(function(topping) {
          if(topping != null) printResults(topping);
        });
      }*/
      
      readAll(toppings, results);
      
      console.log("========");
      db.close();
      
    });
	},
	/*get cheese from database*/
	get_cheese: function(){
	  MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var cheese = db.collection("cheese");
      
      /**/
      function process_cheese(err, cheese){
        if (err) throw err;
        cheese.each(function(cheese) {
          if(cheese != null) printResults(cheese);
        });
      }
      
      readAll(cheese, process_cheese);
      
      console.log("========");
      db.close();
      
    });
	},
	/*get crusts from database*/
	get_crusts: function(){
	  MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
      var crusts = db.collection("crusts");
      
      /**/
      function process_crusts(err, crusts){
        if (err) throw err;
        crusts.each(function(crusts) {
          if (crusts != null) printResults(crusts);
        });
      }
      
      readAll(crusts, process_crusts);
      
      console.log("========");
      db.close();
      
    });
	},
	/*get sauces from database*/
	get_sauce: function(){
	  MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
      var sauce = db.collection("suace");
      
      /**/
      function process_sauce(err, sauce){
        if (err) throw err;
        sauce.each(function(sauce) {
          if (sauce != null) printResults(sauce);
        });
      }
      
      readAll(sauce, process_sauce);
      
      console.log("========");
      db.close();
      
    });
	}
};