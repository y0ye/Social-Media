import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  user: {
    username: '',
    postFocus: 0,
    auth: false,
  },
});

export const setCurrentUser = (username: string) => {
  setGlobalState('user', (v) => ({ ...v, username }));
};

export const setAuth = (auth: boolean) => {
    setGlobalState('user', (v) => ({ ...v, auth }));
  };

export const setFocus = (postFocus: number) => {
    setGlobalState('user', (v) => ({ ...v, postFocus }));
} 

export { useGlobalState };