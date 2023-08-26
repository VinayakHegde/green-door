import { Cookie } from '..';

describe('Cookie', () => {
  it('should parse cookies with empty cookies', () => {
    expect(Cookie.parse(document.cookie)).toEqual({});
  });
  it('should set a cookie', () => {
    Cookie.set('test', { value: 'test' });
    expect(document.cookie).toContain('test=test');
  });

  it('should get a cookie', () => {
    Cookie.set('test', { value: 'test' });
    expect(Cookie.get('test')).toEqual({ name: 'test', value: 'test' });
  });

  it('should delete a cookie', () => {
    Cookie.set('test', { value: 'test' });
    expect(Cookie.get('test')).toEqual({ name: 'test', value: 'test' });
    Cookie.delete('test');
    expect(document.cookie).not.toContain('test=test');
  });

  it('should parse cookies', () => {
    Cookie.set('test', { value: 'test' });
    expect(Cookie.parse(document.cookie)).toEqual({ test: 'test' });
  });

  it('should parse cookies with multiple values', () => {
    Cookie.set('test', { value: 'test' });
    Cookie.set('test2', { value: 'test2' });
    expect(Cookie.parse(document.cookie)).toEqual({ test: 'test', test2: 'test2' });
  });
});