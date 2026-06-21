/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Document, Page, View, Text, StyleSheet, Link } from '@react-pdf/renderer';
import { cvData } from './cv-data';

// ── Design tokens ────────────────────────────────────────────────────────────
const tokens = {
  ink: '#0b0c0e',
  text: '#1f2024',
  dim: '#5b5f66',
  mute: '#8a8e95',
  rule: '#e6e7ea',
  accent: '#0891b2', // cyan-600 — print-safe accent
  bg: '#ffffff',
};

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: tokens.text,
    backgroundColor: tokens.bg,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 40,
    lineHeight: 1.45,
  },

  // Header
  headerRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  headerLeft: { width: '62%', paddingRight: 16 },
  headerRight: { width: '38%' },
  name: { fontSize: 24, fontFamily: 'Helvetica-Bold', color: tokens.ink, letterSpacing: -0.4 },
  role: { fontSize: 10, color: tokens.accent, marginTop: 3, fontFamily: 'Helvetica-Bold' },
  rightBlock: { textAlign: 'right' },
  contactLabel: {
    fontSize: 7,
    color: tokens.mute,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.4,
    marginBottom: 5,
    textAlign: 'right',
  },
  contactLine: { fontSize: 8.5, color: tokens.dim, marginBottom: 2.5, textAlign: 'right' },
  link: { color: tokens.accent, textDecoration: 'none' },

  hr: { borderBottomWidth: 0.6, borderBottomColor: tokens.rule, marginTop: 12, marginBottom: 14 },

  // Section heading
  sectionLabel: {
    fontSize: 7.5,
    color: tokens.mute,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.8,
    marginBottom: 6,
  },
  sectionTitle: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: tokens.ink, marginBottom: 8 },

  // Summary
  summary: { fontSize: 9.5, color: tokens.text, lineHeight: 1.5 },

  // Stats row
  statsRow: { flexDirection: 'row', marginTop: 14, marginBottom: 4 },
  stat: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderLeftWidth: 1.5,
    borderLeftColor: tokens.accent,
    marginRight: 8,
  },
  statValue: { fontSize: 14, fontFamily: 'Helvetica-Bold', color: tokens.ink },
  statLabel: { fontSize: 7.5, color: tokens.dim, marginTop: 2, textTransform: 'uppercase', letterSpacing: 0.8 },

  // Skills grid
  skillGrid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  skillCell: { width: '50%', paddingHorizontal: 5, marginBottom: 8 },
  skillTitle: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: tokens.ink, marginBottom: 2 },
  skillDes: { fontSize: 8.5, color: tokens.dim, lineHeight: 1.45 },

  // Experience
  expItem: { marginBottom: 11 },
  expHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  expCompany: { fontSize: 10.5, fontFamily: 'Helvetica-Bold', color: tokens.ink },
  expPeriod: { fontSize: 8, color: tokens.mute, fontFamily: 'Helvetica-Oblique' },
  expRole: { fontSize: 9, color: tokens.accent, marginTop: 1, marginBottom: 5 },
  bullet: { flexDirection: 'row', marginBottom: 2, paddingRight: 4 },
  bulletDot: { width: 8, fontSize: 9, color: tokens.accent, fontFamily: 'Helvetica-Bold' },
  bulletText: { flex: 1, fontSize: 9, color: tokens.text, lineHeight: 1.45 },

  // Highlights bullets
  hlBullet: { flexDirection: 'row', marginBottom: 3.5, paddingRight: 4 },

  // Footer
  footer: {
    position: 'absolute',
    bottom: 18,
    left: 40,
    right: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 7.5,
    color: tokens.mute,
    paddingTop: 8,
    borderTopWidth: 0.4,
    borderTopColor: tokens.rule,
  },

  // Sidebar layout helpers
  twoCol: { flexDirection: 'row', marginTop: 4 },
  colMain: { flex: 1.6, paddingRight: 16 },
  colSide: { flex: 1 },

  badge: {
    fontSize: 7.5,
    color: tokens.accent,
    fontFamily: 'Helvetica-Bold',
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderWidth: 0.5,
    borderColor: tokens.accent,
    borderRadius: 2,
    alignSelf: 'flex-start',
  },
});

const Section = ({ index, title, children }) => (
  <View style={{ marginBottom: 14 }}>
    <Text style={styles.sectionLabel}>{`${index} — ${title.toUpperCase()}`}</Text>
    <View style={{ borderBottomWidth: 0.6, borderBottomColor: tokens.rule, marginBottom: 8 }} />
    {children}
  </View>
);

const Bullet = ({ text }) => (
  <View style={styles.bullet}>
    <Text style={styles.bulletDot}>▸</Text>
    <Text style={styles.bulletText}>{text}</Text>
  </View>
);

const CvDocument = () => {
  const { name, role, tagline, summary, contact, availability, stats, highlights, skills, experience } = cvData;

  return (
    <Document
      title={`${name} — CV`}
      author={name}
      subject="Resume"
      creator="naveen-dudhyal.vercel.app"
      producer="naveen-dudhyal.vercel.app"
    >
      <Page size="A4" style={styles.page}>
        {/* ── Header ───────────────────────────────────────────────────── */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.role}>{role}</Text>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.badge}>{availability}</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.contactLabel}>CONTACT</Text>
            <Text style={styles.contactLine}>
              <Link src={`mailto:${contact.email}`} style={styles.link}>
                {contact.email}
              </Link>
            </Text>
            <Text style={styles.contactLine}>{contact.phone}</Text>
            <Text style={styles.contactLine}>{contact.location}</Text>
            <Text style={styles.contactLine}>
              <Link src={`https://${contact.website}`} style={styles.link}>
                {contact.website}
              </Link>
            </Text>
            <Text style={styles.contactLine}>
              <Link src={`https://${contact.linkedin}`} style={styles.link}>
                {contact.linkedin}
              </Link>
            </Text>
          </View>
        </View>

        <View style={styles.hr} />

        {/* ── Summary ──────────────────────────────────────────────────── */}
        <Section index="01" title="Summary">
          <Text style={[styles.summary, { color: tokens.accent, marginBottom: 5, fontFamily: 'Helvetica-Oblique' }]}>
            {tagline}
          </Text>
          <Text style={styles.summary}>{summary}</Text>
        </Section>

        {/* ── Highlights / Stats ───────────────────────────────────────── */}
        <Section index="02" title="Snapshot">
          <View style={styles.statsRow}>
            {stats.map((s, i) => (
              <View key={i} style={styles.stat}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))}
          </View>
        </Section>

        {/* ── Capabilities (Skills) ────────────────────────────────────── */}
        <Section index="03" title="Capabilities">
          <View style={styles.skillGrid}>
            {skills.map((s, i) => (
              <View key={i} style={styles.skillCell}>
                <Text style={styles.skillTitle}>{s.title}</Text>
                <Text style={styles.skillDes}>{s.des}</Text>
              </View>
            ))}
          </View>
        </Section>

        {/* ── Experience ───────────────────────────────────────────────── */}
        <Section index="04" title="Experience">
          {experience.map((exp, i) => (
            <View key={i} style={styles.expItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.expCompany}>{exp.title}</Text>
                <Text style={styles.expPeriod}>{exp.period}</Text>
              </View>
              <Text style={styles.expRole}>{exp.role}</Text>
              {exp.achievements.map((a, j) => (
                <Bullet key={j} text={a} />
              ))}
            </View>
          ))}
        </Section>

        {/* ── Highlights ───────────────────────────────────────────────── */}
        <Section index="05" title="What I deliver">
          {highlights.map((h, i) => (
            <View key={i} style={styles.hlBullet}>
              <Text style={styles.bulletDot}>▸</Text>
              <Text style={styles.bulletText}>{h}</Text>
            </View>
          ))}
        </Section>

        {/* ── Footer ───────────────────────────────────────────────────── */}
        <View style={styles.footer} fixed>
          <Text>{name}  ·  {role}</Text>
          <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
        </View>
      </Page>
    </Document>
  );
};

export default CvDocument;
