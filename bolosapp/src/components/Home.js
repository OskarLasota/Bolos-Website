import React from 'react';
import logo from '../bolos_logo.png';
const home = () => {
    return (
        <div className="container">
          <img class="rounded mx-auto d-block" id="logo" src={logo} alt="logo can't be loaded"></img>

          <section className="bg-light page-section" id="team">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Nostro Amazing Story</h2>
        <h3 className="section-subheading text-muted">El Beginning.</h3>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <p className="large text-muted">amazing bolos from amazing momma, made purely from sweetness of love</p>
      </div>
    </div>
  </div>
</section>

        </div>
    );
}
 
export default home;