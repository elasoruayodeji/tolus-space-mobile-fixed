import { site, contact } from '../data/content';
import SectionReveal from '../components/SectionReveal';
import Location from '../components/Location';
import Button from '../components/Button';
import Icon from '../components/Icons';
import Seo from '../components/Seo';
import './contact.css';

export default function Contact() {
  return <main>
    <Seo title="Contact" description="Contact Tolu's Space in Soluyi, Gbagada, Lagos." />
    <section className="section container">
      <SectionReveal>
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Ready when you are.</h1>
        <p className="lead">For availability, nightly rates, extended stays or any questions about the apartment, contact the host directly.</p>
      </SectionReveal>
      <SectionReveal delay={.08}>
        <div className="contact-grid">
          <a href={`tel:${site.phoneE164}`}><Icon name="phone" /><span><small>Phone</small><strong>{site.phoneDisplay}</strong></span></a>
          <a href={contact.whatsapp.uk.link}><Icon name="phone" /><span><small>WhatsApp · UK</small><strong>{contact.whatsapp.uk.number}</strong></span></a>
          <a href={contact.whatsapp.nigeria.link}><Icon name="phone" /><span><small>WhatsApp · Nigeria</small><strong>{contact.whatsapp.nigeria.number}</strong></span></a>
          <div><Icon name="pin" /><span><small>Address</small><strong>{site.address}</strong></span></div>
        </div>
      </SectionReveal>
      <SectionReveal delay={.16}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <Button href={contact.whatsapp.uk.link} icon="phone">WhatsApp · UK</Button>
          <Button href={contact.whatsapp.nigeria.link} icon="phone">WhatsApp · Nigeria</Button>
        </div>
      </SectionReveal>
    </section>
    <section className="section section--tight">
      <div className="container"><SectionReveal><Location /></SectionReveal></div>
    </section>
  </main>;
}
