/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  //use
  solutionsSidebar: [{ type: 'autogenerated', dirName: 'use/cases' }],
  userGuideSidebar: [{ type: 'autogenerated', dirName: 'use/user-guide' }],

  //learn
  newsSidebar: [{ type: 'autogenerated', dirName: 'learn/news' }],


  //develop
  getStartedSidebar: [{ type: 'autogenerated', dirName: 'develop/get-started' }],
  openLoopApiSidebar: [
    { type: 'autogenerated', dirName: 'develop/openloop-api/quick-start' },
    {
      type: "category",
      collapsed: false,
      label: "Openloop API",
      link: {
        type: "generated-index",
        title: "Openloop API",
        description:
          "openloop api",
        slug: "/category/openloop-api",
      },
      items: require("./docs/develop/openloop-api/sidebar.js"),
    },
  ],
  fullCustodyApiSidebar: [
    { type: 'autogenerated', dirName: 'develop/full-custody-waas-api/quick-start' },
    {
      type: "category",
      collapsed: false,
      label: "Full Custody WaaS API",
      link: {
        type: "generated-index",
        title: "Full Custody WaaS API",
        description:
          "Full Custody WaaS API",
        slug: "/category/full-custody-waas-api",
      },
      items: require("./docs/develop/full-custody-waas-api/sidebar.js"),
    },
  ],
  mpcApiSidebar: [
    { type: 'autogenerated', dirName: 'develop/mpc-waas-api/quick-start' },
    {
      type: "category",
      collapsed: false,
      label: "Open API",
      link: {
        type: "generated-index",
        title: "Open API",
        description:
          "Open API",
        slug: "/category/mpc-waas-api",
      },
      items: require("./docs/develop/mpc-waas-api/sidebar.js"),
    },
  ],

};

module.exports = sidebars;
