/* Ingredient Converter source - https://codepen.io/Juamee/pen/ExKzoGK */

function aghuy() {
  var x = document.getElementById("input").value;
  var y = document.getElementById("dropdownlist").value;
  
  if (x=="" || y=="select") {
    alert("Type a number and select a unit to convert! ");
  }
  else if (y=="millilitre") {
    document.getElementById("mL-output").innerHTML = "<p>" + (x*1) + "&nbsp&nbspml</p>";
    document.getElementById("oz-output").innerHTML = "<p>" + (x*0.0338) + "&nbsp&nbspfl. oz</p>";
    document.getElementById("cup-output").innerHTML = "<p>" + Math.round((x*0.0042)*100)/100 + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + Math.round((x*0.0042/16)*100)/100 + "&nbsp&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + Math.round((x*0.0042/48)*100)/100 + "&nbsp&nbsptsp</p>";
    document.getElementById("liter-output").innerHTML = "<p>" + (x*0.001) + "&nbsp&nbspL</p>";
    document.getElementById("pint-output").innerHTML = "<p>" + (x*0.0021) + "  pt</p>";
  }
  else if (y=="fluid-ounce") {
    document.getElementById("mL-output").innerHTML = "<p>" + (x*29.57) + "&nbsp&nbspml</p>";
    document.getElementById("oz-output").innerHTML = "<p>" + (x*1) + "&nbsp&nbspfl. oz</p>";
    document.getElementById("cup-output").innerHTML = "<p>" + Math.round((x*0.125)*100)/100 + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + Math.round((x*0.125/16)*100)/100 + "&nbsp&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + Math.round((x*0.125/48)*100)/100 + "&nbsp&nbsptsp</p>";
    document.getElementById("liter-output").innerHTML = "<p>" + (x*0.0296) + "&nbsp&nbspL</p>";
    document.getElementById("pint-output").innerHTML = "<p>" + (x*0.0625) + "  pt</p>";
  }
  else if (y=="cup") {
    document.getElementById("mL-output").innerHTML = "<p>" + (x*250) + "&nbsp&nbspml</p>";
    document.getElementById("oz-output").innerHTML = "<p>" + (x*8) + "&nbsp&nbspfl. oz</p>";
    document.getElementById("cup-output").innerHTML = "<p>" + (x*1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x*1/16) + "&nbsp&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + Math.round((x*1/48)*100)/100 + "&nbsp&nbsptsp</p>";
    document.getElementById("liter-output").innerHTML = "<p>" + Math.round((x*0.237)*100)/100 + "&nbsp&nbspL</p>";
    document.getElementById("pint-output").innerHTML = "<p>" + (x*0.5) + "  pt</p>";
  }
  else if (y=="liter") {
    document.getElementById("mL-output").innerHTML = "<p>" + (x*1000) + "&nbsp&nbspml</p>";
    document.getElementById("oz-output").innerHTML = "<p>" + (x*33.81) + "&nbsp&nbspfl. oz</p>";
    document.getElementById("cup-output").innerHTML = "<p>" + Math.round((x*4.227)*100)/100 + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + Math.round((x*4.227/16)*100)/100 + "&nbsp&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + Math.round((x*4.227/48)*100)/100 + "&nbsp&nbsptsp</p>";
    document.getElementById("liter-output").innerHTML = "<p>" + (x*1) + "&nbsp&nbspL</p>";
    document.getElementById("pint-output").innerHTML = "<p>" + (x*2.113) + "  pt</p>";
  }
  else if (y=="pint") {
    document.getElementById("mL-output").innerHTML = "<p>" + (x*473.1) + "&nbsp&nbspml</p>";
    document.getElementById("oz-output").innerHTML = "<p>" + (x*16) + "&nbsp&nbspfl. oz</p>";
    document.getElementById("cup-output").innerHTML = "<p>" + (x*2) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + Math.round((x*2/16)*100)/100 + "&nbsp&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + Math.round((x*2/48)*100)/100 + "&nbsp&nbsptsp</p>";
    document.getElementById("liter-output").innerHTML = "<p>" + (x*0.473) + "&nbsp&nbspL</p>";
    document.getElementById("pint-output").innerHTML = "<p>" + (x*1) + "  pt</p>";
  }
}

/* Recipe Creator based on Assignment 14 */

function saveItem() {
  let name = document.forms.RecipeList.name.value;
  let data = document.forms.RecipeList.data.value;
  localStorage.setItem(name, data);
  showAll();
}

function modifyItem() {
  let name = document.forms.RecipeList.name.value;
  document.forms.RecipeList.data.value = localStorage.getItem(name);
  localStorage.getItem(name);
  showAll();
}

function deleteItem() {
  let name = document.forms.RecipeList.name.value;
  document.forms.RecipeList.data.value = localStorage.removeItem(name);
  localStorage.removeItem(name);
  showAll();
}

function clearAll() {
  localStorage.clear();
  showAll();
}

function showAll() {
  if (checkBrowser()) {
    let key = "";
    let list = "";
    let i = 0;
    for (i = 0; i <= localStorage.length - 1; i++) {
      key = localStorage.key(i);
      list += "<tr><td>" + key + "</td>\n<td>" + localStorage.getItem(key) + "</tr>\n";
    }
    document.getElementById("list").innerHTML = list;
  } else {
    alert("Cannot store shopping list. Your browser does not support local storage.");
  }
}

function checkBrowser() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    //we can use local storage
    console.log('local storage works');
    return true;
  } else {
    return false;
  }
}

/* Cooking Timer source - https://codepen.io/khadkamhn/pen/xRbyxR */
$step = 1;
$loops = Math.round(100 / $step);
$increment = 360 / $loops;
$half = Math.round($loops / 2);
$barColor = '#ec366b';
$backColor = '#feeff4';

$(function(){
	clock.init();
});
clock={
	interval:null,
	init:function(){
		$('.input-btn').click(function(){
			switch($(this).data('action')){
				case'start':
					clock.stop();
					clock.start($('.input-num').val());
				break;
				case'stop':
					clock.stop();
				break;
			}
		});
	},
	start:function(t){
		var pie = 0;
		var num = 0;
		var min = t?t:1;
		var sec = min*60;
		var lop = sec;
		$('.count').text(min);
		if(min>0){
			$('.count').addClass('min')
		}else{
			$('.count').addClass('sec')
		}
		clock.interval = setInterval(function(){
			sec = sec-1;
			if(min>1){
				pie = pie+(100/(lop/min));
			}else{
				pie = pie+(100/(lop));
			}
			if(pie>=101){ pie = 1; }
			num = (sec/60).toFixed(2).slice(0,-3);
			if(num==0){
				$('.count').removeClass('min').addClass('sec').text(sec);
			}else{
				$('.count').removeClass('sec').addClass('min').text(num);
			}
			//$('.clock').attr('class','clock pro-'+pie.toFixed(2).slice(0,-3));
			//console.log(pie+'__'+sec);
			$i = (pie.toFixed(2).slice(0,-3))-1;
			if($i < $half){
				$nextdeg = (90 + ( $increment * $i ))+'deg';
				$('.clock').css({'background-image':'linear-gradient(90deg,'+$backColor+' 50%,transparent 50%,transparent),linear-gradient('+$nextdeg+','+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
			}else{
				$nextdeg = (-90 + ( $increment * ( $i - $half ) ))+'deg';
				$('.clock').css({'background-image':'linear-gradient('+$nextdeg+','+$barColor+' 50%,transparent 50%,transparent),linear-gradient(270deg,'+$barColor+' 50%,'+$backColor+' 50%,'+$backColor+')'});
			}
			if(sec==0){
				clearInterval(clock.interval);
				$('.count').text(0);
				//$('.clock').removeAttr('class','clock pro-100');
				$('.clock').removeAttr('style');
			}
		},1000);
	},
	stop:function(){
		clearInterval(clock.interval);
		$('.count').text(0);
		$('.clock').removeAttr('style');
	}
}

/* Flickr Gallery based on Isabel's example */
const $photoDiv = $("#photos");
//var APIuserID = "id=134672961@N05";
$("#dropDown").change(function () {
  var selectedItem = $("#dropDown :selected").text();

  $.getJSON({
    dataType: "jsonp",
    url: "https://api.flickr.com/services/feeds/photos_public.gne?" ,
    data: {
      jsoncallback: "processData",
      format: "json",
      tags: selectedItem
    }
  });
});

const processData = function(data) {
  console.log(data);
  $("#photos").html("");
  for (var i = 0; i < data.items.length; i++) {
    var $img = $("<img />");
    var $anchor = data.items[i].link;
    $img.attr("src", data.items[i].media.m);
    $("#photos").append($img);
    $img.wrap('<a href="' + $anchor + '">');
  }
}
