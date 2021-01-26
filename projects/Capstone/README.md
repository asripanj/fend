# Capstone

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. This will be a travel app where you can include date and location you want to visit. This will then return an image, and the expected weather for the location. The added functionality to this project is that it displays the end date of the trip.

## File Structure
__test__ contains tests for the submit function and the server
src folder is seperated into the client side and server side code
The client side code contains the javascript functions, html page, sass files for styling and the client side code combining all the javascript functions.
The server side code contains all the api routes. 

## Project Set Up
1. Install npm using command - npm install 
2. Start the server by using the command - npm run start.
3. Work in the development mode using the command - npm run build-dev
4. Work in the production mode using the command - npm run build-prod
5. Test the project using the command - npm run test

## Loaders and Plugins
Choose the necessary installation for your development mode
- npm i -D @babel/core @babel/preset-env babel-loader
- npm i -D style-loader node-sass css-loader sass-loader
- npm i -D clean-webpack-plugin
- npm i -D html-webpack-plugin
- npm i -D mini-css-extract-plugin
- npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin