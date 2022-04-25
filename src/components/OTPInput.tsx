import React, { FunctionComponent } from 'react'

import styles from './OTPInput.module.css'

type OTPInputProps = {
    // the number of inputs fields to render
    // and also the length of the passcode to generate
    length: number
}

const OTPInput: FunctionComponent<OTPInputProps> = ({length}) => {
    return <div className={styles['OTPInput']}>
        Create {length} inputs here
    </div>
}

export default OTPInput