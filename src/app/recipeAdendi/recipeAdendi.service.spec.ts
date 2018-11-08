/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RecipeAdendiService } from './recipeAdendi.service';

describe('Service: RecipeAdendi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeAdendiService]
    });
  });

  it('should ...', inject([RecipeAdendiService], (service: RecipeAdendiService) => {
    expect(service).toBeTruthy();
  }));
});
