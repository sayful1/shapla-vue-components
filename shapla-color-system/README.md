# Shapla Color System

The shapla color system can be used to create a color scheme that reflects your brand or style.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-color-system
```

# Usage

### Non-Sass customization

Only a very limited number of color customization features are supported for non-Sass clients. They are a set of CSS custom properties, and a set of CSS classes.

#### CSS Custom Properties

CSS Custom property         | Description
----------------------------|--------------------------------------------------------------------
`--shapla-primary`          | The theme primary color
`--shapla-secondary`        | The theme secondary color
`--shapla-background`       | The theme background color
`--shapla-surface`          | The theme surface color
`--shapla-on-primary`       | Text color on top of a primary background
`--shapla-on-secondary`     | Text color on top of a secondary background
`--shapla-on-surface`       | Text color on top of a surface background
`--shapla-text-primary`     | Used for most text
`--shapla-text-secondary`   | Used for text which is lower in the visual hierarchy
`--shapla-text-hint`        | Used for text hints, such as those in text fields and labels
`--shapla-text-disabled`    | Used for text in disabled components and content
`--shapla-text-icon`        | Used for icons

#### CSS Classes

CSS Class                       | Description
--------------------------------|--------------------------------------------------------------------------
`shapla-color--primary`         | Sets the text color to the theme primary color
`shapla-color--primary-bg`      | Sets the background color to the theme primary color
`shapla-color--on-primary`      | Sets the text color to the theme on-primary color
`shapla-color--secondary`       | Sets the text color to the theme secondary color
`shapla-color--secondary-bg`    | Sets the background color to the theme secondary color
`shapla-color--on-secondary`    | Sets the text color to the theme on-secondary color
`shapla-color--surface`         | Sets the surface color to the theme surface color
`shapla-color--on-surface`      | Sets the text color to the theme on-surface color
`shapla-color--background`      | Sets the background color to the theme background color
`shapla-color--text-primary`    | Sets text to a suitable color for TEXT_STYLE on top of light background
