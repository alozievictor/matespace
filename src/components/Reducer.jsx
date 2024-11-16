import React from "react";

interface State {
  count: Number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    count: 0,
    error: null,
  });

  return (
    <React.Fragment>
      <div className="w-full my-10 bg-cyan-50 py-20">
        {state.error && <p className="text-red-400 text-sm">{state.error}</p>}
        <h2>count: {state.count}</h2>
        <button className="bg-blue-500 p-3 rounded-md" type="button" onClick={()=> dispatch({type: "increment"})}>Increment</button>
        <button className="bg-blue-700 p-3 rounded-md ml-3" type="button" onClick={()=> dispatch({type: "decrement"})}>decrement</button>
      </div>
    </React.Fragment>
  );
};

export default Reducer;
