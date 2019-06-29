/* eslint-disable no-undef */
class Musician {
  constructor(albumsUrl) {
    this.albumsUrl = albumsUrl;
  }

  async getAlbums() {
    const response = await fetch(this.albumsUrl);
    const data = await response.json();
    return data;
  }
}

export default function res10() {
  const musician = new Musician('https://jsonplaceholder.typicode.com/albums');
  musician.getAlbums().then(albums => console.log(albums));
}
