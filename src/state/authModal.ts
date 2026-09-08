export type AuthMode = "signin" | "signup";

export type AuthModalAction = "open" | "close";

type AuthModalOptions = {
  action?: AuthModalAction;
  mode?: AuthMode;
};

type Listener = (state: { isOpen: boolean; mode: AuthMode }) => void;

let state = {
  isOpen: false,
  mode: "signin" as AuthMode,
};

const listeners = new Set<Listener>();

export const toggleAuthModal = ({
  action = "open",
  mode = "signin",
}: AuthModalOptions = {}) => {
  if (action === "open") {
    state = {
      isOpen: true,
      mode,
    };
  } else {
    state = {
      ...state,
      isOpen: false,
    };
  }

  listeners.forEach((listener) => listener(state));
};

export const subscribeAuthModal = (listener: Listener) => {
  listeners.add(listener);

  listener(state);

  return () => {
    listeners.delete(listener);
  };
};
