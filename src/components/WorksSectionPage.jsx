import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { categories, projectsByCategory } from '../data/portfolio';

const WorksSectionPage = ({ isStudio, toggleStudio, isSadMode, isPlaying }) => {
  const { sectionId } = useParams();
  const category = categories.find((item) => item.id === sectionId);
  const projects = projectsByCategory[sectionId] || [];
  useEffect(() => window.scrollTo(0, 0), [sectionId]);
  if (!category) return <div><Navbar isStudio={isStudio} toggleStudio={toggleStudio} isSadMode={isSadMode} isPlaying={isPlaying} /><main style={{ minHeight: '70vh', padding: '180px 5%' }}><h1>Collection not found</h1><Link to="/works">Back to projects</Link></main></div>;
  return <div style={{ minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
    <Navbar isStudio={isStudio} toggleStudio={toggleStudio} isSadMode={isSadMode} isPlaying={isPlaying} />
    <main style={{ padding: '145px 6% 100px', maxWidth: '1280px', margin: '0 auto' }}>
      <Link to="/works" style={{ color: category.color, fontWeight: 800, textDecoration: 'none' }}>← ALL PROJECTS</Link>
      <motion.header initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} style={{ padding: '55px 0 45px', borderBottom: `1px solid ${category.color}55` }}><span style={{ color: category.color, letterSpacing: '3px', fontWeight: 800 }}>{category.number} / {category.subtitle.toUpperCase()}</span><h1 style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: .9, margin: '16px 0 22px' }}>{category.title}</h1><p style={{ maxWidth: '650px', fontSize: '1.15rem', color: 'var(--muted-text)', lineHeight: 1.7 }}>{category.description}</p></motion.header>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', paddingTop: '42px' }}>{projects.map((project, index) => <motion.article key={project.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} style={{ border: '1px solid rgba(127,127,127,.22)', borderRadius: '18px', padding: '28px', background: 'var(--card-bg)' }}><span style={{ color: category.color, fontWeight: 800 }}>PROJECT {String(index + 1).padStart(2, '0')}</span><h2 style={{ fontSize: '1.8rem', margin: '18px 0 12px' }}>{project.title}</h2><p style={{ color: 'var(--muted-text)', lineHeight: 1.65 }}>{project.description}</p><p style={{ marginTop: '24px', fontSize: '.8rem', opacity: .7 }}>Case-study details, media, repository, and demo links are being prepared.</p></motion.article>)}</section>
    </main><Footer />
  </div>;
};
export default WorksSectionPage;
