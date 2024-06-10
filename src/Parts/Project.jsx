import reyLinked from "../assets/Rey-linkedin.jpg"
import relEstate from "../assets/Real-estate.jpg"
import art from "../assets/art.jpg"
function Project(){
    return( 
        <>
         
         <h1 className="text-center mb-5 text-4xl font-semibold">My Projects</h1>
 
        <div className="place-container">
        <div className="card-container">
            <div className="card" style={{backgroundImage:`url(${reyLinked})`}}>
            </div>
            <div className="card-body">
                <h1 className="font-semibold text-center">Linked In</h1>
                <p className="text-base tracking-tight text-center">Here you can check more about me and my
                    <br/> job experience</p>
            </div>
            <div className="btn bg-black mb-2">
                <h1 className="text-white text-center"><a href="https://www.linkedin.com/in/reynaldo-riswan-869581205/"> Click Here</a></h1>
            </div>
        </div>

        <div className="card-container">
            <div className="card" style={{backgroundImage:`url(${relEstate})`}}>
            </div>
            <div className="card-body">
                <h1 className="font-semibold text-center">Real Estate Project</h1>
                <p className="text-base tracking-tight text-center">I'm making Real-Estate project website using
                    <br/> CSS Framework BOOTSTRAP 5
                </p>
            </div>
            <div className="btn bg-black mb-2">
                <h1 className="text-white text-center"><a href="https://reynaldoriswan.github.io/Website.101/"> Click Here</a></h1>
            </div>
        </div>

        <div className="card-container">
            <div className="card" style={{backgroundImage:`url(${art})`}}>
            </div>
            <div className="card-body">
                <h1 className="font-semibold text-center">Realistic Art</h1>
                <p className="text-base tracking-tight text-center">I'm also love to draw,currently during my free time
                    <br/> i learn how to draw in realistic way
                </p>
            </div>
            <div className="btn bg-black mb-2">
                <h1 className="text-white text-center"><a href="https://reynaldoriswan.github.io/Website.101/"> Click Here</a></h1>
            </div>
        </div>
        </div>
  
        </>
        
    )
}

export default Project;