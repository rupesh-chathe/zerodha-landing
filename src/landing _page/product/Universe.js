import React from 'react';

function Universe() {
  return (<div className="container mt-5">
      <div className="row  text-center">
        <h1> The Zerodha Universe</h1>
        <p>
          Extends your trading and investing experience even further with our partner platforms 
        </p>
          
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/smallcaseLogo.png" style={{}}/>
          <p className='text-small text-muted'> Thematic investment platform</p>
        </div>
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/streakLogo.png" style={{width:"35%"}}/>
          <p className='text-small text-muted'> Algo & strategy platform</p>
        </div>
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/smallcaseLogo.png"/>
          <p className='text-small text-muted'></p>
        </div>
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/smallcaseLogo.png"/>
          <p className='text-small text-muted'></p>
        </div>
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/smallcaseLogo.png"/>
          <p className='text-small text-muted'></p>
        </div>
        <div className="col-4  p-3 mt-5" >
          <img src=" media/image/smallcaseLogo.png"/>
          <p className='text-small text-muted'></p>
        </div>

         
      </div>
    </div>
);
}

export default Universe;