const logger = createState => {
    return (set, get, api) => {
        return createState(
            (...args) => {
                console.log('prev state: ', get());
                set(...args);
                console.log('next state: ', get());
            }, 
            get, 
            api
        );
    };
};

export default logger;