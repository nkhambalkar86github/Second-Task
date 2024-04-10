
const GetInstance = () => {
    return (
        <div className="container p-4 " style={{ backgroundColor: 'black' }}>





            <div className="row pt-4">

                <div className="col text-center " >

                    <div style={{display:'flex'}} >
                        <div>
                            <img className=" img-fluid" src="./emojistar.png" alt="..." style={{ width: '70%',position:'relative', top: "5px", left: '40px' }} />

                        </div>

                        <div className="p-4 m-4 text-center" >
                            <h1 className="m-4" style={{ color: '#FFFFFF' }}>Get instant access</h1>
                            <p className="mb-4" style={{ color: '#FFFFFF' }}>Celebrate the joy of accomplishment with an app designed<br /> to track your progress and motivate your efforts.</p>
                            <input className="mr-sm-2 me-2 rounded-3" type="search" placeholder="name@gmail.com"style={{width:'250px',height:'39px'}} />
                            <button className='rounded-3' style={{width:'110px',height:'39px',border:'none',padding:'15px, 20px, 15px, 20px'}}>Get for free</button>
                        </div>



                        <div>
                            <img className=" img-fluid mb-4" src="./helix2.png" alt="..." style={{ width: '80%',top:'100px',position:'relative', right: '20px' }} />

                        </div>
                    </div>

                  

                </div>





            </div>

        </div>
    )
}

export default GetInstance;