import React from 'react';
import { Link } from 'react-router-dom';
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg';
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg';

function Explore() {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>

      <main>
        <p className="exploreCategoryHeading">
          Categories
          <div className="exploreCategories">
            <Link to="/category/rent">
              <img src={rentCategoryImage} alt="rent" srcset="" className="exploreCategoryImg" />
              <p className="exploreCategoryName">Places for rent</p>
            </Link>
            <Link to="/category/sell">
              <img src={sellCategoryImage} alt="sell" srcset="" className="exploreCategoryImg" />
              <p className="exploreCategoryName">Places for sell</p>

            </Link>
          </div>
        </p>
      </main>
    </div>
  );
}

export default Explore;
