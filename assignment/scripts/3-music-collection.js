console.log('***** Music Collection *****')

// - Create a variable `collection` that starts as an empty array.
let collection = [];
// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object
function addToCollection(recordToAdd) {
   collection.push(recordToAdd);
}

let albumOne = {
    title: 'The End of Donnie',
    artist: 'The Donnie Haters',
    year: 1979,
    tracks: [
        {
            name: 'Donnie Been Acting Strange',
            duration: 3.37
        },
        {
            name: 'Who Took My Sandwich',
            duration: 2.57
        },
        {
            name: "Crumbs on Donnie's Face",
            duration: 4.45
        }, 
    ]
};
addToCollection(albumOne);
console.log(collection);
// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.
let albumTwo = {
    title: 'The Bones of What You Believe',
    artist: 'CHVRCHES',
    year: 2013
}
addToCollection(albumTwo);

let albumThree = {
    title: 'Joy as an Act of Resistance',
    artist: 'IDLES',
    year: 2018
}
addToCollection(albumThree);

let albumFour = {
    title: 'Jewellery',
    artist: 'Micachu',
    year: 2009
}
addToCollection(albumFour);

let albumFive = {
    title: 'Public Void',
    artist: 'Penelope Scott',
    year: 2020
}
addToCollection(albumFive);

let albumSix = {
    title: 'Power Chords',
    artist: 'Mike Krol',
    year: 2019
}
addToCollection(albumSix);

let albumSeven = {
    title: 'Hunger for a Way Out',
    artist: 'Sweeping Promises',
    year: 2020
}
addToCollection(albumSeven);
console.log(collection);
// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
function showCollection() {
    for(let i=0; i < collection.length; i++) {
        console.log(collection[i]);
    } 
    return null;
}
// - Test the `showCollection` function.
console.log(showCollection());
// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.
function findByArtist(artist) {
       let resultsArray = [];
       for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            resultsArray.push(collection[i])
        }
    }
        return resultsArray;
}
// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.
console.log(findByArtist('IDLES'));
console.log(findByArtist('The Beatles'));
// > When testing your functions, write all tests in the JavaScript file!


// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.
let albumEight = {
    title: 'Hallellujah I Love Her So',
    artist: 'Ray Charles',
    year: 1957
}
addToCollection(albumEight);
console.log(collection);



function search(artist, year) {
    let titleArray = [];
       for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist && collection[i].year === year) {
            titleArray.push(collection[i].title)
        }
    }
        return titleArray;
}

console.log(search('Ray Charles', 1957, ''));
console.log(search());
// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria. 
//     - IF the search object has a `trackName` property, only search for that, ignoring any `artist` or `year` properties.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```

// > Make sure to test all your code!

