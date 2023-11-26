import { defineStore } from 'pinia'
import { auth, db } from '@/services/firebase'
import { onValue, ref } from 'firebase/database'
import { onAuthStateChanged, signOut } from 'firebase/auth'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            name: '',
            logged: '',
            ocup: '',
            ced: '',
        },
    }),
    actions: {
        getLogin() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.user.logged = true;
                    const userRef = ref(db, 'users/' + user.uid);
                    onValue(userRef, (snapshot) => {
                        const data = snapshot.val();
                        this.user.ocup = data.ocup;
                        this.user.name = data.name;
                        this.user.ced = data.ced;
                    });
                    return true;
                } else {
                    this.user.logged = false;
                    this.user.ocup = '';
                    this.user.name = '';
                    this.user.ced = '';
                    return false;
                }
            });
        },
        LogOut() {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    alert('Sesión cerrada correctamente.')
                    this.$router.push({ path: `/` })
                })
                .catch((error) => {
                    // An error happened.
                    console.log(error)
                })
        },
        // other actions...
    },
});