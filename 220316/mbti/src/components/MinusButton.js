function MinusButtonComponent({
    number,
    setNumber,
}) {
    //props
    return (
        <button onClick={() => setNumber(number-1)}>
            <div>-</div>
        </button>
    )
}

export default MinusButtonComponent;