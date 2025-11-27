# FAQ Section - Design Document

## Overview

The FAQ Section feature provides a responsive, accessible, and multilingual frequently asked questions interface for the Gold Mustache barbershop website. The design leverages the existing Next.js 15 App Router architecture, next-intl internationalization system, and shadcn/ui component library to create a cohesive user experience that matches the established design patterns.

The FAQ section will be implemented as a new section component that can be integrated into the main landing page, positioned strategically after the services section and before the testimonials section to address customer concerns before they see social proof.

## Architecture

### Component Hierarchy

```
FAQSection (Client Component)
├── Section Container
│   ├── Section Header
│   │   ├── Badge (with HelpCircle icon)
│   │   ├── Title (h2)
│   │   └── Description
│   └── FAQ Grid/List
│       └── FAQAccordion (Custom Component)
│           └── FAQItem[] (Accordion Items)
│               ├── Trigger (Question)
│               └── Content (Answer)
```

### Data Flow

1. **Translation Loading**: FAQ content is loaded from JSON files in `src/i18n/locales/{locale}/faq.json`
2. **Component Rendering**: `FAQSection` uses `useTranslations('faq')` hook to access localized content
3. **State Management**: Accordion state is managed locally using React state (multiple items can be open)
4. **Locale Switching**: When locale changes, next-intl automatically re-renders with new translations

### File Structure

```
src/
├── components/
│   ├── sections/
│   │   └── FAQSection.tsx          # Main FAQ section component
│   └── ui/
│       └── accordion.tsx            # Reusable accordion component
├── i18n/
│   └── locales/
│       ├── pt-BR/
│       │   ├── faq.json            # Portuguese FAQ content
│       │   └── index.ts            # Export faq translations
│       ├── en/
│       │   ├── faq.json            # English FAQ content
│       │   └── index.ts
│       └── es/
│           ├── faq.json            # Spanish FAQ content
│           └── index.ts
└── app/
    └── [locale]/
        └── page.tsx                 # Import and render FAQSection
```

## Components and Interfaces

### 1. Accordion Component (`src/components/ui/accordion.tsx`)

A headless, accessible accordion component built with Radix UI primitives.

```typescript
interface AccordionProps {
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}
```

**Key Features:**
- Built on `@radix-ui/react-accordion` for accessibility
- Supports both single and multiple open items
- Keyboard navigation (Tab, Enter, Space, Arrow keys)
- ARIA attributes automatically handled
- Smooth expand/collapse animations using Tailwind

### 2. FAQ Section Component (`src/components/sections/FAQSection.tsx`)

The main section component that renders the FAQ interface.

```typescript
interface FAQSectionProps {
  className?: string;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'scheduling' | 'payment' | 'cancellation' | 'services';
}
```

**Responsibilities:**
- Load FAQ translations using `useTranslations('faq')`
- Render section header with badge, title, and description
- Map FAQ items to accordion components
- Handle responsive layout (single column mobile, two columns desktop)
- Apply consistent styling with existing sections

### 3. Translation Schema

Each locale's `faq.json` follows this structure:

```json
{
  "badge": "Perguntas Frequentes",
  "title": "Dúvidas? Temos as Respostas",
  "description": "Encontre respostas rápidas para as perguntas mais comuns sobre nossos serviços",
  "items": [
    {
      "id": "scheduling",
      "question": "Como faço para agendar um horário?",
      "answer": "Você pode agendar através do nosso app Inbarber..."
    }
  ]
}
```

## Data Models

### FAQ Item Model

```typescript
interface FAQItem {
  id: string;              // Unique identifier (e.g., "scheduling-1")
  question: string;        // The question text
  answer: string;          // The answer text (supports line breaks)
  category?: string;       // Optional category for grouping
}
```

### Translation Structure

```typescript
interface FAQTranslations {
  badge: string;           // Badge text (e.g., "FAQ")
  title: string;           // Section title
  description: string;     // Section description
  items: FAQItem[];        // Array of FAQ items
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property Reflection

After reviewing the prework analysis, several properties can be consolidated:

- Properties 2.3 and 2.4 (visual indicators for expanded/collapsed states) can be combined into a single property about state indicators
- Properties 5.4 and 5.5 (ARIA attributes for screen readers) can be combined into a comprehensive ARIA compliance property
- Properties 1.1 and 4.5 (displaying all items and item count validation) overlap and can be unified

The following properties provide unique validation value:

**Property 1: Complete FAQ rendering**
*For any* array of FAQ items between 6 and 12 items, when the FAQ section is rendered, all items from the input array should appear in the rendered output.
**Validates: Requirements 1.1, 4.5**

**Property 2: Locale-specific content rendering**
*For any* supported locale (pt-BR, en, es), when the FAQ section is rendered with that locale, all displayed text should match the translations from that locale's translation file.
**Validates: Requirements 1.2**

**Property 3: Accordion expand interaction**
*For any* collapsed FAQ item, when a user clicks on it, the item should transition to an expanded state revealing the answer content.
**Validates: Requirements 2.1**

**Property 4: Accordion collapse interaction**
*For any* expanded FAQ item, when a user clicks on it, the item should transition to a collapsed state hiding the answer content.
**Validates: Requirements 2.2**

**Property 5: State indicator consistency**
*For any* FAQ item, the visual indicator (icon rotation, aria-expanded attribute) should accurately reflect whether the item is currently expanded or collapsed.
**Validates: Requirements 2.3, 2.4**

**Property 6: Multiple simultaneous expansions**
*For any* set of FAQ items, when multiple items are expanded, all expanded items should remain open simultaneously without collapsing each other.
**Validates: Requirements 2.5**

**Property 7: Keyboard navigation sequence**
*For any* FAQ section with N items, when a user presses Tab repeatedly, focus should move through all N items in sequential order.
**Validates: Requirements 5.1**

**Property 8: Visible focus indicators**
*For any* FAQ item that receives keyboard focus, a visible focus indicator should be present and meet WCAG 2.1 AA contrast requirements.
**Validates: Requirements 5.2**

**Property 9: Keyboard toggle interaction**
*For any* focused FAQ item, when a user presses Enter or Space, the item's expanded/collapsed state should toggle.
**Validates: Requirements 5.3**

**Property 10: ARIA accessibility compliance**
*For any* FAQ item, the rendered HTML should include proper ARIA attributes (aria-expanded, aria-controls, role) that accurately describe the item's state and relationships.
**Validates: Requirements 5.4, 5.5**

**Property 11: Schema markup completeness**
*For any* array of FAQ items, when the FAQ section is rendered, the JSON-LD schema should include all items with their complete question and answer text.
**Validates: Requirements 6.2**

## Error Handling

### Missing Translation Keys

**Scenario**: A translation key is missing from the current locale's translation file.

**Handling Strategy**:
- next-intl automatically falls back to the default locale (pt-BR)
- If the key is missing in all locales, display the translation key itself as a visible error
- Log a warning to the console in development mode
- Never crash the application due to missing translations

### Empty FAQ Array

**Scenario**: The translation file contains an empty FAQ items array.

**Handling Strategy**:
- Render the section header but display a message: "No FAQs available at this time"
- Log a warning in development mode
- Do not render the FAQ section at all if items array is empty (conditional rendering)

### Invalid FAQ Item Structure

**Scenario**: An FAQ item is missing required fields (id, question, or answer).

**Handling Strategy**:
- Skip rendering that specific item
- Log a warning with the item index and missing fields
- Continue rendering other valid items
- Validate FAQ structure using TypeScript types at build time

### Accordion State Errors

**Scenario**: Accordion state becomes inconsistent (e.g., multiple items open when single mode is enabled).

**Handling Strategy**:
- This is prevented by using Radix UI's accordion primitive which manages state internally
- If custom state management is needed, use React's useState with proper validation
- Reset to default state (all collapsed) if an error is detected

## Testing Strategy

### Unit Testing

The FAQ section will use **Vitest** and **React Testing Library** for unit tests. Key test cases include:

**Component Rendering Tests**:
- FAQ section renders with correct structure (section, header, accordion)
- All FAQ items from translation data are rendered
- Section header displays correct badge, title, and description
- Empty state handling when no FAQ items exist

**Interaction Tests**:
- Clicking an FAQ item toggles its expanded state
- Multiple items can be expanded simultaneously
- Keyboard navigation (Tab, Enter, Space) works correctly
- Focus indicators are visible when navigating with keyboard

**Accessibility Tests**:
- ARIA attributes are correctly applied (aria-expanded, aria-controls)
- Heading hierarchy is semantic (h2 for section, h3 for questions)
- Focus management works correctly
- Screen reader announcements are appropriate

**Responsive Design Tests**:
- Single column layout on mobile viewports (< 768px)
- Multi-column layout on desktop viewports (≥ 768px)
- Touch targets meet minimum size requirements (44x44px)

### Property-Based Testing

The FAQ section will use **fast-check** for property-based testing. This library is chosen because:
- Native TypeScript support with excellent type inference
- Mature ecosystem with good documentation
- Integrates seamlessly with Vitest
- Provides built-in generators for common data types

**Property Test Configuration**:
- Each property test will run a minimum of 100 iterations
- Tests will use custom generators for FAQ data structures
- Each test will be tagged with a comment referencing the design document property

**Key Properties to Test**:

1. **Complete Rendering Property**: Generate random FAQ arrays (6-12 items) and verify all items appear in output
2. **Locale Consistency Property**: Generate random FAQ data and verify content matches expected locale
3. **Expand/Collapse Property**: Generate random FAQ items and verify toggle behavior works correctly
4. **State Indicator Property**: Generate random FAQ states and verify indicators match actual state
5. **Multiple Expansion Property**: Generate random sets of expanded items and verify all remain open
6. **Keyboard Navigation Property**: Generate random FAQ arrays and verify Tab order is sequential
7. **ARIA Compliance Property**: Generate random FAQ items and verify all required ARIA attributes exist
8. **Schema Completeness Property**: Generate random FAQ data and verify JSON-LD includes all items

**Custom Generators**:

```typescript
// Generator for FAQ items
const faqItemArbitrary = fc.record({
  id: fc.string({ minLength: 1, maxLength: 20 }),
  question: fc.string({ minLength: 10, maxLength: 200 }),
  answer: fc.string({ minLength: 20, maxLength: 500 }),
  category: fc.constantFrom('scheduling', 'payment', 'cancellation', 'services')
});

// Generator for FAQ arrays with size constraints
const faqArrayArbitrary = fc.array(faqItemArbitrary, { minLength: 6, maxLength: 12 });

// Generator for locales
const localeArbitrary = fc.constantFrom('pt-BR', 'en', 'es');
```

### Integration Testing

**Next.js Integration**:
- Verify FAQ section integrates correctly into the main page
- Test that locale switching updates FAQ content without page reload
- Verify SEO metadata and schema markup are generated correctly

**Theme Integration**:
- Test FAQ section in light and dark modes
- Verify colors and contrasts meet accessibility standards in both themes
- Test theme switching doesn't break FAQ functionality

**i18n Integration**:
- Verify all three locales (pt-BR, en, es) load correctly
- Test fallback behavior when translations are missing
- Verify translation file structure matches expected schema

### Manual Testing Checklist

- [ ] Visual inspection on mobile devices (iOS Safari, Android Chrome)
- [ ] Visual inspection on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Screen reader testing (NVDA on Windows, VoiceOver on macOS)
- [ ] Keyboard-only navigation testing
- [ ] Color contrast verification using browser DevTools
- [ ] Performance testing with Lighthouse (target: 90+ accessibility score)
- [ ] SEO validation using Google Rich Results Test

## Implementation Notes

### Radix UI Accordion

The accordion will be built using `@radix-ui/react-accordion` which is already installed. Key benefits:
- Automatic ARIA attribute management
- Keyboard navigation built-in
- Flexible API for single or multiple open items
- Unstyled, allowing full design control

### Animation Strategy

Use Tailwind CSS for animations to maintain consistency:
- Accordion content: `data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up`
- Icon rotation: `transition-transform duration-200 data-[state=open]:rotate-180`
- Keep animations under 300ms for perceived performance

### SEO Schema Implementation

Implement JSON-LD schema using a separate component or function:

```typescript
function generateFAQSchema(items: FAQItem[], locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
}
```

Inject this schema into the page using Next.js Script component or a dedicated SchemaMarkup component.

### Performance Considerations

- FAQ section is a client component due to interactive accordion
- Translation data is bundled at build time (no runtime fetching)
- Use React.memo if FAQ section re-renders unnecessarily
- Lazy load FAQ section if it's below the fold (consider using Intersection Observer)

### Accessibility Enhancements

Beyond basic requirements:
- Add `aria-label` to section for screen reader context
- Use `aria-describedby` to link questions to answers
- Ensure color contrast ratios exceed WCAG AA (4.5:1 for normal text)
- Provide skip link if FAQ section is long
- Test with multiple screen readers (NVDA, JAWS, VoiceOver)

## Future Enhancements

### Phase 2 Features (Not in Current Scope)

1. **Search/Filter Functionality**
   - Add a search input to filter FAQ items by keywords
   - Highlight matching text in questions and answers
   - Show "no results" state when search yields nothing

2. **Category Grouping**
   - Group FAQ items by category (scheduling, payment, etc.)
   - Add category tabs or filters
   - Allow users to view all or filter by category

3. **Analytics Integration**
   - Track which FAQ items are most frequently expanded
   - Measure time spent reading each answer
   - Use data to optimize FAQ content and ordering

4. **Dynamic FAQ Loading**
   - Load FAQ content from a CMS or API
   - Allow non-technical staff to update FAQs without deployments
   - Support A/B testing different FAQ content

5. **Related Questions**
   - Show related FAQ items when one is expanded
   - Use simple keyword matching or ML-based similarity
   - Improve discoverability of relevant information

6. **Feedback Mechanism**
   - Add "Was this helpful?" buttons to each FAQ
   - Collect user feedback to improve answers
   - Display helpfulness ratings to other users
