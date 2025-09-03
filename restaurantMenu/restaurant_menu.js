const breakfastMenu = [
    'Pancakes - $12.00',
    'Eggs Benedict - $22.99',
    'Oatmeal - $21.99',
    'Frittata - $15.00'
];

const mainCourseMenu = [
    'Steak - $35.00',
    'Pasta - $18.50',
    'Burger - $14.99',
    'Salmon - $27.00'
];

const dessertMenu = [
    'Cake - $9.99',
    'Ice Cream - $7.50',
    'Pudding - $8.25',
    'Fruit Salad - $6.75'
];

// Display breakfast menu items
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// Display main course menu items
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// Display dessert menu items
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;