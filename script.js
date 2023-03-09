function showTheThing (){
    var theThing = document.getElementById('extras');
    if (theThing.style.display === 'none') {
        theThing.style.display = 'block';
    } else {
        theThing.style.display = 'none';
    }
}

document.getElementById('more-dropdown').addEventListener('click', showTheThing);