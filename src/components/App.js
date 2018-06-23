import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'

import { HomePage } from 'components'

import theme from './themes/default'

injectGlobal`
  h1{
    text-align: center;
  }
  body {
    diplay: flex;
    background-color: darkgrey;
  }
  li {
    cursor:pointer;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  input:focus{
    outline:none;
  }
  input{
    width: 350px;
    padding: 15px 32px;
  }
  input[type="text"] {
    padding: 10px;
    border: none;
    border-bottom: solid 3px #c9c9c9;
    transition: border 0.3s;
  }
  input[type="text"]:focus,
  input[type="text"].focus {
    border-bottom: solid 3px grey;
  }
  input::-webkit-input-placeholder {
    color: grey;
    transition: all 0.5s;
  }
  input:focus::-webkit-input-placeholder {
    color: violet;
  }
  .btn{
    width: 100%;
    background-color: grey;
    cursor: pointer;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: 0 solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
    outline: 1px solid;
    outline-color: rgba(255, 255, 255, .5);
    outline-offset: 0px;
    text-shadow: none;
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  }
  .btn2{
    background-color: grey;
    border: none;
    color: white;
    padding: 9px 30px;
    padding-top:8px;
    border-bottom: 3px solid #c9c9c9;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor:pointer;
  }
  .btn2:hover {
    color: #c9c9c9;
  }
  .btn:hover{
    border: 0px solid;
    box-shadow: inset 0 0 5px rgba(255, 255, 255, .5), 0 0 5px rgba(255, 255, 255, .2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 10px;
    text-shadow: 1px 1px 2px #427388;
  }
  div{
    width: 500px;
  }
  ul>div>li{
    margin-right: auto;
  }
  ul>div{
    display: flex;
    flex-wrap: wrap;
  }
  .btn3{
    border-radius:50%;
    cursor:pointer;
  }
  .btn3:hover{
    background-color:#DD2D8F;
    transition:all 0.5s;
  }
`

const App = () => {
  return (
    <div>
      <Helmet titleTemplate="ARc - %s">
        <title>Atomic React</title>
        <meta name="description" content="React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="ARc" />
        <meta property="og:image" content="https://arc.js.org/thumbnail.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="730" />
        <link rel="icon" href="https://arc.js.org/icon.png" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
