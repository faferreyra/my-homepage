module.exports = {
  settings: {
    "vetur.useWorkspaceDependencies": true,
    "vetur.experimental.templateInterpolationService": true
  },
  projects: [
    {
      root: './apps/my-homepage-nuxt-frontend',
      tsconfig: './tsconfig.json'
    },
    {
      root: './apps/my-homepage-vue2-frontend',
      tsconfig: './tsconfig.json'
    }
  ]
}
