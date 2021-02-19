import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import boatImage from '../assets/boatImage.jpg';


const Styles = styled.div`
	
`;

 // background: url(${boatImage}) no-repeat fixed bottom;
 //    background-size: cover;
export const Jumbotron = () => {
	return (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h2>Dogs everywhere</h2>
				<p>Dogs dogs dogs</p>
			</Container>
		</Jumbo>
	</Styles>
	)
}

// .jumbo {
   
//     color: #efefef;
//     height: 200px;
//     position: relative;
//     z-index: -2;
//   }
//   .overlay {
//     background-color: #000;
//     opacity: 0.6;
//     position: absolute;
//     top: 0;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     z-index: -1;
//   }

