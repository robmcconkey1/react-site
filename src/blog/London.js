import React, {Component} from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

const body = styled.div`
display: flex;
flex-wrap: wrap;
object-fit: cover;
object-position: middle;
position: center;
`
 

function London() {
    return (
        <body>
            <h1> London </h1>
            <h3> Notting Hill </h3>
            <h3> Central </h3>
            <h3> Shoreditch </h3>
        </body>
    )



}
export default London 
