import { FilterCardModule } from './filter-card.module';

describe('FilterCardModule', () => {
  let filterCardModule: FilterCardModule;

  beforeEach(() => {
    filterCardModule = new FilterCardModule();
  });

  it('should create an instance', () => {
    expect(filterCardModule).toBeTruthy();
  });
});
