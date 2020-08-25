import { TestBed, inject } from '@angular/core/testing';

import { CatalogueserviceService } from './catalogueservice.service';

describe('CatalogueserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogueserviceService]
    });
  });

  it('should be created', inject([CatalogueserviceService], (service: CatalogueserviceService) => {
    expect(service).toBeTruthy();
  }));
});
