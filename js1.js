// JS5-Edit-In-Place

// **** For the first pass, I have duplicated each click/blur handler for
// each element on the profile page. VERY redundant indeed. However, I plan
// on modularizing and creating one callback/listener for the click and one
// for the blur. So, 8 functions goes down to 2.
// **************************************************

// lets add event listeners to our blocks of text
document.getElementById('name').addEventListener('click', clickedName);
document.getElementById('phone').addEventListener('click', clickedPhone);
document.getElementById('address').addEventListener('click', clickedAddress);
document.getElementById('aboutyou').addEventListener('click', clickedAboutYou);

function clickedName() {
    var block = document.getElementById('name');
    block.removeEventListener('click', clickedName);
    // block.hidden = true;
    
    // now replace the text with an <input> for user to type their name
    block.innerHTML = "<input type='text' id ='name-with-value'></input>";
    var nameWithValueElement = document.getElementById('name-with-value');
    // block.hidden = false;

    nameWithValueElement.addEventListener('blur', blurName);
    nameWithValueElement.focus();
}

function blurName() {
    var block = document.getElementById('name');
    var nameInput = document.getElementById('name-with-value');
    var name = nameInput.value;
    
    // nameInput.hidden = true;
    nameInput.removeEventListener('blur', blurName);
    
    // if user types no name, make sure to add in placeholder 'name' text so
    // the element doesn't appear to disappear - lets use Short Circuit Evaluation
    // to basically say "if name has a value (meaning the user typed something), then
    // leave it alone. ELSE set name to a basic placeholder of "Name"
    name = name || ("<p>" + 'Name' + "</p");
    
    block.innerHTML = name;
    block.addEventListener('click', clickedName);
}

function clickedPhone() {
    var block = document.getElementById('phone');
    block.removeEventListener('click', clickedPhone);

    // now replace the text with an <input> for user to type their name
    block.innerHTML = "<input type='text' id ='phone-with-value'></input>";
    var phoneWithValueElement = document.getElementById('phone-with-value');

    phoneWithValueElement.addEventListener('blur', blurPhone);
    phoneWithValueElement.focus();
}

function blurPhone() {
    var block = document.getElementById('phone');
    var phoneInput = document.getElementById('phone-with-value');
    var phone = phoneInput.value;
    
    // nameInput.hidden = true;
    phoneInput.removeEventListener('blur', blurPhone);
    
    // if user types no name, make sure to add in placeholder 'name' text so
    // the element doesn't appear to disappear - lets use Short Circuit Evaluation
    // to basically say "if name has a value (meaning the user typed something), then
    // leave it alone. ELSE set name to a basic placeholder of "Name"
    phone = phone || ("<p>" + 'Phone...' + "</p");
    
    block.innerHTML = phone;
    block.addEventListener('click', clickedPhone);
}

function clickedAddress() {
    var block = document.getElementById('address');
    block.removeEventListener('click', clickedAddress);

    // now replace the text with an <input> for user to type their name
    block.innerHTML = "<textarea id ='address-with-value'></textarea>";
    var addressWithValueElement = document.getElementById('address-with-value');

    addressWithValueElement.addEventListener('blur', blurAddress);
    addressWithValueElement.focus();
}

function blurAddress() {
    var block = document.getElementById('address');
    var addressInput = document.getElementById('address-with-value');
    var address = addressInput.value;
    
    addressInput.removeEventListener('blur', blurAddress);
    
    // if user types no name, make sure to add in placeholder 'name' text so
    // the element doesn't appear to disappear - lets use Short Circuit Evaluation
    // to basically say "if name has a value (meaning the user typed something), then
    // leave it alone. ELSE set name to a basic placeholder of "Name"
    address = address || ("<p>" + 'Address...' + "</p");
    
    block.innerHTML = address;
    block.addEventListener('click', clickedAddress);
}

function clickedAboutYou() {
    var block = document.getElementById('aboutyou');
    block.removeEventListener('click', clickedAboutYou);

    // now replace the text with an <input> for user to type their name
    block.innerHTML = "<textarea id ='aboutyou-with-value'></textarea>";
    var aboutyouWithValueElement = document.getElementById('aboutyou-with-value');

    aboutyouWithValueElement.addEventListener('blur', blurAboutYou);
    aboutyouWithValueElement.focus();
}

function blurAboutYou() {
    var block = document.getElementById('aboutyou');
    var aboutyouInput = document.getElementById('aboutyou-with-value');
    var aboutyou = aboutyouInput.value;
    
    aboutyouInput.removeEventListener('blur', blurAboutYou);
    
    // if user types no name, make sure to add in placeholder 'name' text so
    // the element doesn't appear to disappear - lets use Short Circuit Evaluation
    // to basically say "if name has a value (meaning the user typed something), then
    // leave it alone. ELSE set name to a basic placeholder of "Name"
    aboutyou = aboutyou || ("<p>" + 'About You...' + "</p");
    
    block.innerHTML = aboutyou;
    block.addEventListener('click', clickedAboutYou);
}