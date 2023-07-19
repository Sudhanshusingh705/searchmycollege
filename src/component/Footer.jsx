import React from 'react'

function Footer() {
  return (
    <div className='mt-5 container-fluid bg-primary bg-gradient text-white' style={{ minHeight: '10rem'}}>
    <div className='row pt-2 text-center'>
     <div className='col-lg-4 col-md-4 col-sm-12  '>
       <h4>Top Colleges</h4>
         <div className='d-flex flex-column mb-2  '>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>BE/B'TECH</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>M'TECH</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>MBA</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>MCA</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>BCA</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>M.A</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>B.A</a>
         </div>
     </div>

     <div className='col-lg-4 col-md-4 col-sm-12  '>
       <h4>Top Universities</h4>
         <div className='d-flex flex-column mb-2  '>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Enginnering</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Management</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Medical</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Commerce</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Sciense</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Arts</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Law</a>
         </div>
     </div>

     <div className='col-lg-4 col-md-4 col-sm-12  '>
       <h4>Top Exams</h4>
         <div className='d-flex flex-column mb-2  '>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Jee-Main</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Neet</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Gate</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Clat</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Mat</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>Xat</a>
           <a href='#' className='text-white p-1' style={{ textDecoration: 'none' }}>cat</a>
         </div>
     </div>
     
    </div>
  </div>
  )
}

export default Footer