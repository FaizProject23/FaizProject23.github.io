const nama = document.getElementById('namaKamu')
const nama2 = document.getElementById('namaKamu2')
const gak = document.getElementById('nggak')


let tNama = prompt('Siapa Nama Kamu? 👉👈')
nama.innerHTML = tNama + '❤️'
nama2.innerHTML = tNama

gak.onclick = () => {
  alert('Eittss! Gak Boleh! 🤣')
}

