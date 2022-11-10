export const NUMBER_OF_RETRIES = 3;
export const DEFAULT_TIMEOUT_MILLI = 8000;

export interface MapapaClientProps {
    baseUrl: string;
}

export enum STAGES {
    DEV = 'dev',
    BETA = 'beta',
    GAMMA = 'gamma',
    PROD = 'prod',
}
