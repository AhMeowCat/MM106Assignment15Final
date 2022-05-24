/* Ingredient Converter source - https://codepen.io/Juamee/pen/ExKzoGK */

function aghuy() {
  var x = document.getElementById("input").value;
  var y = document.getElementById("dropdownlist").value;

  if (x == "" || y == "select") {
    alert("Type a number and select a unit to convert! ");
  } else if (y == "millilitre") {
    document.getElementById("cup-output").innerHTML = "<p>" + (x * 0.0042).toFixed(1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x * 0.0042 * 16).toFixed(1) + "&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + (x * 0.0042 * 48).toFixed(1) + "&nbsp&nbsp&nbsp&nbsp&nbsptsp</p>";

  } else if (y == "fluid-ounce") {
    document.getElementById("cup-output").innerHTML = "<p>" + (x * 0.125).toFixed(1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x * 0.125 * 16).toFixed(1) + "&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + (x * 0.125 * 48).toFixed(1) + "&nbsp&nbsp&nbsp&nbsp&nbsptsp</p>";

  } else if (y == "cup") {
    document.getElementById("cup-output").innerHTML = "<p>" + (x * 1).toFixed(1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x * 1 * 16).toFixed(1) + "&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + (x * 1 * 48).toFixed(1) + "&nbsp&nbsp&nbsp&nbsp&nbsptsp</p>";

  } else if (y == "liter") {
    document.getElementById("cup-output").innerHTML = "<p>" + (x * 4.227).toFixed(1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x * 4.227 * 16).toFixed(1) + "&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + (x * 4.227 * 48).toFixed(1) + "&nbsp&nbsp&nbsp&nbsp&nbsptsp</p>";

  } else if (y == "pint") {
    document.getElementById("cup-output").innerHTML = "<p>" + (x * 2).toFixed(1) + "&nbsp&nbspcups</p>";
    document.getElementById("Tbsp-output").innerHTML = "<p>" + (x * 2 * 16).toFixed(1) + "&nbspTbsp</p>";
    document.getElementById("tsp-output").innerHTML = "<p>" + (x * 2 * 48).toFixed(1) + "&nbsp&nbsp&nbsp&nbsp&nbsptsp</p>";
  }
}

/* Recipe Creator based on Assignment 14 */

function saveItem() {
  let name = document.forms.RecipeList.name.value;
  let data = document.forms.RecipeList.data.value;
  localStorage.setItem(name, data);
  showAll();
}

/*
function modifyItem() {
  let name = document.forms.RecipeList.name.value;
  document.forms.RecipeList.data.value = localStorage.getItem(name);
  localStorage.getItem(name);
  showAll();
} */

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
$barColor = '#ABA47B';
$backColor = '#f7d9e3'; /*E6E6FA or feeff4*/

function play() {
  var audio = document.getElementById("audio"); //Audio file path is defined in HTML
  audio.play();
  autoplay = true;
}

function play1() { //Initiate audio for click event to play on mobile devices
  var audio = document.getElementById("audio");
  audio.play();
  audio.pause();
  autoplay = true;
}

$(function () {
  clock.init();
});
clock = {
  interval: null,
  init: function () {
    $('.input-btn').click(function () {
      switch ($(this).data('action')) {
        case 'start':
          clock.stop();
          clock.start($('.input-num').val());
          play1(); //Initiate audio for click event to play on mobile devices
          break;
        case 'stop':
          clock.stop();
          break;
      }
    });
  },
  start: function (t) {
    var pie = 0;
    var num = 0;
    var min = t ? t : 1;
    var sec = min * 60;
    var lop = sec;
    $('.count').text(min);
    if (min > 0) {
      $('.count').addClass('min')
    } else {
      $('.count').addClass('sec')
    }
    clock.interval = setInterval(function () {
      sec = sec - 1;
      if (min > 1) {
        pie = pie + (100 / (lop / min));
      } else {
        pie = pie + (100 / (lop));
      }
      if (pie >= 101) {
        pie = 1;
      }
      num = (sec / 60).toFixed(2).slice(0, -3);
      if (num == 0) {
        $('.count').removeClass('min').addClass('sec').text(sec);
      } else {
        $('.count').removeClass('sec').addClass('min').text(num);
      }
      //$('.clock').attr('class','clock pro-'+pie.toFixed(2).slice(0,-3));
      //console.log(pie+'__'+sec);
      $i = (pie.toFixed(2).slice(0, -3)) - 1;
      if ($i < $half) {
        $nextdeg = (90 + ($increment * $i)) + 'deg';
        $('.clock').css({
          'background-image': 'linear-gradient(90deg,' + $backColor + ' 50%,transparent 50%,transparent),linear-gradient(' + $nextdeg + ',' + $barColor + ' 50%,' + $backColor + ' 50%,' + $backColor + ')'
        });
      } else {
        $nextdeg = (-90 + ($increment * ($i - $half))) + 'deg';
        $('.clock').css({
          'background-image': 'linear-gradient(' + $nextdeg + ',' + $barColor + ' 50%,transparent 50%,transparent),linear-gradient(270deg,' + $barColor + ' 50%,' + $backColor + ' 50%,' + $backColor + ')'
        });
      }
      if (sec == 0) {
        clearInterval(clock.interval);
        $('.count').text(0);
        //$('.clock').removeAttr('class','clock pro-100');
        $('.clock').removeAttr('style');
        console.log("Time is up!");
        play(); //Play audio when time is up
      }
    }, 1000);
  },
  stop: function () {
    clearInterval(clock.interval);
    $('.count').text(0);
    $('.clock').removeAttr('style');
  }
}

/* Flickr Gallery source - https://idratherbewriting.com/learnapidoc/docapis_flickr_example.html */

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=5c92085caa375ff76476d7c582f593b4&gallery_id=72157720707135606&get_user_info=1&get_gallery_info=1&extras=description%2C+owner_name%2C+tags%2C+path_alias%2C+url_sq%2C+url_t%2C+url_s%2C+url_q%2C+url_m%2C+url_n%2C+url_z%2C+url_c%2C+url_l%2C+url_o&format=json&nojsoncallback=1", //Endpoint with my API Key + Gallery ID requested on Flickr
  "method": "GET",
  "headers": {}
}

$.ajax(settings).done(function (data) {
  console.log(data);

  $.each(data.photos.photo, function (i, gp) {

    var farmId = gp.farm;
    var serverId = gp.server;
    var id = gp.id;
    var secret = gp.secret;
    var description = gp.description
    var ownername = gp.ownername;
    var tags =  gp.tags;
    var url_o = gp.url_o;
    var url_l = gp.url_l;
    var url_m = gp.url_m;

    console.log(farmId + ", " + serverId + ", " + id + ", " + secret + ", " + ", " + description + ", " + ownername + ", " + tags + ", " + url_l);

    //var $img = ('https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg');       

    $("#flickr").append('<a href="' + url_l + '"target="_blank"><img src="' + url_m + '"></a>');
  });

});