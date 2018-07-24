import { ThemeRoutingModule } from './theme-routing.module';

describe('ThemeRoutingModule', () => {
  let themeRoutingModule: ThemeRoutingModule;

  beforeEach(() => {
    themeRoutingModule = new ThemeRoutingModule();
  });

  it('should create an instance', () => {
    expect(themeRoutingModule).toBeTruthy();
  });
});
