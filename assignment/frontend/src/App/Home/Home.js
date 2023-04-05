import React from 'react';
import Navbar from '../Navbar/Navbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 align-items-center my-5">
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&w=912"
                alt="..."
              />
            </div>
            <div class="col-lg-5">
              <h2 class="font-weight-light">Northeastern univeristy</h2>
              <p>
              Established in 1898, the university offers undergraduate and graduate programs on its main campus as well as satellite campuses in Charlotte, North Carolina; Seattle, Washington; San Jose, California; Oakland, California; Portland, Maine; and Toronto and Vancouver in Canada. In 2019, Northeastern purchased the New College of the Humanities in London, England. The university's enrollment is approximately 19,000 undergraduate students and 8,600 graduate students.[6] It is classified among "R1: Doctoral Universities – Very high research activity".[7] Northeastern faculty and alumni include Nobel Prize laureates,[8] Rhodes, Truman, Marshall, and Churchill scholars.[9] Undergraduate admission to the university is categorized as "most selective."[
              </p>
              <a class="btn btn-primary" href="#!">
                More Info
              </a>
            </div>
          </div>
          
          
        </div>
        
      </div>
    </div>
  );
}
export default Home;