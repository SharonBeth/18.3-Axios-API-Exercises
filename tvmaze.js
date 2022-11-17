"use strict";

const $showsList = $("#showsList");
const $episodesList = $("#episodesList");
const $episodesArea = $("#episodesArea");
const $searchForm = $("#searchForm");

const altPic = "https://static.tvmaze.com/uploads/images/medium_portrait/362/906042.jpg"
const mainURL = "https://api.tvmaze.com"
// 
/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */
//  async function getShowsByTerm(term) {
  // const response = await axios({
    // baseURL: TVMAZE_API_URL,
    // url: "search/shows",
    // method: "GET",
    // params: {
      // q: term,
    // },
  // });


async function getShowsByTerm(searching) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
  const response = await axios({
    baseURL: mainURL, 
    url: "search/shows",
    method: "GET",
    params: {
      q: searching
    }
  });
  console.log(response.data.map)

  return response.data.map(result => {
    const show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : altPic
    };
  });
}
  // let idImg = response.data[1].show.id
  // let urlImg = `"${mainURL}/${idImg}/images"`
  // let picture = await axios.get(`'https://api.tvmaze.com/shows/${response.data[1].show.id}/images'`)
  // 
  // return 
    // {
      // id: 1767,
      // name: "The Bletchley Circle",
      // summary:
        // `<p><b>The Bletchley Circle</b> follows the journey of four ordinary
          //  women with extraordinary skills that helped to end World War II.</p>
        //  <p>Set in 1952, Susan, Millie, Lucy and Jean have returned to their
          //  normal lives, modestly setting aside the part they played in
          //  producing crucial intelligence, which helped the Allies to victory
          //  and shortened the war. When Susan discovers a hidden code behind an
          //  unsolved murder she is met by skepticism from the police. She
          //  quickly realises she can only begin to crack the murders and bring
          //  the culprit to justice with her former friends.</p>`,
      // image:
        // "http://static.tvmaze.com/uploads/images/medium_portrait/147/369403.jpg"
    // }
    // {
      // id: response.data[1].show.id,
      // name : response.data[1].show.name,
      // summary : response.data[1].show.summary,
      // image: urlImg
    // }
// }


/** Given list of shows, create markup for each and to DOM */

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
      `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img
              src="${show.image}"
              alt="${altPic}"
              class="w-25 me-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
           </div>
         </div>
       </div>
      `);

    $showsList.append($show);
  }
}


/** Handle search form submission: get shows from API and display.
 *    Hide episodes area (that only gets shown if they ask for episodes)
 */

async function searchForShowAndDisplay() {
  const term = $("#searchForm-term").val();
  const shows = await getShowsByTerm(term);

  $episodesArea.hide();
  populateShows(shows);
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  await searchForShowAndDisplay();
});


/** Given a show ID, get from API and return (promise) array of episodes:
 *      { id, name, season, number }
 */

// async function getEpisodesOfShow(id) { }

/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
