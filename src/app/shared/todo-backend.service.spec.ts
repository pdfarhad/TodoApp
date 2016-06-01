import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TodoBackendService } from './todo-backend.service';

describe('TodoBackend Service', () => {
  beforeEachProviders(() => [TodoBackendService]);

  it('should ...',
      inject([TodoBackendService], (service: TodoBackendService) => {
    expect(service).toBeTruthy();
  }));
});
