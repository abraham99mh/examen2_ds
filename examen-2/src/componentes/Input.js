import React from 'react'

const Input = (props) => {

    const onChange = (e) => {
        props.changeNum(e.target.value);
        //console.log(props.num);
    };

    return (
        <>
            <div className="input-group mb-3">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Introduzca cantidad"
                    name='num'
                    id='num'
                    value={props.num}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default Input;