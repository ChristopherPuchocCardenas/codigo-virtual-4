// Funcion para crear un segundo arreglo de peliculas que contenga solamente el titulo,
// la fecha de lanzamiento y la sinopsis.
// Al final imprimir el arreglo

const peliculasResumen = () => {
    const resumenes = peliculas.map((pelicula) => {
        return {
            titulo: pelicula.title,
            estreno: pelicula.release_date,
            sinopsis: pelicula.overview,
        };

    });
    console.log(resumenes);
};

// peliculasResumen();

// Funcion para filtrar y mostrar en un nuevo arreglo todas las peliculas
// en idioma español(castellano)
// 

const peliculasLatinas = () => {
    const pelisFiltradas = peliculas.filter((pelicula) => {
        if (pelicula.original_language === "es") {
            return pelicula;
        }
    })
    console.log(pelisFiltradas);
}

// peliculasLatinas();

// Funcion que retorne un genero dado por el id del genero
// 
// 

const searchGenreById = (id) => {
        const generoEncontrado = generos.find((genero) => {
            if (genero.id === id) {
                return genero;
            }
        });
        if (generoEncontrado) {
            return generoEncontrado.name;
        } else {
            return null;
        }
    }
    // console.log(searchGenreById(12));

// Funcion que imprime un nuevo arreglo de peliculas, donde cada pelicula tendra
// {
// titulo:""
// sinopsis:""
// estreno:""
// generos:["","",""]
// 
// }
// HINT: usar la funcion searchGenreById

const resumenPeliculasConGeneros = () => {
    const peliculasResumen = peliculas.map((movie) => {
        // crear un arreglo de generos de acuerdo 
        // a la pelicula en la que me encuentro iterando
        const generosStrings = movie.genre_ids.map((idDelGenero) => {
            let nombre = searchGenreById(idDelGenero);
            return nombre;
        });

        let objPeliResumen = {
            titulo: movie.title,
            sinopsis: movie.overview,
            estreno: movie.release_date,
            generos: generosStrings,
        };
        return objPeliResumen;
    });
    console.log(peliculasResumen);
};
// resumenPeliculasConGeneros();