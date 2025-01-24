import {create} from 'zustand';

interface Bear {
    id: number;
    name: string;
}

interface BearState{
    blackBears: number;
    polarBears: number;
    pandaBears: number;

    bears: Bear[];

    computed:{
        totalBears: number;

    },

    increaseBlackBears: (by: number) => void;
    increasePolarBears: (by: number) => void;
    increasePandaBears: (by: number) => void;

    doNothing: () => void;
    addBear: () => void;
    clearBears: () => void;
}

export const useBearStore = create<BearState>()((set, get) => ({
    blackBears: 10,
    polarBears: 2,
    pandaBears: 7,

    bears: [{id:1, name: 'Yogi'}],

    computed:{
        get totalBears(){
            return get().blackBears + get().polarBears + get().pandaBears + get().bears.length;
        }
    },


    increaseBlackBears: (by: number) => set((state: BearState) => ({ blackBears: state.blackBears + by })),
    increasePolarBears:(by: number) => set((state: BearState)=> ({polarBears: state.polarBears + by})),
    increasePandaBears: (by: number) => set((state: BearState) => ({ pandaBears: state.pandaBears + by })),
    doNothing: () => set(state => ({bears: [...state.bears]})),
    addBear: () => set(state =>({
        bears: [...state.bears, {id: state.bears.length + 1, name: `Otro oso ${state.bears.length + 1}`}]})),
    clearBears: () => set({bears: []}),
}));
