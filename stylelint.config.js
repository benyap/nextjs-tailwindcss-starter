module.exports = {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["public/**/*.svg"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "layer",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
};
