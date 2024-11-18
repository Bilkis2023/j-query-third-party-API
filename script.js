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