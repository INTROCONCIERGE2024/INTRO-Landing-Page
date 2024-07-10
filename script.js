	function changeLanguage() {
    var selectedLang = document.getElementById('language').value;
    var elements = document.getElementsByClassName('lang');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = 'none';
    }

    var selectedElements = document.getElementsByClassName(selectedLang);
    for (var i = 0; i < selectedElements.length; i++) {
        selectedElements[i].style.display = 'block';
    }
}

// Set the default language based on the user's browser language
document.addEventListener('DOMContentLoaded', function() {
    var userLang = navigator.language || navigator.userLanguage;
    var select = document.getElementById('language');

    if (userLang.startsWith('es')) {
        select.value = 'es';
    } else if (userLang.startsWith('en')) {
        select.value = 'en';
    } else if (userLang.startsWith('fr')) {
        select.value = 'fr';
    }
    changeLanguage();
});
