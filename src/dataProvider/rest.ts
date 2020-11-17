import simpleRestProvider from 'ra-data-simple-rest';
import {API_BASE,CONTEXT} from '../APIUrls'
import { fetchUtils} from 'react-admin';

const httpClient = (url:string, options:any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth')!);
    //options.headers.set('Authorization', `Bearer ${token}`);
    options.headers.set('x-nideshop-token', `${token}`);
    return fetchUtils.fetchJson(url, options);
}

const restProvider = simpleRestProvider(`${API_BASE}${CONTEXT}`,httpClient);
//const restProvider = simpleRestProvider('http://localhost:4000');

const delayedDataProvider = new Proxy(restProvider, {
    get: (target, name, self) =>
        name === 'then' // as we await for the dataProvider, JS calls then on it. We must trap that call or else the dataProvider will be called with the then method
            ? self
            : (resource: string, params: any) =>
                  new Promise(resolve =>
                      setTimeout(
                          () =>
                              resolve(
                                  restProvider[name as string](resource, params)
                              ),
                          500
                      )
                  ),
});

export default delayedDataProvider;
