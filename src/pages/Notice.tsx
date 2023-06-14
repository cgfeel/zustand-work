import { FC } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useStore } from "../store/todo.store";
import { Wrapper } from "./Step1";

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    & > li {
        margin-bottom: .6rem;
        & > span {
            margin-right: 1rem;
        }
    }
`;

const Notice: FC = () => {
    const navigate = useNavigate();
    const { todoList, delList, selectList } = useStore(state => ({
        todoList: state.todoList,
        delList: state.delList,
        selectList: state.selectList,
    }));

    return (
        <Wrapper>
            <h1>Notice Page</h1>
            <List>
                {todoList.map(({ due, select, title }, index) => (
                    <li
                        key={`list-${index}`}
                    >
                        <span>
                            <input 
                                type="checkbox" 
                                checked={select||false}
                                onChange={e => selectList(index, e.target.checked)} 
                            />
                        </span>
                        <span>{title}</span>
                        <span>{due||''}</span>
                        <button
                            onClick={() => delList(index)}
                        >
                            Del
                        </button>
                    </li>
                ))}
            </List>
            <button 
                onClick={() => navigate('/step1')}
            >
                +
            </button>
        </Wrapper>
    );
};

export default Notice;