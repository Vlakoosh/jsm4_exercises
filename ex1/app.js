const select = document.getElementById("genres");

select.appendChild(new Option("Classic", "classic", false, true));

let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value);

alert(selected);