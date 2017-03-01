/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SettingsService } from '../services/settings.service';

describe('SettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
  });

  it('should ...', inject([SettingsService], (service: SettingsService) => {
    expect(service).toBeTruthy();
  }));
});