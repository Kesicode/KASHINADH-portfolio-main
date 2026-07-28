import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../data/portfolio';

const Work = () => (
  <section id="work" style={{ padding: '120px 5%', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
    <div style={{ maxWidth: '1250px', margin: '0 auto' }}>
      <span className="sketch-text" style={{ color: 'var(--accent-color)', fontSize: '1.2rem' }}>// selected systems</span>
      <h2 style={{ fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: .9, margin: '18px 0 55px' }}>WHAT I BUILD</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(245px, 1fr))', gap: '18px' }}>
        {categories.map((category, index) => (
          <motion.div key={category.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -10 }}>
            <Link to={`/works/${category.id}`} style={{ display: 'flex', minHeight: '310px', padding: '28px', textDecoration: 'none', color: 'inherit', border: `1px solid ${category.color}55`, borderRadius: '22px', background: `linear-gradient(145deg, ${category.color}20, transparent 65%)`, flexDirection: 'column', justifyContent: 'space-between' }}>
              <span style={{ color: category.color, fontWeight: 800, letterSpacing: '2px' }}>{category.number}</span>
              <div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', lineHeight: 1, marginBottom: '16px' }}>{category.title}</h3>
                <p style={{ color: 'var(--muted-text)', lineHeight: 1.6 }}>{category.description}</p>
              </div>
              <span style={{ color: category.color, fontWeight: 700 }}>VIEW PROJECTS →</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
