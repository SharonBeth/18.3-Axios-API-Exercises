console.log("Let's get this party started!");

const $giphArea = $("#giph-area")
const $search = $('#category')

function getGiph(res) {
    let numResults = res.data.length;
    if(numResults) {
        let randomInd = Math.floor(Math.random() * numResults);
        console.log('This is inside teh if statements')
        let $newCol = $("div", {class: "col-md-4 col-12 mb-4"});
        let $newGiph = $("<img>", {
            src: res.data[randomInd].images.original.url,
            class: "w-100"
        })
        $newCol.append($newGiph);
        $giphArea.append($newCol);
       
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


async function test() {
    const waka = await axios.get('http://api.giphy.com/v1/gifs/search?q=hilarious&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym')
    console.log(waka);
  }

