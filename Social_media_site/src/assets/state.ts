import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
  user: {
    username: '',
    auth: false,
  },
});

export const setCurrentUser = (username: string) => {
  setGlobalState('user', (v) => ({ ...v, username }));
};

export const setAuth = (auth: boolean) => {
    setGlobalState('user', (v) => ({ ...v, auth }));
  };

export { useGlobalState };