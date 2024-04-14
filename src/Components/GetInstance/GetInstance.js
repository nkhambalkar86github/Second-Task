
const GetInstance = () => {
    return (
        <div className="container p-4 " style={{ backgroundColor: 'black' }}>



            <div className="row pt-4 mb-4">

                <div className="col-lg-3 col-sm-2  ">
                    <div>
                        <img className="  d-none d-md-block d-sm-block" src="./emojistar.png" alt="..." style={{ width: '70%', position: 'relative', top: "5px", left: '40px' }} />

                    </div>
                </div>

                <div className="col-lg-6 col-sm-8 text-center">
                    <div className="p-4 m-4 " >
                        <h1 className="m-4" style={{fontFamily:"DM Sans",fontWeight:'bold', color: '#FFFFFF' }}>Get instant access</h1>
                        <p className="mb-4" style={{fontFamily:"Inter",fontSize:'15px', color: '#BBBBBB' }}>Celebrate the joy of accomplishment with an app designed<br /> to track your progress and motivate your efforts.</p>
                        <input className="mt-3 me-3 rounded-2 mb-2" type="search" placeholder="name@gmail.com" style={{ width: '45%', height: '39px', backgroundColor: '#363738', border: 'none' }} />
                        <button className='btn-lg btn-responsive rounded-3' style={{fontFamily:"Inter",fontWeight:'500', height: '39px', border: 'none', padding: '15px, 20px, 15px, 20px' }}>Get access</button>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-2 ">
                    <div>
                        <img className="  d-none d-md-block d-sm-block mb-4" src="./helix2.png" alt="..." style={{ width: '80%', top: '100px', position: 'relative', right: '10px' }} />

                    </div>
                </div>

               
               
                {/* <div className="col text-center " >

                    <div style={{display:'flex'}} >
                        <div>
                            <img className=" img-fluid" src="./emojistar.png" alt="..." style={{ width: '70%',position:'relative', top: "5px", left: '40px' }} />

                        </div>

                        <div className="p-4 m-4 text-center" >
                            <h1 className="m-4" style={{ color: '#FFFFFF' }}>Get instant access</h1>
                            <p className="mb-4" style={{ color: '#FFFFFF' }}>Celebrate the joy of accomplishment with an app designed<br /> to track your progress and motivate your efforts.</p>
                            <input className=" me-3 rounded-2 mb-2" type="search" placeholder="name@gmail.com"style={{width:'250px',height:'39px',backgroundColor:'#363738',border:'none'}} />
                            <button className='btn-lg btn-responsive rounded-3' style={{height:'39px',border:'none',padding:'15px, 20px, 15px, 20px'}}>Get for free</button>
                        </div>

                        <div>
                            <img className=" img-fluid mb-4" src="./helix2.png" alt="..." style={{ width: '80%',top:'100px',position:'relative', right: '10px' }} />

                        </div>
                    </div>                 

                </div> */}
            </div>

        </div>
    )
}

export default GetInstance;