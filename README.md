# Framer Bridge Kit

Framer Bridge is a suite of tools:

- That allows you to automatically publish and distribute components to designers with [Framer](https://framer.com) and the [Framer Store](https://store.framer.com).
- Import in production components built by your engineers. It’s an automatic and continually synced workflow, one that is customizable to your existing development workflow.

This repository links together [folder backed Framer projects](https://www.framer.com/support/using-framer-x/folder-backed-projects/) with the [Framer CLI](https://www.npmjs.com/package/framer-cli) and [Travis CI](https://travis-ci.com/) for an easy package publication flow.

## 🏁 Getting started

**Important: This project uses Shared Colors, a feature only available in Framer X26 or higher.**

1. Run `yarn` to install dependencies

Inside the repository directory, you will find two key folders:

- **[`design-system`](/design-system):** contains example production components. Typically, this design system is consumed by multiple projects.
- **[`design-system.framerfx`](/design-system.framerfx):** a [folder backed project](https://framer.gitbook.io/teams/integrations#folder-projects) that imports the components from [`design-system`](/design-system) and (optionally) adds [interface properties](https://www.framer.com/api/property-controls/) to use in Framer. This is the project that gets published to the [Framer store](https://store.framer.com).

#### Editing

From here, you can continue modifying the existing [`design-system.framerfx`](/design-system.framerfx) file. If you edit any of the components in [`design-system`](/design-system), they will automatically get updated in Framer too.

If you want to import your own design system, you can replace both files with your own. Make sure that your Framer project is [folder backed](https://framer.gitbook.io/teams/integrations#folder-projects).

#### Publishing

1. From the terminal, run:
   ```sh
   npx framer-cli authenticate <your-framer-account-email>
   ```
1. **If the package has not been previously published to the store**, publish the package for the first time by running
   ```sh
   env FRAMER_TOKEN=<token> npx framer-cli publish <package-name.framerfx> --new="<Display Name>"
   ```

1. In GitHub, navigate to the forked repository, and under your repository name, click _Settings_. Then, click _Secrets_ in the left sidebar, and add the `FRAMER_TOKEN` secret.
1. Push a commit to the `master` branch and watch as the GitHub actions pick up the commit, build the package, publish it to the [Framer Store](https://store.framer.com).

## 🚚 Using CI

As an example of integrating `framer-cli` with an external CI service, there is a small [CircleCI configuration](https://circleci.com/docs/2.0/configuration-reference) and [Travis CI configuration](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci) included in this repository that publishes the given package to the [Framer store](https://store.framer.com) every time a commit is made to the `master` branch.

**To integrate with Travis CI:**

1. [Connect your repository with Travis CI](https://docs.travis-ci.com/user/tutorial/#to-get-started-with-travis-ci).
1. Add the `FRAMER_TOKEN` environment variable in the [CI project settings](https://docs.travis-ci.com/user/environment-variables).
1. Update the [`.travis.yml`](./.travis.yml) with your project path, e.g.:

   ```yml
   language: node_js
   node_js:
     - 10.15.3

   jobs:
     include:
       - stage: build
         name: "Build"
         if: branch = master
         script:
           - yarn
           - npx framer-cli build <your-project-path.framerfx>

       - stage: publish
         name: "Publish"
         if: branch = master
         script:
           - yarn
           - npx framer-cli publish <your-project-path.framerfx> --yes
   ```

1. Publish a brand new version of your package to the [Framer store](https://store.framer.com) by pushing a commit on the `master` branch.
