import { createJSONStorage, StateStorage } from "zustand/middleware";


const firebaseUrl = "https://zustand-cryo-default-rtdb.firebaseio.com/zustand"

const storageApi: StateStorage = {

    getItem: async function (name: string):   Promise<string | null>  {
        try{
            const data = await fetch(`${firebaseUrl}/${name}.json`).then(res => res.json());
            console.log('data:', data);
            return JSON.stringify(data);
        }catch(error){
        throw new Error('Error al obtener el item');
        }
    },
    setItem: async function (name: string, value: string): Promise<void> {
        const data = await fetch(`${firebaseUrl}/${name}.json`,{
            method: 'PUT',
            body: value,
        }
        ).then(res => res.json());
        console.log('data:', data);
        return;

    },
    removeItem: function (name: string): void | Promise<void> {
        console.log('remove item', name);
    }
}

export const fireBaseStorage = createJSONStorage(() => storageApi)