const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader' // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS,
                },
                {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        includePaths: [
                            path.resolve('../node_modules'),
                        ]
                    }
                }
            ]
        },]
    },
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};
};

// module: {
//     rules: [
//         {
//             test: /node_modules\/.*\.css$/,
//             use: [
//                 {
//                     loader: 'style-loader',
//                 },
//                 {
//                     loader: 'css-loader',
//                     options: {
//                         sourceMap: true,
//                     },
//                 },
//             ],
//         },
//         {
//             test: /\.scss$/,
//             use: [
//                 {
//                     loader: 'style-loader' // creates style nodes from JS strings
//                 },
//                 {
//                     loader: 'css-loader', // translates CSS into CommonJS,
//                 },
//                 {
//                     loader: 'sass-loader', // compiles Sass to CSS
//                     options: {
//                         includePaths: [
//                             path.resolve('../node_modules'),
//                         ]
//                     }
//                 }
//             ]
//         },
//         {
//             test: /\.m?js$/,
//             exclude: /(node_modules|bower_components)/,
//             use: {
//                 loader: 'babel-loader',
//                 options: {
//                     presets: ['@babel/preset-react', '@babel/preset-env']
//                 }
//             }
//         },
//         {
//             test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
//             use: [{
//                 loader: 'file-loader',
//                 options: {
//                     name: '[name].[ext]',
//                     outputPath: 'styles/fonts/'
//                 }
//             }]
//         }
//     ]
// },