<template>
  <div id="app">
    <header class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'home' }">Ana Sayfa</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'add' }">Yeni Kitap Ekle</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main class="container my-4">
      <router-view></router-view>
    </main>

    <footer class="bg-light py-4 mt-auto">
      <div class="container text-center">
        <p class="mb-0">&copy; 2024 Kitap Takip. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  name: 'App',
  created() {
    this.initializeBooks();
  },
  methods: {
    initializeBooks() {
      const existingBooks = localStorage.getItem('books');
      if (!existingBooks) {
        const initialBooks = [
          { title: "1984", author: "George Orwell", status: "Okunacak", id: 1 },
          { title: "Suç ve Ceza", author: "Fyodor Dostoyevski", status: "Okunacak", id: 2 },
          { title: "Savaş ve Barış", author: "Lev Tolstoy", status: "Okunacak", id: 3 },
          { title: "Ulysses", author: "James Joyce", status: "Okunacak", id: 4 },
          { title: "Yüzyıllık Yalnızlık", author: "Gabriel García Márquez", status: "Okunacak", id: 5 },
          { title: "Büyük Gatsby", author: "F. Scott Fitzgerald", status: "Okunacak", id: 6 },
          { title: "Don Kişot", author: "Miguel de Cervantes", status: "Okunacak", id: 7 },
          { title: "Anna Karenina", author: "Lev Tolstoy", status: "Okunacak", id: 8 },
          { title: "Madame Bovary", author: "Gustave Flaubert", status: "Okunacak", id: 9 },
          { title: "Sefiller", author: "Victor Hugo", status: "Okunacak", id: 10 },
          { title: "Gurur ve Önyargı", author: "Jane Austen", status: "Okunacak", id: 11 },
          { title: "Fareler ve İnsanlar", author: "John Steinbeck", status: "Okunacak", id: 12 },
          { title: "Frankenstein", author: "Mary Shelley", status: "Okunacak", id: 13 },
          { title: "Bülbülü Öldürmek", author: "Harper Lee", status: "Okunacak", id: 14 },
          { title: "Romeo ve Juliet", author: "William Shakespeare", status: "Okunacak", id: 15 },
          { title: "Otomatik Portakal", author: "Anthony Burgess", status: "Okunacak", id: 16 },
          { title: "Fahrenheit 451", author: "Ray Bradbury", status: "Okunacak", id: 17 },
          { title: "Moby Dick", author: "Herman Melville", status: "Okunacak", id: 18 },
          { title: "Cesur Yeni Dünya", author: "Aldous Huxley", status: "Okunacak", id: 19 },
          { title: "Dönüşüm", author: "Franz Kafka", status: "Okunacak", id: 20 },
          { title: "Yazın Düşü", author: "William Shakespeare", status: "Okunacak", id: 21 },
          { title: "Çavdar Tarlasında Çocuklar", author: "J.D. Salinger", status: "Okunacak", id: 22 },
          { title: "Uğultulu Tepeler", author: "Emily Brontë", status: "Okunacak", id: 23 },
          { title: "Dorian Gray'in Portresi", author: "Oscar Wilde", status: "Okunacak", id: 24 },
          { title: "Karamazov Kardeşler", author: "Fyodor Dostoyevski", status: "Okunacak", id: 25 },
          { title: "Yaprak Dökümü", author: "Reşat Nuri Güntekin", status: "Okunacak", id: 26 },
          { title: "Satranç", author: "Stefan Zweig", status: "Okunacak", id: 27 },
          { title: "Hayvan Çiftliği", author: "George Orwell", status: "Okunacak", id: 28 },
          { title: "Küçük Prens", author: "Antoine de Saint-Exupéry", status: "Okunacak", id: 29 },
          { title: "Madam Curie", author: "Eve Curie", status: "Okunacak", id: 30 },
          { title: "İki Şehrin Hikâyesi", author: "Charles Dickens", status: "Okunacak", id: 31 },
          { title: "Babalar ve Oğullar", author: "Ivan Turgenyev", status: "Okunacak", id: 32 },
          { title: "Kumarbaz", author: "Fyodor Dostoyevski", status: "Okunacak", id: 33 },
          { title: "Vadideki Zambak", author: "Honoré de Balzac", status: "Okunacak", id: 34 },
          { title: "Yeraltından Notlar", author: "Fyodor Dostoyevski", status: "Okunacak", id: 35 },
          { title: "Oblomov", author: "Ivan Goncharov", status: "Okunacak", id: 36 },
          { title: "Beyaz Geceler", author: "Fyodor Dostoyevski", status: "Okunacak", id: 37 },
          { title: "Bir İdam Mahkûmunun Son Günü", author: "Victor Hugo", status: "Okunacak", id: 38 },
          { title: "Nana", author: "Émile Zola", status: "Okunacak", id: 39 },
          { title: "Germinal", author: "Émile Zola", status: "Okunacak", id: 40 },
          { title: "Altıncı Koğuş", author: "Anton Çehov", status: "Okunacak", id: 41 },
          { title: "Martı", author: "Anton Çehov", status: "Okunacak", id: 42 },
          { title: "Taras Bulba", author: "Nikolai Gogol", status: "Okunacak", id: 43 },
          { title: "Ölü Canlar", author: "Nikolai Gogol", status: "Okunacak", id: 44 },
          { title: "Palto", author: "Nikolai Gogol", status: "Okunacak", id: 45 },
          { title: "Notre Dame'ın Kamburu", author: "Victor Hugo", status: "Okunacak", id: 46 },
          { title: "Diriliş", author: "Lev Tolstoy", status: "Okunacak", id: 47 },
          { title: "İvan İlyiç'in Ölümü", author: "Lev Tolstoy", status: "Okunacak", id: 48 },
          { title: "Yer Altı Postası", author: "Hasan Ali Toptaş", status: "Okunacak", id: 49 },
          { title: "Kırmızı ve Siyah", author: "Stendhal", status: "Okunacak", id: 50 },
          { title: "Simyacı", author: "Paulo Coelho", status: "Okunacak", id: 51 },
          { title: "Dava", author: "Franz Kafka", status: "Okunacak", id: 52 },
          { title: "Şato", author: "Franz Kafka", status: "Okunacak", id: 53 },
          { title: "Veba", author: "Albert Camus", status: "Okunacak", id: 54 },
          { title: "Yabancı", author: "Albert Camus", status: "Okunacak", id: 55 },
          { title: "Sisifos Söyleni", author: "Albert Camus", status: "Okunacak", id: 56 },
          { title: "Benim Adım Kırmızı", author: "Orhan Pamuk", status: "Okunacak", id: 57 },
          { title: "Kara Kitap", author: "Orhan Pamuk", status: "Okunacak", id: 58 },
          { title: "Tutunamayanlar", author: "Oğuz Atay", status: "Okunacak", id: 59 },
          { title: "Tehlikeli Oyunlar", author: "Oğuz Atay", status: "Okunacak", id: 60 },
          { title: "Kürk Mantolu Madonna", author: "Sabahattin Ali", status: "Okunacak", id: 61 },
          { title: "İçimizdeki Şeytan", author: "Sabahattin Ali", status: "Okunacak", id: 62 },
          { title: "Kuyucaklı Yusuf", author: "Sabahattin Ali", status: "Okunacak", id: 63 },
          { title: "Aylak Adam", author: "Yusuf Atılgan", status: "Okunacak", id: 64 },
          { title: "Anayurt Oteli", author: "Yusuf Atılgan", status: "Okunacak", id: 65 },
          { title: "Huzur", author: "Ahmet Hamdi Tanpınar", status: "Okunacak", id: 66 },
          { title: "Saatleri Ayarlama Enstitüsü", author: "Ahmet Hamdi Tanpınar", status: "Okunacak", id: 67 },
          { title: "Ateşten Gömlek", author: "Halide Edip Adıvar", status: "Okunacak", id: 68 },
          { title: "Sinekli Bakkal", author: "Halide Edip Adıvar", status: "Okunacak", id: 69 },
          { title: "Çalıkuşu", author: "Reşat Nuri Güntekin", status: "Okunacak", id: 70 },
          { title: "Acımak", author: "Reşat Nuri Güntekin", status: "Okunacak", id: 71 },
          { title: "Dudaktan Kalbe", author: "Reşat Nuri Güntekin", status: "Okunacak", id: 72 },
          { title: "Mai ve Siyah", author: "Halid Ziya Uşaklıgil", status: "Okunacak", id: 73 },
          { title: "Aşk-ı Memnu", author: "Halid Ziya Uşaklıgil", status: "Okunacak", id: 74 },
          { title: "Araba Sevdası", author: "Recaizade Mahmut Ekrem", status: "Okunacak", id: 75 },
          { title: "Eylül", author: "Mehmet Rauf", status: "Okunacak", id: 76 },
          { title: "Dokuzuncu Hariciye Koğuşu", author: "Peyami Safa", status: "Okunacak", id: 77 },
          { title: "Matmazel Noraliya'nın Koltuğu", author: "Peyami Safa", status: "Okunacak", id: 78 },
          { title: "Yalnızız", author: "Peyami Safa", status: "Okunacak", id: 79 },
          { title: "Fatih-Harbiye", author: "Peyami Safa", status: "Okunacak", id: 80 },
          { title: "Kiralık Konak", author: "Yakup Kadri Karaosmanoğlu", status: "Okunacak", id: 81 },
          { title: "Yaban", author: "Yakup Kadri Karaosmanoğlu", status: "Okunacak", id: 82 },
          { title: "Sodom ve Gomore", author: "Yakup Kadri Karaosmanoğlu", status: "Okunacak", id: 83 },
          { title: "Bir Sürgün", author: "Yakup Kadri Karaosmanoğlu", status: "Okunacak", id: 84 },
          { title: "Ankara", author: "Yakup Kadri Karaosmanoğlu", status: "Okunacak", id: 85 },
          { title: "İnce Memed", author: "Yaşar Kemal", status: "Okunacak", id: 86 },
          { title: "Demirciler Çarşısı Cinayeti", author: "Yaşar Kemal", status: "Okunacak", id: 87 },
          { title: "Yer Demir Gök Bakır", author: "Yaşar Kemal", status: "Okunacak", id: 88 },
          { title: "Teneke", author: "Yaşar Kemal", status: "Okunacak", id: 89 },
          { title: "Devlet Ana", author: "Kemal Tahir", status: "Okunacak", id: 90 },
          { title: "Esir Şehrin İnsanları", author: "Kemal Tahir", status: "Okunacak", id: 91 },
          { title: "Yorgun Savaşçı", author: "Kemal Tahir", status: "Okunacak", id: 92 },
          { title: "Kurt Kanunu", author: "Kemal Tahir", status: "Okunacak", id: 93 },
          { title: "Küçük Ağa", author: "Tarık Buğra", status: "Okunacak", id: 94 },
          { title: "Firavun İmanı", author: "Tarık Buğra", status: "Okunacak", id: 95 },
          { title: "Yağmur Beklerken", author: "Tarık Buğra", status: "Okunacak", id: 96 },
          { title: "Dönemeçte", author: "Tarık Buğra", status: "Okunacak", id: 97 },
          { title: "Gençliğim Eyvah", author: "Tarık Buğra", status: "Okunacak", id: 98 },
          { title: "Osmancık", author: "Tarık Buğra", status: "Okunacak", id: 99 },
          { title: "Yalnız Efe", author: "Ömer Seyfettin", status: "Okunacak", id: 100 }
        ];
        localStorage.setItem('books', JSON.stringify(initialBooks));
      }

      const existingAuthors = localStorage.getItem('authors');
      if (!existingAuthors) {
        const authors = [
          "George Orwell", "Fyodor Dostoyevski", "Lev Tolstoy", "James Joyce", 
          "Gabriel García Márquez", "F. Scott Fitzgerald", "Miguel de Cervantes", 
          "Gustave Flaubert", "Victor Hugo", "Jane Austen", "John Steinbeck", 
          "Mary Shelley", "Harper Lee", "William Shakespeare", "Anthony Burgess", 
          "Ray Bradbury", "Herman Melville", "Aldous Huxley", "Franz Kafka",
          "J.D. Salinger", "Emily Brontë", "Oscar Wilde", "Reşat Nuri Güntekin",
          "Stefan Zweig", "Antoine de Saint-Exupéry", "Eve Curie", "Charles Dickens",
          "Ivan Turgenyev", "Honoré de Balzac", "Ivan Goncharov", "Émile Zola",
          "Anton Çehov", "Nikolai Gogol", "Hasan Ali Toptaş", "Stendhal",
          "Paulo Coelho", "Albert Camus", "Orhan Pamuk", "Oğuz Atay",
          "Sabahattin Ali", "Yusuf Atılgan", "Ahmet Hamdi Tanpınar", "Halide Edip Adıvar",
          "Halid Ziya Uşaklıgil", "Recaizade Mahmut Ekrem", "Mehmet Rauf", "Peyami Safa",
          "Yakup Kadri Karaosmanoğlu", "Yaşar Kemal", "Kemal Tahir", "Tarık Buğra",
          "Ömer Seyfettin"
        ];
        localStorage.setItem('authors', JSON.stringify(authors));
      }
    }
  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>