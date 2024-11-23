import './App.css';
import Navbar from './Navbar';
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";
import "@fontsource/anton";
import "@fontsource/exo";
import cloud from './cloud2.png';
import React, { useState, useEffect, useRef } from 'react';
import dottedLine from './dotted_line2.png';
import me from './me2.jpg';

function DraggableComponent() {
  const [position, setPosition] = useState({ top: 438, left: 760.5 });
  const [dragging, setDragging] = useState(false);
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const onMouseDown = (e) => {
    setDragging(true);
    lastPositionRef.current = { x: e.clientX, y: e.clientY };
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;

    const newTop = e.clientY - e.target.clientHeight / 2;
    const newLeft = e.clientX - e.target.clientWidth / 2;

    const maxLeft = window.innerWidth - e.target.clientWidth - 40;
    const maxTop = window.innerHeight - e.target.clientHeight;

    setPosition({
      top: Math.max(0, Math.min(newTop, maxTop)),
      left: Math.max(0, Math.min(newLeft, maxLeft)),
    });

    velocityRef.current = {
      x: (e.clientX - lastPositionRef.current.x) / 3,
      y: (e.clientY - lastPositionRef.current.y) / 3,
    };

    lastPositionRef.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = () => {
    setDragging(false);

    const initialVelocity = 2;
    const friction = 0.9;

    const animateThrow = () => {
      setPosition((prevPosition) => {
        const newTop = prevPosition.top + velocityRef.current.y * initialVelocity;
        const newLeft = prevPosition.left + velocityRef.current.x * initialVelocity;

        const maxLeft = window.innerWidth - containerRef.current.clientWidth - 40;
        const maxTop = window.innerHeight - containerRef.current.clientHeight;

        return {
          top: Math.max(0, Math.min(newTop, maxTop)),
          left: Math.max(0, Math.min(newLeft, maxLeft)),
        };
      });

      velocityRef.current.x *= friction;
      velocityRef.current.y *= friction;

      if (Math.abs(velocityRef.current.x) > 0.5 || Math.abs(velocityRef.current.y) > 0.5) {
        requestAnimationFrame(animateThrow);
      }
    };

    animateThrow();
  };

  return (
    <div
      ref={containerRef}
      className="position-absolute moving_cloud"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        cursor: dragging ? 'grabbing' : 'grab',
        width: '31%',
      }}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
    >
      <img className="position-absolute" src={cloud} alt="gdg" style={{ width: '30vw', height: '22vw' }} />
      <h2 className="text-white fs-5 fs-sm-3 fs-md-4 fs-lg-5 fs-xl-6" style={{ width: '73%', marginTop: '29%', marginLeft: '20%' }}>
        I’m a full stack developer who delivers results at lightning speed and loves finding quirky, better ways to get things done!
      </h2>
    </div>
  );
}

export const RiveDemo = () => {
  const { RiveComponent } = useRive({
    src: '/me11.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return <RiveComponent />;
};
export const RiveBrain = () => {
  const { RiveComponent } = useRive({
    src: '/brain3.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className='brain_class'>
      <RiveComponent />
    </div>
  );
};

export const RiveNoob = () => {
  const { RiveComponent } = useRive({
    src: '/noob.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className='riveNoob'>
      <RiveComponent />
    </div>
  );
};

export const RiveMed = () => {
  const { RiveComponent } = useRive({
    src: '/medium.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className='riveMed'>
      <RiveComponent />
    </div>
  );
};

export const RivePro = () => {
  const { RiveComponent } = useRive({
    src: '/pro.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className='rivePro'>
      <RiveComponent />
    </div>
  );
};
export const RiveDown = () => {
  const { RiveComponent } = useRive({
    src: '/lookDown2.riv',
    stateMachines: "State Machine 1",
    layout: new Layout({
      fit: Fit.FitWidth,
      alignment: Alignment.Center,
    }),
    autoplay: true,
  });

  return (
    <div className='riveDown'>
      <RiveComponent />
    </div>
  );
};

const DropdownFilter = () => {
  const [filterText, setFilterText] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleFilterChange = (event) => {
    setFilterText(event.target.value.toUpperCase());
  };

  const handleInputFocus = () => {
    setIsDropdownVisible(true);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const links = [
    { href: "#dotnet", text: ".Net" },
    { href: "#dotnet", text: ".Net Core" },
    { href: "#dotnet", text: ".Net MVC" },
    { href: "#cs", text: "C#" },
    { href: "#linq", text: "LINQ" },
    { href: "#ado", text: "ADO.NET" },
    { href: "#sql", text: "SQL" },
    { href: "#react", text: "React.js" },
    { href: "#js", text: "JavaScript" },
    { href: "#jquery", text: "JQuery" },
    { href: "#py", text: "Python" },
    { href: "#json", text: "JSON" },
    { href: "#entity", text: "Entity Framework" },
    { href: "#entity", text: "Entity Framework Core" },
    { href: "#c", text: "C" },
    { href: "#cpp", text: "C++" },
    { href: "#java", text: "Java" },
    { href: "#html", text: "HTML" },
    { href: "#css", text: "CSS" },
    { href: "#dsa", text: "Data Structure" },
    { href: "#excel", text: "Excel" },
    { href: "#prob", text: "Problem Solving" },
    { href: "#lead", text: "Leadership" },
    { href: "#trouble", text: "Troubleshooting" },
    { href: "#comm", text: "Strong Communication" },
  ];

  const filteredLinks = links.filter((link) =>
    link.text.toUpperCase().includes(filterText)
  );

  return (
    <div className='d-flex' style={{ width: '77%', justifyContent: 'end' }}>
      <div className="dropdown" ref={dropdownRef}>
        <div id="myDropdown" className="dropdown-content">
          <input
            type="text"
            placeholder="Search.."
            id="myInput"
            value={filterText}
            onChange={handleFilterChange}
            onFocus={handleInputFocus}
          />
          {isDropdownVisible && (
            <>
              {filteredLinks.length > 0 ? (
                <div className="skills_list">
                  {filteredLinks.map((link, index) => (
                    <div key={index}>
                      {link.text}
                    </div>
                  ))}
                </div>
              ) : (
                filterText && <div className="no-results">I'll be working on this skill shortly</div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const meterRef = useRef(null);

  const skillMeter = (height) => {
    if (meterRef.current) {
      meterRef.current.style.height = height + "%";
    }
  };

  const skills = [
    { name: ".Net", height: 20 },
    { name: "C#", height: 50 },
    { name: "SQL", height: 60 },
    { name: "React.js", height: 70 },
    { name: "JavaScript", height: 80 },
    { name: "JQuery", height: 90 },
    { name: "Python", height: 85 },
    { name: "JSON", height: 75 },
    { name: "Entity Framework", height: 65 },
    { name: "LINQ", height: 65 },
    { name: "ADO.net", height: 65 },
    { name: "C", height: 45 },
    { name: "C++", height: 35 },
    { name: "Java", height: 25 },
    { name: "HTML", height: 20 },
    { name: "CSS", height: 15 },
    { name: "Rasa", height: 15 },
    { name: "Data Structure", height: 10 },
    { name: "Excel", height: 5 },
    { name: "Problem Solving", height: 95 },
    { name: "Leadership", height: 90 },
    { name: "Troubleshooting", height: 85 },
    { name: "Communication", height: 80 },
  ];

  return (
    <div className="skills-section d-flex" style={{ gap: "1vw" }}>
      <div
        className="col-md-6 col-sm-6 d-flex flex-column justify-content-center"
        style={{ width: "77%" }}
      >
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-cell"
              onMouseOver={() => skillMeter(skill.height)}
              style={{ cursor: "pointer" }}
            >
              {skill.name}
            </div>
          ))}
          <div className='d-flex'>
            <div style={{ color: 'white' }}>I've Got More!</div>
            <RiveDown />
          </div>
        </div>
      </div>

      <div className='d-flex position-relative' style={{ width: "30%", textAlign: "center", justifyItems: 'center' }}>
        <div className='' style={{}}>
          <div style={{ color: 'white' }}>Skills Meter</div>
          <div className="skills_meter_bck">
            <div className="skills_meter" ref={meterRef}></div>
          </div>
        </div>
        <div className='h-100 position-absolute d-flex flex-column' style={{ justifyItems: 'center', marginLeft: '1vw', gap: '0vw', marginTop: '17px', width: '70%' }}>
          <div className='d-flex flex-column' style={{ gap: '3vw' }}>
            <RivePro />
            <RiveMed />
          </div>
          <RiveNoob />
        </div>
      </div>
    </div>
  );
};


function App() {
  useEffect(() => {
    const canvasElement = document.querySelector('canvas');
    if (canvasElement && canvasElement.parentNode) {
      canvasElement.parentNode.style.position = 'absolute';
    }
  }, []);
  return (
    <div className="main_body">
      <Navbar />
      {/* top */}
      <div className="w-100" style={{ backgroundColor: 'darkcyan', height: '100vh' }}>
        <div className="container h-100 position-relative">
          <div className="row h-100 align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center w-100">
              <RiveDemo />
              <div className="I_am_text">
                <h2 className="text-white fs-0 fs-sm-2 fs-md-3 fs-lg-4 fs-xl-5">I am Pratishth</h2>
              </div>
            </div>
            <DraggableComponent />
            <div className='position-absolute' style={{ bottom: '14%', right: '5%', width: '16%' }}>
              <img src={dottedLine} alt='fd' style={{ width: '103%', transform: 'rotate(-23deg)' }} />
              <div className="width-fit-content position-absolute" style={{ right: '-13%', bottom: '118%' }}>try to move it</div>
            </div>
          </div>
        </div>
      </div>

      {/* about me */}
      <div id="aboutme" className="w-100 d-flex" style={{ backgroundColor: 'black', height: '100vh', gap: '6%' }}>
        <div className='justify-content-end align-items-center d-flex' style={{ width: '40%' }}>
          <img src={me} alt='me' style={{ width: '60%', height: '56%' }} />
        </div>
        <div className='align-self-center d-flex flex-column flex-wrap' style={{ width: '60%', gap: '3vw' }}>
          {/* <h2 className='fs-2' style={{fontFamily: '"Exo", sans-serif'}}>I am Pratishth Walia</h2> */}
          <h2 className='fs-4' >A Full Stack Developer, currently crafting <span style={{ color: 'blueviolet' }}>magic</span> with .NET!</h2>

          <h2 className='fs-4' style={{ width: '90%', fontFamily: 'Exo' }}>I believe in providing solutions quickly with as efficiency as possible. My aim is to make life easy for everyone with technology and my life with money (just kidding), for satisfaction to have done something worthy to have a name someday and be an inspiration. I love solving problems; it’s more than a skill, it’s a calling. And sometimes, the solutions I can’t find in waking hours come to me in dreams, as if they were always meant to be found.</h2>

        </div>
      </div>

      {/* skills */}
      <div id="skills" className="w-100 position-relative d-flex" style={{ backgroundColor: 'rgb(132 80 13)', height: '100vh', justifyItems: 'center' }}>
        <div className='col-sm-5 col-md-5' style={{ justifyItems: 'center' }}>
          <RiveBrain />
        </div>
        <div className='d-flex w-100 flex-column justify-content-center'>
          <SkillsSection />
          <DropdownFilter />
        </div>
      </div>

      {/* projects */}
      <div id="projects" className="w-100" style={{ backgroundColor: 'blue', height: '100vh',alignContent:'center' }}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{height:'91%'}}>
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div style={{backgroundColor:'yellow',height:'50.5vw'}}></div>
            </div>
            <div className="carousel-item">
              <div style={{backgroundColor:'black',height:'50.5vw'}}></div>
            </div>
            <div className="carousel-item">
              <div style={{backgroundColor:'pink',height:'50.5vw'}}></div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* experience */}
      <div id="experience" className="w-100" style={{ backgroundColor: 'green', height: '100vh' }}></div>
    </div>

  );
}

export default App;
