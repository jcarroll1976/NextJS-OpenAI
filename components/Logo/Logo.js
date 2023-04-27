import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Logo() {
  return (
    <div className='text-3xl text-center py-4 font-heading'>
        BlogStandard
        <FontAwesomeIcon icon={faBrain} className='text-2xl text-slate-400' />
    </div>
  )
}
