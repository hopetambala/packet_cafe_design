# Packet Cafe Design

Framer Bridge is a suite of tools:

- That allows you to automatically publish and distribute components to designers with [Framer](https://framer.com) and the [Framer Store](https://store.framer.com).
- Import in production components built by your engineers. It’s an automatic and continually synced workflow, one that is customizable to your existing development workflow.

This repository links together [folder backed Framer projects](https://www.framer.com/support/using-framer-x/folder-backed-projects/) with the [Framer CLI](https://www.npmjs.com/package/framer-cli) and [Travis CI](https://travis-ci.com/) for an easy package publication flow.

## 🏁 Getting started

1. Run `yarn` to install dependencies

Inside the repository directory, you will find two key folders:

- **[`design-system`](/design-system):** contains production components. Typically, this design system is consumed by multiple projects. This is where we put our React Components.
- **[`design-system.framerfx`](/design-system.framerfx):** a [folder backed project](https://framer.gitbook.io/teams/integrations#folder-projects) that imports the components from [`design-system`](/design-system) and (optionally) adds [interface properties](https://www.framer.com/api/property-controls/) to use in Framer X.

#### Editing

From here, you can continue modifying the existing [`design-system.framerfx`](/design-system.framerfx) file. If you edit any of the components in [`design-system`](/design-system), they will automatically get updated in Framer too.

## Resources

[Framer Bridge Starter](https://github.com/framer/framer-bridge-starter-kit)


## Troubleshooting

Run
```
npx framer-cli help
```

Then

```
npx framer-cli authenticate
```