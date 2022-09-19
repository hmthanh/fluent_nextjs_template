module: {
  rules: [
    {
      test: /\.(less)$/,
      use: [
        {
          loader: "style-loader", // creates style nodes from JS strings
        },
        {
          loader: "css-loader", // translates CSS into CommonJS
        },
        {
          loader: "less-loader", // compiles Less to CSS
        },
      ],
    },
    {
      test: /\.js$/,
      loader: "babel-loader",
      query: {
        presets: ["es2015"],
      },
    },
    {
      test: /\.css$/,
      use: [{ loader: "style-loader" }, { loader: "css-loader" }],
    },
    {
      test: /\.(html)$/,
      use: {
        loader: "html-loader",
        options: {
          attrs: [":data-src"],
        },
      },
    },
  ];
}
