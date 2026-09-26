import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { about, gallery, site } from '../data/content';
import SectionReveal from '../components/SectionReveal';
import GalleryGrid from '../components/GalleryGrid';
import Amenities from '../components/Amenities';
import Location from '../components/Location';
import BookingCTA from '../components/BookingCTA';
import Button from '../components/Button';
import Seo from '../components/Seo';
import './home.css';

export default function Home() {
  return <>
    <Seo description={site.subheadline} />
    <main>
      <section className="hero container">
        <div className="hero__copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }}>Tolu's Space · Soluyi, Gbagada</motion.p>
          <motion.h1 className="display" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }}>{site.headline}</motion.h1>
          <motion.p className="hero__sub" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .27, duration: .7 }}>{site.subheadline}</motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .36 }}><Button to="/gallery">Explore the space</Button></motion.div>
        </div>
        <motion.div className="hero__image" initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9, ease: [0.2,.8,.2,1] }}>
          <img src={`/images/${site.heroImage}`} alt="Master bedroom TV wall at Tolu's Space" fetchPriority="high" />
          <span className="hero__tag">2 Bedrooms · Fully Serviced</span>
        </motion.div>
      </section>

      <section className="section container intro"><SectionReveal><div className="intro__grid"><p className="eyebrow">A place to exhale</p><p className="intro__text">{about.intro}</p></div></SectionReveal></section>

      <section className="section section--tight container"><SectionReveal><div className="section-head"><div><p className="eyebrow">The space</p><h2>Designed to feel good from the moment you arrive.</h2></div><Link className="text-link" to="/gallery">View all 10 photos <span>↗</span></Link></div></SectionReveal><SectionReveal delay={.08}><GalleryGrid preview /></SectionReveal></section>

      <section className="section container"><SectionReveal><div className="section-head section-head--simple"><div><p className="eyebrow">Amenities</p><h2>Everything you need, thoughtfully in place.</h2></div></div></SectionReveal><SectionReveal delay={.08}><Amenities /></SectionReveal></section>

      <section className="section section--tight"><div className="container"><SectionReveal><Location /></SectionReveal></div></section>

      <section className="section container"><SectionReveal><BookingCTA /></SectionReveal></section>
    </main>
  </>;
}
