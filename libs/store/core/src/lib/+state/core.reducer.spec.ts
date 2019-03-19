import { CoreLoaded } from './core.actions';
import { CoreState, Entity, initialState, coreReducer } from './core.reducer';

describe('Core Reducer', () => {
  const getCoreId = it => it['id'];
  let createCore;

  beforeEach(() => {
    createCore = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Core actions ', () => {
    it('should return set the list of known Core', () => {
      const cores = [createCore('PRODUCT-AAA'), createCore('PRODUCT-zzz')];
      const action = new CoreLoaded(cores);
      const result: CoreState = coreReducer(initialState, action);
      const selId: string = getCoreId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = coreReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
