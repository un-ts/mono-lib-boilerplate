# mono-lib-boilerplate

[![GitHub Actions](https://github.com/rx-ts/mono-lib-boilerplate/workflows/CI/badge.svg)](https://github.com/rx-ts/mono-lib-boilerplate/actions/workflows/ci.yml)
[![Codacy Grade](https://img.shields.io/codacy/grade/675823db9630419e97c7260b71d6c279)](https://www.codacy.com/gh/rx-ts/mono-lib-boilerplate)
[![Codecov](https://img.shields.io/codecov/c/gh/rx-ts/mono-lib-boilerplate)](https://codecov.io/gh/rx-ts/mono-lib-boilerplate)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Frx-ts%2Fmono-lib-boilerplate%2Fmain%2Fpackage.json)](https://github.com/plantain-00/type-coverage)
[![GitHub release](https://img.shields.io/github/release/rx-ts/mono-lib-boilerplate)](https://github.com/rx-ts/mono-lib-boilerplate/releases)
[![David Dev](https://img.shields.io/david/dev/rx-ts/mono-lib-boilerplate.svg)](https://david-dm.org/rx-ts/mono-lib-boilerplate?type=dev)

[![Conventional Commits](https://img.shields.io/badge/conventional%20commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![changesets](https://img.shields.io/badge/maintained%20with-changesets-176de3.svg)](https://github.com/atlassian/changesets)

> A simple mono library boilerplate.

## Packages

This repository is a monorepo managed by [changesets][] what means we actually publish several packages to npm from same codebase, including:

| Package                | Description       | Version                                                                                                                                                                                       | (Peer) Dependencies                                                                                                                                                                                                                                                                                                                           |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`pkg`](/packages/pkg) | A simple package. | [![npm](https://img.shields.io/npm/v/pkg.svg)](https://www.npmjs.com/package/pkg) [![View changelog](https://img.shields.io/badge/changelog-explore-brightgreen)](https://changelogs.xyz/pkg) | [![David Peer](https://img.shields.io/david/peer/rx-ts/mono-lib-boilerplate.svg?path=packages/pkg)](https://david-dm.org/rx-ts/mono-lib-boilerplate?path=packages/pkg&type=peer) [![David](https://img.shields.io/david/rx-ts/mono-lib-boilerplate.svg?path=packages/pkg)](https://david-dm.org/rx-ts/mono-lib-boilerplate?path=packages/pkg) |

## License

[MIT][] © [JounQin][]@[1stG.me][]

[1stg.me]: https://www.1stg.me
[changesets]: https://GitHub.com/atlassian/changesets
[jounqin]: https://GitHub.com/JounQin
[mit]: http://opensource.org/licenses/MIT
