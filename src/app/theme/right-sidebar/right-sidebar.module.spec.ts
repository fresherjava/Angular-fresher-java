import { RightSidebarModule } from './right-sidebar.module';

describe('RightSidebarModule', () => {
  let rightSidebarModule: RightSidebarModule;

  beforeEach(() => {
    rightSidebarModule = new RightSidebarModule();
  });

  it('should create an instance', () => {
    expect(rightSidebarModule).toBeTruthy();
  });
});
