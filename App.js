function App() {
  return <>
  <ReactRouterDOM.HashRouter>
    <NavBar />
    <ReactRouterDOM.Route  path="/" exact component={Bio} />
    <ReactRouterDOM.Route  path="/bio" exact component={Bio} />
    <ReactRouterDOM.Route  path="/projects" exact component={Projects} />
  </ReactRouterDOM.HashRouter>
  </>
}

ReactDOM.render(<App/>,document.getElementById('root'))