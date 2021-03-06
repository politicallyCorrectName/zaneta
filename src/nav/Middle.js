import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledMiddle = styled.div`
    width: 70%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    a{
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${props => props.theme.tc1};
      text-decoration: none;
      height: 60%;
      border-radius: 0.5cm;

    }
    div > a{
      padding: 0.3cm;
      border: 0.07cm solid ${props => props.theme.c1};
      flex-shrink: 1;
      
      
    }
    div > a:hover{
      border: 0.07cm solid #000;
    }
    div{
      width: 90%;
      height: 30%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 5%;
    }
  `

    const Name = styled.h1`
      margin: none;
      display: inline-block;
      height: 100%;
      cursor: pointer;
    
    `

// link[0] is the route, link[1] is the name
export default function Middle({links}) {
  return (
    <StyledMiddle>
      <Link to='/'>
      <Name>
        Żaneta Olcak
      </Name>
      </Link>
      <div>
        {links.map((link) => (<Link to={link[0]} key={link[0]}>{link[1]}</Link>))}
      </div>

    </StyledMiddle>
  )
}
