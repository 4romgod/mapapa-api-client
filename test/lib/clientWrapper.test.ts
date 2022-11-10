import {assert, expect} from 'chai';
import {describe} from 'mocha';
import {MapapaClient} from '../../lib';
import {getClient, getInstanceOfMapapaClient} from '../../lib';
import {MapapaClientProps, STAGES} from '../../lib';

describe('clientWrapper', () => {
    const initializationProps: MapapaClientProps = {
        baseUrl: 'mockUrl',
    };

    describe('getClient', () => {
        it('should create a new instance of the client when createNewClient param is true', () => {
            const client1 = getClient(initializationProps, true);
            const client2 = getClient(initializationProps, true);
            expect(client1).to.not.deep.equal(client2);
        });

        it('should create same instance of the client when createNewClient param is false', () => {
            const client1 = getClient(initializationProps, true);
            const client2 = getClient(initializationProps, false);
            expect(client1).to.deep.equal(client2);
        });

        it('should throw error if createNewClient is true and initializationProps is undefined', async () => {
            try {
                getClient(undefined, true);
                assert.fail('Should of thrown an error');
            } catch (error: any) {
                expect(error.message).to.deep.equal('MapapaClientProps is undefined');
            }
        });
    });

    describe('getInstanceOfMapapaClient', () => {
        it('returns an instance', () => {
            const instance = getInstanceOfMapapaClient(STAGES.DEV, true);
            expect(instance).to.be.instanceOf(MapapaClient);
        });

        it('returns a new instance when reinitialize param is true', () => {
            const instance = getInstanceOfMapapaClient(STAGES.DEV, true);
            const instance2 = getInstanceOfMapapaClient(STAGES.DEV, true);
            expect(instance).to.not.equal(instance2);
        });

        it('returns a new instance when reinitialize param is false', () => {
            const instance = getInstanceOfMapapaClient(STAGES.DEV, true);
            const instance2 = getInstanceOfMapapaClient(STAGES.DEV, false);
            expect(instance).to.equal(instance2);
        });
    });
});
