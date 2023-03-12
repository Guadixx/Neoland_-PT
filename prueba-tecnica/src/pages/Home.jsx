import './Home.css'
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
      <main className="container">
    <div>
        <div className= "home_title">
            <h3>Popular Titles</h3>
        </div>
        <div className="img_container">
        <figure className="series">
          <NavLink to="series">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1678626922/Prueba%20tecnica/video-placeholder-2eccc500d8db0a2f40572a3d147bd09d020ab6e14d0dfec609b404060fbd5695_zmzdqf.jpg"
              alt="link to series"
            />
            <p>Popular Series</p>
          </NavLink>
        </figure>
        <figure className="movies">
          <NavLink to="movies">
            <img
              src="https://res.cloudinary.com/dpidlverd/image/upload/v1678626922/Prueba%20tecnica/video-placeholder-2eccc500d8db0a2f40572a3d147bd09d020ab6e14d0dfec609b404060fbd5695_zmzdqf.jpg"
              alt="link to movies"
            />
            <p>Popular movies</p>
          </NavLink>
        </figure>
      </div>
    </div>
    </main>)
}

export default Home 