

//Makes image set out of the images in Parse
 
Parse.Cloud.define("makeImageSet", function(request, response) {
        

	var Set = Parse.Object.extend("Set");

	//var imageSets = [];
	var imageCollections = new Array(17);
	//var collection = new Collection();

	console.log("THIS IS RUNNING");

	var queryCA = new Parse.Query("Images");
	queryCA.limit(170);
	queryCA.equalTo("category", "CA");
	queryCA.equalTo("healthy", true);

	var results = "Retrieved all Posts:\n"

	queryCA.find().then(function(results) {
		
		imageCollections = gatherResults(results, imageCollections, "CA", 8)

		var queryCB = new Parse.Query("Images");
		queryCB.limit(170);
		queryCB.equalTo("category", "CB");
		queryCB.equalTo("healthy", true);

		return queryCB.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "CB", 8)

		var queryCC = new Parse.Query("Images");
		queryCC.limit(170);
		queryCC.equalTo("category", "CC");
		queryCC.equalTo("healthy", true);

		return queryCC.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "CC", 8)

		var queryCD = new Parse.Query("Images");
		queryCD.limit(170);
		queryCD.equalTo("category", "CD");
		queryCD.equalTo("healthy", true);

		return queryCD.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "CD", 8)

		var queryVA = new Parse.Query("Images");
		queryVA.limit(170);
		queryVA.equalTo("category", "VA");
		queryVA.equalTo("healthy", true);

		return queryVA.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "VA", 8)

		//Prints Results
		// console.log("Calling Print ");
		// for (p = 0; p < imageCollection.length; p++){

		// 	var im = imageCollection[p];

		// 	if (im[0] != null && im[1] != null && im[2] != null && im[3]  != null && im[4] != null){
		// 		var message = "Keys:" + im[0]["key"] + im[1]["key"] + im[2]["key"]+ im[3]["key"] + im[4]["key"];
		// 		console.log(message);
		// 	}
			
		// }

		//Add healthy images to the Set
		// imageSets.push(imageCollection);
		// imageCollection = new Array(17)


		//UNHEALTHY Images
		var queryUA = new Parse.Query("Images");
		queryUA.limit(170);
		queryUA.equalTo("category", "UA");
		queryUA.equalTo("healthy", false);

		return queryUA.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "UA", 3)

		var queryUB = new Parse.Query("Images");
		queryUB.limit(170);
		queryUB.equalTo("category", "UB");
		queryUB.equalTo("healthy", false);

		return queryUB.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "UB", 3)

		var queryUC = new Parse.Query("Images");
		queryUC.limit(170);
		queryUC.equalTo("category", "UC");
		queryUC.equalTo("healthy", false);

		return queryUC.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "UC", 3)

		var queryUV = new Parse.Query("Images");
		queryUV.limit(170);
		queryUV.equalTo("category", "UV");
		queryUV.equalTo("healthy", false);

		return queryUV.find();
	}).then(function(results) {

		imageCollections = gatherResults(results, imageCollections, "UV", 3)

		return Parse.Object.saveAll(imageCollections)

    }).then(function(saved_objects){

		var set = new Set();
		set.set("Collections", imageCollections)


		// //Prints Results
		// console.log("Calling Print ");
		// for (p = 0; p < imageCollection.length; p++){

		// 	var im = imageCollection[p];

		// 	if (im[0] != null && im[1] != null && im[2] != null && im[3]  != null){
		// 		var message = "Keys:" + im[0]["key"] + im[1]["key"] + im[2]["key"]+ im[3]["key"];
		// 		console.log(message);
		// 	}
			
		// }


		response.success(imageCollections);

	    // var Set = Parse.Object.extend("CollectionSets");
	    // var set = new Set();
	 
	    // set.set("unhealthySets", imageSets[1][0]["UV"]);
	    // set.set("healthySets", imageSets[0][0]["VA"]);
	    // 
	    // 
	    
	    
	    // for (h = 0; h < imageSets[0].length; h++){
	    // 	catDict = imageSets[0][h];

	    // 	console.log(catDict);


	    // }
	    console.log(imageCollections.length);

 		for (h = 0; h < imageCollections[0].length; h++){
	    	console.log(imageCollections[0][h].get("type"));

		}

	 
	    //console.log(imageSets.length)

	    //return imageSet.save()

		return set.save();

	}, function(error) {
	    // Make sure to catch any errors, otherwise you may see a "success/error not called" error in Cloud Code.
	    response.error("Could not make image set");
	    console.log("Error");
  });
	//}



  // var queryHealthy = new Parse.Query("Images");
  // queryHealthy.limit(1000)
  // queryHealthy.exists("category");
  // queryHealthy.equalTo("healthy", true);
   
 
  // var results = "Retrieved all Posts:\n"
 
  // queryHealthy.find().then(function(results) {
  //   var healthyImages = [];
 
  //   //response.success(results.length);
  //   shuffle(results)
 
  //   if (results.length >= 16) {
       
  //     for (var i = 0; i < 16; ++i) {
  //        healthyImages.push(results[i].get("picture"));
  //     }
       
  //   }
  //   imageSets.push(healthyImages);
  //   console.log(healthyImages.length);
 
  //   var queryUnhealthy = new Parse.Query("Images");
  //   queryUnhealthy.limit(1000)
  //   queryUnhealthy.equalTo("healthy", false);
 
 
  //   return queryUnhealthy.find();
     
  // }).then(function(results) {
  //   shuffle(results)
  //   var unhealthyImages = [];
  //   if (results.length >= 4) {
  //     for (var i = 0; i < 4; ++i) {
  //       unhealthyImages.push(results[i].get("picture"));
  //     }
  //   }
  //   imageSets.push(unhealthyImages);
  //   console.log(unhealthyImages.length);
 
  //   response.success(imageSets);
 
  //   var ImageSet = Parse.Object.extend("ImageSets");
  //   var imageSet = new ImageSet();
 
  //   imageSet.set("unhealthyImages", imageSets[1]);
  //   imageSet.set("healthyImages", imageSets[0]);
 
  //   return imageSet.save()
 
  // }, function(error) {
  //   // Make sure to catch any errors, otherwise you may see a "success/error not called" error in Cloud Code.
  //   response.error("Could not make image set");
  //   console.log("Error");
  // });
 
});
 
Parse.Cloud.define("getRank", function(request, response) {
 
  var query = new Parse.Query(request.params.type);
 
  query.exists("score");
  query.notEqualTo("control", true);
  query.greaterThan("score", request.params.score);
  query.descending("score");
  query.limit(1000);
 
  query.find({
    success: function(results) {
       
      response.success(results.length + 1);
    },
    error: function(error) {
      response.error("ranking failed");
    }
  });
});
 
 
function gatherResults(results, imageCollections, category, numPer){

	shuffle(results);

	var Category = Parse.Object.extend("Category");
	//var Collection = Parse.Object.extend("Collection");

	var count = 0

	if (results.length >= 17*numPer) {

		for (var j = 0; j < 17; j++) {

			var collArray = [];
			var catArray = [];
			//var collection = new Collection();


			for (var k = 0; k < numPer; k++) {
				
				
		 		collArray.push(results[count].get("picture"));

		 		count++;

			}


			if (imageCollections[j] != null) {
				catArray = imageCollections[j];

			}

			var cat = new Category();

			cat.set("type", category);
			cat.set("images", collArray);			

			cat.save();

			//collection.set[category, cat];
			catArray.push(cat);

			//images.push(cat);
			imageCollections[j] = catArray;

		}

	}

	return imageCollections
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;
 
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
 
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
 
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
 
  return array;
}