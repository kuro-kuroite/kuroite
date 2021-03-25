// HACK: gatsby のために, global と windows オブジェクトを拡張
export type HackedGlobal = NodeJS.Global &
  typeof globalThis & {
    __BASE_PATH__?: string;
    __PATH_PREFIX__: string;
    ___loader: {
      enqueue: () => void;
      hovering?: () => void;
    };
  };

type HackedWindow = Window &
  typeof globalThis & {
    ___navigate: (pathname: string) => void;
  };

(global as HackedGlobal).___loader = {
  enqueue: jest.fn(),
  // hovering: jest.fn(),
};

(global as HackedGlobal).__PATH_PREFIX__ = '';
// (global as HackedGlobal).__BASE_PATH__ = '/';

(window as HackedWindow).___navigate = jest.fn();
