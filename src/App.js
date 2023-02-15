import React from 'react';

// ** Store Imports
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import HamBerger from "./components/HamBerger";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
    return (

        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                {/*<HamBerger/>*/}
                {/*<Header/>*/}
                <Hero/>
            </PersistGate>
        </Provider>
    );
}

export default App;
