const admin = require('firebase-admin');
const serviceAccount = require("./testpw3-e1de4-firebase-adminsdk-8glvg-b059198b26.json"); // mettre la bonne clé

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://testpw3-e1de4.firebaseio.com" //Chemin BD (voir config.js)
});

const data = require("./mini-festival.json"); //fichier json

/**
 * Data is a collection if
 *  - it has a odd depth
 *  - contains only objects or contains no objects.
 */
function isCollection(data, path, depth) {
  if (
    typeof data != 'object' ||
    data == null ||
    data.length === 0 ||
    isEmpty(data)
  ) {
    return false;
  }

  for (const key in data) {
    if (typeof data[key] != 'object' || data[key] == null) {
      // If there is at least one non-object item in the data then it cannot be collection.
      return false;
    }
  }

  return true;
}

// Checks if object is empty.
function isEmpty(obj) {
  for(const key in obj) {
    if(obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

async function upload(data, path) {
  //console.log(path.join(''));
  return await admin.firestore()
    .collection('festivals')
    .add(data)
    .then(() => console.log(`Document ${path.join('/')} uploaded.`))
    .catch(() => console.error(`Could not write document ${path.join('/')}.`));
}

/**
 *
 */
async function resolve(data, path = []) {
	//console.log(data);
  if (path.length > 0 && path.length % 2 == 0) {
    // Document's length of path is always even, however, one of keys can actually be a collection.

    // Copy an object.
	const documentData = Object.assign({}, data);
    for (const key in data) {
      // Resolve each collection and remove it from document data.
      if (isCollection(data[key], [...path, key])) {

		  //passe jamais

        // Remove a collection from the document data.
        delete documentData[key];
        // Resolve a colleciton.
        resolve(data[key], [...path, key]);
      }
    }

    // If document is empty then it means it only consisted of collections.
    if (!isEmpty(documentData)) {
		//console.log(path);

		switch (path[1]) {
			case "datasetid":
			case "record_timestamp":
      case "geometry":
			case "recordid":
		    break;
			default: await upload(documentData, path);
				break;
		}

    }
  } else {

	  //passe jamais

    // Collection's length of is always odd.
    for (const key in data) {
      // Resolve each collection.
      await resolve(data[key], [...path, key]);
    }
  }
}

resolve(data);
