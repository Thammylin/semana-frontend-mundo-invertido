import app from './app.js'
import {getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClube(subscription){
    const dataBase = getFirestore(app);
    const hellfireClubeCollection =  collection(dataBase, 'hellfire-clube');
    const docRef =  await addDoc(hellfireClubeCollection, subscription);
    return docRef.id
}