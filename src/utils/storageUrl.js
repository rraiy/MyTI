import { storage } from '../firebase/firestore';

// icons
export function getAllIconStorageUrl() {
  const iconStorageUrlData = [];
  async function fetchIcon() {
    await storage
      .ref('icons')
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            const path = url.split('/')[7];
            const folderFilename = path.split('?')[0];
            const tokenData = path.split('&token=')[1];
            iconStorageUrlData.push({
              folder: folderFilename.split('%2F')[0],
              file: folderFilename.split('%2F')[1],
              token: tokenData,
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchIcon();

  return {
    iconStorageUrlData,
  };
}

// teamLogos
export function getAllTeamStorageUrl() {
  const teamStorageUrlData = [];
  async function fetchIcon() {
    await storage
      .ref('team_logo/small')
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            const path = url.split('/')[7];
            const folderFilename = path.split('?')[0].split('%2F');
            const folderName = folderFilename.slice(0, 2).join('%2F');
            const filename = folderFilename[2];
            const tokenData = path.split('&token=')[1];
            teamStorageUrlData.push({
              folder: folderName,
              file: filename,
              token: tokenData,
            });
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  fetchIcon();

  return {
    teamStorageUrlData,
  };
}

// stringToGetUrl
export function connectStorageUrlString(folder, filename, token) {
  const domain = 'myti-171bb.appspot.com';
  const urlStr = `https://firebasestorage.googleapis.com/v0/b/${domain}/o/${folder}%2F${filename}?alt=media&token=${token}`;
  return urlStr;
}

export const getStorageUrl = async (folder, filename) => {
  const resp = await storage
    .ref(folder)
    .child(filename)
    .getDownloadURL()
    .then((url) => url);
};

// https://firebasestorage.googleapis.com/v0/b/myti-171bb.appspot.com/o/background%2Fti10_main.mp4?alt=media&token=c2ebd13d-ae66-47ed-a7b2-952f28033756
