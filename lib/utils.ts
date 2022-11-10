import https from 'https';
import axios, {AxiosInstance} from 'axios';
import axiosRetry from 'axios-retry';
import {DEFAULT_TIMEOUT_MILLI, NUMBER_OF_RETRIES} from './constants';

export const getAxiosInstance = (): AxiosInstance => {
    const axiosInstance = axios.create({
        timeout: DEFAULT_TIMEOUT_MILLI,
        httpsAgent: new https.Agent({
            timeout: DEFAULT_TIMEOUT_MILLI,
            keepAlive: true,
        }),
    });
    axiosRetry(axiosInstance, {
        retries: NUMBER_OF_RETRIES,
        retryDelay: axiosRetry.exponentialDelay,
    });
    return axiosInstance;
};
