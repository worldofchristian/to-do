window.addEventListener('load', () => {
    const form = document.querySelector("#to-do");
    const input = document.querySelector("#new-item");
    const listo = document.querySelector("#items");

    form.addEventListener("submit", (e) => {
        // this adds whatever is in the input field to the to-do list
        // it creates a new div and assigns all the values it needs

        // stops the page from refreshing on form submit
        e.preventDefault();
        
        
        // the input
        const item = input.value;

        // !
        if (!item) {
            alert("You need to add something");
            return;
        }

        // list item 
        const item_element = document.createElement("div");
        item_element.classList.add("item");

        const item_content_element = document.createElement("div");
        item_content_element.classList.add("content");

        item_element.appendChild(item_content_element);
        
        const item_input_element = document.createElement("input");
        item_input_element.classList.add("text"); 
        item_input_element.type = "text";
        item_input_element.value = item;
        item_input_element.setAttribute("readonly", "readonly")
        
        item_content_element.appendChild(item_input_element);

        // delete buttons
        const item_actions_element = document.createElement("div");
        item_actions_element.classList.add("actions");

        const item_delete_element = document.createElement("button");
        item_delete_element.classList.add("delete");
        item_delete_element.innerHTML = "Delete";
        
        item_actions_element.appendChild(item_delete_element);

        item_element.appendChild(item_actions_element);

        listo.appendChild(item_element);
        
        // resets the input field
        input.value = "";
        
        // function for removing list items
        item_delete_element.addEventListener("click", () => {
            listo.removeChild(item_element);
        })
    
    })
})
