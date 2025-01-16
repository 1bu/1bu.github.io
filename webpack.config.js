const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // Archivo de entrada
  output: {
    filename: 'main.js', // Archivo de salida
    path: path.resolve(__dirname, 'dist'), // Carpeta de salida
    clean:true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif|svg)$/,  
        type: 'asset/resource',  
        generator: {  
         filename: 'assets/[name].[hash].[ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, 
        type: 'asset/resource', 
        generator: {
          filename: 'assets/font/[name][ext]', 
        }
      },
    ]
  },
  mode: 'development', // Modo (puede ser 'development' o 'production')
};
