// const images = require('images');
// const md5 = require('md5');
const conection = require('../utils/mongo');
// const { upload, createfile } = require('../utils/ipfs');
// const path = require('path');
const axios = require('axios');

// BACKGROUND = ['GREEN', 'RED'];

// GENDER = ['male', 'female'];

// MALE_SKIN = ['value'];
// MALE_HAIRS = ['BEANIE'];
// MALE_EYES = [''];
// MALE_MOUTH = ['BIG-GRIN'];
// MALE_CLOTHS = ['PULLOVER-HOODIE'];

// FEMALE_SKIN = ['PERU'];
// FEMALE_HAIRS = ['PONY-BANG', 'SIDE-BRAID'];
// FEMALE_EYES = ['REGULAR', 'WINK'];
// FEMALE_MOUTH = ['CLOSED', 'PURPLE'];
// FEMALE_CLOTHS = ['CYBER', 'SILVER'];

// const attributes = [];
module.exports.main = async (req, res, next) => {
  const token_id = parseInt(req.params.id);
  const getdata = await FetchIpfsdataFromMongoose(token_id);

  if (getdata != null) {
    const r = await gethttpresponse(getdata);
    res.send(r);
  } else {
    res.send("Token is Not Minted Yet..")
  }
  //   else {
  //     while (true) {
  //       gender = GENDER[getrandom(GENDER.length)];

  //       var skin, background, hairs, eyes, mouth, cloths;

  //       if (gender == GENDER[0]) {
  //         skin = MALE_SKIN[getrandom(MALE_SKIN.length)];
  //         background = BACKGROUND[getrandom(BACKGROUND.length)];
  //         hairs = MALE_HAIRS[getrandom(MALE_HAIRS.length)];
  //         eyes = MALE_EYES[getrandom(MALE_EYES.length)];
  //         mouth = MALE_MOUTH[getrandom(MALE_MOUTH.length)];
  //         cloths = MALE_CLOTHS[getrandom(MALE_CLOTHS.length)];
  //       } else {
  //         skin = FEMALE_SKIN[getrandom(FEMALE_SKIN.length)];
  //         background = BACKGROUND[getrandom(BACKGROUND.length)];
  //         hairs = FEMALE_HAIRS[getrandom(FEMALE_HAIRS.length)];
  //         eyes = FEMALE_EYES[getrandom(FEMALE_EYES.length)];
  //         mouth = FEMALE_MOUTH[getrandom(FEMALE_MOUTH.length)];
  //         cloths = FEMALE_CLOTHS[getrandom(FEMALE_CLOTHS.length)];
  //       }

  //       var traitsCollection =
  //         background + gender + skin + hairs + eyes + mouth + cloths;
  //       var hash = Gethash(traitsCollection);
  //       var traits = [background, gender, skin, cloths, hairs, eyes, mouth];
  //       const res = await getHashFromMongo(hash);
  //       if (res === true) {
  //         continue;
  //       }
  //       if (res === false) {
  //         break;
  //       }
  //     }
  //     const response = await insertHashtoMongoose(hash);
  //     console.log('Hash insertion :  ', response);
  //     compose_image(traits);
  //     const imageIpfsLink = await upload(path.join(__dirname, './', 'out.png'));
  //     _add_attribute('BackGround', background);
  //     _add_attribute('GENDER', gender);
  //     _add_attribute('Eyes', eyes);
  //     _add_attribute('Mouth', mouth);
  //     _add_attribute('Cloths', cloths);
  //     _add_attribute('Hairs', hairs);
  //     console.log('+++++++++++++++++++++++');
  //     data = {
  //       description: 'Nft tokens made ',
  //       image: imageIpfsLink,
  //       external_url: `https://openseacreatures.io/${token_id}`,
  //       attributes: attributes,
  //     };
  //     createfile(data);
  //     const metadataUrl = await upload(
  //       path.join(__dirname, './', 'newData.json')
  //     );
  //     InsertIpfsdataToMongoose(token_id, metadataUrl);
  //     const r = await gethttpresponse(metadataUrl);
  //     res.send(r);
  //   }
};

// //============== customs fucntions to divide the functionality=================//

// function _add_attribute(attribute_name, options) {
//   var trait = { trait_type: attribute_name, value: options };
//   attributes.push(trait);
// }

// function compose_image(traits) {
//   //function to compose image
//   const backgroundpath = path.join(
//     __dirname,
//     '../images/background/',
//     `${traits[0]}.png`
//   );
//   const skinpath = path.join(
//     __dirname,
//     `../images/${traits[1]}/skin/`,
//     `${traits[2]}.png`
//   );
//   const clothsPath = path.join(
//     __dirname,
//     `../images/${traits[1]}/cloths/`,
//     `${traits[3]}.png`
//   );
//   const hairpath = path.join(
//     __dirname,
//     `../images/${traits[1]}/hairs/`,
//     `${traits[4]}.png`
//   );
//   const eyespath = path.join(
//     __dirname,
//     `../images/${traits[1]}/eyes/`,
//     `${traits[5]}.png`
//   );
//   const mouthpath = path.join(
//     __dirname,
//     `../images/${traits[1]}/mouth/`,
//     `${traits[6]}.png`
//   );

//   images(backgroundpath).draw(images(skinpath), 10, 1).save('out.png');
//   images('out.png').draw(images(clothsPath), 10, 1).save('out.png');
//   images('out.png').draw(images(hairpath), 10, 10).save('out.png');
//   images('out.png').draw(images(eyespath), 10, 10).save('out.png');

//   images('out.png').draw(images(mouthpath), 10, 10).save('out.png');
//   console.log('Image created...');
// }

// function getrandom(max) {
//   //provides random number from zero to max value
//   if (max == 1) {
//     return 0;
//   } else {
//     return parseInt(Math.random() * (max - 0) + 0);
//   }
// }

// function Gethash(value) {
//   //create image traits hash
//   var hash = md5(value);
//   return hash;
// }

// const getHashFromMongo = async (value) => {
//   //function to get image hash from mongodb
//   try {
//     const getcon = await conection.getconnection;
//     console.log('Comparing Hash in mongodb...');
//     const result = await getcon.collection('hashes').findOne({ hash: value });

//     if (result != null) {
//       console.log('Hash is not unique already created..');
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(err);
//   }
// };

// const InsertIpfsdataToMongoose = async (token_id, data) => {
//   try {
//     const getcon = await conection.getconnection;

//     const result = await getcon
//       .collection('metadata')
//       .insertOne({ id: token_id, ipfs: data });
//     console.log('Adding ipfs data to mongodb..');
//     if (result != null) {
//       console.log('Data inserted Succesfully..');
//     }
//   } catch (error) {
//     console.log(err);
//   }
// };

const FetchIpfsdataFromMongoose = async (token_id) => {
  try {
    const getcon = await conection.getconnection;

    const result = await getcon
      .collection('metadata')
      .findOne({ id: token_id });
    if (result != null) {
      console.log('Id already exist..');
      return result.ipfs;
    }
  } catch (error) {
    console.log(err);
  }
};

// const insertHashtoMongoose = async (value) => {
//   //fucntion to insert image hash to mongodb
//   try {
//     const getcon = await conection.getconnection;

//     const result = await getcon.collection('hashes').insertOne({ hash: value });
//     console.log('Adding data to mongodb..');
//     if (result != null) {
//       console.log('Data inserted Succesfully..');
//       return true;
//     } else {
//       return false;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
const gethttpresponse = (url) => {
  return axios.get(url)
    .then(response => response.data)
    .then(data => data)
    .catch(err => console.error(err));
};

module.exports.MocData = async (req, res, next) => {
  data = {
    "description": "Nft tokens made ",
    "image": "https://gateway.ipfs.io/ipfs/QmWPCzuMAYRjZWZrif8kD6t4nXWr6tgD71jHySeiURa18u",
    "external_url": "https://Reflectivecollective.io",
  }
  res.send(data);
}