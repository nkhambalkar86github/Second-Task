import './InterfaceComp.css';

const InterfaceComp = () => {

    return (
        <div className='container p-4 gradient-interface' >
          
          <div className="row">
            <div className="col text-center">

                <div className="p-4 ">
                    <h1 style={{ color: "#FFFFFF" ,fontStyle:'DM Sans'}}>Intuitive interface</h1>
                    <p style={{ color: "#FFFFFF"}}>Celebrate the joy of accomplishment with an app <br/>designed to track your progress, motivate your efforts,<br/> and celebrate your successes, one task at a time.</p>
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
