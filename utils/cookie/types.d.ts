export declare namespace ICookie {
  type Options = {
    value?: string;
    days?: number;
    path?: string;
    sameSite?: 'none' | 'lax' | 'strict';
    isSecure?: boolean;
  }
  type Object = {
    name: string;
    value: string;
  }

}