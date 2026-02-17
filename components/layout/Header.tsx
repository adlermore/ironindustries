'use client'
import { useContext, useEffect, useState, useRef } from 'react'
import { Twirl as Hamburger } from 'hamburger-react'
import "@/styles/header.scss"
import { usePathname, useRouter } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import api from '@/utils/api';
import { JsonContext } from '@/context/JsonContext';
import logo from '@/public/images/logo.png'
import Image from 'next/image';
import armFlag from '@/public/images/flags/armFlag.webp';
import ruFlag from '@/public/images/flags/ruFlag.webp';
import enFlag from '@/public/images/flags/enFlag.webp';
import IconLocation from '../Icons/IconLocation';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { contacts, setContacts } = useContext(JsonContext);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const headerTopRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split('/')[1];

  // Navigation items
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/services', label: 'Services' },
    { href: '/calculate', label: 'Calculate' },
    { href: '/contact', label: 'Contact' },
  ];

  // Language options
  const languages = [
    { code: 'en', label: 'EN', fullName: 'English', flag: enFlag },
    { code: 'ru', label: 'RU', fullName: 'Русский', flag: ruFlag },
    { code: 'hy', label: 'HY', fullName: 'Հայերեն', flag: armFlag },
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLocale) || languages[0];

  const switchLocale = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    const newPath = segments.join('/') || '/';
    router.replace(newPath);
    setIsLangDropdownOpen(false);
  };

  // Check if link is active
  const isActiveLink = (href: string) => {
    const pathWithoutLocale = '/' + pathname.split('/').slice(2).join('/');
    if (href === '/') {
      return pathWithoutLocale === '' || pathWithoutLocale === '/';
    }
    return pathWithoutLocale.startsWith(href);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const headerTopHeight = headerTopRef.current?.offsetHeight || 40;
      if (window.scrollY > headerTopHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add('menu_opened');
    } else {
      document.body.classList.remove('menu_opened');
      document.body.style.overflow = "visible";
    }
  }, [isOpen, pathname]);

  useEffect(() => {
    setOpen(false);
    setIsLangDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    return
    async function getContacts() {
      try {
        const data = await api.get("/getContacts");
        setContacts(data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }
    if (!contacts) getContacts();
  }, []);

  return (
    <header className='header'>
      {/* Top Header - Not Sticky */}
      <div className='header_top' ref={headerTopRef}>
        <div className='custom_container'>
          <div className='flex items-center gap-5'>
            <Link href='/'>
              <IconLocation />
            </Link>
            <span>Working Hours 10:00-18:00</span>
          </div>
          <Link href="tel:+1234567890">+374 00 00 00 00</Link>
        </div>
      </div>

      {/* Bottom Header - Sticky with Glassmorphism Effect */}
      <div className={`header_bottom ${isScrolled ? 'scrolled' : ''}`}>
        <div className='custom_container'>
          <div className='header_inner'>
            {/* Logo */}
            <div className='header_logo'>
              <Link href='/' className='z-20'>
                <Image src={logo} alt='IRon Industries' width={150} height={50} priority />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className='desktop_menu'>
              <ul className='nav_list'>
                {navItems.map((item) => (
                  <li key={item.href} className='nav_item'>
                    <Link
                      href={item.href}
                      className={`nav_link ${isActiveLink(item.href) ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Language Dropdown - Desktop */}
            <div className='language_dropdown desktop_lang' ref={langDropdownRef}>
              <button
                className='lang_dropdown_btn'
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              >
                <span className='lang_flag'>
                  <Image
                    src={currentLanguage.flag}
                    alt={currentLanguage.label}
                    width={20}
                    height={15}
                  />
                </span>
                <span className='lang_current'>{currentLanguage.label}</span>
                <svg
                  className={`lang_arrow ${isLangDropdownOpen ? 'open' : ''}`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {isLangDropdownOpen && (
                <div className='lang_dropdown_menu'>
                  {languages
                    .filter(lang => lang.code !== currentLocale)
                    .map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLocale(lang.code)}
                        className='lang_dropdown_item flex items-center gap-2'
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.label}
                          width={20}
                          height={15}
                        />
                        {lang.label}
                      </button>
                    ))}
                </div>
              )}
            </div>

            {/* Hamburger Menu - Mobile/Tablet */}
            <div className="hamburger_block">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={22}
                direction='right'
                color="#fff"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${isOpen ? 'open' : ''}`}>
        <nav className='mobile_nav'>
          <ul className='mobile_nav_list'>
            {navItems.map((item) => (
              <li key={item.href} className='mobile_nav_item'>
                <Link
                  href={item.href}
                  className={`mobile_nav_link ${isActiveLink(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Dropdown - Mobile */}
          <div className='language_dropdown mobile_lang'>
            <button
              className='lang_dropdown_btn'
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            >
              <span className='lang_flag'>
                <Image
                  src={currentLanguage.flag}
                  alt={currentLanguage.label}
                  width={20}
                  height={15}
                />
              </span>
              <span className='lang_current'>{currentLanguage.label}</span>

              <svg
                className={`lang_arrow ${isLangDropdownOpen ? 'open' : ''}`}
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className='lang_dropdown_menu'>
                {languages
                  .filter(lang => lang.code !== currentLocale)
                  .map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => switchLocale(lang.code)}
                      className='lang_dropdown_item'
                    >
                      {lang.label}
                    </button>
                  ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className='menu_overlay' onClick={() => setOpen(false)} />}
    </header>
  )
}

export default Header