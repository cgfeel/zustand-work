import { FC, useCallback } from "react";
import { useNavigate } from "react-router";
import { Wrapper } from "./Step1";
import { useStore } from "../store/todo.store";

const Step2: FC = () => {
    const navigate = useNavigate();
    const { todoItem: { title, due }, push, setDut } = useStore(state => ({
        todoItem: state.todoItem,
        push: state.pushItem2List,
        setDut: state.setDueDate,
    }));

    const submit = useCallback(() => {
        push();
        navigate('/notice');
    }, [navigate, push]);

    return (
        <Wrapper>
            <h1>Step2 page</h1>
            {title !== '' && <h3>{title}</h3>}
            <label>Date</label>
            <input 
                type="date" 
                value={due||''}
                onChange={e => setDut(e.target.value)} 
            />
            <button 
                onClick={() => submit()}
            >
                Add
            </button>
        </Wrapper>
    );
};

export default Step2;