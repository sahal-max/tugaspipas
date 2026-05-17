export const topics = [
  {
    id: 'kabel-bawah-laut',
    to: '/kabel-bawah-laut',
    eyebrow: '01 · Backbone',
    title: 'Kabel Bawah Laut',
    summary:
      'Tulang punggung internet Indonesia. Kabel fiber optik di dasar laut menghubungkan pulau-pulau terpisah menjadi satu ruang digital — wujud nyata konektivitas antar ruang.',
    accent: 'blue'
  },
  {
    id: 'bts',
    to: '/bts',
    eyebrow: '02 · Akses',
    title: 'BTS & Jaringan Seluler',
    summary:
      'BTS menjadi titik temu antara backbone dan masyarakat. Sebaran menara seluler menentukan seberapa hidup interaksi masyarakat digital di tiap wilayah Indonesia.',
    accent: 'green'
  },
  {
    id: 'satelit',
    to: '/satelit',
    eyebrow: '03 · Orbit',
    title: 'Satelit',
    summary:
      'Saat kabel dan menara tidak menjangkau, satelit menjadi solusi. Pembangunannya tidak lepas dari kerja sama luar negeri di bidang teknologi antariksa.',
    accent: 'yellow'
  },
  {
    id: 'internet-3t',
    to: '/internet-3t',
    eyebrow: '04 · Pemerataan',
    title: 'Internet Daerah Terpencil',
    summary:
      'Daerah Tertinggal, Terdepan, Terluar (3T) sering luput dari pasar. Negara hadir agar setiap ruang punya hak yang sama untuk terhubung dengan dunia digital.',
    accent: 'red'
  },
  {
    id: 'pengaruh-geografis',
    to: '/pengaruh-geografis',
    eyebrow: '05 · Konteks',
    title: 'Pengaruh Letak Geografis',
    summary:
      '17.000 pulau, ring of fire, dan posisi ekuator. Konsep keruangan menjelaskan mengapa solusi telekomunikasi Indonesia tidak bisa disamakan dengan negara lain.',
    accent: 'blue'
  }
];

export const pages = {
  'kabel-bawah-laut': {
    eyebrow: 'Backbone Nasional',
    title: 'Kabel Bawah Laut',
    lede:
      'Sistem Komunikasi Kabel Laut (SKKL) adalah arteri utama internet Indonesia. Lebih dari 95% lalu lintas data antar pulau dan antar benua mengalir lewat kabel fiber optik di dasar laut. Inilah perwujudan paling konkret dari konsep konektivitas antar ruang dalam geografi modern.',
    sections: [
      {
        kind: 'grid',
        heading: 'Palapa Ring — Tol Langit Bawah Laut',
        body:
          'Proyek strategis Kementerian Kominfo (2016–2019) membentangkan 12.148 km kabel laut optik melingkari Indonesia (total termasuk darat ~35.000 km), terbagi menjadi tiga paket: Barat, Tengah, dan Timur. Tujuannya menyatukan 514 kabupaten/kota dengan kecepatan minimal 30 Mbps. Palapa Ring menegaskan bahwa setiap ruang di nusantara berhak terhubung.',
        cards: [
          {
            title: 'Paket Barat',
            body:
              '2.000 km menghubungkan Riau dan Kepulauan Riau (hingga Natuna). Operasional sejak Maret 2018, mendekatkan wilayah perbatasan dengan pusat ekonomi nasional.'
          },
          {
            title: 'Paket Tengah',
            body:
              '2.700 km melintasi Kalimantan, Sulawesi, dan Maluku Utara. Operasional Desember 2018. Menjadi simpul tengah yang menjahit dua sisi Indonesia.'
          },
          {
            title: 'Paket Timur',
            body:
              '6.878 km — paket terpanjang yang menjangkau NTT, Maluku, Papua, dan Papua Barat. Operasional Oktober 2019, menutup kesenjangan akses di wilayah timur.'
          }
        ]
      },
      {
        kind: 'grid',
        heading: 'Kerja Sama Internasional & SKKL Global',
        body:
          'Indonesia tidak berdiri sendiri. Kabel laut internasional dibangun melalui konsorsium operator lintas negara — wujud nyata kerja sama luar negeri di bidang teknologi telekomunikasi. Posisi geografis menjadikan Jakarta salah satu hub data Asia Tenggara.',
        cards: [
          {
            title: 'JaSuKa (2009)',
            body:
              'Jawa-Sumatra-Kalimantan, dioperasikan PT Telkom. Backbone domestik utama yang menyatukan tiga pulau berpenduduk terbesar.'
          },
          {
            title: 'SEA-ME-WE 5',
            body:
              'Konsorsium 16 operator dari Asia Tenggara, Timur Tengah, dan Eropa Barat. Indonesia masuk lewat Dumai dan Medan — pintu data ke Eropa.'
          },
          {
            title: 'INDIGO West & Central',
            body:
              'Kabel 9.200 km milik konsorsium Telstra (Australia), Singtel (Singapura), Google, Indosat Ooredoo, dan mitra lainnya. Menghubungkan Singapura, Jakarta, Perth, dan Sydney.'
          }
        ]
      },
      {
        kind: 'callout',
        heading: 'Konsep Keruangan & Konektivitas Antar Ruang',
        body:
          'Konsep keruangan menempatkan laut bukan sebagai pemisah, melainkan sebagai medium penghubung. Kabel bawah laut mengubah ribuan pulau dari ruang-ruang terisolasi menjadi satu jaringan terpadu. Inilah esensi konektivitas antar ruang: jarak fisik dijembatani oleh teknologi, sehingga interaksi masyarakat digital di Sabang, Jakarta, dan Jayapura terjadi dalam hitungan milidetik.'
      }
    ],
    sources: [
      'Kementerian Komunikasi dan Digital — Palapa Ring Project Brief',
      'BAKTI Kominfo — Laporan Pencapaian Palapa Ring 2019',
      'TeleGeography Submarine Cable Map (data publik 2024)',
      'PT Telkom Indonesia — Annual Report SKKL & JaSuKa'
    ]
  },

  bts: {
    eyebrow: 'Akses Seluler',
    title: 'BTS & Jaringan Seluler',
    lede:
      'Base Transceiver Station (BTS) adalah titik akhir yang membawa sinyal dari backbone ke perangkat pengguna. Per 2023 tercatat lebih dari 600.000 BTS aktif di Indonesia. Sebarannya menentukan kualitas interaksi masyarakat digital di setiap ruang — dari pusat kota hingga desa terpencil.',
    sections: [
      {
        kind: 'grid',
        heading: 'Generasi Teknologi Seluler',
        body:
          'Indonesia menjalankan tiga generasi seluler secara paralel. Operator Telkomsel, Indosat Ooredoo Hutchison, dan XL Axiata melakukan refarming spektrum — memindahkan frekuensi dari teknologi lama ke yang lebih baru agar konektivitas terus meningkat.',
        cards: [
          {
            title: '2G/3G — Phase Out',
            body:
              'Sunset 3G dimulai 2022 untuk efisiensi spektrum. 2G dipertahankan untuk USSD perbankan dan area pelosok yang belum punya alternatif.'
          },
          {
            title: '4G LTE — Mainstream',
            body:
              'Cakupan 4G mencapai 97% populasi (BAKTI 2023). Memakai pita 900/1800/2100/2300 MHz. Tulang punggung interaksi masyarakat digital saat ini.'
          },
          {
            title: '5G — Komersial',
            body:
              'Diluncurkan Telkomsel Mei 2021, menyusul Indosat dan XL. Terkonsentrasi di Jabodetabek, Surabaya, Bandung, Makassar, Medan, dan Denpasar.'
          }
        ]
      },
      {
        kind: 'grid',
        heading: 'Distribusi BTS & Konektivitas Antar Ruang',
        body:
          'Lebih dari 60% BTS terkonsentrasi di Pulau Jawa. Ketimpangan persebaran menggambarkan bahwa konektivitas antar ruang belum merata. BAKTI Kominfo membangun BTS di desa 3T yang tidak menarik secara komersial — agar setiap ruang tetap terhubung.',
        cards: [
          {
            title: 'BTS Operator',
            body:
              'Investasi swasta yang mengejar densitas pengguna. Jakarta dan Surabaya bisa memiliki >30 BTS per km² di pusat kota.'
          },
          {
            title: 'BTS BAKTI (USO)',
            body:
              'Disubsidi pemerintah untuk daerah blank spot. Per 2023 ada 5.618 BTS USO yang melayani desa di wilayah terpencil.'
          },
          {
            title: 'Sharing Infrastruktur',
            body:
              'Mitratel, Protelindo, dan STP menyewakan tower kepada multi-operator — menekan biaya dan jejak fisik di lanskap.'
          }
        ]
      },
      {
        kind: 'callout',
        heading: 'Keruangan & Interaksi Masyarakat Digital',
        body:
          'Konsep keruangan menjelaskan bahwa pola sebaran BTS bukan sekadar peta titik, melainkan cermin aktivitas manusia. Di kota padat, interaksi masyarakat digital begitu intens sehingga butuh small-cell setiap 200–300 meter. Di pulau kecil, satu BTS bisa menjadi pintu utama warga ke dunia luar — ke pasar, layanan kesehatan, dan keluarga di rantau.'
      }
    ],
    sources: [
      'BAKTI Kominfo — Laporan BTS USO 2023',
      'Kementerian Komunikasi dan Digital — Roadmap 5G Indonesia',
      'Telkomsel, Indosat Ooredoo Hutchison, XL Axiata — Annual Report 2023',
      'APJII — Survei Penetrasi Internet Indonesia 2023'
    ]
  },

  satelit: {
    eyebrow: 'Orbit & Cakupan',
    title: 'Satelit',
    lede:
      'Saat kabel laut tidak menjangkau dan BTS terlalu mahal, satelit menjadi pilihan terakhir. Indonesia adalah negara berkembang pertama di dunia yang memiliki satelit komunikasi domestik sendiri sejak 1976 — capaian yang lahir dari kerja sama luar negeri di bidang teknologi antariksa.',
    sections: [
      {
        kind: 'grid',
        heading: 'Sejarah Satelit & Kerja Sama Internasional',
        body:
          'Indonesia tidak pernah membangun satelit sendirian. Mulai dari Palapa A1 yang dirakit Hughes (AS), Telkom-3S oleh Thales Alenia Space (Eropa), hingga Satria-1 yang dirakit di Cannes — kerja sama luar negeri menjadi pola pengadaan satelit nasional.',
        cards: [
          {
            title: 'Palapa A1 (1976)',
            body:
              'Diluncurkan 8 Juli 1976 dari Cape Canaveral oleh roket Delta milik AS. Menjadikan Indonesia negara berkembang pertama di dunia yang mengoperasikan sistem satelit komunikasi domestik sendiri.'
          },
          {
            title: 'Telkom-3S (2017)',
            body:
              'Kapasitas 42 transponder (C-band, extended C-band, Ku-band). Diproduksi Thales Alenia Space (Prancis-Italia), diluncurkan Ariane 5 dari Kourou, Guyana Prancis.'
          },
          {
            title: 'Satria-1 (2023)',
            body:
              'High-Throughput Satellite 150 Gbps milik BAKTI. Dirakit Thales Alenia, diluncurkan SpaceX Falcon 9. Melayani 150.000 titik publik di daerah 3T.'
          }
        ]
      },
      {
        kind: 'grid',
        heading: 'Peran Strategis Satelit',
        body:
          'Satelit melengkapi (bukan menggantikan) kabel dan BTS. Latensinya tinggi (~600 ms untuk GEO) dan kapasitasnya terbatas, tetapi cakupannya satu benua sekaligus — menjangkau ruang yang tidak bisa disentuh teknologi lain.',
        cards: [
          {
            title: 'Broadcasting',
            body:
              'TV satelit (Indovision, K-Vision, Transvision) mengandalkan transponder Telkom dan Palapa untuk menyiarkan konten ke seluruh nusantara.'
          },
          {
            title: 'Konektivitas Pelosok',
            body:
              'VSAT menghubungkan ATM bank di pulau terluar, kapal nelayan di tengah laut, dan pos militer di perbatasan negara.'
          },
          {
            title: 'Mitigasi Bencana',
            body:
              'Setelah gempa atau tsunami yang memutus kabel, satelit menjadi backup komunikasi pertama bagi tim SAR dan korban.'
          }
        ]
      },
      {
        kind: 'callout',
        heading: 'Kerja Sama Luar Negeri Teknologi Satelit',
        body:
          'Satelit adalah bidang yang mustahil dikuasai sendirian. Setiap satelit Indonesia melibatkan minimal tiga negara: produsen (AS, Prancis), peluncur (AS, Eropa, Tiongkok), dan operator slot orbit (ITU di Jenewa). Slot orbit 108°E–146°E yang dilindungi sebagai sumber daya nasional dikelola lewat regulasi ITU. Inilah contoh paling murni bagaimana konektivitas antar ruang Indonesia dibangun di atas pondasi kerja sama internasional.'
      }
    ],
    sources: [
      'BAKTI Kominfo — Buku Putih Proyek Satelit Satria',
      'PT Telkom Satelit Indonesia (Telkomsat) — Profil Satelit Aktif',
      'ITU Master International Frequency Register (MIFR)',
      'LAPAN/BRIN — Sejarah Pemanfaatan Antariksa Indonesia'
    ]
  },

  'internet-3t': {
    eyebrow: 'Pemerataan Akses',
    title: 'Internet di Daerah Terpencil',
    lede:
      'Daerah 3T (Tertinggal, Terdepan, Terluar) mencakup 122 kabupaten yang dikategorikan tertinggal secara ekonomi, terdepan di garis perbatasan, atau terluar di pulau-pulau kecil. BAKTI Kominfo hadir agar setiap warga, di ruang manapun, punya hak sama atas konektivitas digital.',
    sections: [
      {
        kind: 'grid',
        heading: 'Program BAKTI — Negara Hadir di Tiap Ruang',
        body:
          'Badan Aksesibilitas Telekomunikasi dan Informasi (BAKTI) adalah BLU di bawah Kominfo, dibiayai dari kontribusi USO 1,25% pendapatan kotor operator. Tugasnya membangun infrastruktur di lokasi yang tidak menarik secara komersial — wujud kewajiban negara atas konektivitas antar ruang.',
        cards: [
          {
            title: 'BTS USO',
            body:
              'Pembangunan 7.904 BTS di desa 3T (target 2024). Per 2023 sudah 5.618 BTS aktif menjangkau ribuan desa yang sebelumnya blank spot.'
          },
          {
            title: 'Akses Internet Publik',
            body:
              'Layanan internet di 18.005 titik publik: sekolah, puskesmas, balai desa, pos pengamanan perbatasan. Ruang publik menjadi gerbang digital warga.'
          },
          {
            title: 'Satelit Satria-1',
            body:
              'Satelit 150 Gbps melayani 150.000 titik publik di tempat yang BTS dan kabel tidak menjangkau. Hasil kerja sama dengan Thales Alenia (Prancis).'
          }
        ]
      },
      {
        kind: 'grid',
        heading: 'Tantangan Lapangan',
        body:
          'Membawa internet ke pelosok bukan sekadar masalah teknis. Ada konteks logistik, sosial, dan keberlanjutan yang mengikat erat dengan keruangan tiap wilayah — sesuatu yang sering luput dari perhitungan kota besar.',
        cards: [
          {
            title: 'Logistik',
            body:
              'Material BTS diangkut helikopter ke pegunungan Papua atau perahu ke pulau kecil. Biaya bisa 3–5x lebih mahal dari Jawa.'
          },
          {
            title: 'Listrik',
            body:
              'Banyak desa belum dijangkau PLN. BTS BAKTI sering memakai panel surya + baterai dengan biaya operasi yang tinggi.'
          },
          {
            title: 'Literasi Digital',
            body:
              'Akses fisik tidak otomatis menjadi pemanfaatan. Perlu pendampingan agar internet dipakai untuk pendidikan dan ekonomi, bukan sekadar konsumsi konten.'
          }
        ]
      },
      {
        kind: 'callout',
        heading: 'Interaksi Masyarakat Digital di Ruang Pinggiran',
        body:
          'Ketika sebuah desa di pedalaman Kalimantan terhubung internet untuk pertama kalinya, ruang itu berubah karakter. Pelajar bisa mengikuti kelas daring, nelayan memantau cuaca, ibu-ibu UMKM menjual hasil hutan ke pasar nasional. Konektivitas antar ruang mengubah relasi kekuasaan: pinggiran tidak lagi terisolasi dari pusat. Inilah dampak paling manusiawi dari topologi jaringan telekomunikasi Indonesia.'
      }
    ],
    sources: [
      'BAKTI Kominfo — Annual Report 2023',
      'Kementerian Desa, PDT, dan Transmigrasi — Indeks Desa Membangun',
      'Peraturan Presiden No. 63/2020 tentang Daerah Tertinggal',
      'World Bank — Indonesia Digital Economic Report'
    ]
  },

  'pengaruh-geografis': {
    eyebrow: 'Konteks Fisik',
    title: 'Pengaruh Letak Geografis',
    lede:
      'Indonesia adalah negara kepulauan terbesar di dunia: ±17.000 pulau, 38 provinsi, 6,4 juta km² wilayah laut, dan rentang 5.110 km dari Sabang ke Merauke. Konsep keruangan menjelaskan bahwa letak ini bukan sekadar kondisi geografis — ia membentuk pilihan teknologi, pola kerja sama internasional, dan cara masyarakat berinteraksi secara digital.',
    sections: [
      {
        kind: 'grid',
        heading: 'Tiga Karakter Geografis Utama',
        body:
          'Ada tiga ciri keruangan Indonesia yang langsung memengaruhi topologi jaringan telekomunikasi: bentuk kepulauan, posisi di Cincin Api Pasifik, dan letak di garis ekuator. Ketiganya bekerja bersamaan menentukan strategi konektivitas antar ruang.',
        cards: [
          {
            title: 'Negara Kepulauan',
            body:
              'Laut lebih luas dari daratan. Kabel fiber harus melintasi laut, BTS dibangun di setiap pulau berpenduduk, satelit menyatukan ruang yang tersisa.'
          },
          {
            title: 'Ring of Fire',
            body:
              'Indonesia di pertemuan tiga lempeng tektonik. Gempa dan tsunami berisiko memutus kabel laut — dibutuhkan jalur redundan dan backup tier-1.'
          },
          {
            title: 'Khatulistiwa',
            body:
              'Garis ekuator memberi akses ideal ke orbit GEO. Slot orbit 108°E–146°E menjadi sumber daya strategis nasional yang dilindungi ITU.'
          }
        ]
      },
      {
        kind: 'grid',
        heading: 'Implikasi pada Topologi Jaringan',
        body:
          'Geografi tidak hanya menjadi tantangan, tetapi juga membentuk pola kerja sama luar negeri dan interaksi masyarakat digital. Indonesia mau tidak mau bergantung pada konsorsium internasional, sekaligus menjadi mitra penting bagi Singapura, Australia, Filipina, dan negara Asia Pasifik lainnya.',
        cards: [
          {
            title: 'Strategi Multi-modal',
            body:
              'Tidak ada satu teknologi yang cukup. Indonesia menggabungkan kabel laut + BTS + satelit dalam satu desain konektivitas yang saling melengkapi.'
          },
          {
            title: 'Kerja Sama Regional',
            body:
              'Sebagai negara transit kabel internasional, Indonesia menjadi mitra strategis dalam konsorsium SEA-ME-WE 5, ASE, INDIGO, dan ASC.'
          },
          {
            title: 'Kedaulatan Data',
            body:
              'Letak strategis dan UU PDP mendorong pembangunan data center domestik (Jakarta, Batam, Surabaya) sebagai hub regional Asia Tenggara.'
          }
        ]
      },
      {
        kind: 'callout',
        heading: 'Keruangan, Konektivitas, dan Masyarakat Digital',
        body:
          'Konsep diferensiasi area menjelaskan mengapa solusi yang berhasil di Jawa belum tentu cocok di Maluku. Geografi adalah fondasi yang memaksa pilihan teknologi tetap kontekstual — tidak ada satu cetak biru tunggal untuk seluruh nusantara. Sementara itu, konektivitas antar ruang dan interaksi masyarakat digital tetap bisa terjadi karena Indonesia terbuka terhadap kerja sama luar negeri di bidang teknologi telekomunikasi dan satelit. Geografi yang tampak menyulitkan justru memaksa Indonesia menjadi salah satu negara paling adaptif dalam membangun jaringan digitalnya.'
      }
    ],
    sources: [
      'BPS — Statistik Indonesia 2024 (data kepulauan dan luas wilayah)',
      'Pushidrosal TNI AL — Peta Wilayah Laut NKRI',
      'BMKG — Sebaran Sumber Gempa dan Tsunami Indonesia',
      'UNCLOS 1982 dan UU No. 32/2014 tentang Kelautan'
    ]
  }
};
