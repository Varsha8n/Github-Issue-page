import React from 'react'

const Records = ({data}) => {
  return (
    <div>
            <table className='mt-2 border tabb'>
        
        <thead className='alert alert-secondary tab2'>
          <tr>
            
            <th>
            <div className='inside'>
            <nav class="navbar navbar-expand-lg bg-body-tertiary insidenav">
              
              <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Author
          </a>
         
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            label
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Projects
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Milestone
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Assignees
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        </nav>
              </div>
            </th>
            
          </tr>
        </thead>


        <tbody>

          {data.map(({title,number,created_at,updated_at})=>
          {
            
            return(
              <tr>
                
                <th id='padtab'>

                <a href="#" >{title}</a>

                <br/>
               <div id='row2'> #{number} , Created At: {created_at} and Updated At: {updated_at}</div>
                </th>
                
              </tr>

              
            )
          }
          
          )}
        </tbody>
      </table> 


   
    </div>
  )
}

export default Records