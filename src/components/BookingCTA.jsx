import { site, contact } from '../data/content';
import Button from './Button';
import './booking.css';

export default function BookingCTA() {
  const rateText = site.nightlyRate ? `${site.rateCurrency}${site.nightlyRate.toLocaleString()} per night` : 'Rate available on request';
  return <section className="booking-card">
    <div><p className="eyebrow">Book your stay</p><h2>Make space for a slower Lagos stay.</h2><p>{site.rateNote}</p></div>
    <div className="booking-card__side">
      <div className="booking-card__rate"><span>From</span><strong>{rateText}</strong></div>
      <div className="booking-card__actions">
        <Button href={contact.whatsapp.uk.link} icon="phone">WhatsApp · UK</Button>
        <Button href={contact.whatsapp.nigeria.link} icon="phone">WhatsApp · Nigeria</Button>
      </div>
      <small>{site.bookingFootnote}</small>
    </div>
  </section>;
}
