import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
// import { customSessionStorage } from "../storages/session.storage";
import { fireBaseStorage } from "../storages/firebase.storage";

interface PersonState{
    firstName: string;
    lastName: string;

    
}

interface Actions{
    setFirstName: (value: string) => void;
    setlastName: (value: string) => void;
}

const storeApi: StateCreator<PersonState & Actions> = (set) => ({
        firstName: '',
        lastName: '',
    
        setFirstName: (value: string) => set({firstName: value}),
        setlastName: (value: string) => set({lastName: value}),
    })

   

export const usePersonStore = create<PersonState & Actions>()(
    persist(
        storeApi
    ,
{
    name: 'person-storage',
    storage: fireBaseStorage
})
);