import { configureStore } from '@reduxjs/toolkit';
import { store } from '../store'; // Assuming store.js exports 'store' as shown in your example
import weatherSlice from "../slice"

describe('Redux Store Configuration', () => 
    {
        let testStore;

        beforeAll(() => {
            testStore = configureStore({
            reducer: {
                weather: weatherSlice,
            },
            });
        });

        it('should initialize the store correctly', () => {
            expect(testStore.getState()).toEqual({
            weather: weatherSlice(undefined, { type: 'INIT' }), // Check initial state of weather slice
            });
    });
});