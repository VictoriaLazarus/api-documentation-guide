// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    'intro',

      {
      type: 'category',
      label: 'Part I: Getting started',
      collapsed: false,
      items: [
        'getting-started/introduction',
        'getting-started/prerequisites',
      ],
    },

    {
      type: 'category',
      label: 'Part II: Understanding APIs',
      collapsed: false,
      items: [
        'understanding-apis/what-is-an-api',
        'understanding-apis/http-basics',
        'understanding-apis/rest-apis',
        'understanding-apis/requests-and-responses',
        'understanding-apis/json',
        'understanding-apis/authentication',
      ],
    },

    {
      type: 'category',
      label: 'Part III: Before you write',
      collapsed: false,
      items: [
        'before-you-write/understanding-your-audience',
        'before-you-write/exploring-an-api',
        'before-you-write/testing-with-postman',
        'before-you-write/planning-documentation',
      ],
    },

    {
      type: 'category',
      label: 'Part IV: Writing API documentation',
      collapsed: false,
      items: [
        'writing-api-documentation/endpoint-structure',
        'writing-api-documentation/parameters',
        'writing-api-documentation/request-examples',
        'writing-api-documentation/response-examples',
        'writing-api-documentation/error-handling',
        'writing-api-documentation/best-practices',
        'writing-api-documentation/common-mistakes',
      ],
    },

    {
      type: 'category',
      label: 'Part V: Documentation as code',
      collapsed: false,
      items: [
        'documentation-as-code/introduction-to-doc-as-code',
        'documentation-as-code/markdown',
        'documentation-as-code/git',
        'documentation-as-code/github',
        'documentation-as-code/docusaurus',
        'documentation-as-code/publishing',
        'documentation-as-code/putting-it-all-together-the-docs-as-code-workflow',
      ],
    },

    {
      type: 'category',
      label: 'Part VI: Final project',
      collapsed: false,
      items: [
        'final-project/document-your-first-api',
      ],
    },
  ],
};

export default sidebars;