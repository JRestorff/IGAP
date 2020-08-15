
// Navigation, Menu

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links');
});




// Filter Find an Analyst
const menu = [
    {
        id: 9,
        name: "* Janet Atkins",
        category: "Oxfordshire",
        desc: `<p>23 Cowley Road</p>
        <p>Littlemore, Oxford OX4 4LE</p>
        <p>Tel 01865 420643. Mob 07722 568411</p>
        <p><a href="mailto:jl.atkins@btinternet.com">E-Mail</a></p>
        <p><a href="https://www.psychotherapy.org.uk/therapist/janet-atkins/" target="_blank">Website</a></p>`,
    },
    {
        id: 10,
        name: "* Penelope Boisset",
        category: "Oxfordshire",
        desc: `<p>2 The Paddocks, Deddington, Banbury, Oxon</p>
        <p>OX15 0QN</p>
        <p>Tel 01869 337715</p>
        <p><a href="mailto:pennyboisset@hotmail.com">E-Mail</a></p>`,
    },
    {
        id: 1,
        name: "* Helen Brammer-Savlov",
        category: "Overseas Members",
        desc: `<p>153 Ranleigh Avenue, Suite 301</p>
        <p>Toronto, Ontario, Canada M4N 1X2</p>
        <p>Tel 00 1 416 481 2072</p>
        <p><a href="mailto:helen_brammer@hotmail.com">E-Mail</a></p>
        <p><a href="http://www.jungianpsychotherapy.ca/" target="_blank">Website</a></p>`,
    },
    {
        id: 7,
        name: "Cécile Buckenmeyer",
        category: "Yorkshire and Lancashire",
        desc: `<p>9 Castle Hill</p>
        <p>Lancaster LA1 1YS</p>
        <p>Tel 01524 903012</p>
        <p><a href="mailto:mail@cecilebuckenmeyer.co.uk">E-Mail</a></p>
        <p><a href="https://www.cecilebuckenmeyer.co.uk/" target="_blank">Website</a></p>`,
    },
    {
        id: 8,
        name: "* Sybil Fuller",
        category: "Yorkshire and Lancashire",
        desc: `The Red Cottage, Sandy Lane</p>
        <p>Stockton on the Forest, YO32 9US</p>
        <p>Tel 07824 663603 </p>
        <p><a href="mailto:sybilhfuller@yahoo.ie">E-Mail</a></p>
        <p><a href="https://bodysoulmatters.wordpress.com/" target="_blank">Website</a></p>`,
    },
    {
        id: 5,
        name: "* Jacqueline Lane",
        category: "London",
        desc: `<p>89 Fleet Street</p>
        <p>City of London, EC4Y 1DH and Ashtead, Surrey</p>
        <p>Tel 020 8658 6247 and Mob 07584 123854</p>
        <p><a href="mailto:lanejackie@btinternet.com">E-Mail</a></p>
        <p><a href="https://www.jacquelinelane.co.uk/" target="_blank">Website</a></p>`,
    },
    {
        id: 4,
        name: "* Robert Macdonald",
        category: "London",
        desc: `<p>4 Droop Street</p>
        <p>London W10 4DQ, United Kingdom</p>
        <p>Tel 07956 852303</p>
        <p><a href="mailto:rm@robertmacdonald.org">E-Mail</a></p>
        <p><a href="https://robertmacdonald.org/" target="_blank">Website</a></p>`,
    },
    {
        id: 6,
        name: "* Edna Shahaf",
        category: "London",
        desc: `<p>Chelsea, London SW10 0AJ</p>        
        <p>Tel 07970 671847</p>
        <p><a href="mailto:edna.shahaf@gmail.com">E-Mail</a></p>
        <p><a href="http://www.ednashahaf.co.uk/" target="_blank">Website</a></p>`,
    },
    {
        id: 2,
        name: "Patricia Skar",
        category: "Overseas Members",
        desc: `<p>Im Schwanden 708</p>
        <p>CH-3803 Beatenberg, Switzerland</p>
        <p>Tel 0041 33 8410336</p>      
        <p><a href="mailto:patricia.skar@outlook.com">E-Mail</a></p>
        <p><a href="http://www.patriciaskar.com/" target="_blank">Website</a></p>`,
    },
    {
        id: 3,
        name: "* Lorraine Walker",
        category: "Overseas Members",
        desc: `<p>41 Palmer Street</p>
        <p>Shepparton, Victoria 3632, Australia</p>
        <p>Tel (03) 5821 6232</p>
        <p><a href="mailto:lorrainewalker055@gmail.com">E-Mail</a></p>`,
    },


];

const sectionCenter = document.querySelector(".find-ana__section-center");
const container = document.querySelector(".find-ana__btn-container");

// load items
window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

displayMenuItems = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
        /* console.log(item); */

        return `
        <article class="menu-item">
        <div class="item-info">
        <header>
            <h4>${item.name}</h4>                    
        </header>
        <div class="item-text">
        ${item.desc}
        </div>                  
        </article>       
      `;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

displayMenuButtons = () => {
    const categories = menu.reduce((values, item) => {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    },
        ["all"]
    );
    const categoryBtns = categories.map((category) => {
        return `
        <button class="filter-btn" type="button" data-id="${category}">${category}</button>
      `
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtns = container.querySelectorAll(".filter-btn");
    // filter items
    filterBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem) => {
                /* console.log(menuItem.category); */
                if (menuItem.category === category) {
                    return menuItem;
                }
            })
            /* console.log(menuCategory); */
            if (category === 'all') {
                displayMenuItems(menu);
            }
            else {
                displayMenuItems(menuCategory);
            }
        });
    });
}