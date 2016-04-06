var userInput = 0;
var movie = {};

$(function(){

  $.get('http://www.omdbapi.com/?t=pokemon+the+first+movie&y=&plot=short&r=json').done(function(response){
    console.log(response);
    movie = response;
    $('#img1').attr('src',movie.Poster);
    $('#movie1').append('<p>' + movie.Title + '</p>')
    $('#movie1').append('<p>' + movie.Plot + '</p>')
    });
  $.get('http://www.omdbapi.com/?t=the+bounty+hunter&y=&plot=short&r=json').done(function(response){
    movie = response;
    $('#img2').attr('src',movie.Poster);
    $('#movie2').append('<p>' + movie.Title + '</p>')
    $('#movie2').append('<p>' + movie.Plot + '</p>')
    });
  $.get('http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json').done(function(response){
    movie = response;
    $('#img3').attr('src',movie.Poster);
    $('#movie3').append('<p>' + movie.Title + '</p>')
    $('#movie3').append('<p>' + movie.Plot + '</p>')
    });

  $("#showMovie1").on("click", function(){
    $("#movie1").show(1200);
  });
  $("#showMovie2").on("click", function(){
    $("#movie2").show(1200);
  });
  $("#showMovie3").on("click", function(){
    $("#movie3").show(1200);
  });
    $("#hideMovie1").on("click", function(){
    $("#movie1").hide(1200);
  });
  $("#hideMovie2").on("click", function(){
    $("#movie2").hide(1200);
  });
  $("#hideMovie3").on("click", function(){
    $("#movie3").hide(1200);
  });
    

  $("#getMovie").on("click", function(){
    getUserInput();
    getTheMovie(); 
  });

  function getTheMovie(){
    $.get('http://www.omdbapi.com/?t=' + userInput + '&y=&plot=short&r=json').done(function(response){
      console.log(response);
      movie = response;
      $('#newMovie').attr('src',movie.Poster);
      });
    }


  function getUserInput(){
    //clear();
    
    userInput = $("#theInput").val();
    $("#theInput").val("userInput");
    return (userInput);
  }
  })

  // function clear(){
  //   ('.userMovie').remove();
  // }