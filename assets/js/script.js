// Comments show you the vanilla JavaScript equivalent statements:

//  var rootEl = document.getElementById("root");
var rootEl = $('#root');

// var titleEl = document.createElement("h1");
var titleEl = $('<h1>');

// titleEl.textContent = "Hello friends, wellcome to my jQuery lesson";
titleEl.text('Hello friends, wellcome to my jQuery lesson');

// titleEl.className = 'fanct';
titleEl.attr('class', 'fancy');

// titleEl.classList.add('p-5'); (`p-5` is for padding )
titleEl.addCladd('p-5');

// titleEl.style.border = "rgb(122, 424, 242) 5px solid";
titleEl.css('border','rgb(122, 242, 242) 5px solid');

// rootEl.appendChild(titleEl);
rootEl.appendChild(titleEl);

rootEl.append('<h2>With jQuery we can:</h2>');
var abilities = [
    'Select',
    'Create',
    'Style',
    'Animate',
    'Traverse',
    'Event Listener',
    'much more',
];

for(var i = 0; i<abilities.length; i++){
    // create a new '<li>' for each ability and it's text content:
var abilityEl = $('li');
// abilityEl.textContent = ability[i];
abilityEl.text(abilities[i]);

// `my-3` class adds margin on top and bottom
abilityEl.addClass('my-3');

// Alernatively
// var abilityEl = $("<di>" + abilities + "</div>");
// now add this new `<li>` element to the `<div>` container element.
rootEl.append(abilityEl);
}

// select all `<div>` elements on the page
// document.querySelectorAll('div');
console.log($('div'));

// Alternatively use the `$.each` method
// $.each('abilities', function(i, abilities){
// abilityEl.append("<div>" + ability + "<div>");
// } )