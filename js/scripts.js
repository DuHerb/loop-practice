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






})
