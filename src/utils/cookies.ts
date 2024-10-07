export const setCookie = (
  name: string,
  value: string,
  date: Date,
  days?: number
) => {
  const expires = new Date();
  if (date) {
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  } else if (days) {
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
};

export const removeCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=0`;
};

export const getCookie = (name: string) => {
  const cookie = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookie ? cookie?.[2] : null;
};
