$(document).ready(function() {
  //Shopping list
// Goal is to take user input, creat an alphabatized list that is displayed
//on the page in a <ul>, afterwhich the form dissapears.

//noSpaces(list) strips an array of empty strings from extra line breaks
  function noSpaces(list){
    var i = 0;
    list.forEach(function(item){
      if (item === ""){
        i ++
      }
    })
    return list.slice(i);
  };
//#listSubmit on click function.  logs for testing
  $('#listSubmit').click(function(){
    var userInput = $('textarea').val();
    console.log(userInput);
    console.log(noSpaces(userInput.split('\n').sort()));
    var inputReady = noSpaces(userInput.split('\n').sort());
    inputReady.forEach(function(listItem){
      $('#listOutput').append('<li>' + listItem + '</li>');
    });
    $('#listInput').addClass('gone');
  });

// Wordplay
// excerise take a string input from user, turns it into an array, filters out word
// that are shorter than three characters, reverses the new array, and displays the output as a
// string to the user
  $('#wordPlaySubmit').click(function(){
    var userInput = $('input[name="wpInput"]').val();
    console.log(userInput);
    var inputArray = userInput.split(" ");
    console.log(inputArray);
    var filteredInput = inputArray.filter(word => word.length >= 3);

    console.log(filteredInput);
    console.log(filteredInput.reverse().toString());
    $('.wordPlayOutput').text(filteredInput.reverse().toString().replace(/,/g," "));

  })






})
