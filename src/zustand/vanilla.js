/**
 * 接收一个创建初始状态的方法，返回一个仓库或者说状态管理器
 * @param {*} createState 
 */
export const createStore = createState => {
    // 保存在内部的状态
    let state;

    // 定义一个数组，存放所有的状态变更监听函数
    let listeners = new Set();

    // 获取状态的函数
    const getState = () => state;

    // 修改状态的函数，参数可以是新的状态，也可以是一个更新函数
    const setState = partial => {
        // 判断partial是否是更新函数，如果是执行它，并向它传送老状态，如果不是更新函数，那就是新状态
        const nextState = typeof partial === 'function' ? partial(state) : partial;

        // 判断老状态和新状态是否是同一个对象，如果不是才更新
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = Object.assign({}, state, nextState);

            // 状态变更后依次调用监听函数
            listeners.forEach(listener => listener(state, previousState));
        }
    };

    // 订阅函数，可以让外部监听仓库中的状态变更，状态变更后会通知监听函数
    const subscribe = listener => {
        listeners.add(listener);
        return () => listeners.delete(listener);
    };

    // 创建一个api对象
    const api = {
        getState,
        setState,
        subscribe,
    };

    // 调用createState方法获取初始状态，赋给state变量
    state = createState(setState, getState, api);
    return api;
};

export default createStore;