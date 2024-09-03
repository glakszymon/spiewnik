// let song_number = 1;
// let number_of_songs = 3; // Updated to match the number of songs in piosenki.json

// function loadSong(id) {
//     fetch('piosenki.json')
//         .then(response => response.json())
//         .then(data => {
//             const songContainer = document.getElementById('songContainer');
//             const song = data.songs.find(song => song.id === id.toString());
//             if (song) {
//                 songContainer.innerHTML = `
//                 <h2> ${song.title}</h2>
//                 <h3> ${song.artist}</h3>
//                 <h4> ${song.bicie}</h4>
//                 ${song.words}
//                 `;
//             } else {
//                 songContainer.innerHTML = '<p>Song not found</p>';
//             }
//         })
//         .catch(error => console.error('Error:', error));
// }

// function loadNextSong() {
//     song_number++;
//     if (song_number > number_of_songs) {
//         song_number = 1;
//     }
//     loadSong(song_number);
// }

// function loadPreviousSong() {
//     song_number--;
//     if (song_number < 1) {
//         song_number = number_of_songs;
//     }
//     loadSong(song_number);
// }

// Initial load
// loadSong(song_number);


function openNav() {
    var x = document.getElementById("Sidenav");
    if (x.style.display === "block") {
      x.style.display = "none";
      document.getElementById('menuSongs').src="img/menu1.png";
    } else {
      x.style.display = "block";
      document.getElementById('menuSongs').src="img/menu2.png";
    }
} 


// function scrollToTarget() {
//     const element = document.getElementById('scrollEnd')
//     element.scrollIntoView({
//         behavior: 'smooth',
//         speed: 0,
//         // block: "end"
//     })
// }


// function scroll(e) {
//     const href = $(this).attr('href');
      
//     e.preventDefault();
      
//       $('html, body').animate({
//           scrollTop: $(href).offset().top
//       }, 800);
  
//       location.hash = href;
//   };
  
//   $('a[href*="#"]').click(scroll); 


// async function loadData() {
//     // Wczytaj dane z pliku JSON
//     const response = await fetch('piosenki.json');
//     const jsonData = await response.json();

//     // console.log(jsonData);
//     // Wyświetl tytuł i artystę
//     document.getElementById('title').innerText = jsonData.songs[0].title;
//     document.getElementById('artist').innerText = jsonData.songs[0].artist;
    
    
//     // Wczytaj tekst z pliku .txt
//     const textResponse = await fetch(jsonData.songs[0].file);
//     const textData = await textResponse.text();
    
//     // Wyświetl tekst na stronie
//     document.getElementById('songContainer').innerHTML = textData;
//     // document.getElementById('content').innerHTML = textData;
// }


async function loadData(id) {
    // Wczytaj dane z pliku JSON
    const response = await fetch('piosenki.json');
    const jsonData = await response.json();

    // Wczytaj tekst z pliku .txt
    const textResponse = await fetch(jsonData.songs[id].file);
    const textData = await textResponse.text();

    // Wyświetl tytuł i artystę
    document.getElementById('title').innerText = jsonData.songs[id].title;
    document.getElementById('artist').innerText = jsonData.songs[id].artist;
    document.getElementById('bicie').innerText = jsonData.songs[id].bicie;


    // Wyświetl tekst na stronie jako HTML
    document.getElementById('songContainer').innerHTML = textData;
}

//-------------------------------------------------------------
// let interval;

//     // Funkcja przewijająca stronę w dół
// function scrollToBottom() {
//     window.scrollBy(0, 1); // Przewijamy o 1 piksel w dół
// }

// // Funkcja uruchamiająca przewijanie
// function startScrolling() {
//     // Upewniamy się, że przewijanie nie jest już uruchomione
//     if (!interval) {
//         interval = setInterval(scrollToBottom, 10); // Ustawiamy interwał na przewijanie co 10 ms

//         // Ustawiamy czas na 2 minuty (120000 ms)
//         setTimeout(() => {
//             clearInterval(interval); // Zatrzymujemy przewijanie po 2 minutach
//             interval = null; // Resetujemy zmienną interval
//         }, 120000);
//     }
// }

// // Dodajemy nasłuchiwacz zdarzeń do przycisku
// document.getElementById('scrollButton').addEventListener('click', startScrolling);

// -------------------------------------------------------------


// let interval;
// let scrollInterval = 10;

//     // Funkcja przewijająca stronę w dół
//     function scrollToBottom() {
//         window.scrollBy(0, 1); // Przewijamy o 1 piksel w dół
//     }

//     // Funkcja uruchamiająca przewijanie
//     function startScrolling() {
//         // Upewniamy się, że przewijanie nie jest już uruchomione
//         if (!interval) {
//             interval = setInterval(scrollToBottom, scrollInterval); // Ustawiamy interwał na przewijanie co 10 ms

//             // Ustawiamy czas na 2 minuty (120000 ms)
//             setTimeout(() => {
//                 clearInterval(interval); // Zatrzymujemy przewijanie po 2 minutach
//                 interval = null; // Resetujemy zmienną interval
//             }, 120000);
//         }
//     }

//     // Funkcja zatrzymująca przewijanie po kliknięciu lewego przycisku myszy
//     function stopScrolling(event) {
//         if (event.button === 0) { // Sprawdzamy, czy kliknięto lewy przycisk myszy
//             clearInterval(interval); // Zatrzymujemy przewijanie
//             interval = null; // Resetujemy zmienną interval
//         }
//     }

//     // Dodajemy nasłuchiwacz zdarzeń do przycisku
//     document.getElementById('scrollButton').addEventListener('click', startScrolling);

//     // Dodajemy nasłuchiwacz zdarzeń do dokumentu, aby przechwycić kliknięcie myszą
//     document.addEventListener('mousedown', stopScrolling);




let interval;
let scrollInterval = 50; // Domyślny interwał w milisekundach

// Funkcja przewijająca stronę w dół
function scrollToBottom() {
    window.scrollBy(0, 1); // Przewijamy o 1 piksel w dół
}

// Funkcja uruchamiająca przewijanie
function startScrolling() {
    if (!interval) {
        interval = setInterval(scrollToBottom, scrollInterval); // Ustawiamy interwał na przewijanie

        setTimeout(() => {
            clearInterval(interval); // Zatrzymujemy przewijanie po 2 minutach
            interval = null; // Resetujemy zmienną interval
        }, 120000);
    }
}

// Funkcja zatrzymująca przewijanie po kliknięciu lewego przycisku myszy
function stopScrolling(event) {
    if (event.button === 0) { // Sprawdzamy, czy kliknięto lewy przycisk myszy
        clearInterval(interval); // Zatrzymujemy przewijanie
        interval = null; // Resetujemy zmienną interval
    }
}

// Funkcja zwiększająca interwał
function increaseInterval() {
    scrollInterval += 5; // Zwiększamy interwał o 10 ms
    updateIntervalDisplay();
    if (interval) {
        clearInterval(interval); // Zatrzymujemy aktualne przewijanie
        interval = setInterval(scrollToBottom, scrollInterval); // Ustawiamy nowy interwał
    }
}

// Funkcja zmniejszająca interwał
function decreaseInterval() {
    if (scrollInterval > 0) { // Upewniamy się, że interwał nie jest mniejszy niż 10 ms
        scrollInterval -= 5; // Zmniejszamy interwał o 10 ms
        updateIntervalDisplay();
        if (interval) {
            clearInterval(interval); // Zatrzymujemy aktualne przewijanie
            interval = setInterval(scrollToBottom, scrollInterval); // Ustawiamy nowy interwał
        }
    }
}

// Funkcja aktualizująca wyświetlanie interwału
function updateIntervalDisplay() {
    document.getElementById('intervalDisplay').textContent = `Opóźnienie: ${scrollInterval} ms`;
}

// Dodajemy nasłuchiwacze zdarzeń do przycisków
document.getElementById('scrollButton').addEventListener('click', startScrolling);
document.getElementById('increaseInterval').addEventListener('click', increaseInterval);
document.getElementById('decreaseInterval').addEventListener('click', decreaseInterval);
document.addEventListener('mousedown', stopScrolling);