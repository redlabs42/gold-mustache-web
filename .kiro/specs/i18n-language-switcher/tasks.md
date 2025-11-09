# Implementation Plan

- [x] 1. Setup i18n infrastructure
  - Install next-intl dependency
  - Create i18n directory structure (config.ts, request.ts, locales/)
  - Configure middleware for locale detection and routing
  - Setup TypeScript types for locales
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 2. Create translation files structure
  - [x] 2.1 Create pt-BR baseline translations
    - Create common.json with buttons, labels, and ARIA strings
    - Create navigation.json with menu items
    - Create services.json with all service names and descriptions
    - Create hero.json with hero section content
    - Create contact.json with contact section strings
    - Create metadata.json with SEO strings
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 2.2 Create Spanish (es) translations
    - Translate all JSON files from pt-BR to Spanish
    - Ensure cultural appropriateness for Spanish-speaking audience
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [x] 2.3 Create English (en) translations
    - Translate all JSON files from pt-BR to English
    - Use professional barbershop terminology
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 3. Implement Language Switcher component
  - [x] 3.1 Create base LanguageSwitcher component
    - Build dropdown UI with flag emojis and language codes
    - Implement desktop variant (compact button style)
    - Implement mobile variant (full-width menu item)
    - Add framer-motion animations for smooth transitions
    - Ensure accessibility (ARIA labels, keyboard navigation)
    - _Requirements: 1.1, 1.3, 1.4, 4.2, 4.5_

  - [x] 3.2 Implement locale switching logic
    - Add click handlers to update locale
    - Implement navigation to new locale URL
    - Add visual feedback for current selected language
    - _Requirements: 1.2, 1.4_

  - [x] 3.3 Implement persistence layer
    - Save language preference to localStorage on change
    - Load saved preference on component mount
    - Handle localStorage unavailability gracefully
    - _Requirements: 1.5, 3.1, 3.2_

- [x] 4. Update app structure for locale routing
  - [x] 4.1 Refactor app directory to support [locale] dynamic segment
    - Move app/page.tsx to app/[locale]/page.tsx
    - Move app/layout.tsx to app/[locale]/layout.tsx
    - Update all route handlers to support locale parameter
    - _Requirements: 2.4, 3.3_

  - [x] 4.2 Integrate NextIntlClientProvider in layout
    - Wrap application with NextIntlClientProvider
    - Load and pass messages to provider
    - Update HTML lang attribute dynamically
    - _Requirements: 2.5, 3.4_

  - [x] 4.3 Update metadata generation for locales
    - Implement generateMetadata with locale support
    - Add localized title, description, and keywords
    - Update OpenGraph and Twitter card metadata
    - Add hreflang alternate links
    - _Requirements: 3.5_

- [x] 5. Integrate LanguageSwitcher into Header
  - [x] 5.1 Add LanguageSwitcher to desktop header
    - Position next to ThemeToggle in desktop navigation
    - Ensure consistent spacing and alignment
    - _Requirements: 1.3, 4.2_

  - [x] 5.2 Add LanguageSwitcher to mobile menu
    - Add to mobile Sheet menu in logical position
    - Implement menu close behavior after language selection
    - Ensure touch-friendly sizing (44x44px minimum)
    - _Requirements: 4.1, 4.3, 4.4, 4.5_

- [x] 6. Migrate content to use translations
  - [x] 6.1 Update Header component
    - Replace hardcoded navigation labels with useTranslations
    - Update button labels (Agendar, Instagram)
    - Update ARIA labels and screen reader text
    - _Requirements: 5.1, 5.2_

  - [x] 6.2 Update ServicesSection component
    - Integrate translation hook for service titles and descriptions
    - Map SERVICES array IDs to translation keys
    - Maintain existing styling and layout
    - _Requirements: 5.3_

  - [x] 6.3 Update HeroSection component
    - Replace static text with translated strings
    - Update call-to-action button text
    - _Requirements: 5.5_

  - [x] 6.4 Update ContactSection component
    - Translate section headings and labels
    - Update contact form placeholders if present
    - _Requirements: 5.4_

  - [x] 6.5 Update remaining sections
    - Translate InstagramSection labels
    - Translate EventsSection content
    - Translate SponsorsSection headings
    - Translate Footer content
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 7. Update constants and configuration
  - [x] 7.1 Refactor SERVICES constant
    - Keep SERVICES array structure for IDs and static data (price, duration)
    - Remove hardcoded name and description strings
    - Document translation key mapping pattern
    - _Requirements: 5.3_

  - [x] 7.2 Update BRAND constant if needed
    - Identify any user-facing strings in BRAND constant
    - Move translatable strings to translation files
    - _Requirements: 5.1, 5.2_

- [x] 8. Implement sitemap and SEO enhancements
  - Update sitemap.ts to generate URLs for all locales
  - Ensure robots.txt allows all locale paths
  - Verify hreflang implementation
  - _Requirements: 3.5_

- [x] 9. Manual testing and validation
  - Test language switching on desktop (all 3 languages)
  - Test language switching on mobile (all 3 languages)
  - Verify persistence across page reloads
  - Check all sections render correctly in each language
  - Validate HTML lang attribute updates
  - Test with screen readers for accessibility
  - Verify no FOUC (Flash of Untranslated Content)
  - Check URL structure (/pt-BR, /es, /en)
  - _Requirements: 1.1, 1.2, 1.3, 1.5, 3.1, 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 4.3, 4.4, 4.5, 5.1, 5.2, 5.3, 5.4, 5.5_
