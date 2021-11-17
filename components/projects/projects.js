function Projects(){

  const projects = [{
    name: 'Pacmen Project',
    description: 'Small project that creates "Pacmen" as the user clicks on a "add" button, and then animates them as soon as the user clicks on the "start game button". Done using vanilla javascrit and html.',
    link: 'https://github.com/jfdlv/pacmen',
    liveDemoLink: 'https://jfdlv.github.io/pacmen/'
  },{
    name: 'Following Eyes',
    description: 'Small project that tracks the mouse movement and animates a pair of eyes to follow that movement.',
    link: 'https://github.com/jfdlv/following-eyes',
    liveDemoLink: 'https://jfdlv.github.io/following-eyes/'
  },{
    name: 'Real Time Bus Tracker',
    description: 'Tracks the position of massachusetts buses in real time, identifies each one with a different color.',
    link: 'https://github.com/jfdlv/real-time-bus-tracker',
    liveDemoLink: 'https://jfdlv.github.io/real-time-bus-tracker/'
  },{
    name: 'Circles in Motion',
    description: 'Vanilla Javascript and HTML project, that animate a determined amount of circles to bounce off set limits and change colour with every bounce',
    link: 'https://github.com/jfdlv/circlesInMotion',
    liveDemoLink: 'https://jfdlv.github.io/circlesInMotion/'
  },{
    name: 'Dnd5 Bestiary',
    description: 'Small React project that uses open services to create a dnd(dungeons and dragons) 5 bestiary, it also lets you create a list of monsters, and see the monsters stats.',
    link: 'https://github.com/jfdlv/dnd5-bestiary',
    liveDemoLink: 'https://jfdlv.github.io/dnd5-bestiary/'
  },{
    name: 'Troika PDF creator',
    description: 'Small React project to make the creation process of characters in troika rpg quicker. It generates a pdf file so that the user can print it and use it to play.This is an initial feature, the plan is to make a whole toolkit for game masters of this game.',
    link: 'https://github.com/jfdlv/troika-pdf-creator'
  },{
    name: 'BadBank',
    description: 'Project that emulates how a withdraw and deposit works on a bank. It has a login that you need to use before you can use the withdraw and deposit features, the credentials that can be used are placed on the All Data tab.',
    link: 'https://github.com/jfdlv/badbank',
    liveDemoLink: 'https://fernando-delaviabankingapplication.s3.us-east-2.amazonaws.com/index.html#/'
  }];

  const [currentProject, setCurrentProject] = React.useState(projects[0]);

  const [currentProjectIndex, setCurrentProjectIndex] = React.useState(0);

  const {Container, Row, Col, ListGroup} = ReactBootstrap;

  return <Container>
    <Row>
      <Col>
        <ListGroup>
          {projects.map((element,index) => {
            console.log(index);
            if(index === currentProjectIndex) {
              return <ListGroup.Item action onClick={()=>{setCurrentProject(projects[index]);setCurrentProjectIndex(index)}} active key={index}>
                {element.name}
              </ListGroup.Item>
            }
            else {
              return <ListGroup.Item action onClick={()=>{setCurrentProject(projects[index]);setCurrentProjectIndex(index)}} key={index}>
                {element.name}
              </ListGroup.Item>
            }
          })}
        </ListGroup>
      </Col>
      <Col>
        <ProjectCard name={currentProject.name} description={currentProject.description} link={currentProject.link} liveDemoLink={currentProject.liveDemoLink}/>  
      </Col>
    </Row>
  </Container>
}