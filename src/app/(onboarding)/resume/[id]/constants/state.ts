const state = {
  activeTool: null,
};

const listeners = new Set();

const ResumeState = {
  get activeTool() {
    return state.activeTool;
  },

  setActiveTool(tool:any) { 

    const previousState = { ...state };

    state.activeTool = tool; 
    listeners.forEach((listener:any) => {
      listener({ ...state }, previousState);
    });
    console.log("listeners after -->>", listeners);
  },

  subscribe(listener:any) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },
};

export default ResumeState;
