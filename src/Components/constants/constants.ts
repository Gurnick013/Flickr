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
  return await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=32fb858701b541977672f6d6ca7b6917&tags=&text=asd&privacy_filter=1&content_type=1&per_page=10&page=&format=json&nojsoncallback=1`
  );
}

export default HTTP;

// <img src="//live.staticflickr.com/65535/51365824905_4da19cc602_5k.jpg" class="zoom-xlarge">