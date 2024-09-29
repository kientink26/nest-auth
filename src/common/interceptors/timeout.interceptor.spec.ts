import { TimeoutInterceptor } from './timeout/timeout.interceptor';

describe('TimeoutInterceptor', () => {
  it('should be defined', () => {
    expect(new TimeoutInterceptor()).toBeDefined();
  });
});
