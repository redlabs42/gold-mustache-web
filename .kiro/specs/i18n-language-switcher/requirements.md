# Requirements Document

## Introduction

Este documento especifica os requisitos para implementar internacionalização (i18n) no site Gold Mustache Barbearia, permitindo que usuários alternem entre Português Brasileiro, Espanhol e Inglês através de um seletor de idioma no header.

## Glossary

- **i18n System**: Sistema de internacionalização que gerencia traduções e locale do aplicativo
- **Language Switcher**: Componente UI que permite ao usuário selecionar o idioma preferido
- **Locale**: Código de idioma/região (pt-BR, es, en)
- **Translation Keys**: Chaves únicas que mapeiam para strings traduzidas
- **Header Component**: Componente de navegação principal localizado no topo do site
- **Persistent Storage**: Armazenamento local (localStorage/cookies) para manter preferência do usuário

## Requirements

### Requirement 1

**User Story:** Como visitante do site, quero selecionar meu idioma preferido (Português, Espanhol ou Inglês) através de um botão no header, para que eu possa navegar no site no idioma de minha escolha

#### Acceptance Criteria

1. WHEN the user clicks on the language switcher button, THE i18n System SHALL display a dropdown menu with three language options: Português (Brasil), Español, and English
2. WHEN the user selects a language from the dropdown, THE i18n System SHALL update all visible text content to the selected language within 300 milliseconds
3. THE Language Switcher SHALL be visible in both desktop and mobile header layouts
4. THE Language Switcher SHALL display the current selected language using a flag icon or language code (PT, ES, EN)
5. WHEN the user changes the language, THE i18n System SHALL persist the language preference in browser storage

### Requirement 2

**User Story:** Como desenvolvedor, quero uma estrutura de tradução organizada e escalável, para que seja fácil adicionar e manter traduções em múltiplos idiomas

#### Acceptance Criteria

1. THE i18n System SHALL organize translation files in a structured directory format under `src/locales/{locale}/`
2. THE i18n System SHALL support namespaced translation keys for different sections (common, navigation, services, contact)
3. THE i18n System SHALL provide TypeScript type safety for translation keys
4. THE i18n System SHALL load only the active language translations to optimize bundle size
5. THE i18n System SHALL provide a hook or utility function for accessing translations in React components

### Requirement 3

**User Story:** Como visitante recorrente, quero que o site lembre minha preferência de idioma, para que eu não precise selecionar o idioma toda vez que visito

#### Acceptance Criteria

1. WHEN the user selects a language, THE Persistent Storage SHALL save the preference in localStorage
2. WHEN the user returns to the site, THE i18n System SHALL automatically load the previously selected language
3. IF no language preference exists in storage, THEN THE i18n System SHALL default to Portuguese (pt-BR)
4. THE i18n System SHALL update the HTML lang attribute to match the selected locale
5. THE i18n System SHALL update metadata and SEO tags to reflect the current language

### Requirement 4

**User Story:** Como usuário mobile, quero acessar o seletor de idioma facilmente no menu mobile, para que eu possa trocar o idioma em qualquer dispositivo

#### Acceptance Criteria

1. THE Language Switcher SHALL be accessible in the mobile Sheet menu
2. THE Language Switcher SHALL maintain consistent styling between desktop and mobile views
3. WHEN the user selects a language in mobile view, THE i18n System SHALL close the mobile menu after language change
4. THE Language Switcher SHALL be positioned logically within the mobile menu layout
5. THE Language Switcher SHALL be touch-friendly with minimum 44x44px tap target

### Requirement 5

**User Story:** Como proprietário do site, quero que todas as seções principais sejam traduzidas, para que visitantes internacionais possam entender os serviços oferecidos

#### Acceptance Criteria

1. THE i18n System SHALL translate navigation menu items (Início, Serviços, Instagram, Eventos, Contato, Patrocinadores)
2. THE i18n System SHALL translate all button labels (Agendar, Seguir no Instagram, etc.)
3. THE i18n System SHALL translate service descriptions and titles
4. THE i18n System SHALL translate contact section content
5. THE i18n System SHALL translate hero section content and call-to-action messages
