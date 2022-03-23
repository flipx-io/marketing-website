# Marketing Website
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Tests](https://github.com/flipx-io/marketing-website/actions/workflows/test.yaml/badge.svg)](https://github.com/flipx-io/marketing-website/actions/workflows/test.yaml)

<p align="center">The marketing website for Flip<sup>x</sup></p>

<p align="center">
<img src="/static/img/logo_full.svg" alt="drawing" width="400"/>
</p>

## Overiview

This project is based on [Cruip.com](https://cruip.com/) web templates. To learn more about the Cruip templates and available components, visit the Cruip CSS documentation [site](https://cruip.com/docs/react-templates/).

## Semantic Release
This project follows [semantic release](https://github.com/semantic-release/semantic-release).  Semantic release is enforced through git commit hooks (Husky). Commit messages that do not follow the Angular commit convention will be `REJECTED`. For a list of allowed commits, see [config-conventional rules](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

Here is an example of the release type that will be done based on a commit messages:

| Commit message                                                                                                                                                                                   | Release type               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |
