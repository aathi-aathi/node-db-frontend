import { useNavigate } from "react-router-dom";

const Home= ()=>{
    const navigate = useNavigate()
    return(
        <div style={{display:'grid',placeItems:'center',height:'100vh'}}>
            <div style={{border:'1px solid grey',height:'40vh',width:'40vh',
                display:'flex',flexDirection:'column',gap:'0.5rem',
                justifyContent:'center',padding:'2rem',borderRadius:'10px'}} >
                <button className="btn btn-primary" onClick={()=>navigate('/mentor')}>Mentor</button>
                <button className="btn btn-primary" onClick={()=>navigate('/students')}>Student</button>
            </div>
        </div>
    )
}
export default Home;