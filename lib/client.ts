import {AxiosInstance} from 'axios';
import {MapapaApi} from '../generated-client/api';
import {MapapaClientProps} from './constants';
import {getAxiosInstance} from './utils';

export class MapapaClient {
    mapapaClientProps: MapapaClientProps;
    axiosInstance: AxiosInstance;
    mapapaClient: MapapaApi;

    /**
     * @constructor
     * @this MapapaClient
     */
    constructor(mapapaInitializationProps: MapapaClientProps) {
        this.mapapaClientProps = mapapaInitializationProps;
        this.axiosInstance = getAxiosInstance();
        this.mapapaClient = new MapapaApi(undefined, this.mapapaClientProps.baseUrl, this.axiosInstance);
    }
}
