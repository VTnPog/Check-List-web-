let counter = 0;
let input = document.getElementById('inputTask');
let btt = document.getElementById('btt-add');
let main = document.getElementById('listZone');

function addTask() {
    let inputValue = input.value;

    if ((inputValue !== "") && (inputValue !== null) && (inputValue !== undefined)) {
        ++counter;
        let newItem =
            `<div id="${counter}" class="item">
            <div onclick="checkTask(${counter})" class="item-icon">
                <i id="icon_${counter}" class="fa-regular fa-circle"></i>
            </div>
            <div onclick="checkTask(${counter})" class="item-name">
                ${inputValue}
            </div>
            <div class="item-button">
                <button onclick="deleteTask(${counter})" class="delete"><i class="fa-solid fa-trash"></i>Delete</button>
            </div>
            </div>`;

        main.innerHTML += newItem;
        input.value = "";
        input.focus();
    }
}

function deleteTask(id) {
    var Task = document.getElementById(id);
    Task.remove();
}

function checkTask(id) {
    var item = document.getElementById(id);
    var classItem = item.getAttribute('class');

    if (classItem === "item") {
        item.classList.add('checked');

        var icon = document.getElementById('icon_' + id);
        icon.classList.remove('fa-circle');
        icon.classList.add('fa-circle-check');

        item.parentNode.appendChild(item);

    } else {
        item.classList.remove('checked');

        var icon = document.getElementById('icon_' + id);
        icon.classList.remove('fa-circle-check');
        icon.classList.add('fa-circle');
    }
}

input.addEventListener("keyup", function(Event) {
    if (Event.keyCode === 13) {
        Event.preventDefault();
        btt.click();
    }
})