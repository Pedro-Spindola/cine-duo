
function SelectGenero({ id, text, textoLabel, handleOnChange, options, valor, disabled, styles}) {
    return (
        <>
            <label>{textoLabel}</label>
            <select className={styles.select} name={id} text={text} id={id} value={valor} onChange={handleOnChange}>
            <option value="" disabled={disabled}></option>
                {options.map((option) => (
                    <option value={option.name} key={option.id}>{option.name}</option>
                ))}
            </select>
        </>
    )
}

export default SelectGenero;

