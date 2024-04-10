import './FirstComp.css';
const FirstComp = () => {
    return (

       <>
        <div className="container gradient-one">
            <div className="row">
                <div className="col text-center pt-4">
                    {/* <div className='badge ' style={{ backgroundColor: '#222222' }}>
                        <h6 style={{ color: '#FFFFFF', fontWeight: 'lighter',padding:'2px',border:'1px' }}>Version 2.0 is here <span style={{ fontWeight: 'bolder' }}>Read more</span><img src='./IconsWhite.png' alt='...'></img></h6>
                    </div> */}
                    
                    <div className='p-4 '>
                        <button className='rounded-3' style={{backgroundColor:'black',color:'#222222',width:'250px',height:'35px',border:'1px solid',padding:'15px, 20px, 15px, 20px'}}>Version 2.0 is here <span style={{color:'#FFFFFF' }}>Read more</span><img src='./IconsWhite.png' alt='...'></img></button>
                    </div>

                    <div  >
                        <img src='./cursor.png' alt='...' style={{ width: '18%',position:'absolute' ,top:'485px',left:'70px'}}></img>
                        <h1 style={{ color: 'lightgrey', fontSize: '165px', fontWeight: 'bold' }}>One Task<br />
                            at a Time</h1>
                        <img src='./message.png' alt='...' style={{ width: '18%',position:'absolute',top:'380px',right:'80px' }}></img>

                    </div>
                    <div className='m-4'>
                        <p style={{ color: '#FFFFFF', fontSize: '22px' }}>Celebrate the joy of accomplishment with an <br />app designed to track your progress, motivate<br /> your efforts, and celebrate your successes.</p>

                    </div>

                    <div className='p-4 '>
                        <button className='rounded-3' style={{width:'120px',height:'45px',border:'none',padding:'15px, 20px, 15px, 20px'}}>Get for free</button>
                    </div>
                </div>
            </div>
        </div>

        
       </>

        
    )
}

export default FirstComp;