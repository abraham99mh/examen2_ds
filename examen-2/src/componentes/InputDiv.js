import React from 'react';

const InputDiv = (props) => {

    const onChange = (e) => {
        props.change(e.target.value);
        //console.log(props.inp);
    };
    return (
        <>
            <div className="form-floating my-4">
                <select onChange={onChange} className="form-select" id="floatingSelect">
                    {props.divisas.map((element, i) => {
                        return (
                            <option key={i} value={element}>{element}</option>
                        );
                    })}
                </select>
            </div>

        </>
    );
}

export default InputDiv;