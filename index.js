const addLatteRow = () => {
    let table = document.getElementById('latte-table');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = document.getElementById('name').value;
    row.insertCell(1).innerHTML = document.getElementById('latte-type').value;
    row.insertCell(2).innerHTML = document.getElementById('time').value;
    table.appendChild(row);
    document.getElementById('name').value = '';
    document.getElementById('latte-type').value = '';
    document.getElementById('time').value = '';
}

let button = document.getElementById('add');
button.onclick = addLatteRow;