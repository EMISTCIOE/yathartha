import { useState, useEffect } from 'react';
import '../styles/stats.css';

const Stats = () => {
  const [totalProjects, setTotalProjects] = useState(0);
  const [expectedParticipants, setExpectedParticipants] = useState(0);
  const [competitions, setCompetitions] = useState(0);
  const [totalVisitors,setTotalVisitors]=useState(0);

  const totalProjectsTarget = 50;
  const expectedParticipantsTarget = 10000;
  const competitionsTarget = 10;
  const totalVisitorsTarget=50000;

  const animationDuration = 20;

  useEffect(() => {
    const totalProjectsInterval = setInterval(() => {
      setTotalProjects((prevTotalProjects) =>
        prevTotalProjects + (totalProjectsTarget / animationDuration)
      );
    }, 50);

    const expectedParticipantsInterval = setInterval(() => {
      setExpectedParticipants((prevExpectedParticipants) =>
        prevExpectedParticipants + (expectedParticipantsTarget / animationDuration)
      );
    }, 50);

    const competitionsInterval = setInterval(() => {
      setCompetitions((prevCompetitions) =>
        prevCompetitions + (competitionsTarget / animationDuration)
      );
    }, 50);

    const totalVisitorsInterval=setInterval(()=>{
      setTotalVisitors((prevTotalVisitors)=>
      prevTotalVisitors+(totalVisitorsTarget/animationDuration)
      );
    },50);

    // Clear intervals on component unmount
    return () => {
      clearInterval(totalProjectsInterval);
      clearInterval(expectedParticipantsInterval);
      clearInterval(competitionsInterval);
      clearInterval(totalVisitorsInterval);
    };
  }, []);

  return (
    <div className="stats-section">
      <div className="component">
        <div className="inner-section">
          <h2>Total Projects</h2>
          <p>{Math.min(totalProjects, totalProjectsTarget).toFixed(0)}<sup>+</sup></p>
        </div>
      </div>
      <div className="component">
        <div className="inner-section">
          <h2>Expected Participants</h2>
          <p>{Math.min(expectedParticipants, expectedParticipantsTarget).toFixed(0)}<sup>+</sup></p>
        </div>
      </div>
      <div className="component">
        <div className="inner-section">
          <h2>Competitions</h2>
          <p>{Math.min(competitions, competitionsTarget).toFixed(0)}<sup>+</sup></p>
        </div>
      </div>

      <div className="component">
        <div className="inner-section">
          <h2>Total Visitors</h2>
          <p>{Math.min(totalVisitors, totalVisitorsTarget).toFixed(0)}<sup>+</sup></p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
