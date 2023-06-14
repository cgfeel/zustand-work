const { produce } = require('immer');

const baseState = {
    ids: [1,2,3],
    pos: {
        x: 1,
        y: 2,
    },
};

const nextState = produce(baseState, draft => {
    draft.ids.push(4);
});

console.log(baseState === nextState);
console.log(baseState.pos === nextState.pos);