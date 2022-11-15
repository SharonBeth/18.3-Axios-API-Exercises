console.log("Let's get this party started!");

const $giphArea = $("#giph-area")
const $search = $('#category')

function getGiph(res) {
    let numResults = res.data.length;
    if(numResults) {
        let randomInd = Math.floor(Math.random() * numResults);
        console.log('This is inside teh if statements')
        let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"});
        let $newGiph = $("<img>", {
            src: res.data[randomInd].images.original.url,
            class: "w-100"
        })
        let $title = $("<div>", {text: "testing the div words", class: "text-center"})
        //  {innerText : res.data[randomInd].title})
        $newCol.append($newGiph);
        $giphArea.append($newCol);
        console.log($title)
        $newCol.append($title)
       
    }
}

$('form').on('submit', async function (evt){
    evt.preventDefault();
    let searchTerm = $search.val();
    console.log(searchTerm)
    $search.val('');

    const response = await axios.get('http://api.giphy.com/v1/gifs/search', {
        params: {
            q: searchTerm,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    })
    getGiph(response.data)
    console.log(response.data)
})






// Used this to test to confirm I was able to call into the API without function coding. I was having trouble at one point, and was getting a 404 error.
// async function test() {
    // const waka = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym')
    // console.log(waka);
//   }
// 
// 


//////////////////////////////////////
//Questions for Wednesday           //
//////////////////////////////////////




//The code for line 16 and 17 seems like it should be flip-flopped for order. I thought it would work this way, because if you append $newGiph to $newCol its not there yet until the next line.?

//Tried to add a div with the caption of the title to the gif. I was not successful, but i have some thoughts on it: use a div, then use a variable, but is .innertext of a div usable? I couldn't get it to work.

