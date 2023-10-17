import './styles.css'
import { Filter } from './Filter/Filter';
import { ShoppingCar } from './ShoppingCar/ShoppinCar';

function NavBar({searchValue, setSearchValue, contador}) {
  
  return (
    <nav id="header" className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-emoji-smile"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
          </svg>
          Beautyfing
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar" style={{flexGrow: 0}}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="">
                Cortes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Manicura
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Pedicura
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Peinados
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Maquillaje
              </a>
            </li>
            <li className="nav-item">
              <Filter searchValue={searchValue} setSearchValue={setSearchValue}/>
            </li>
            <li className="nav-item">
              <ShoppingCar contador= {contador}/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export { NavBar };
