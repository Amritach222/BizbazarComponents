import React,{useState} from "react";
// Import image lazyloading 
import { LazyLoadImage } from "react-lazy-load-image-component";
const DescandReviews = () => {
  const [currentTab, setCurrentTab]=useState('spec');
  // This function works while clicking tab in the Description and review section
  const handleTab=(event,tab)=>{
    event.preventDefault()
    //setting tab here 
     setCurrentTab(tab)
  }

  return (
    <div className="desc_container">
      <div className="card">
        <header className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a href="#" className={currentTab==='spec'?'nav-link active':'nav-link'} onClick={(e)=> handleTab(e,'spec')} aria-current="true">
                Specification
              </a>
            </li>{" "}
            <li className="nav-item">
              {" "}
              <a href="#" className={currentTab==='review'?'nav-link active':'nav-link'} onClick={(e)=> handleTab(e,'review')}>
                Reviews
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a href="#" className={currentTab==='shipping'?'nav-link active':'nav-link'} onClick={(e)=> handleTab(e,'shipping')}>
                Shipping info
              </a>{" "}
            </li>
            <li className="nav-item">
              {" "}
              <a href="#" className={currentTab==='seller'?'nav-link active':'nav-link'} onClick={(e)=> handleTab(e,'seller')}>
                Seller profile
              </a>{" "}
            </li>
          </ul>{" "}
        </header>{" "}
        <article className={ currentTab==='spec'? 'card-body':'d-none'}>
          <p>
            With supporting text below as a natural lead-in to additional
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>{" "}
          <ul className="list-check cols-two">
            <li>Some great feature name here </li>
            <li>Lorem ipsum dolor sit amet, consectetur </li>
            <li>Duis aute irure dolor in reprehenderit </li>
            <li>Optical heart sensor </li>
            <li>Easy fast and ver good </li>
            <li>Some great feature name here </li>
            <li>Modern style and design</li>{" "}
          </ul>
          <hr />{" "}
          <dl className="row">
            <dt className="col-sm-3">Display</dt>
            <dd className="col-sm-9">13.3-inch LED-backlit display with IPS</dd>
            <dt className="col-sm-3">Processor</dt>
            <dd className="col-sm-9">2.3GHz dual-core Intel Core i5</dd>
            <dt className="col-sm-3">Camera</dt>{" "}
            <dd className="col-sm-9">720p FaceTime HD camera</dd>
            <dt className="col-sm-3">Memory</dt>{" "}
            <dd className="col-sm-9">8 GB RAM or 16 GB RAM</dd>
            <dt className="col-sm-3">Graphics</dt>{" "}
            <dd className="col-sm-9">Intel Iris Plus Graphics 640</dd>
          </dl>{" "}
        </article>
        <article className={ currentTab==='review'? 'card-body':'d-none'}>
        <section class="padding-y bg-light"><div class="container"><div class="row"> <div class="col-lg-8">
        <div class="card mb-4"> 
        <div class="card-body"> <h5 class="card-title">Reviews </h5>
         <hr/> <blockquote class="border-bottom"> <div class="float-lg-end d-flex mb-3"> 
         <div class="btn-group d-inline-flex me-2"> 
         <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> 
         <i class="fa fa-thumbs-up"></i> </button> 
         <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> 
         <i class="fa fa-thumbs-down"></i> 
         </button> </div> <button class="btn btn-light btn-sm float-end "> 
         <i class="fa fa-ellipsis-v"></i> </button> </div> <div class="icontext"> 
          <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/avatars/avatar.jpg" class="img-xs icon rounded-circle"/> 
         <div class="text"> <h6 class="mb-0"> Michael Jonathan </h6> <div class="rating-wrap"> <ul class="rating-stars"> 
         <li style={{width:'80%'}} class="stars-active">  <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
        </li> <li>  <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> 
        </li> </ul> <b class="dot"></b> <small class="label-rating text-muted"> Purchased on Wed, May 12 </small> 
        </div> </div>
         </div> 
          <div class="mt-3"> 
          <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p> 
          </div> 
          </blockquote>
           <blockquote class="border-bottom">
            <div class="float-lg-end d-flex mb-3"> 
            <div class="btn-group d-inline-flex me-2"> 
            <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> 
            <i class="fa fa-thumbs-up"></i> 
            </button> 
            <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> 
            <i class="fa fa-thumbs-down"></i> 
            </button> </div> 
            <button class="btn btn-light btn-sm float-end "> 
            <i class="fa fa-ellipsis-v"></i> 
            </button> 
            </div> 
            <div class="icontext"> 
             <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/avatars/avatar1.jpg" class="img-xs icon rounded-circle"/> 
            <div class="text"> 
            <h6 class="mb-0"> Michael Jonathan </h6> 
            <div class="rating-wrap"> 
            <ul class="rating-stars">
             <li style={{width:'80%'}} class="stars-active"> 
              <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
          </li> 
          <li> 
           <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> 
          </li> 
          </ul> 
          <b class="dot"></b> 
          <small class="label-rating text-muted"> Purchased on Wed, May 12 </small> </div> </div>
           </div>  
           <div class="mt-3"> 
           <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best Just makes up a different song to thats all and all the best </p>
            </div> 
            </blockquote> 
            <blockquote class="border-bottom">
             <div class="float-lg-end d-flex mb-3"> 
             <div class="btn-group d-inline-flex me-2"> 
             <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Like"> 
             <i class="fa fa-thumbs-up"></i> </button> 
             <button class="btn btn-light btn-sm float-end" data-bs-toggle="tooltip" data-bs-title="Dislike"> 
             <i class="fa fa-thumbs-down"></i> 
             </button> 
             </div> 
             <button class="btn btn-light btn-sm float-end "> 
             <i class="fa fa-ellipsis-v"></i> </button> 
             </div> 
             <div class="icontext"> 
              <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/avatars/avatar3.jpg" class="img-xs icon rounded-circle"/> 
             <div class="text"> 
             <h6 class="mb-0"> John Alex </h6> 
             <div class="rating-wrap"> 
             <ul class="rating-stars"> 
             <li style={{width:'80%'}} class="stars-active"> 
              <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
             </li>
              <li> 
               <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> 
          </li> 
          </ul> 
          <b class="dot"></b> 
          <small class="label-rating text-muted"> Purchased on Wed, Apr 30 </small> 
          </div>
           </div>
            </div> 
             <div class="mt-3"> 
             <p> It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) that it can not find any song and it just makes up a different song to thats all and all the best It used to be great, finding almost every song, but now i dont know what happened (they might be hacked even) </p> 
             </div>
              </blockquote> 
              </div>
              </div>
              </div>  
              <div class="col-lg-4">
              <article class="card"> 
              <div class="card-body"> 
              <a href="#" class="btn w-100 btn-primary-light">Write review</a> 
              <div class="rating-wrap mt-3"> <ul class="rating-stars stars-lg"> 
              <li style={{width:'80%'}} class="stars-active"> 
               <LazyLoadImage effect='blur' src="bootstrap5-ecommerce/images/misc/stars-active.svg" alt=""/> 
              </li> <li> 
               <LazyLoadImage effect='blur' height="520" src="bootstrap5-ecommerce/images/misc/starts-disable.svg" alt=""/> 
              </li> 
              </ul> 
              <b class="label-rating text-lg"> 4.6 out of 5 </b> 
              </div>  
              <p class="mt-1 text-muted"> 320 reviews </p> 
              <table class="table table-borderless table-sm"> 
              <tbody>
              <tr valign="middle"> 
              <td width="50"> 5 star </td> 
              <td> 
              <div class="progress" style={{height: '10px'}}> 
          <div class="progress-bar bg-warning" role="progressbar" style={{width: '95%'}} aria-valuenow="25" aria-valuemax="100"></div>
           </div>  
           </td> 
           <td width="50"> 95 % </td> 
           </tr> 
           <tr valign="middle"> <td> 4 star </td> 
           <td> <div class="progress" style={{height: '10px'}}> 
           <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="80" aria-valuemax="100">
           </div> 
           </div>  
           </td> 
           <td> 80 % </td>
            </tr> 
            <tr valign="middle"> 
            <td> 3 star </td> 
            <td> <div class="progress" style={{height: '10px'}}>
             <div class="progress-bar bg-warning" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemax="100"></div> </div>  </td> <td> 35 % </td> </tr> <tr valign="middle"> 
             <td> 2 star </td> 
             <td> 
             <div class="progress" style={{height: '10px'}}> 
             <div class="progress-bar bg-warning" role="progressbar" style={{width: '13%'}} aria-valuenow="13" aria-valuemax="100">
             </div> 
             </div>  
             </td> 
             <td> 13 % </td> 
             </tr> <tr valign="middle"> 
             <td> 1 star </td> 
             <td> 
             <div class="progress" style={{height: '10px'}}> 
             <div class="progress-bar bg-warning" role="progressbar" style={{width:'15%'}} aria-valuenow="5" aria-valuemax="100"></div> 
             </div>  
             </td> <td> 15 % </td> 
             </tr> 
             </tbody>
             </table> 
             </div></article> 
             </div> 
             </div>
              </div> 
        </section>
           </article>
        <article className={ currentTab==='shipping'? 'card-body':'d-none'}>
        <h3>Here is Shipping details</h3>
        </article>
        <article className={ currentTab==='seller'? 'card-body':'d-none'}>
        <h3> Here is seller information. </h3>
        </article>
      </div>
    </div>
  );
};

export default DescandReviews;
