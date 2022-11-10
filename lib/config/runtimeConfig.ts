import {MapapaClientProps, STAGES} from '../constants';

export const MAPAPA_ENDPOINTS = {
    [STAGES.DEV]: {
        baseUrl: 'http://localhost:8000/v1',
    },
};

export function getMapapaPropsFromConfig(stage: STAGES): MapapaClientProps {
    const returnProps = MAPAPA_ENDPOINTS[stage];
    return returnProps;
};
