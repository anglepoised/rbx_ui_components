# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]

### Removed

- [`rb-fieldset` `campaignBasics` modifier](https://github.com/rockabox/rbx_ui_components/pull/169). Superceded by `basics` modifier.

## [1.2.0] - 2015-05-29

### Added

- [`rb-fieldset` `basics` modifier](https://github.com/rockabox/rbx_ui_components/pull/144). Replaces now-deprecated `campaignBasics` modifier.
- [`rb-fieldset` `breakdown` and `metrics` modifiers](https://github.com/rockabox/rbx_ui_components/pull/155). Intended for use in Reporting UI.
- [`rb-generic-form` component](https://github.com/rockabox/rbx_ui_components/pull/152). Sets "Required Field" message, should wrap all generic forms.
- [`rb-radio-control` `icon` parameter](https://github.com/rockabox/rbx_ui_components/pull/153). Displays icon with radio button.
- [`rb-scrollspy` component](https://github.com/rockabox/rbx_ui_components/pull/140)
- [`rb-select-control` styles](https://github.com/rockabox/rbx_ui_components/pull/146)

### Fixed

- [Bump `karma-jasmine` version to use newer version of `jasmine`](https://github.com/rockabox/rbx_ui_components/pull/154)
- [Prevent PhantomJS timeouts when running tests on Travis CI](https://github.com/rockabox/rbx_ui_components/pull/157)
- [Update README](https://github.com/rockabox/rbx_ui_components/pull/145). Tidy up, including accurate dependencies and steps to build.

## [1.1.0] - 2015-05-21

### Added

- [A change log](https://github.com/rockabox/rbx_ui_components/pull/141)
- [`rb-select-control` component](https://github.com/rockabox/rbx_ui_components/pull/139), a clone of `rb-select` component. Use `rb-select-control`, as `rb-select` will be deprecated in a future release.
- [Goals modifier to `rb-fieldset` component](https://github.com/rockabox/rbx_ui_components/pull/136)

### Changed

- [All section headings now have a keyline](https://github.com/rockabox/rbx_ui_components/pull/138)
- [`rb-radio-control` refactored to bind to a model](https://github.com/rockabox/rbx_ui_components/pull/137)

### Fixed

- [TextControl required state is blue](https://github.com/rockabox/rbx_ui_components/pull/142)

## 1.0.0 - 2015-05-19

- Initial release.

[unreleased]: https://github.com/rockabox/rbx_ui_components/compare/1.2.0...HEAD
[1.2.0]: https://github.com/rockabox/rbx_ui_components/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/rockabox/rbx_ui_components/compare/1.0.0...1.1.0
