document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Pobierz dane z pliku JSON
        const response = await fetch('piosenki.json');
        const jsonData = await response.json();

        // Pobierz element sidenav
        const sidenav = document.getElementById('Sidenav');

        // Wyczyść zawartość sidenav
        sidenav.innerHTML = '';

        // Iteruj po piosenkach i dodaj je do sidenav
        jsonData.songs.forEach(song => {
            const songElement = document.createElement('a');
            songElement.classList.add('optionMenu');
            songElement.setAttribute('onclick', `loadData(${song.id})`);

            const titleElement = document.createElement('div');
            titleElement.classList.add('titleMenu');
            titleElement.innerText = song.title;

            const artistElement = document.createElement('div');
            artistElement.classList.add('autorMenu');
            artistElement.innerText = song.artist;

            songElement.appendChild(titleElement);
            songElement.appendChild(artistElement);
            sidenav.appendChild(songElement);
            sidenav.appendChild(document.createElement('br')); // Dodaj <br> po każdej piosence
        });
    } catch (error) {
        console.error('Błąd podczas ładowania danych:', error);
    }
});




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

    if(jsonData.songs[id].kapo == ""){
        document.getElementById('kapo').innerText = "";
    }
    else{
        document.getElementById('kapo').innerText = `Kapodaster: ${jsonData.songs[id].kapo}`;
    }    

    // Wyświetl tekst na stronie jako HTML
    document.getElementById('songContainer').innerHTML = textData;
}




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


