export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["dist/**"],
  overrides: [
    {
      files: ["**/*.html"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "property-no-unknown": [
      true,
      {
        ignoreProperties: ["interpolate-size"],
      },
    ],
  },
};
