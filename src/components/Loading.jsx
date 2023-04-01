import React from 'react'
import styled from 'styled-components'
import loadinggif from '../load.gif'
export default function Loading() {
  return (
    <Loadingcomponent>
      <img src={loadinggif} alt="" />
    </Loadingcomponent>
  )
}
const Loadingcomponent=styled.div`
width:100vw,
height:100%,
display:'flex',
justify-content:'center',
align-items:'center'
`