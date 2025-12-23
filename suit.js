
console.log(document.title)
const body = document.body
const coba = document.querySelector('.coba')
const blocks = document.querySelectorAll('.block')
const icon = document.querySelector('.icon')

function gantiWarna() {
    coba.style.background = 'red'
}
function berubah() {
  const mumet = document.body.classList.toggle('warna')

  if (mumet == false) {
    body.style.transition = 'background 0.5s, color 0.5s'
    icon.innerHTML = '🌙'

    blocks.forEach(block => {
      block.style.border = '1px solid #000000ff'
    })

  } else {
    icon.innerHTML = '☀️'

    blocks.forEach(block => {
      block.style.border = '1px solid #ffffffff'
    })
  }
}


// ⬅️ Buat fungsi agar game hanya berjalan saat tombol ditekan
function mulaiGame() {
    let tanya = true
    let menang = 0
    let kalah = 0
    let seri = 0

    while (tanya) {
        let p = prompt('pilih salah satu:\n(batu, kertas, gunting)')

        if (p === null) break // jika klik cancel

        p = p.toLowerCase().trim()

        let comp = Math.random()
        if (comp < 0.34) comp = 'gunting'
        else if (comp <= 0.64) comp = 'kertas'
        else comp = 'batu'

        let hasil = ''

        if (p === comp) {
            hasil = 'SERI'
            seri++
        } else if (p === 'gunting') {
            hasil = (comp === 'batu') ? 'KALAH' : 'MENANG'
        } else if (p === 'kertas') {
            hasil = (comp === 'gunting') ? 'KALAH' : 'MENANG'
        } else if (p === 'batu') {
            hasil = (comp === 'kertas') ? 'KALAH' : 'MENANG'
        } else {
            alert('Input tidak valid!')
            continue
        }

        if (hasil === 'MENANG') menang++
        if (hasil === 'KALAH') kalah++

        alert(
            `Kamu memilih: ${p}\n` +
            `Komputer memilih: ${comp}\n\n` +
            `Hasil: ${hasil}`
        )

        tanya = confirm('Mau main lagi?')
    }

    alert(
        `Game selesai!\n\n` +
        `Menang: ${menang}\n` +
        `Kalah: ${kalah}\n` +
        `Seri: ${seri}`
    )
}


function permainan() {
  let mainLagi = true
  let skor = 0

  // Kumpulan pertanyaan
  const soal = [
    { pertanyaan: 'Gunung lebih pendek dari bukit', jawaban: false },
    { pertanyaan: 'Pisang berwarna hijau ketika matang', jawaban: false },
    { pertanyaan: 'Manusia bernafas menggunakan jantung', jawaban: true },
    { pertanyaan: 'Ada jenis ubur-ubur yang abadi', jawaban: true },
    { pertanyaan: 'Hanya manusia yang memiliki akal', jawaban: true },
    { pertanyaan: 'Matahari adalah pusat tata surya', jawaban: true },
    { pertanyaan: 'Air mendidih pada suhu 90°C di permukaan laut', jawaban: false },
    { pertanyaan: 'JavaScript bisa digunakan untuk membuat website interaktif', jawaban: true },
    { pertanyaan: 'Indonesia memiliki lebih dari 10.000 pulau', jawaban: true },
    { pertanyaan: 'Paus adalah jenis ikan', jawaban: false },
    { pertanyaan: 'HTML adalah bahasa pemrograman', jawaban: false }
  ]

  while (mainLagi) {
    // Ambil soal random
    const index = Math.floor(Math.random() * soal.length)
    const data = soal[index]

    // true = OK, false = Cancel
    const jawabanPlayer = confirm(data.pertanyaan)

    let hasil = ''

    if (jawabanPlayer === data.jawaban) {
      skor++
      hasil = 'BENAR ✅'
    } else {
      skor--
      hasil = 'SALAH ❌'
    }

    alert(`Jawaban kamu: ${hasil} \n skor kamu ${skor}`)

    mainLagi = confirm('Mau main lagi?')
  }
}
