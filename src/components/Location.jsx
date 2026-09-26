import { site } from '../data/content';
import Icon from './Icons';
import './location.css';

export default function Location() {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapsQuery)}&output=embed`;
  return <div className="location-grid">
    <div className="location-copy"><p className="eyebrow">Location</p><h2>Close to the city, tucked away from the noise.</h2><p>{site.address}</p><a className="location-link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`} target="_blank" rel="noreferrer"><Icon name="pin" size={18} /> Open in Google Maps <Icon name="external" size={16} /></a></div>
    <div className="map-frame"><iframe title="Tolu's Space location map" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
  </div>;
}
