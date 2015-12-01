// var search_term = $("#user_search").val();
// // console.log(search_term);
//
// var getter = $.ajax({
//   url: "https://www.reddit.com/subreddits/search.json?q=ouya"+search_term,
//   method: "GET",
//   dataType: "json"
// });



//grab search_term val
// use the search_term to sort through the objects
// once a match is found return that object
// grab that information and display/append it to the page in a table


$(document).ready(function(){
  //console.log("Hello World!");
  $('#find').click(function(){
  var search_term = $("#user_search").val();
     //console.log(search_term);

    var getter = $.ajax({
      url: "https://www.reddit.com/subreddits/search.json?q="+search_term,
      method: "GET",
      dataType: "json"
    });

    // $('#trigger').click(function(){
    //   	$('#tabl').append("<tr><td>Chris</td><td>"+age+"</td><td>Denver</td></tr>");
    //     age++;
    //   });


    getter.done(function(response){
      console.log(response);
      // console.log(response['data']['children']);
      var arr = response['data']['children'];
      console.log(arr.length);
      for(i=0; i<arr.length; i++){
        var title = arr[i]['data']['title'];
        var name = arr[i]['data']['name'];
        var img = "<img src=" +arr[i]['data']['header_img']+ "/>" ;
        if(img === null){
          img = '<img src ="https://placehold.it/100x100"/>';
        };
        $('#results').append("<tr><td>"+title+"</td><td>"+name+"</td><td>"+img+"</td></tr>");

    };





  });
});
})
