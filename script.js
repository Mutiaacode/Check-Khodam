document.getElementById('check-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // Sembunyikan form dan tampilkan loading section
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('loading-section').style.display = 'block';

    // Simulasi proses pemeriksaan dengan delay
    setTimeout(function() {
        // Daftar khodam yang tersedia
        const khodams = ['Harimau Putih', 'Naga HITAM', 'Tuyul Mullet', 'Sigit Rendang', 'Mister Ironi', 'Seblak Ceker', 'Ambathukam', 'Ambatron', 'Rusdi jmk48', 'Yanto Jaranan', 'Batu Akik', 'Slamet Kopling', 'Sigma Skibidi', 'Thomas Selby', 'Nasi Padang', 'Suki Liar', 'Hello Kitty', 'Beat Karbu', 'Icikiwir', 'Bagas Dribble', 'Uni Bakwan', 'Kak Gem', 'Ayam Geprek', 'Sandal Jepit', 'Iwak Wader', 'Royco Ayam', 'Ikan Cupang', 'Mie Gacoan', 'Sapi Qurban', 'Marsha Adidas', 'Naga Api', 'Ijat Joker', 'Roti Asmara Spikoe', 'Alok', 'Nasi Putih', 'Kemoceng', 'Panda Hitam', 'Sad Girl', 'Khong Guan', 'Pisang', 'Adudu', 'Roger Sumatera', 'Sapiderman', 'Badut Mixue', 'Sayur Asem', 'Opet', 'Onde Onde', 'Ipin Gosong', 'Knalpot Racing', 'Dimas Mejikom', 'Ikan Berkepala Lele', 'Pingwin Agen', 'Ilham Penyu', 'Pohon Palem', 'Tahu Goreng', 'Pesulap Merah', 'Abang Roy', 'Toji Kerupuk', 'Dudung', 'Sosok Hitam' , 'Kairi Kumar', 'Harimau Hitam', 'Kucing Koboy', 'Detektif Konan', 'Oli Samping', 'Mejikom', 'Beat Karbu', 'Nanang Dance', 'Perkedel', 'Rusdi Ngawi', 'Ambaruwo', 'Ruok FF', 'Martabak', 'Tiang Listrik', 'Gardu PLN', 'KosHong', 'Ular Sepuh', 'Musangking', 'Plankton', 'Kepin Diesel', 'Piscok', 'Opor Ayam', 'Mie Ayam HITAM', 'Jam Dinding', 'Minyak Kayu Putih'];

        // Pilih khodam secara acak
        const randomIndex = Math.floor(Math.random() * khodams.length);
        const khodam = khodams[randomIndex];

        // Tampilkan hasil
        const resultText = `${khodam}`;
        document.getElementById('result').innerText = resultText;
        document.getElementById('loading-section').style.display = 'none';
        document.getElementById('result-section').style.display = 'block';
    }, 3000); // delay 3 detik
});

// Tombol kembali
document.getElementById('back-button').addEventListener('click', function() {
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
});
