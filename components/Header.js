// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerContainer = document.querySelector('.header-container');

function Header() {

    //elements
    const headerTitle = document.createElement('div');
    const spanDate = document.createElement('span');
    const h1 = document.createElement('h1');
    const spanTemp = document.createElement('spam');

    //classes
    headerTitle.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    //structure
    headerTitle.appendChild(spanDate);
    headerTitle.appendChild(h1);
    headerTitle.appendChild(spanDate);

    //content
    spanDate.textContent = 'MARCH 28, 2020';
    h1.textContent = 'Lambda Times';
    spanTemp.textContent = '98°';

    return headerTitle;
}

headerContainer.appendChild(Header());