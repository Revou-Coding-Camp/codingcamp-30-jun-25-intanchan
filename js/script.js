const form = document.getElementById('form');
const tableBody = document.getElementById('table-body');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const tanggal = document.getElementById('tanggal').value;
  const jk = document.querySelector('input[name="jk"]:checked').value;
  const pesan = document.getElementById('pesan').value;

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${nama}</td>
    <td>${tanggal}</td>
    <td>${jk}</td>
    <td>${pesan}</td>
    <td><a href="#">Klik Disini</a></td>
    <td><button class="delete-btn">🗑️</button></td>
  `;

  tableBody.appendChild(row);

  row.querySelector('.delete-btn').addEventListener('click', function() {
    row.remove();
  });

  form.reset();
});
