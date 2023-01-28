import { Gender, Species, Status } from "./personajes";

export interface AllEpisodeRespon {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;

}

type fecha = string
// type characters  = {
//     id: number,
//     name: string,
//     status: Status,
//     species: Species,
//     gender: Gender,
// }


export interface Result {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    fecha;
    
}

export interface Episodios {
    id: number,
    air_date: string,
    name: string,
    episode: string,
    characters: string[]
}

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string
    //pic: `https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`;
}