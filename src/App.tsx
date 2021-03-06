import * as React from 'react';
import { useState, useEffect } from 'react';
import { Admin, Resource, DataProvider } from 'react-admin';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import './App.css';

import authProvider from './authProvider';
import themeReducer from './themeReducer';
import { Login, Layout } from './layout';
import { Dashboard } from './dashboard';
import customRoutes from './routes';

import visitors from './visitors';
import orders from './orders';
import products from './products';
import invoices from './invoices';
import categories from './categories';
import reviews from './reviews';
import usercard from './userCards';
import mycards from './mycards';
import chineseMessages from './i18n/zh';
import dataProviderFactory from './dataProvider';
//import fakeServerFactory from './fakeServer';

const i18nProvider = polyglotI18nProvider(locale => {
    console.log('locale=', locale)
    if (locale === 'fr') {
        return import('./i18n/fr').then(messages => messages.default);
    }
    
    // Always fallback on english
    return chineseMessages;
}, 'ch');

const App = () => {
    const [dataProvider, setDataProvider] = useState<DataProvider>();

    useEffect(() => {
        let restoreFetch;

        const fetchDataProvider = async () => {
            // restoreFetch = await fakeServerFactory(
            //     process.env.REACT_APP_DATA_PROVIDER || ''
            // );
            const dataProviderInstance = await dataProviderFactory(
                process.env.REACT_APP_DATA_PROVIDER || ''
            );
            setDataProvider(
                // GOTCHA: dataProviderInstance can be a function
                () => dataProviderInstance
            );
        };

        fetchDataProvider();

        //return restoreFetch;
    }, []);

    if (!dataProvider) {
        return (
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
        );
    }

    return (
        <Admin
            title=""
            dataProvider={dataProvider}
            customReducers={{ theme: themeReducer }}
            customRoutes={customRoutes}
            authProvider={authProvider}
            dashboard={Dashboard}
            loginPage={Login}
            layout={Layout}
            i18nProvider={i18nProvider}
        >
            <Resource name="region"/>
            <Resource name="usercards" {...usercard}/>
            <Resource name="customers" {...visitors} />
            <Resource
                name="commands"
                {...orders}
                options={{ label: 'Orders' }}
            />
            <Resource name="invoices" {...invoices} />
            <Resource name="products" {...products} />
            <Resource name="categories" {...categories} />
            <Resource name="reviews" {...reviews} />
            <Resource name="mycards" {...mycards} />
        </Admin>
    );
};

export default App;
