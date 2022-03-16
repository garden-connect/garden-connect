import React from 'react'
import {useDispatch} from 'react-redux'
import { httpConfig } from '../../../utils/http-config'
import { getAuth } from '../../../store/auth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from "react-bootstrap";

export const SignOutComponent = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {
            if (reply.status === 200) {
                window.location = '/'
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                // window.location = '/'
            }
        })
    }

    return (
        <>
            <div>
                <Button variant={"primary"} onClick={signOut}>
                    Sign Out
                </Button>
            </div>
        </>
    )
}