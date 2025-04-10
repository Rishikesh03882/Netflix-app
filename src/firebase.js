import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { toast } from "react-toastify";
const firebaseConfig = {
    apiKey: "AIzaSyChbHoe6FSQgkNXTPaXgjT2RmSXfiaqHAI",
    authDomain: "netflix-app-feb7a.firebaseapp.com",
    projectId: "netflix-app-feb7a",
    storageBucket: "netflix-app-feb7a.firebasestorage.app",
    messagingSenderId: "389111837017",
    appId: "1:389111837017:web:654f300473115649a15c48"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout=() => {
    signOut(auth);
}

export { auth, db, login, signup, logout };