let comp = Math.round(Math.random() * 2 + 1);
let type = typeof p;
let hasil = "";
let score = 0;
let ronde = 3;
let scoreP1 = 0;
let scoreP2 = 0;
var end = true;
var win = "";

while (end) {
  for (let i = 1; i <= ronde; i++) {
    let tanya = confirm(`Ronde ke-${i}. Anda Siap ?`);

    if (tanya === false) {
      ronde = 0;
    } else {
      let p = parseInt(
        prompt(`Pemain 1.
       pilih : 1 atau 2 atau 3. (Jawaban antara pemain tidak boleh sama!)`)
      );
      let p2 = parseInt(
        prompt(`Pemain 2.
       pilih : 1 atau 2 atau 3. (Jawaban antara pemain tidak boleh sama!)`)
      );

      if (p < 1 || p > 3 || p2 < 1 || p2 > 3 || (p != 1 && p != 2 && p != 3) || (p2 != 1 && p2 != 2 && p2 != 3)) {
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
        hasil = "Tidak Ada yang Cocok, Ulangi Lagi!!!";
      }
      alert(`Mencari Angka "${comp}".
    pemain 1. Menjawab "${p}" 
    pemain 2. Menjawab "${p2}"
    ${hasil}
    
    Score Pemain 1 :${scoreP1}
    Score Pemain 2 :${scoreP2}
    ronde ke-${i}
    `);
    }
  }
  if (scoreP1 > scoreP2) {
    win = "Selamat Pemain 1 Menang";
  } else if (scoreP1 < scoreP2) {
    win = "Selamat Pemain 2 Menang";
  } else {
    win = "PEMENANG BELUM DITENTUKAN";
  }
  alert(win);
  end = confirm(`Permainan selesai. Main Lagi?`);
  if (end === true) {
    ronde = 3;
  }
}
