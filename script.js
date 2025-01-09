const root = document.getElementById('root');


const getAllUser = async () => {
    // make the page load before fetch all user;
    root.innerHTML = `
            <div style="height: 50vh;" class="col-12 d-flex align-items-center justify-content-center">
                  <div class="loader"></div> 
             </div>`;


    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    root.innerHTML = "";
    users.forEach( user => {
        root.innerHTML += `
            <div class="col-xl-6 col-xxl-4  col-lg-6 col-md-12 col-sm-12 mb-4 p-3">
                <article class="card-bg shadow p-4 border rounded-3">
                    <h4 class="mb-4"> Name: ${user.name}  </h4>
                    <hr />
                    <h5>Username: ${user.username} </h5>
                    <p>email: <a href=${user.email}>${user.email}</a></p>
                    <p>Phone: ${user.phone}</p>
                    <button onclick="detailUser(${user.id});" class="btn btn-primary"> <i class="bi bi-ticket-detailed"></i> Detial</button>
                </article>
            </div>
        `;
    } );
}


// Calling fetch all user
getAllUser();



const detailUser = async id => {
    // Make the page loading before user detail is response
    root.innerHTML = `
            <div style="height: 50vh;" class="col-12 d-flex align-items-center justify-content-center">
                  <div class="loader"></div> 
            </div>`;

    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const user = await response.json();
    root.innerHTML = "";

    root.innerHTML = `
        <div class="col-xxl-6 p-4 col-xl-6 col-lg-8 col-md-12 col-sm-12">
        <h1 class="mb-5">User Detail Page</h1>
        <div class="p-3 rounded-4 border shadow">
            <h4 class="mb-3">
            <i class="fa fa-user"></i> User Informations
            </h4>
            <h5>Name: ${user.name} </h5>
            <h5 class="mt-3">Username: ${user.username}</h5>
            <h5>
            <i class="fa fa-envelope"></i> : ${user.email} </a>
            </h5>
            <hr />
            <h4 class="mt-4">
            <i class="fa fa-location-dot"></i> Address
            </h4>
            <ul>
            <li>Street: {address.street}</li>
            <li>Suite: {address.suite}</li>
            <li>City: {address.city}</li>
            <li>
                <span>Geo</span>
                <ul>
                <li>Lat: {address.geo.lat}</li>
                <li>Lng: {address.geo.lng}</li>
                </ul>
            </li>
            </ul>
            <hr />
            <h4 class="mt-4 mb-3">Contact</h4>
            <p>
            <i class="fa fa-phone me-2"></i> {phone}
            </p>
            <p>
            <i class="fa fa-globe me-2 text-goal"></i> {website}
            </p>
            <hr />
            <h4 class="mt-5 mb-3">
            <i class="fa fa-building me-2"></i> Company
            </h4>
            <p>Company Name: {company.name}</p>
            <p>Company CatchPhrase: {company.catchPhrase}</p>
            <p>Company BS: {company.bs}</p>
        </div>
        <button class="mt-5 d-block btn btn-primary" onclick=(getAllUser()) >All Users</button>
        </div>
    `;
}



