const KEY_API = '43c63b5bf1a4dd1a10956aed90e8b8fd'

async function HTTP (text: string, page: number ) {
console.log(page)
  return await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY_API}&text=${text}&per_page=30&page=${page}&format=json&nojsoncallback=1`
  );
}

export default HTTP;

export interface ISearch {
  text: string;
  page: number;
}
