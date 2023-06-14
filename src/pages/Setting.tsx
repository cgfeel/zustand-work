import { ChangeEvent, FC, useCallback } from "react";
import { styled } from "styled-components";
import { useStore } from "../store/todo.store";

type ChangeType = (type: 'BG'|'FT', e: ChangeEvent<HTMLInputElement>) => void;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    & > input {
        margin-top: 5px;
        &  + label {
            margin-top: 10px;
        }
    }
`;

const Setting: FC = () => {
    const { bgColor, ftColor, setBGColor, setFTColor } = useStore(state => ({
        bgColor: state.bgColor,
        ftColor: state.ftColor,
        setBGColor: state.setBGColor,
        setFTColor: state.setFTColor,
    }));

    const onChange: ChangeType = useCallback((type, e) => {
        type === 'BG' ? setBGColor(e.target.value) : setFTColor(e.target.value);
    }, [setBGColor, setFTColor]);

    return (
        <Wrapper>
            <h1>Setting page</h1>
            <label>Background Color</label>
            <input 
                type="color" 
                defaultValue={bgColor}
                onChange={e => onChange('BG', e)} 
            />
            <label>Font Color</label>
            <input 
                type="color" 
                defaultValue={ftColor} 
                onChange={e => onChange('FT', e)} 
            />
        </Wrapper>
    );
};

export default Setting;