const dbName = "ConversationDB";
const dbVersion = 1;
const storeName = "message";

export function openDB() {
  return new Promise((resolve, reject) => {
    let request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = (event) => {
      let db = event.target.result;
      if (!db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, {
          keyPath: "id", // کلید اصلی
          autoIncrement: true, // کلید به‌صورت خودکار افزایش می‌یابد
        });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

export async function sendMessage(message) {
  let db = await openDB();
  let tx = db.transaction(storeName, "readwrite");
  let store = tx.objectStore(storeName);

  const newMessage = {
    text: message,
  };

  return store.add(newMessage);
}

export async function getAllMessage() {
  let db = await openDB();
  let tx = db.transaction(storeName, "readonly");
  let store = tx.objectStore(storeName);
  return store.getAll();
}
