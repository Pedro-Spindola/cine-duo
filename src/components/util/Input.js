

function InputNumber({ textoLabel, tipo, id, placeholder, value, handleOnChange, styleInput, styleLabel}) {

    return(
        <>
            <label className={styleLabel} >{textoLabel}</label>
            <input className={styleInput} type={tipo} name={id} id={id} placeholder={placeholder} value={value} onChange={handleOnChange}></input>
        </>
    )
}

export default InputNumber;