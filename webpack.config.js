//entry point -->app js
//output
const path = require("path");

//console.log(path.join(__dirname,"public"));

module.exports ={
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            //only files that ends with .js should be recomiled with babel
            test: /\.js$/,
            //we are excluding .js files from modules folder
            exclude: /node_modules/
            //stuff like presets must be defined in .babelrc
        },
        {
            use:[
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
            //? makes s optional so we are supporting css and scss
            test: /\.s?css$/
        }]
    },
    //when error occures this dev tool will 
    //reference where error happened in our file, not in bundle.js file
    devtool:"cheap-module-eval-source-map",
    devServer:{
        contentBase: path.join(__dirname, "public"), 
        //enables client side routing
        historyApiFallback:true
    }
};

//loader