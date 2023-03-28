module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        "postcss-csso": {
            restructure: false
        },
        ...(process.env.NODE_ENV === 'production' ? {'postcss-hash': {algorithm: 'sha256',trim: 20}} : {})
    },
  };