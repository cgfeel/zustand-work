import { produce } from "immer";

const immer = createState => {
    return (set, get, api) => {
        api.setState = (updater) => {
            const nextState = produce(updater);
            return set(nextState);
        };
        return createState(api.setState, get, api);
    };
};

export default immer;