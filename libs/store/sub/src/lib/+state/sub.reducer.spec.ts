import { SubLoaded } from './sub.actions';
import { SubState, Entity, initialState, subReducer } from './sub.reducer';

describe('Sub Reducer', () => {
  const getSubId = it => it['id'];
  let createSub;

  beforeEach(() => {
    createSub = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Sub actions ', () => {
    it('should return set the list of known Sub', () => {
      const subs = [createSub('PRODUCT-AAA'), createSub('PRODUCT-zzz')];
      const action = new SubLoaded(subs);
      const result: SubState = subReducer(initialState, action);
      const selId: string = getSubId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = subReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
