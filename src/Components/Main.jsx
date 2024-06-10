import profilePicture from "../assets/pp rey.jpg"
import Project from "../Parts/Project"

function Main(){
    return <main>
        <div className="container-main">
            <img className="profile-pic" src={profilePicture} />
        <div className="main-about">
            <h1 className="text-5xl font-bold text-center">Hello I'm Rey</h1>
            <p className="text-sm mt-5 font-semibold font-sans text-justify">
                My name is Reynaldo,but people usually call me "Rey",currently studying at 
                PELITA HARAPAN UNIVERSITY majoring in communication science. I also working at
                PT. LIPPO KARAWACI TBK as Corporate Legal. Also studying Full stack web development at Purwadhika Digital School 
            </p>
        </div>
        </div>

        <Project />
    </main>
}

export default Main