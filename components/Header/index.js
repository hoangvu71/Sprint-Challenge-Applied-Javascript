// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    ////////////////////////////////
    // Create Elements
    const header = document.createElement('div');
    const dateHeader = document.createElement('span');
    const h1Header = document.createElement('h1');
    const tempHeader = document.createElement('span');

    ////////////////////////////////
    // Create Class List
    header.classList.add("header");
    dateHeader.classList.add('date');
    tempHeader.classList.add('temp');

    ////////////////////////////////
    // Create Paths
    header.appendChild(dateHeader);
    header.appendChild(h1Header);
    header.appendChild(tempHeader);

    ////////////////////////////////
    // Create Contents
    dateHeader.textContent = "MARCH 28, 2019";
    h1Header.textContent = "Lambda Times";
    tempHeader.textContent = "98°"

    return header;
}

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());