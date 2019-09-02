import React from 'react';
import Picture1 from './Pictures/0001.jpg';
import Picture2 from './Pictures/0002.jpg';
// import Picture9 from './Pictures/about.jpg';
import './Main.css';

const Main = () => {
        return (
          <>
					
					<div id='resume' className="resume2">
						<div>
						<img className='page-one' src={Picture1} alt="resume page one" />
						</div>
						<div><img className='page-two' src={Picture2} alt="resume page two" /></div>
						</div>
						
					</>  
        )
}

export default Main;
