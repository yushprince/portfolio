import React from 'react';


const Resume = () => {
    
  const googleDriveLink = 'https://docs.google.com/document/d/12If4xCvEDIpOa_r1KUs1ija8Pfd_ZIDE/edit?usp=drive_link&ouid=112653816137304030258&rtpof=true&sd=true';

  return (
    <div>
      <p><strong>Click the button below to view or download my resume:</strong></p>
      <a href={googleDriveLink} target="_blank" rel="noopener noreferrer">
        <button className="border border-blue-500 text-blue-500 font-bold py-2 px-4 rounded-md">View Resume</button>
      </a>
    </div>
  );
};

export default Resume;