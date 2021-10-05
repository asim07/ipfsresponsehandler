// const fs = require('fs');
// const path = require('path')
// const pinataSDK = require('@pinata/sdk');
// const pinata = pinataSDK(
//   'put key here',
//   'put key here'
// );

// module.exports.upload = async (path) => {
//   try {
//     const isAuth = await pinata.testAuthentication();
//     console.log(isAuth);

//     const readableStreamForFile = fs.createReadStream(path);
//     const options = {
//       pinataMetadata: {
//         name: 'testing',
//         keyvalues: {
//           customKey: 'test',
//           customKey2: 'test',
//         },
//       },
//       pinataOptions: {
//         cidVersion: 0,
//       },
//     };
//     console.log('uploadling file to ipfs..');
//     const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
//     console.log('file uploaded succesfully...', result);
//     const filehash = `https://gateway.ipfs.io/ipfs/${result.IpfsHash}`;
//     return filehash;
//   } catch (error) {}

// };

// module.exports.createfile = (data) => {
//   const jsonString = JSON.stringify(data);
//   fs.writeFile(path.join(__dirname,"../controllers/newData.json"), jsonString, (err) => {
//     if (err) {
//       console.log('Error writing file', err);
//     } else {
//       console.log('Successfully wrote file');
//     }
//   });
// }