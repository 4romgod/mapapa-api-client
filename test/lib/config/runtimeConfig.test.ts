import {expect} from 'chai';
import {describe} from 'mocha';
import {getMapapaPropsFromConfig} from '../../../lib/config/runtimeConfig';
import {MapapaClientProps, STAGES} from '../../../lib/constants';

describe('runtimeConfig', () => {
    describe('getMapapaPropsFromConfig', () => {
        it('should return the correct config', () => {
            const expectedResonse: MapapaClientProps = {
                baseUrl: 'http://localhost:8000/v1',
            };
            const response = getMapapaPropsFromConfig(STAGES.DEV);
            expect(response).to.deep.equal(expectedResonse);
        });
    });
});
