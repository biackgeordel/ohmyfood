const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const isproduction = process.env.NODE_ENV === "production";
const config = {
  entry: {
    main: path.resolve(__dirname, "./src/index.js"),
    resto: path.resolve(__dirname, "./src/features/resto.js"),
    carousel: path.resolve(__dirname, "./src/features/carousel.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "asset/images/[name][ext]",
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
      stats: {
        children: true,
      },
      chunks: ["main", "carousel"],
    }),
    new HtmlWebpackPlugin({
      filename: "resto.html",
      template: path.resolve(__dirname, "./src/restaurants/resto.html"),
      stats: {
        children: true,
      },
      chunks: ["resto"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "[id].css",
    }),

    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: "./src/assets/images/",
    //       to: "asset/images",
    //     },
    //   ],
    // }),
  ],
  optimization: {
    minimizer: [
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true, quality: 50 }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },

  devServer: {
    open: true,
    port: 4000,
    static: path.resolve(__dirname, "./dist"),
  },
};

module.exports = () => {
  if (isproduction) {
    config.mode = "production";
    config.optimization = {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
    };
  } else {
    config.mode = "development";
    config.devtool = "inline-source-map";
    config.optimization = {
      minimize: false,
    };
  }
  console.log("mon process", process.env.node_env);
  return config;
};
