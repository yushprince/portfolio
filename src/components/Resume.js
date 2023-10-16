import React from 'react';


const Resume = () => {
    
  const googleDriveLink = 'https://drive.google.com/file/d/1Y5JCUU-YSmGAYWph6uNvjMyFUKRwhVu0/view?usp=drive_link';

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
