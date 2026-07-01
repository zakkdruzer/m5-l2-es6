console.log("%cEtapa 3 · App de música: Playlists", "font-weight: bold; color: green; font-size: 15px;");
console.log("")

// 1) Definir los 3 arrays de canciones
const rock = [
  'Bohemian Rhapsody - Queen',
  'Back in Black - AC/DC',
  'Smells Like Teen Spirit - Nirvana'
];

const pop = [
  'Blinding Lights - The Weeknd',
  'Bad Guy - Billie Eilish',
  'Levitating - Dua Lipa'
];

const electro = [
  'One More Time - Daft Punk',
  'Animals - Martin Garrix',
  'Levels - Avicii'
];

// 2) Combinar en todasLasCanciones con spread
const todasLasCanciones = [...rock, ...pop, ...electro];

// Verificación
console.log('Rock:', rock.length);
console.log('Pop:', pop.length);
console.log('Electro:', electro.length);
console.log('Total canciones:', todasLasCanciones.length);

// 3) Función crearPlaylist(nombre, ...canciones)
function crearPlaylist(nombre, ...canciones) {
  const total = canciones.length;

  return {
    nombre,
    canciones,
    total
  };
}

// Crear una nueva playlist
const playlistRockPop = crearPlaylist('Rock & Pop', ...rock, ...pop);

// 4) Playlist expandida sin mutar la original
const playlistOriginal = crearPlaylist('Electro Mix', ...electro);

// Expandir sin mutar
const nuevasCanciones = [
  'Titanium - David Guetta',
  'Clarity - Zedd'
];

const playlistExpandida = {
  ...playlistOriginal,
  canciones: [...playlistOriginal.canciones, ...nuevasCanciones],
  total: playlistOriginal.canciones.length + nuevasCanciones.length
};

// Mostrar la playlist creada y su versión expandida. Confirma que la original no cambió.
console.log('Playlist original:', playlistOriginal);
console.log('Playlist expandida:', playlistExpandida);
console.log('La playlist original sigue con total =', playlistOriginal.total);

console.log("")