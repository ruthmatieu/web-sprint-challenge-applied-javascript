// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardContainer = document.querySelector('.cards-container');

//GET request
axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
        console.log(res.data)
        cardCreator(res.data.articles)
    })
    .catch((err) => {
        console.log('Error: ', err)
    })

    function cardCreator(obj) {
        for (let key in obj) {
            obj[key].forEach((article) => {
                cardContainer.appendChild(cardComponent(article))
            });
        }
    }

    //card component
    function cardComponent(obj) {

        //elemnents
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imgContainer = document.createElement('div');
        const img = document.createElement('img');
        const span = document.createElement('span');

        //classes
        card.classList.add('card');
        headline.classList.add('headLine');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        //structure
        imgContainer.appendChild(img);
        author.appendChild(imgContainer);
        author.appendChild(span);
        card.appendChild(headline);
        card.appendChild(author);

        //content
        headline.textContent = obj.headline;
        img.src = obj.authorPhoto;
        span.textContent = `By ${obj.authorName}`;

        //event listener to card item when clicked

    }