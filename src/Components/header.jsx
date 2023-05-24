import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="margin">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="/github.png" alt="pic" id='logo'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit"><img src="/search-interface-symbol.png" id='logo2'></img></button>
      </form>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" id='cc'>Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  id='cc'>Open Source</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  id='cc'>Solution</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"  id='cc'>Pricing</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    <div id="margin2"><h4>/Github Issue List</h4>
    
    <ul class="nav nav-underline">
  <li class="nav-item">
    <a class="nav-link disabled" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Code</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Issues</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Pull Request</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Actions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Projects</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Wiki</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Security</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Insight</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Settings</a>
  </li>
</ul>
    </div>
    </div>
  )
}

export default Header