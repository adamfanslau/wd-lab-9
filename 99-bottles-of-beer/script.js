let songLyrics = document.getElementById("lyrics");

function generateVerse (noOfBottles) {
    let verse = ``;
    if (noOfBottles > 1) {
        verse = `<li>${noOfBottles} bottles of beer on the wall, ${noOfBottles} bottles of beer</li>
                <li>Take one down and pass it around, ${noOfBottles - 1} bottles of beer on the wall</li>`;
    } else if (noOfBottles == 1) {
        verse = `<li>1 bottle of beer on the wall, 1 bottle of beer</li>
                <li>Take one down and pass it around, no more bottles of beer on the wall</li>`;
    } else {
        verse = `<li>No more bottles of beer on the wall, no more bottles of beer</li>
                <li>Go to the store and buy some more, 99 bottles of beer on the wall</li>`;
    }

    verse += `<br>`;

    return verse;
}

function generateSongLyrics () {
    let lyrics = ``;
    for (let i = 99; i >= 0; i--) {
        lyrics += generateVerse(i);
    }

    return lyrics;
}

songLyrics.innerHTML = generateSongLyrics();
