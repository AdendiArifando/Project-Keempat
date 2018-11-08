/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingListAdendiService } from './shopping-listAdendi.service';

describe('Service: ShoppingListAdendi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingListAdendiService]
    });
  });

  it('should ...', inject([ShoppingListAdendiService], (service: ShoppingListAdendiService) => {
    expect(service).toBeTruthy();
  }));
});
