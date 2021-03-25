/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// HACK: @types/cypress-plugin-snapshots does not exist
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { initPlugin } from 'cypress-plugin-snapshots/plugin';

const config: Cypress.PluginConfig = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // HACK: https://github.com/meinaart/cypress-plugin-snapshots/issues/136#issuecomment-658496021
  // HACK: @types/cypress-plugin-snapshots does not exist
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  initPlugin(on, config);

  return config;
};

export default config;
