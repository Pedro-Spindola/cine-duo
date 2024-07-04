

function InputNumber({ textoLabel, tipo, id, placeholder, value, handleOnChange}) {

    return(
        <>
            <label>{textoLabel}</label>
            <input type={tipo} name={id} id={id} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
        </>
    )
}

export default InputNumber;