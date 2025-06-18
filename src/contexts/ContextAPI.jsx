import React, { useState } from 'react'
import { useEffect } from 'react'
import { createContext } from 'react'


export const addResponseContext=createContext()
export const editResponseContext=createContext()
export const tokenAuthContext=createContext()

function ContextAPI({children}) {
    const[addResponse,setAddResponse]=useState("")
    const[editResponse,setEditResponse]=useState("")
    const[isAuthosided,setIsAuthosided]=useState(false)

    useEffect(() => {
     if (sessionStorage.getItem("token")) {
      setIsAuthosided(true)
     }
     else{
      setIsAuthosided(false)
     }
    }, [isAuthosided])
    
  return (
    <>
    <tokenAuthContext.Provider value={{isAuthosided,setIsAuthosided}}>
    <editResponseContext.Provider value={{editResponse,setEditResponse}}>
    <addResponseContext.Provider value={{addResponse,setAddResponse}}>
      {children}
      </addResponseContext.Provider>
    </editResponseContext.Provider>
    </tokenAuthContext.Provider>
    </>
  )
}

export default ContextAPI