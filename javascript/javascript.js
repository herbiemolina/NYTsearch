

(document).ready(function(){

    var query =  "election";
    var APIkey = "KgZBBCP50HpNdORxSMxslTi1P49yGELS"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + query +"&api-key=" + APIkey
    
$.ajax({
    url: queryURL,
    method: “GET”
  })
  .then(function(output) {

    console.log(output);

  });

  });