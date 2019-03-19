import { Entity, SubState } from './sub.reducer';
import { subQuery } from './sub.selectors';

describe('Sub Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSubId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createSub = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      sub: {
        list: [
          createSub('PRODUCT-AAA'),
          createSub('PRODUCT-BBB'),
          createSub('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Sub Selectors', () => {
    it('getAllSub() should return the list of Sub', () => {
      const results = subQuery.getAllSub(storeState);
      const selId = getSubId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedSub() should return the selected Entity', () => {
      const result = subQuery.getSelectedSub(storeState);
      const selId = getSubId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = subQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = subQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
