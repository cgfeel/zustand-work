import { FC } from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import { useStore } from "../store/todo.store";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    gap: 1rem;
    & button {
        font-size: 1.8rem;
    }
    & input {
        padding: .6rem;
    }
`;

const Step1: FC = () => {
    const navigate = useNavigate();
    const { title, setTitle } = useStore(state => ({
        title: state.todoItem.title,
        setTitle: state.setTitle,
    }));
    return (
        <Wrapper>
            <h1>Step1 Page</h1>
            <label>Title</label>
            <input 
                type="text" 
                value={title}
                onChange={e => setTitle(e.target.value)} 
            />
            <button 
                onClick={() => navigate('/step2')}
            >
                Next
            </button>
        </Wrapper>
    );
};

export default Step1;