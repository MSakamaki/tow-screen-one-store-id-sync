import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { SubEffects } from './sub.effects';
import { SubFacade } from './sub.facade';

import { subQuery } from './sub.selectors';
import { LoadSub, SubLoaded } from './sub.actions';
import { SubState, Entity, initialState, subReducer } from './sub.reducer';

interface TestSchema {
  sub: SubState;
}

describe('SubFacade', () => {
  let facade: SubFacade;
  let store: Store<TestSchema>;
  let createSub;

  beforeEach(() => {
    createSub = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('sub', subReducer, { initialState }),
          EffectsModule.forFeature([SubEffects])
        ],
        providers: [SubFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(SubFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allSub$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allSub$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `SubLoaded` to manually submit list for state management
     */
    it('allSub$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allSub$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(new SubLoaded([createSub('AAA'), createSub('BBB')]));

        list = await readFirst(facade.allSub$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
