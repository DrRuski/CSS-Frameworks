// name: `dady`,
// email: `DanDyr77157@stud.noroff.no`,
// password: `dady1337`,
// token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzA3LCJuYW1lIjoiZGFkeSIsImVtYWlsIjoiRGFuRHlyNzcxNTdAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1ODU1OTA4fQ.nAvo_mYNHr-_E9h9FndDDyw8mdvwL2yxOBpXVWH4R94"
const accessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzA3LCJuYW1lIjoiZGFkeSIsImVtYWlsIjoiRGFuRHlyNzcxNTdAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1ODU1OTA4fQ.nAvo_mYNHr-_E9h9FndDDyw8mdvwL2yxOBpXVWH4R94";
const baseUrl = "https://nf-api.onrender.com";

// <!-- <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postTwo.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#cozy</a>
//                   <a href="#" class="card-link text-decoration-none">#relaxing</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     I am of to escape the hustle and bustle of the daily life and enjoy the serenity of the mountains.
//                     Cozy up in my snowy mountain lodge for the ultimate holiday getaway.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="some image" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postThree.png" alt="" />
//                 </div>
//                 <div>
//                   <a class="card-link text-decoration-none" href="#">#holiday</a>
//                   <a class="card-link text-decoration-none" href="#">#athens</a>
//                   <a class="card-link text-decoration-none" href="#">#friendstrip</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     Exploring the ancient city of Athens with my best friends by my side, making memories that will last
//                     a lifetime.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postFour.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#boardgames</a>
//                   <a href="#" class="card-link text-decoration-none">#lodge</a>
//                   <a href="#" class="card-link text-decoration-none">#friendship</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     Nothing beats a cozy night in with great friends and a fun board game. Living our best lodge life.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postOne.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#socialconnectivity</a>
//                   <a href="#" class="card-link text-decoration-none">#futuretech</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     The future of social connectivity is exciting! Embracing new technologies to bring people closer
//                     together no matter the distance.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postSix.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#currentevents</a>
//                   <a href="#" class="card-link text-decoration-none">#worldnews</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     The world is ever-changing and it's important to stay informed and educated about current events.
//                     Let's work together to make the world a better place.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postSeven.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#spacetravel</a>
//                   <a href="#" class="card-link text-decoration-none">#futuretech</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     The future of space travel is reaching for the stars! Imagine visiting other planets and exploring
//                     the unknown. Exciting times ahead
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div class="col-12 col-md-6 col-lg-3">
//             <div class="card h-100">
//               <div class="card-header d-flex align-items-center justify-content-between">
//                 <div class="d-flex gap-2 align-items-center">
//                   <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//                   <h6 class="m-0">Ben Affleck</h6>
//                 </div>
//                 <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
//               </div>
//               <div class="card-body d-flex flex-column gap-2">
//                 <div>
//                   <img class="img-fluid" src="assets/postPictures/postEight.png" alt="" />
//                 </div>
//                 <div>
//                   <a href="#" class="card-link text-decoration-none">#marathon</a>
//                   <a href="#" class="card-link text-decoration-none">#determination</a>
//                   <a href="#" class="card-link text-decoration-none">#success</a>
//                 </div>
//                 <div>
//                   <p class="card-text">
//                     The finish line is in sight and the determination on this runner's face is palpable. The last
//                     moments of a marathon are unforgettable.
//                   </p>
//                 </div>
//                 <div class="mt-2">
//                   <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-heart"></i></button>
//                     </li>
//                     <li class="list-group-item">
//                       <button class="btn"><i class="fa-regular fa-comments"></i></button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div> -->
