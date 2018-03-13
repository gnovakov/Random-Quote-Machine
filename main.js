// JavaScript Document
xhrLoad();

// loads the API
function xhrLoad() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous", true);
    xhr.setRequestHeader("X-Mashape-Authorization", "f5ivDbi8nemshgZ9nCwZcBZbSwBMp1SgScyjsnbvsf4WdnHeaL");
    xhr.responseType = 'text';
    xhr.send();

    // Runs once API has loaded corectly
    xhr.onload = function () {
        if (xhr.status === 200) {
            var myStuff = JSON.parse(xhr.responseText);
            console.log(myStuff);
            console.log(myStuff.author);
            console.log(myStuff.quote);

            // Adds API copy to the HTML
            document.getElementById('quote').innerHTML = myStuff.quote;
            document.getElementById('author').innerHTML = myStuff.author;

        } // end if
    } // end function

}

//When button is pressed fade(): function runs and fades out current copy, then runs xhrLoad(); function then fades in new copy

function fade() {

    // Set delay times for future delays
    var delayInMilliseconds = 300; // 1/3 second
    var delayInMilliseconds2 = 500; // 1/2 second

    // set up vars for fading copy
    var quote = document.getElementById('quote');
    var author = document.getElementById('author');

    // fade copy out
    quote.setAttribute('class', 'transition-0-5 fade-out');
    author.setAttribute('class', 'transition-0-5 fade-out');

    // run first timer so xhrLoad(); waits till copy has faded out
    setTimeout(function () {

        xhrLoad();

        // second timer waits till xhrLoad(); has run and then fades copy back in 
        setTimeout(function () {

            quote.setAttribute('class', 'transition-1');
            author.setAttribute('class', 'transition-1');

        }, delayInMilliseconds2);


    }, delayInMilliseconds);
    //colors();
}

// function to change the colors of the background and other elements.
function colors() {

    var body1 = document.querySelector('body');
    var gen_box1 = document.querySelector('gen_box');
    var reloadQuoe1 = document.querySelector('reloadQuoe');

    body1.setAttribute('class', 'transition-0-5 body1');
    gen - box1.setAttribute('class', 'transition-0-5 gen-box1');
    reloadQuoe1.setAttribute('class', 'transition-0-5 reloadQuoe1');
}

// Twitter button code
function tweetIt() {
    var quote = document.getElementById('quote').innerText;
    var author = document.getElementById('author').innerText;
    var tweetUrl = 'https://twitter.com/share?text=' +
        encodeURIComponent(quote) + ' -' +
        encodeURIComponent(author) + '&hashtags=quotes';

    window.open(tweetUrl);
}
