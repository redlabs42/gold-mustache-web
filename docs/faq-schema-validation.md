# FAQ Schema Validation Guide

## Overview

The FAQ Section component includes JSON-LD structured data markup that follows the schema.org FAQPage specification. This helps search engines understand and display FAQ content in rich results.

## Schema Structure

The generated schema follows this format:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Question text here",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Answer text here"
      }
    }
  ]
}
```

## Validation Steps

### 1. Using Google Rich Results Test

1. Once the FAQ section is integrated into the page, deploy the site or run it locally
2. Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
3. Enter your page URL or paste the HTML source
4. Click "Test URL" or "Test Code"
5. Verify that the FAQPage schema is detected and valid

### 2. Using Schema.org Validator

1. Visit [Schema.org Validator](https://validator.schema.org/)
2. Paste the JSON-LD schema markup
3. Verify there are no errors or warnings

### 3. Manual Verification

You can verify the schema is present by:

1. Opening the page in a browser
2. Viewing the page source (Ctrl+U or Cmd+Option+U)
3. Searching for `application/ld+json`
4. Confirming the FAQPage schema is present with all FAQ items

## Expected Results

When validated, you should see:

- ✅ FAQPage type detected
- ✅ All FAQ questions and answers included
- ✅ Proper schema.org structure
- ✅ No errors or warnings

## Testing in Development

The schema is automatically generated from the translation files. To test:

1. Run the development server: `npm run dev`
2. Navigate to the page with the FAQ section
3. Open browser DevTools
4. Check the Elements tab for the `<script type="application/ld+json">` tag
5. Verify the JSON structure is correct

## Requirements Satisfied

This implementation satisfies the following requirements:

- **6.1**: FAQ section includes SEO Schema markup using FAQPage schema type
- **6.2**: All FAQ items with questions and answers are included in structured data
- **6.3**: Semantic HTML elements are used (section, h2, h3 tags)
- **6.4**: Questions use appropriate heading levels (h2 for section, h3 for questions via Radix UI)

## Notes

- The schema is generated dynamically from the translation files
- Each locale will have its own schema with translated content
- The schema is injected as a `<script>` tag in the component
- Search engines will crawl and index this structured data
