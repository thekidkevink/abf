"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Waves } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["About", "Products", "Fleet", "Sustainability", "Gallery", "News", "Careers", "Contact"];

export function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setVisible(false), 1450); return () => clearTimeout(timer); }, []);
  return <AnimatePresence>{visible && <motion.div className="preloader" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .65 } }}><motion.div initial={{ scale: .9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: .7 }}><p className="pre-brand">ABF</p><p className="pre-copy">FISHERIES</p><span className="load-line" /></motion.div></motion.div>}</AnimatePresence>;
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const listener = () => setScrolled(scrollY > 24); addEventListener("scroll", listener); return () => removeEventListener("scroll", listener); }, []);
  return <header className={`header ${scrolled ? "header-solid" : ""}`}><Link className="logo" href="/"><span>ABF</span><small>FISHERIES</small></Link><nav>{links.map((link) => <Link key={link} href={`/${link.toLowerCase()}`}>{link}</Link>)}</nav><Link className="header-contact" href="/contact">Enquire <ArrowUpRight size={15}/></Link><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button><AnimatePresence>{menuOpen && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>{links.map((link) => <Link onClick={() => setMenuOpen(false)} key={link} href={`/${link.toLowerCase()}`}>{link}</Link>)}</motion.div>}</AnimatePresence></header>;
}

export function Footer() { return <footer><div className="footer-top"><div><p className="logo"><span>ABF</span><small>FISHERIES</small></p><p>Namibian excellence, responsibly delivered to global markets.</p></div><div><p className="eyebrow">Contact</p><a href="mailto:info@abffisheries.com">info@abffisheries.com</a><a href="tel:+264000000000">+264 00 000 0000</a></div><div><p className="eyebrow">Head Office</p><p>Walvis Bay Harbour<br/>Namibia</p></div><div><p className="eyebrow">Follow</p><a href="#">LinkedIn</a><a href="#">Instagram</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ABF Fisheries. All rights reserved.</span><span>Built for the ocean.</span></div></footer> }

export function SiteShell({ children }: { children: React.ReactNode }) { return <><Preloader/><Header/>{children}<Footer/></>; }
