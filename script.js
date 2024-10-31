document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();


    // create elements
    let section = document.querySelector(".l-list");
    let div = document.createElement("div");
    let input = document.createElement("input");
    let span = document.createElement("span");

    // add identifiers & attributes
    div.classList.add("list");
    input.classList.add("checkbox");
    span.classList.add("task");
    input.setAttribute("type", "checkbox");

    // appending elements
    section.append(div);
    div.appendChild(input);
    div.appendChild(span);

    // input value
    let inputValue = document.querySelector(".input");

    // adding input value to span
    span.textContent = inputValue.value;

    // cleaning input after create a task
    inputValue.value = "";
})