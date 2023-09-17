import logo from './logo.svg';
import './App.css';


let name="InfoGalaxy Computer"
function App() {
  return (
   <>
 
   <div class="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
<nav class="navbar navbar-expand-lg bg-body-tertiary">
   
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TextUtils</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
       <button class="btn btn-outline-success" type="submit">Search</button>
      
      </form>
    </div>
  </div>
  <button type="button" className="btn-close" aria-label="Close"></button>
  
</nav>
</div>

   </>
  );
}

export default App;
