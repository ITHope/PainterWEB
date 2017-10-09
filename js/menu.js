
var div = document.createElement('div');
div.className = "alert alert-success";
div.innerHTML = "";

document.body.insertBefore(div, document.body.firstChild);


function newTab() {
    alert("New tab");
   }
   function openNewTab() {
    alert("Open");
   }
   function save() {
    alert("Save");
   }
   function saveAs() {
    alert("Save As...");
   }
   function closeTab() {
    alert("Close tab");
   }
   function renameTab() {
    alert("Rename tab");
   }
   function openCloud() {
    alert("Open from Cloud");
   }
   function saveCloud() {
    alert("Save in cloud");
   }
   function exit() {
    alert("Exit");
   }
   function showElements() {
    alert("Elements");
   }
   function showProperties() {
    alert("Properties");
   }
   function showAbout() {
    alert("About");
   }
   function color() {
    alert("Color");
   }
   function emptyFigure() {
    alert("Empty figure");
   }
   
function openTab(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}