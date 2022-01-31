import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import LiveTvIcon from '@mui/icons-material/LiveTv';

// import Data from 'data.json';

export const CovidData = () => {

    const [data, setData] = useState([]);

    const getCovidData = async ()=>{

    try {
        const res = await fetch('https://data.covid19india.org/data.json');
        console.log(res);
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
    
    } catch (error) {
      
        console.log('Error');
    }    

}
    useEffect(()=>{
        
        getCovidData();

    }, [])
  return( 
  
  <>
       <p className='live_style'> <span >  🔴 </span> LIVE </p>  
       <h2 className='main_h2'>Covid-19 Data Tracker</h2>
       

<div className='container'>
    <div className='row justify-content-center align-items-center'>
<Card className='main_card col-sm-6 col-md-3' style={{backgroundColor: '#154c79'}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title> <p> <span className='country_name'> Country </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> INDIA </h2>
    </Card.Text>
   
  </Card.Body>
</Card>


<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#4c7915'}}>
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Active Cases</span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.active} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>

<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#792d15'}}>
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Confirmed </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.confirmed} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>
</div>


<div className='row justify-content-center align-items-center'>
<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#639444'}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Daily Cases </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.deltaconfirmed} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>


<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#e8321e'}}>
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Daily Deaths </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.deltadeaths} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>

<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#75d11b'}}>
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Daily Recovered </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.deltarecovered} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>

<div className='row justify-content-center align-items-center'>
<Card className='main_card col-12 col-sm-4 col-md-3' style={{backgroundColor: '#1e81b0'}}>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title> <p><span className='country_name'> Last Updated </span></p>  </Card.Title>
    <Card.Text>
      <h2 className='active'> {data.lastupdatedtime} </h2>
    </Card.Text>
   
  </Card.Body>
</Card>
</div>

</div>

</div>

  </>
  )
};
