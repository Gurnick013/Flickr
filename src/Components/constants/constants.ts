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

async function HTTP (text: string) {

  console.log(text)
  return await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a43bef7f288d9476407e0df31b550d53&per_page=20&page=123&format=json&nojsoncallback=1&auth_token=72157719669091582-d29e18b23d734c8d&api_sig=a9d473b3ee29ca0128144d1a0cbcb4ed`
  );
}

export default HTTP;
