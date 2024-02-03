const API_KEY = '1b8fa411bbda2863a127640b8800cbab';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

const Tmdb =  {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)
            },
            {
                slug: 'treding',
                title: 'Recomendados para Você',
                items:  await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'top-rated',
                title: 'Em Alta',
                items:   await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'animation',
                title: 'Animação',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=16&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=18&language=pt-BR}`)
            },
            {
                slug: 'western',
                title: 'Faroeste',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=37&language=pt-BR}`)
            },
            // {
            //     slug: 'history',
            //     title: 'História',
            //     items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=36&language=pt-BR`)
            // },
            {
                slug: 'mistery',
                title: 'Mistério',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=9648&language=pt-BR`)
            },
            // {
            //     slug: 'musical',
            //     title: 'Musical',
            //     items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=10402&language=pt-BR`)
            // },
            {
                slug: 'romance',
                title: 'Romance',
                items:  await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=10749&language=pt-BR`)
            },
            // {
            //     slug: 'documentary',
            //     title: 'Documentários',
            //     items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_genres=99&language=pt-BR`)
            // },
        ];
    }
}

export default Tmdb;

