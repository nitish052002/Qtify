import React, { startTransition } from "react"
import styles from "./buttons.module.css"
function Button ({children}) {
    return <div className={styles.btn}>
        {children}
    </div>
}

export default Button 