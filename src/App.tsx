import { FC } from 'react';
import { BrowserRouter as Router, Link  } from 'react-router-dom';
import { styled } from 'styled-components';
import { AppRoutes } from './Routes';
import { SettingInterface } from './store/setting.store';
import { useStore } from './store/todo.store';

type PageStyleType = Pick<SettingInterface, 'bgColor'|'ftColor'>;

const HeightHeader = '6rem';
const Wrapper = styled.div<PageStyleType>`
    align-items: center;
    background-color: ${props => props.bgColor};
    bottom: 0;
    color: ${props => props.ftColor};
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    & h1, & h3 {
        margin: 10px 0;
    }
`;

const List = styled.ul<PageStyleType>`
    background-color: ${props => props.bgColor};
    color: ${props => props.ftColor};
    display: flex;
    height: ${HeightHeader};
    list-style: none;
    margin: 0;
    & li {
        flex: 1;
        line-height: ${HeightHeader};
        text-align: center;
    }
    & a {
        color: ${props => props.ftColor};
    }
`;

const Navigator: FC<PageStyleType & { size: number }> = ({ size, ...props }) => (
    <List 
        {...props}
    >
        <li>
            <Link to="/">Root</Link>
        </li>
        <li>
            <Link to="/setting">Setting</Link>
        </li>
        <li>
            <Link to="/notice">Notice({size})</Link>
        </li>
        <li>
            <Link to="/Step1">Step1</Link>
        </li>
        <li>
            <Link to="/Step2">Step2</Link>
        </li>
    </List>
);

function App() {
    const { bgColor, ftColor, todoList } = useStore(state => ({
        bgColor: state.bgColor,
        ftColor: state.ftColor,
        todoList: state.todoList,
    }));

    return (
        <Router>
            <Navigator bgColor={bgColor} ftColor={ftColor} size={todoList.length} />
            <Wrapper 
                bgColor={bgColor} 
                ftColor={ftColor}
            >
                <AppRoutes />
            </Wrapper>
        </Router>
    );
}

export default App;
