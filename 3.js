let comp = Math.round(Math.random() * 2 + 1);
let hasil = "";
let score = 0;
let ronde = 3;
let scoreP1 = 0;
let scoreP2 = 0;

for (let i = 1; i <= ronde; i++) {
  let p = prompt("Pemain 1 pilih : 1 atau 2 atau 3. (Jawaban antara pemain tidak boleh sama!)");
  let p2 = prompt("Pemain 2 pilih : 1 atau 2 atau 3. (Jawaban antara pemain tidak boleh sama!)");

  if (p < 1 || p > 3 || p2 < 1 || p2 > 3) {
    alert("Pemain Inputan Salah. Inputlah angka antara 1 sampai 3");
  } else if (p == p2) {
    alert("Jawaban antara pemain tidak boleh sama!");
  } else if (p == comp) {
    hasil = "Pemain 1 Menang";
    scoreP1 += 1;
  } else if (p2 == comp) {
    hasil = "Pemain 2 Menang";
    scoreP2 += 1;
  } else {
    hasil = "lagi";
  }

  alert(`Mencari Angka "${comp}".
 pemain 1. Menjawab "${p}" 
 pemain 2. Menjawab "${p2}"
 ${hasil}
 
 Score Pemain 1 :${scoreP1}
 Score Pemain 2 :${scoreP2}
 ronde ke-${i}
 `);

  tanya = confirm("Lanjut Ronde Berikutnya?");
}
