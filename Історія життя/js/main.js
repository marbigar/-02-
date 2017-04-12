/**
 * Created by Maryasha on 26.02.17.
 */
document.querySelector('#run').addEventListener('click', function () {
    var age = document.querySelector('#age').value;

    var marjaha;

    if ( age < 4 ) {
        marjaha = new Baby();
    } else if ( age >= 4 && age <= 18 ) {
        marjaha = new Teenager();
    } else {
        marjaha = new Adult();
    }

    marjaha.speak();
    marjaha.breathe();

    if (typeof marjaha.sayBadWord === "function") {
        marjaha.sayBadWord();
    }

});