import { SESSION_COOKIE_EXPIRY } from './constant';
import { ICookie } from './types';

export class Cookie {
  static set(
    name: string,
    {
      value = '',
      days,
      path = '/',
      sameSite = 'lax',
      isSecure,
    }: ICookie.Options
  ): void {
    let expires = '';
    if (days) {
      const date = new Date(
        Date.now() + days * 24 * 60 * 60 * 1000
      ).toUTCString();
      expires = `; expires=${date}`;
    }
    const secure = `${isSecure || sameSite === 'none' ? '; Secure' : ''}`;
    const encodedValue = encodeURIComponent(value);
    document.cookie = `${name}=${encodedValue}${expires}; path=${path}; SameSite=${sameSite}${secure}`;
  }

  static get(name: string): ICookie.Object | null {
    const cookie = document.cookie
      .split('; ')
      .find(cookie => cookie.split('=')[0] === name);
    if (cookie) {
      const [name, value] = cookie.split('=');
      return {
        name,
        value,
      };
    }
    return null;
  }
  static delete(name: string): void {
    document.cookie = `${name}=;${SESSION_COOKIE_EXPIRY}`;
  }

  static parse(cookies: string): Record<string, string> {
    return cookies
      .split(';')
      .map(v => v.split('='))
      .reduce((acc, [name, value]) => {
        if (name && value) {
          acc[name.trim()] = value.trim();
        }
        return acc;
      }, {} as any);
  }
}
