import { create } from "./zustand";
import immer from "./zustand/middleware/immer";
// import logger from "./zustand/middleware/logger";
// import { createJSONStorage, persist } from "./zustand/middleware/persist";

/**
 * 
 * @returns 创建状态管理器
 */
// 先定义一个状态的函数
const createState = (set, get, api) => ({
    number: 0,
    name: 'Number',
    add: () => set(state => {
        state.number += 1;
    }),
    minus: () => set(state => {
        state.number -= 1;
    }),
    asyncAdd: () => {
        setTimeout(() => {
            set(state => { state.number += 1; });
        }, 1000);
    },
    asyncMinus: async () => {
        await new Promise(resolve => {
            setTimeout(() => resolve(), 1000);
        });
        // set(state => ({ number: state.number - 1 }));
        set(state => { state.number -= 1; });
    },
});

// 把createState方法传递给create方法
// 先创建仓库，也就是状态管理器，然后返回一个自定义hook，调用这个自定义hook可以获取最新的状态
const useStore = create(
    immer(createState)
);

function App() {
    // const { number, name, add, minus, asyncAdd, asyncMinus } = useStore();
    const { number, add } = useStore(state => ({
        number: state.number,
        add: state.add,
    }));
    return (
        <div 
            className="App"
        >
            <p>
                {number}
            </p>
            <button onClick={add}>+</button>
            {/*<p>
                {name}: {number}
            </p>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={asyncAdd}>asyncAdd</button>
            <button onClick={asyncMinus}>asyncMinus</button>*/}
        </div>
    );
}

export default App;
