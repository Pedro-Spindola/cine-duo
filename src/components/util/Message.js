import styles from './Message.module.css'
import { useState, useEffect } from 'react'

function Message({type, msg, clearMessage, vis}){

    const [visible, setVisible] = useState(true)

    useEffect(() => {
        if(!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
            clearMessage();
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg, clearMessage])

    return(
        <>
        {visible && (
            <div className={`${styles.message} ${styles.on}`}>
                <div className={`${styles.detalheCor} ${styles[type]}`}></div>
                <div className={styles.myMsg}>{msg}</div>
            </div>
        )}
        </>
        
    )
}

export default Message