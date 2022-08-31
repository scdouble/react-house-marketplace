import { getAuth } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { db } from '../firebase.config';
import shareIcon from '../assets/svg/shareIcon.svg';

function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(null);

  const navigate = useNavigate();
  const params = useParams();
  const auth = getAuth();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', params.listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
      }
    };
    fetchListing();
  }, [navigate, params.listingId]);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <main>
      <div
        className="shareIconDiv"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt="" />
      </div>

      {shareLinkCopied && <p className="linkCopied">Link Copied!</p>}

      <div className="listingDetails">
        <p className="listingName">
          {listing.name} - $ {listing.offer ? listing.discountedPrice : listing.regularPrice}
        </p>

        <p className="listingLocation">{listing.location}</p>

        <p className="listingType">For {listing.type === 'rent' ? 'Rent' : 'Sale'}</p>

        {listing.offer && (
          <p className="discountedPrice">
            ${listing.regularPrice - listing.discountedPrice} discount
          </p>
        )}

        <ul className="listingDetailsList">
          <li>{listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : `1 Bedroom`}</li>
          <li>{listing.bathroom > 1 ? `${listing.bathroom} Bathrooms` : `1 Bathroom`}</li>
          <li>{listing.parking && 'Parking Sopt'}</li>
          <li>{listing.furnished && 'Parking Sopt'}</li>
          <p className="listingLocationTitle">Location</p>

          <div className="leafletContainer">
            <MapContainer
              center={[listing.geolocation.lat, listing.geolocation.lng]}
              zoom={13}
              style={{ height: '100%', width: '100%' }}

              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[listing.geolocation.lat, listing.geolocation.lng]}>
                <Popup>{listing.location}</Popup>

              </Marker>
            </MapContainer>
          </div>

          {auth.currentUser?.uid !== listing.userRef && (
            <Link
              to={`/contact/${listing.userRef}?listingName=${listing.name}`}
              className="primaryButton"
            >
              Contact Landlord
            </Link>
          )}
        </ul>
      </div>
    </main>
  );
}

export default Listing;
