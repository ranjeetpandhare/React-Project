import React from 'react'
import CounterOne from './CouneterHooks/CounterOne'
import CounterTwo from './CouneterHooks/CounterTwo'
import DocumentTitleOne from './DocumentTitleOne'
import DocumentTitleTwo from './DocumentTitleTwo'
import UserForm from './InputFiledCustomHooks/UserForm'
export function CallingCustomHooks(){
    return(
        <div>
            {/* <DocumentTitleOne/>
            <DocumentTitleTwo/> */}

            {/* <CounterOne/>
            <CounterTwo/> */}
            <UserForm/>
        </div>
    )
}