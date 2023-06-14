import { useCallback, useRef, useSyncExternalStore } from "react";
import createStore from "./vanilla";

export function useStore(api, selector) {
    // 缓存上一次的整个状态快照
    const lastSnapshotRef = useRef(null);

    // 缓存上一次的选择
    const lastSelectionRef = useRef(null);
    const getSelection = useCallback(() => {
        let lastSelection = lastSnapshotRef.current;
        if (lastSelection === null) {
            const nextSnapshot = api.getState();
            const nextSelection = selector(nextSnapshot);

            lastSnapshotRef.current = nextSnapshot;
            lastSelectionRef.current = nextSelection;
            return nextSelection;
        } else {
            const lastSelection = lastSnapshotRef.current;
            const nextSnapshot = api.getState();

            if (Object.is(lastSnapshotRef.current, nextSnapshot)) {
                return lastSelection;
            }
            const nextSelection = selector(nextSnapshot);

            lastSnapshotRef.current = nextSnapshot;
            lastSelectionRef.current = nextSelection;
            return nextSelection;
        }
    }, [api, lastSnapshotRef, lastSelectionRef, selector]);
    
    return useSyncExternalStore(api.subscribe, getSelection);
}

export const create = createState => {
    // 1.创建仓库
    const api = createStore(createState);

    // 2.返回一个自定义hook，里面可以通过useStore获取仓库中最新的状态
    return selector => useStore(api, selector);
};

export default create;