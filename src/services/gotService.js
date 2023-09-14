
export default class GotService {

    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}`, `status: ${res.status}`)
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=5&pageSize=10');
        return res.map(this._transformcCharacter)
            
    }

    async getCharacter(id) {
        const char = await this.getResource(`/characters/${id}`)
        return this._transformcCharacter(char)

    }

    getAllHouses() {
        return this.getResource('/houses/')
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`)
    }

    getAllBooks() {
        return this.getResource('/books/')
    }

    getBook(id) {
        return this.getResource(`/books/${id}`)
    }


    _transformcCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }


    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }


    _transformBook(book) {
        return {
            name: book.name,
            numberofPages: book.numberofPages,
            publisher: book.publisher,
            released: book.released
        }
    }

}