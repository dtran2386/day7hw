window.addEventListener('load', function() {
    
    var gtButton = document.getElementById('calculate');
    gtButton.addEventListener('click', function() {
        
        //Get the element that contains the text we want.
        var source = document.getElementById('first');
        var source2 = document.getElementById('second');
        var source3 = document.getElementById('add');
        //Create a new <li> to add to the list.
        var li = document.createElement('li');
        li.textContent = parseInt(source.value) + parseInt(source2.value) + source3.value;
        //Add our new <li> to its new parent, `parent`.
        var parent = document.getElementById('result');
        parent.appendChild(li);
    });
    
     var gtButton = document.getElementById('calculate');
    gtButton.addEventListener('click', function() {
        
        //Get the element that contains the text we want.
        var source = document.getElementById('first');
        var source2 = document.getElementById('second');
        var source3 = document.getElementById('subtract');
        //Create a new <li> to add to the list.
        var li = document.createElement('li');
        li.textContent = parseInt(source.value) - parseInt(source2.value) + source3.value;
        //Add our new <li> to its new parent, `parent`.
        var parent = document.getElementById('result2');
        parent.appendChild(li);
    });
    
     var gtButton = document.getElementById('calculate');
    gtButton.addEventListener('click', function() {
        
        //Get the element that contains the text we want.
        var source = document.getElementById('first');
        var source2 = document.getElementById('second');
        var source3 = document.getElementById('multiply');
        //Create a new <li> to add to the list.
        var li = document.createElement('li');
        li.textContent = parseInt(source.value) * parseInt(source2.value) + source3.value;
        //Add our new <li> to its new parent, `parent`.
        var parent = document.getElementById('result3');
        parent.appendChild(li);
    });
    
     var gtButton = document.getElementById('calculate');
    gtButton.addEventListener('click', function() {
        
        //Get the element that contains the text we want.
        var source = document.getElementById('first');
        var source2 = document.getElementById('second');
        var source3 = document.getElementById('divide');
        //Create a new <li> to add to the list.
        var li = document.createElement('li');
        li.textContent = parseInt(source.value) / parseInt(source2.value) + source3.value;
        //Add our new <li> to its new parent, `parent`.
        var parent = document.getElementById('result4');
        parent.appendChild(li);
    });
});
    