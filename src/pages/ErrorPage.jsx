import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const { statusText, message } = useRouteError()
  return (
    <>
    <h1>
        Oops!
    </h1>
    <p>
        Lo siento, ocurrio un error
    </p>
    <p>
        <i>
            {statusText || message }
        </i>
    </p>
    <Link to='/'>
        Inicio
    </Link>
    </>

  )
}
