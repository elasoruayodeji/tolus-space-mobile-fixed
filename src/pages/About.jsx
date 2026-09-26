import { about, site, contact } from '../data/content';
import SectionReveal from '../components/SectionReveal';
import Button from '../components/Button';
import Seo from '../components/Seo';

export default function About() { return <main><Seo title="About" description="Learn about Tolu's Space, a considered short-let in Soluyi, Gbagada." /><section className="section container"><SectionReveal><p className="eyebrow">The story</p><h1 className="page-title">A quiet stay, considered down to the details.</h1></SectionReveal><div className="about-copy"><SectionReveal delay={.08}><p className="lead">{about.story}</p></SectionReveal><SectionReveal delay={.16}><div className="about-panels"><div><p className="eyebrow">Managed by</p><p>{about.team}</p></div><div><p className="eyebrow">The promise</p><p>{site.tagline}</p></div><div><p className="eyebrow">Values</p><div className="value-list">{about.values.map(v => <span key={v}>{v}</span>)}</div></div></div></SectionReveal></div><div style={{marginTop:'var(--space-7)'}}><Button href={contact.whatsapp.nigeria.link} icon="phone">Talk to the host</Button></div></section></main>; }
