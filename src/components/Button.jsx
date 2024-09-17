export default function Button({ children, style, onClick }) {
    return(
        <button className={style} onClick={onClick}>
            {children}
        </button>
    )

}

//use Button component
{/* <Button onClick={handleClick} style={styles.buttonStyle}>
        Click Me!
    </Button> */}