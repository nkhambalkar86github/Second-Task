import './FirstComp.css';
const FirstComp = () => {
    return (

        <>
            <div className="container text-center gradient-one " style={{ position: 'relative' }}>

                       <div className='p-4 'style={{}}>
                       <button className='rounded-3 fontsize p-2 ' style={{ fontFamily:"Inter",backgroundColor: 'black', color: 'grey', width: '25%',height:'auto' , border: '1px solid #222222' }}>Version 2.0 is here <span style={{ color: '#FFFFFF' }}>Read more</span><img src='./IconsWhite.png' alt='...'></img></button>
                        </div>
                <div className="row ">
                    <div className="col-lg-12  mb-4 text-center pt-4 ">                    

                        <div>
                            <img className='img-fluid d-none d-md-block' src='./cursor.png' alt='...' style={{ width: '18%', position: 'absolute', top: '335px', left: '60px' }}></img>
                            <h1 className='' style={{ fontFamily:"DM Sans",color: 'lightgrey', fontSize: '160px', fontWeight:'bold' }}>One Task<br />
                                at a Time</h1>
                            <img className='img-fluid d-none d-md-block' src='./message.png' alt='...' style={{ width: '18%', position: 'absolute', top: '240px', right: '60px' }}></img>

                        </div>
                        <div className='m-4'>
                            <p style={{fontFamily:"Inter", color: '#FFFFFF', fontSize: '22px' }}>Celebrate the joy of accomplishment with an <br />app designed to track your progress, motivate<br /> your efforts, and celebrate your successes.</p>

                        </div>
                    </div>

                </div>

            </div>


            <div className="container p-4  gradient-two" >
                <div className='' style={{ width: '100%' }}>
                    <div className="row mb-4">
                        <div className="col" style={{ textAlign: 'center' }}>

                            <div className='mb-5 text-center '>
                                <button className='rounded-3 mb-5' style={{fontFamily:"Inter",fontWeight:'500', width: '120px', height: '45px', border: 'none', padding: '15px, 20px, 15px, 20px' }}>Get for free</button>
                            </div>

                            <div className='mb-4'>
                                <p style={{fontFamily:"Inter", color: "#7A7A7A" }}>Trusted by the world’s most innovative teams</p>
                            </div>

                            <div className='mb-5'>
                                <img src="./acme.png" alt="acme" style={{ marginRight: '35px' }} /><img src="./quantum.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./echo.png" alt="acme" style={{ marginRight: '35px' }} /><img src="./celestia.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./pulse.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./apex.png" alt="acme" style={{ marginRight: '35px' }} />

                            </div>

                        </div>
                    </div>



                    <div className="text-center pt-5 pb-5">
                        <h1 className="mb-4" style={{ fontFamily:"DM Sans",fontWeight:'bold',color: "#FFFFFF" }}>Everything you need</h1>
                        <p style={{fontFamily:"Inter", color: '#FFFFFF',fontWeight:'' }}>Enjoy customizable lists, team work tools, and smart <br /> tracking all in one place. Set tasks, get reminders, and<br /> see your progress simply and quickly.</p>
                    </div>

                    <div className="row pb-5" style={{ textAlign: '-webkit-center' }}>

                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="card rounded-3" style={{ width: "100%", background: '#0D0D0D', border: '2px solid' }}>
                                <div className="card-body">
                                    <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                    < h6 className="card-subtitle m-2 " style={{fontFamily:"DM Sans",fontWeight:'bold', color: '#FFFFFF'}}>Integration ecosystem</ h6>
                                    <p className="card-text" style={{fontFamily:"Inter", color: '#FFFFFF' }}>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="card rounded-3" style={{ width: "100%", background: '#0D0D0D', border: '2px solid' }}>
                                <div className="card-body">
                                    <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                    < h6 className="card-subtitle m-2 " style={{ fontFamily:"DM Sans",fontWeight:'bold',color: '#FFFFFF' }}>Goal setting and tracking</ h6>
                                    <p className="card-text" style={{fontFamily:"Inter", color: '#FFFFFF' }}>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-12 mb-4">
                            <div className="card rounded-3" style={{ width: "100%", background: '#0D0D0D', border: '2px solid' }}>
                                <div className="card-body">
                                    <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                    < h6 className="card-subtitle m-2 " style={{fontFamily:"DM Sans",fontWeight:'bold', color: '#FFFFFF'}}>Secure data encryption</ h6>
                                    <p className="card-text" style={{fontFamily:"Inter", color: '#FFFFFF' }}>With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>


    )
}

export default FirstComp;