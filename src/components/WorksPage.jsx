import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { categories } from '../data/portfolio';
import './WorksPage.css';

const WorksPage = ({ isStudio, toggleStudio, isSadMode, isPlaying }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return <div className={`works-page-container ${isStudio ? 'studio-mode' : ''}`}>
    <Navbar isStudio={isStudio} toggleStudio={toggleStudio} isSadMode={isSadMode} isPlaying={isPlaying} />
    <main>
      <header className="works-hero"><span className="sketch-text" style={{ color: 'var(--accent-color)' }}>// portfolio index</span><h1>PROJECT<br />SYSTEMS</h1><p>Full stack products, AI experiments, embedded systems, and interfaces designed to solve real problems.</p></header>
      <section className="works-bento-grid">
        {categories.map((category, i) => <motion.div key={category.id} className={`works-bento-card ${i === 0 ? 'works-card-large' : i === 2 ? 'works-card-tall' : 'works-card-medium'}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
          <div className="works-bento-overlay" style={{ background: `linear-gradient(145deg, ${category.color}cc, rgba(0,0,0,.78))` }} />
          <div className="works-bento-info" style={{ transform: 'translateY(0)' }}><span className="works-bento-number" style={{ opacity: 1, transform: 'none', color: '#fff' }}>{category.number}</span><h2 className="works-bento-title">{category.title}</h2><p className="works-bento-category">{category.subtitle}</p><p style={{ color: 'rgba(255,255,255,.82)', lineHeight: 1.6 }}>{category.description}</p><Link to={`/works/${category.id}`} style={{ color: '#fff', marginTop: '22px', fontWeight: 800, letterSpacing: '1px' }}>OPEN COLLECTION →</Link></div>
        </motion.div>)}
      </section>
    </main>
    <Footer />
  </div>;
};
export default WorksPage;
