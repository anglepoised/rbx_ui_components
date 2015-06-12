# Change Log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][unreleased]

### Added

- [`rb-datetime-control` show date only](https://github.com/rockabox/rbx_ui_components/pull/205)
- [`rb-nav-bar` sets `is-active` based on state](https://github.com/rockabox/rbx_ui_components/pull/210) Add is-active class when the related ui-sref directive's state is active and remove when it is inactive.
- [`rb-check-with-text-control`](https://github.com/rockabox/rbx_ui_components/pull/209)
- [`rb-check-with-text-control-group`](https://github.com/rockabox/rbx_ui_components/pull/212)
- [`rb-grid-cell` `size` attribute for cell sizing](https://github.com/rockabox/rbx_ui_components/pull/222)

### Changed

- [`rb-page-title` supports transcluding any action component by convention, not just buttons](https://github.com/rockabox/rbx_ui_components/pull/217)

### Fixed

- [`rb-definition-list` toolbar alignment](https://github.com/rockabox/rbx_ui_components/pull/203)
- [`rb-overlay-panel` style](https://github.com/rockabox/rbx_ui_components/pull/206)
- [`rb-check-control-group` style](https://github.com/rockabox/rbx_ui_components/pull/211)
- [`rb-side-nav` style](https://github.com/rockabox/rbx_ui_components/pull/227)

## [2.1.1] - 2015-06-04

### Fixed

- [`rb-definition-list` layout bug](https://github.com/rockabox/rbx_ui_components/pull/200)

## [2.1.0] - 2015-06-04

### Added

- [`rb-generic-form` `-buttons` descendent](https://github.com/rockabox/rbx_ui_components/pull/186)

### Changed

- [`rb-check-control-group` can use shared model and watches external model changes](https://github.com/rockabox/rbx_ui_components/pull/191)
- [`rb-definition-list` style and structure](https://github.com/rockabox/rbx_ui_components/pull/192)

### Fixed

- [`appearance` property no longer requires manual prefixing](https://github.com/rockabox/rbx_ui_components/pull/187). Run `npm update` after updating to prevent breakage.

## [2.0.0] - 2015-06-02

### Added

- [`rb-datetime-control` `inherit-datetime` attribute](https://github.com/rockabox/rbx_ui_components/pull/156). Supercedes `inherit` attribute.
- [`rb-datetime-control` `inherit-model` optional property attribute](https://github.com/rockabox/rbx_ui_components/pull/156). Date inheritence should be treated as a model.
- [`rb-scrollspy` `scroll-id` attribute](https://github.com/rockabox/rbx_ui_components/pull/183). For observing scroll changes on custom elements.

### Changed

- [`rb-check-control` component](https://github.com/rockabox/rbx_ui_components/pull/165). For multiple checkboxes use `rb-check-control-group` instead of `rb-check-control`. The `rb-check-control-group` directive will use attribute `options` to render your checkboxes and `ng-model` will now return an array of currently checked string values.
- [`rb-currency` component renamed `rb-currency-display`](https://github.com/rockabox/rbx_ui_components/pull/174)
- [`rb-datetime` component renamed `rb-datetime-display`](https://github.com/rockabox/rbx_ui_components/pull/177)
- [`rb-fieldset` `title` attribute changed to `label`](https://github.com/rockabox/rbx_ui_components/pull/184).
- [`rb-ratio` component renamed `rb-ratio-display`](https://github.com/rockabox/rbx_ui_components/pull/175)
- [`rb-scrollspy` now animates](https://github.com/rockabox/rbx_ui_components/pull/183). Part of `angular-strap` integration.
- [`rb-scrollspy` now builds top level list from `items` property not `sections`](https://github.com/rockabox/rbx_ui_components/pull/172)
- [`rb-scrollspy` now uses `angular-scroll` instead of `angular-strap` scrollspy](https://github.com/rockabox/rbx_ui_components/pull/183). Enables observation of scroll positioning in custom elements (e.g. modals).
- [`rb-text-control` and `rb-datetime-control` `title` attribute changed to `label`](https://github.com/rockabox/rbx_ui_components/pull/179)

### Fixed

- [`rb-data-summary-item` improperly closed tag](https://github.com/rockabox/rbx_ui_components/pull/182)
- [`rb-datetime-control` `ng-model` preservation when inheriting datetime](https://github.com/rockabox/rbx_ui_components/pull/173)

### Removed

- [`rb-datetime-control` `inherit` attribute](https://github.com/rockabox/rbx_ui_components/pull/156). Superceded by `inherit-datetime` attribute.
- [`rb-fieldset` `campaignBasics` modifier](https://github.com/rockabox/rbx_ui_components/pull/169). Superceded by `basics` modifier.
- [`rb-select` component](https://github.com/rockabox/rbx_ui_components/pull/170). Superceded by `rb-select-control` component.

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

[unreleased]: https://github.com/rockabox/rbx_ui_components/compare/2.1.1...HEAD
[2.1.1]: https://github.com/rockabox/rbx_ui_components/compare/2.1.0...2.1.1
[2.1.0]: https://github.com/rockabox/rbx_ui_components/compare/2.0.0...2.1.0
[2.0.0]: https://github.com/rockabox/rbx_ui_components/compare/1.2.0...2.0.0
[1.2.0]: https://github.com/rockabox/rbx_ui_components/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/rockabox/rbx_ui_components/compare/1.0.0...1.1.0
