import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc,updateDoc, deleteDoc } from 'firebase/firestore';
import { API_KEY } from "../../constants/envValues";

export class Database {
    constructor(){
        const firebaseConfig = {
            apiKey: API_KEY,
            authDomain: "todolist-775de.firebaseapp.com",
            projectId: "todolist-775de",
            storageBucket: "todolist-775de.appspot.com",
            messagingSenderId: "975105324381",
            appId: "1:975105324381:web:765e773e4e41f828e564b4",
            measurementId: "G-X52TNP2J7J"
          };
    const app = initializeApp(firebaseConfig);
    this._database = getFirestore(app)
    }

    create(collectionKey, body){
        const collectionRef = collection(this._database, collectionKey);
        return addDoc(collectionRef, body);

    };

    read(collectionKey){
        const collectionRef = collection(this._database, collectionKey);
        return getDocs(collectionRef).then((documents) => {
            return documents.docs.map((doc) => ({...doc.data(),
                id: doc.id}))
        });
    };

    update(collectionKey, id, body){
        const document = doc(this._database,collectionKey, id);
        return updateDoc(document,body);
    };

    delete(collectionKey, id){
        const document = doc(this._database,collectionKey, id);
        return this.deleteDoc(document);
    };

    static getInstance(){
        if(!Database.instance){
                Database.instance =  new Database()
        } 
        return Database.instance
    }
}