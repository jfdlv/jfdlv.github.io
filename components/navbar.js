const useHash = () => {
    const [hash, setHash] = React.useState(() => window.location.hash);
  
    const hashChangeHandler = React.useCallback(() => {
      setHash(window.location.hash);
    }, []);
  
    React.useEffect(() => {
      window.addEventListener('hashchange', hashChangeHandler);
      return () => {
        window.removeEventListener('hashchange', hashChangeHandler);
      };
    }, []);
  
    const updateHash = React.useCallback(
      newHash => {
        if (newHash !== hash) window.location.hash = newHash;
      },
      [hash]
    );
  
    return [hash, updateHash];
};

function NavBar() {

    const [hash, setHash] = useHash();

    const {Container} = ReactBootstrap;

    React.useEffect(() => {
        setHash('#/bio');
    }, []);

    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <Container>
                    <a className="navbar-brand" href="#">Julio Fernando De La Via</a>
                </Container>
            </nav>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className={hash === "#/bio" ? "nav-item active" : "nav-item"} data-bs-toggle="collapse" href="#bioContainer" role="button" aria-expanded="false" aria-controls="bioContainer">
                        <a href="#/bio" className="nav-link" name="bio">Bio</a>
                    </li>
                    <li className={hash === "#/projects" ? "nav-item active" : "nav-item"}>
                        <a href="#/projects" className="nav-link" name="projects">Portfolio</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}