import './InterfaceComp.css';

const InterfaceComp = () => {

    return (
        <div className='container p-4 gradient-interface' >
          
          <div className="row mb-4">
            <div className="col text-center">

                <div className="p-4 ">
                    <h1 className='mb-4' style={{fontFamily:"DM Sans",fontWeight:'bold', color: "#FFFFFF" }}>Intuitive interface</h1>
                    <p style={{fontFamily:"Inter", color: "#FFFFFF"}}>Celebrate the joy of accomplishment with an app <br/>designed to track your progress, motivate your efforts,<br/> and celebrate your successes, one task at a time.</p>
                </div>

                <div>
                    <img className="img-fluid" src="./AppNight.png" alt="..."></img>
                </div>

           </div>           
          </div>       
             

        </div>
    )
}

export default InterfaceComp;
