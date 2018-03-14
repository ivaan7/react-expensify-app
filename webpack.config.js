//entry point -->app js
//output
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

//process.env.NODE_ENV

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if(process.env.NODE_ENV === "test"){
    require("dotenv").config({"path": ".env.test"})
}else if(process.env.NODE_ENV === "development"){
    require("dotenv").config({"path": ".env.development"})
}

//console.log(path.join(__dirname,"public"));
module.exports = (env)=>{
    
    const isProduction = env === "production";
    const CSSExtract = new ExtractTextPlugin("styles.css");

    console.log("env",env);
    return{
        entry: "./src/app.js",
        output:{
            path: path.join(__dirname, "public","dist"),
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
                test: /\.s?css$/,
                use:CSSExtract.extract({
                    use:[
                        {
                            loader: "css-loader",
                            options:{
                                sourceMap:true
                            }
                        },
                        {
                            loader:"sass-loader",
                            options:{
                                sourceMap:true
                            }
                        }
                    ]
                })
                //? makes s optional so we are supporting css and scss
            }]
        },

        plugins:[
            CSSExtract,
            new webpack.DefinePlugin({
                "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
                "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                "process.env.FIREBASE_DATABASE_URL": JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                "process.env.FIREBASE_PROJECT_ID": JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)  
            })
        ],
        //when error occures this dev tool will 
        //reference where error happened in our file, not in bundle.js file
        devtool: isProduction ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, "public"), 
            //enables client side routing
            historyApiFallback: true,
            publicPath: "/dist/"
        }
    }
};