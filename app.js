// Get elements
const input = document.getElementById("task");
const ul = document.getElementById("list");

var list = [];

const todo = () => {
    // make list item
    var li = `<li>
        <span>${input.value}</span>
        <button type="button">Ok</button>
        <button type="button">Delete</button>
    </li>`;

    // push the item into list array
    list.push(li);

    console.log(list);

    // add all the list items into html
    ul.innerHTML = list;
}