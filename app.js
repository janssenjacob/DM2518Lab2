// Add element to list.
function newElement() {
  var li = document.createElement("ons-list-item");
  var sw = document.createElement("ons-switch");

  //   document.querySelector('ons-list-item').setAttribute('tappable', 'true');
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  li.appendChild(sw);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};

/**
* Pushes the listed pages.
 */
function showPage(page) {
  document.getElementById('myNavigator').pushPage(page);
}

/**
* Everything which needs the DOM to be ready first.
*/
ons.ready(function () {
  document.addEventListener("DOMContentLoaded", function (event) {

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("ons-list-item");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ons-list');
    list.addEventListener('click', function (ev) {
      if (ev.target.tagName === 'ONS-LIST-ITEM') {
        ev.target.classList.toggle('checked');
      }
    }, false);

  });
});

window.fn = {};

window.fn.open = function() {
var menu = document.getElementById('menu');
menu.open();
};

window.fn.load = function(page) {
var content = document.getElementById('content');
var menu = document.getElementById('menu');
content.load(page)
.then(menu.close.bind(menu));
};


var showTemplateDialog = function() {
  var dialog = document.getElementById('my-dialog');

  if (dialog) {
    dialog.show();
  } else {
    ons.createElement('dialog.html', { append: true })
      .then(function(dialog) {
        dialog.show();
      });
  }
};

var hideDialog = function(id) {
  document
    .getElementById(id)
    .hide();
};


