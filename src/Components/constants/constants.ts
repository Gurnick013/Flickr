// interface IPhotos {
//   photos?: IPhoto;
//   stat?: string;
// }

// interface IPhoto {
//   page?: number;
//   pages?: number;
//   perpage?: number;
//   photo?: Array<IPhotoInfo>;
//   total?: number;
// }

// interface IPhotoInfo {
//   farm?: number;
//   id?: string;
//   isfamily?: number;
//   isfriend?: number;
//   ispublic?: number;
//   owner?: string;
//   secret?: string;
//   server?: string;
//   title?: string;
// }
const SECRET = 'ff35a4efc7ac4073'
const KEY_API = '56c4ae4162b60c2461392b848d8038e7'

async function HTTP (text: string) {

  console.log(text)
  return await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY_API}&text=${text}&per_page=50&page=10&format=json&nojsoncallback=1`
  );
}

export default HTTP;
