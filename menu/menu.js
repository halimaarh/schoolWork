//get only unique categories - HARDEST ONE
//iterate over categories return buttons
//make sure to select buttons when they are available

//items
const menu = [
   {
      Id:1,
      title:"Velvet cakes",
      category:"Breakfast",
      price:9.89,
      img:"./cake.jpeg",
      desc:`Lorem ipsum dolor sit 
      amet consectetur adipisicin?`,
   },
   {
      Id:2,
      title:"Strawberry cakes",
      category:"Breakfast",
      price:19.99,
      img:"./cake 2.jpg",
      desc:`Lorem ipsum dolor sit amet 
      consectetur adipisicin?`,
   },
   {
      Id:3,
      title:"Buttermilk cakes",
      category:"Lunch",
      price:14.99,
      img:"./cake 3.jpg",
      desc:`Lorem ipsum dolor sit amet 
      consectetur adipisicin?`,
   },
   {
      Id:4,
      title:"Pink rose cakes",
      category:"Birthday",
      price:60,
      img:"./cake 6.jpg",
      desc:`Lorem ipsum dolor sit amet 
      consectetur adipisicin?`,
   },
   {
      Id:5,
      title:"B cakes",
      category:"Bridal",
      price:130,
      img:"./cake 7.jpg",
      desc:`Lorem ipsum dolor sit amet 
      consectetur adipisicin?`,
   },
   {
      Id:6,
      title:"Princess birthday cakes",
      category:"Birthday",
      price:90,
      img:"./cake 8.jpg",
      desc:`Lorem ipsum dolor sit amet 
      consectetur adipisicin?`,
   },
];

// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}