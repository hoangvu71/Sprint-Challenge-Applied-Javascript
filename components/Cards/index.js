// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const getTheArray = ["javascript", "bootstrap", "technology", "jquery", "node"];

const cardsContainer = document.querySelector('.cards-container');
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then((res) => {
        const dataArticles = res.data.articles;
        const getTheArray = [dataArticles.javascript, dataArticles.bootstrap, dataArticles.technology, dataArticles.jquery, dataArticles.node];
        getTheArray.forEach((element) => {
            function jsCompo(){
                for (let i = 0; i < element.length; i++){
                    cardsContainer.appendChild(cardComponents(element[i]));
                }
            }
            jsCompo();
        })
        
    })

function cardComponents(data){
    ////////////////////////
    // Create Elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const imageChild = document.createElement('img');
    const byAuthor = document.createElement('span');

    ////////////////////////
    // Create Class List
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');
    
    ////////////////////////
    // Create Paths
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(byAuthor);
    imgContainer.appendChild(imageChild);

    ////////////////////////
    // Create Contents
    headlineDiv.textContent = data.headline;
    imageChild.src = data.authorPhoto;
    byAuthor.textContent = data.authorName;

    return cardDiv;
}