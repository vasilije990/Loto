
var  container = $('<div class="cont" >  ');
var  logo = $('<div class="logo" >  ');
$('body').append(logo);
var  brojevi = $('<div class="brojevi" >  ');
for ( var j=1; j<=10; j++ ){
  var todo = $('<div  class="todo_' + j + '" > ');

  for ( var i=0; i<=39; i++ ){
    if ( i===0 )
    {  
      var h3 = $('<h3  class="tod_' + j + '" >');
      h3.text(j);
      todo.append(h3);

    }
    else{
      if( (i-1)%3==0 ){
        var br = $('<br>');
        br.text();
        todo.append(br);

      }  if( (i-1)%9==0 && i !== 1 && i<29  ){
        var hr = $('<hr>');
        hr.text();
        todo.append(hr);

      }
    var p = $('<p  id="todo_' + j +'" > ');
    p.text(i);
    todo.append(p);
  }
  container.append(todo);
}
}
var  rand = $('<div class="rand">');

$('body').append(container);

var  butto = $('<button>');
$(butto).append('Igraj');
rand.append(butto);

var  brisi = $('<button class="brisa">');
$(brisi).append('Brisi');
rand.append(brisi);


var  broj = $('<h2>');
rand.append(broj);
$('body').append(rand);
var  listic1 = $('<h4 class="listic1"   >');
var  listic2 = $('<h4 class="listic2"   >');
var  listic3 = $('<h4 class="listic3"   >');
var  listic4 = $('<h4 class="listic4"   >');
var  listic5 = $('<h4 class="listic5"   >');
var  listic6 = $('<h4 class="listic6"   >');
var  listic7 = $('<h4 class="listic7"   >');
var  listic8 = $('<h4 class="listic8"   >');
var  listic9 = $('<h4 class="listic9"   >');
var  listic10 = $('<h4 class="listic10"   >');


brojevi.append(listic1);
brojevi.append(listic2);
brojevi.append(listic3);
brojevi.append(listic4);
brojevi.append(listic5);
brojevi.append(listic6);
brojevi.append(listic7);
brojevi.append(listic8);
brojevi.append(listic9);
brojevi.append(listic10);

$('body').append(brojevi);
$(".rand").css({'clear': 'both' ,'width': '713px ', 'margin': 'auto'});
$(".logo").css({  'background-image': 'url(logo.jpg)' , 'width':'300px' , 'height':'100px', 'background-repeat' : 'no-repeat' , 'background-size': 'cover','margin': 'auto'  });
$("h2").css({'cursor':'pointer', 'display':'inline-block','text-align':'center','background-color': "white", 'padding': '15px 20px', 'clear': 'both', 'margin': '5px' });
$("button").css({'cursor':'pointer', 'display':'inline-block','text-align':'center','background-color': "red", 'padding': '15px 20px', 'clear': 'both', 'font-size': '20px','color': 'white',
'border': '0','margin-right': '10px' });
$('.brojevi').css({ 'display':'block',  'width': '713px',
'margin':'auto'});
$('div.cont').css({ 'overflow-x': 'hidden' , 'border':'1px solid red','border-top': '0', 'display':'block', 'margin' : 'auto', 'margin-bottom':'10px', 'width':'713px' });
$('[class^="todo"] ').css({ 'border':'1px solid red','border-top': '0', 'display':'inline-block' , 'float': 'left' });
$("h4").css({'margin' : '5px' ,'background-color': "white", 'padding': '0px','width':'45%', 'display':'inline-block',    'float': 'left' });
$("p").css({'cursor':'pointer', 'display':'inline-block','width':'17px','border':'1px solid red','color':'red','text-align':'center','margin' : '2px' ,'background-color': "white" });
$("[class^='tod_']").css({ 'color': 'white' , 'text-align': 'center' , 'background-color' : 'red', 'margin': '0 3px', 'padding-top': '3px' , 'padding-bottom': '3px' });
$("hr").css({'color' : 'red','padding': '0','margin':'0', 'background-color' : 'red',  'border':'1px solid   red'  });
$("body").css({ 'overflow-x': 'hidden'  });

var niz=[];
var niz1=[];
var niz2=[];
var niz3=[];
var niz4=[];
var niz5=[];
var niz6=[];
var niz7=[];
var niz8=[];
var niz9=[];

$('p').on('click', function(){

$(brisi).on('click', function(){  $('p').css({'background-color': "white", 'color': 'red'  }); $( "h2" ).empty();})
$(brisi).on('click', function(){  $( listic1 ).empty();$( listic2 ).empty();$( listic3 ).empty();$( listic4 ).empty();$( listic5 ).empty();$( listic6 ).empty();
$( listic7 ).empty();$( listic8).empty();$( listic9).empty();$( listic10 ).empty();})
$(brisi).on('click', function(){ return niz=[];})
$(brisi).on('click', function(){ return niz1=[];})
$(brisi).on('click', function(){ return niz2=[];})
$(brisi).on('click', function(){ return niz3=[];})
$(brisi).on('click', function(){ return niz4=[];})
$(brisi).on('click', function(){ return niz5=[];})
$(brisi).on('click', function(){ return niz6=[];})
$(brisi).on('click', function(){ return niz7=[];})
$(brisi).on('click', function(){ return niz8=[];})
$(brisi).on('click', function(){ return niz9=[];})
  var uu=$(this).attr('id')
  var tt= uu.replace( "todo_", "" );
  var elem=$( this ).html();
  elem = Number(elem);
  tt = Number(tt); 

  var color =   $( this).css( "background-color" );
  var por =  'rgb(255, 0, 0)';

  if (color === por ){
   $(this).css({'background-color': "white", 'color': 'red'  })
   switch (tt) {
    case 1:

    niz = jQuery.grep(niz, function(value) {
      return value != (elem);
    }); 
    return niz;
    break;
    case 2:
    niz1 = jQuery.grep(niz1, function(value) {
      return value != (elem);
    }); 
    return niz1;
    break;
    case 3:

    niz2 = jQuery.grep(niz2, function(value) {
      return value != (elem);
    }); 
    return niz2;
    break;
    case 4:

    niz3 = jQuery.grep(niz3, function(value) {
      return value != (elem);
    }); 
    return niz3;
    break;
    case 5:

    niz4 = jQuery.grep(niz4, function(value) {
      return value != (elem);
    }); 
    return niz4;
    break;
    case 6:

    niz5 = jQuery.grep(niz5, function(value) {
      return value != (elem);
    }); 
    return niz5;
    break;
    case 7:

    niz6 = jQuery.grep(niz6, function(value) {
      return value != (elem);
    }); 
    return niz6;
    break;
    case 8:

    niz7 = jQuery.grep(niz7, function(value) {
      return value != (elem);
    }); 
    return niz7;
    break;
    case 9:

    niz8 = jQuery.grep(niz8, function(value) {
      return value != (elem);
    }); 
    return niz8;
    break;
    case 10:

    niz9 = jQuery.grep(niz9, function(value) {
      return value != (elem);
    }); 
    return niz9;
    break;

    default:
    break;  
  }


}
else {
  switch (tt) {
    case 1:
    if(niz.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz.push(elem);
       return niz;
    }
    break;
    case 2:
    if(niz1.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz1.push(elem);
       return niz1;
    }
    break;
    case 3:
    if(niz2.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz2.push(elem);
   return niz2;
    }
    break;
    case 4:
    if(niz3.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz3.push(elem);
   return niz3;
    }
    break;

    case 5:
    if(niz4.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz4.push(elem);
   return niz4;
    }
    break;
    case 6:
    if(niz5.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz5.push(elem);
      return niz5;
    }
    break;  
    case 7:
    if(niz6.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz6.push(elem);
      return niz6;
    }
    break;  
    case 8:
    if(niz7.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz7.push(elem);
      return niz7;
    }
    break;
    case 9:
    if(niz8.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz8.push(elem);
      return niz8;
    }
    break;
    case 10:
    if(niz9.length < 7 ){
      $(this).css({'background-color': "red", 'color': 'white' })
      niz9.push(elem);
      return niz9;
    }
    break;
    default:
    break;  
  }
  tt=0;

}


})



 // var index = $(niz).index(elem);
  //  index = Number(index);
  function generateNumber(maxNumber) {
    return Math.floor(Math.random() * maxNumber) + 1;
  }

  function pushIfNumberIsCorrect(testArray, testNumber){
    if (testArray.indexOf(testNumber) === -1) {
      testArray.push(testNumber);

    }
  }

  function lotoGenerator (numberOfNumbers, maxNumber) {
    var lotoArray = [];
    var testNumber;
    while (lotoArray.length < numberOfNumbers) {
      testNumber = generateNumber(maxNumber);
      pushIfNumberIsCorrect(lotoArray, testNumber);
    }
    return lotoArray;
  }
  $(butto).on('click', function(){
    $(brisi).on('click', function(){  $('p').css({'background-color': "white", 'color': 'red'  }); $( "h2" ).empty();})
$(brisi).on('click', function(){  $( listic1 ).empty();$( listic2 ).empty();$( listic3 ).empty();$( listic4 ).empty();$( listic5 ).empty();$( listic6 ).empty();
$( listic7 ).empty();$( listic8).empty();$( listic9).empty();$( listic10 ).empty();})
    var rand_niz=lotoGenerator(7, 39);
    
    $( "h2" ).empty();
    $(broj).append( 'Dobitna kombinacija: '+rand_niz.join(", "));

var pog1=rand_niz.filter(function(n) { return niz.indexOf(n) != -1;});
var pog2=rand_niz.filter(function(n) { return niz1.indexOf(n) != -1;});  
var pog3=rand_niz.filter(function(n) { return niz2.indexOf(n) != -1;});  
var pog4=rand_niz.filter(function(n) { return niz3.indexOf(n) != -1;});  
var pog5=rand_niz.filter(function(n) { return niz4.indexOf(n) != -1;});  
var pog6=rand_niz.filter(function(n) { return niz5.indexOf(n) != -1;});  
var pog7=rand_niz.filter(function(n) { return niz6.indexOf(n) != -1;});  
var pog8=rand_niz.filter(function(n) { return niz7.indexOf(n) != -1;});  
var pog9=rand_niz.filter(function(n) { return niz8.indexOf(n) != -1;});  
var pog10=rand_niz.filter(function(n){ return niz9.indexOf(n) != -1;});  
$( listic1 ).empty();
listic1.append('Listic 1: ' + pog1.length+ ' pogodak  ['+pog1.join(", ")+']');
$( listic2 ).empty();
listic2.append('Listic 2: ' + pog2.length+ ' pogodak  ['+pog2.join(", ")+']');
$( listic3 ).empty();
listic3.append('Listic 3: ' + pog3.length+ ' pogodak  ['+pog3.join(", ")+']');
$( listic4 ).empty();
listic4.append('Listic 4: ' + pog4.length+ ' pogodak  ['+pog4.join(", ")+']');
$( listic5 ).empty();
listic5.append('Listic 5: ' + pog5.length+ ' pogodak  ['+pog5.join(", ")+']');
$( listic6 ).empty();
listic6.append('Listic 6: ' + pog6.length+ ' pogodak  ['+pog6.join(", ")+']');
$( listic7 ).empty();
listic7.append('Listic 7: ' + pog7.length+ ' pogodak  ['+pog7.join(", ")+']');
$( listic8 ).empty();
listic8.append('Listic 8: ' + pog8.length+ ' pogodak  ['+pog8.join(", ")+']');
$( listic9 ).empty();
listic9.append('Listic 9: ' + pog9.length+ ' pogodak  ['+pog9.join(", ")+']');
$( listic10 ).empty();
listic10.append('Listic 10: ' + pog10.length+ ' pogodak  ['+pog10.join(", ")+']');

  })

