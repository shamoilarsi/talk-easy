import * as admin from "firebase-admin";
// import serviceAccount from "./firebase-admin-service-account.json";
// console.log(serviceAccount);
const serviceAccount = JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_ADMIN);

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "talk-easy-6a1d9.appspot.com",
  });

export const db = admin.firestore();
export const firestore = admin.firestore;
export const storage = admin.storage();
