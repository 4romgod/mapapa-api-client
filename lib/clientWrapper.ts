import {MapapaClient} from './client';
import {getMapapaPropsFromConfig} from './config/runtimeConfig';
import {MapapaClientProps, STAGES} from './constants';

let client: MapapaClient;
export const getInstanceOfMapapaClient = (stage: STAGES, reinitialize?: boolean): MapapaClient => {
    if (!client || reinitialize) {
        const mapapaClientProps: MapapaClientProps = getMapapaPropsFromConfig(stage);
        return getClient(mapapaClientProps, true);
    }
    return client;
};

export const getClient = (initializationProps?: MapapaClientProps, createNewClient?: boolean): MapapaClient => {
    if (createNewClient) {
        if (!initializationProps) {
            throw new Error('MapapaClientProps is undefined');
        }
        client = new MapapaClient(initializationProps);
        return client;
    }
    return client;
};
