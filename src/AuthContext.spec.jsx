import React from "react";
import { AuthProvider, AuthContext } from "./AuthContext";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe('AuthContext', () => {
    describe('logIn', () => {
        it('sets "isLoggedIn" to true', () => {
            let logIn
            let isLoggedIn

            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            logIn = value.logIn
                            isLoggedIn = value.isLoggedIn
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            act(() => {
                logIn('test@gmail.com', 'test')
            })
            expect(isLoggedIn).toBe(true)
        })
    })

    describe('logOut', () => {
        it('sets "isLoggedIn" to false', () => {
            let logIn
            let logOut
            let isLoggedIn
    
            render(
                <AuthProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            logIn = value.logIn
                            logOut = value.logOut
                            isLoggedIn = value.isLoggedIn
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthProvider>
            )

            expect(isLoggedIn).toBe(false)
            
            act(() => {
                logIn('test@gmail.com', 'test')
            })
            expect(isLoggedIn).toBe(true)
            
            act(() => {
                logOut()
            })
            expect(isLoggedIn).toBe(false)
        })
    })
})
