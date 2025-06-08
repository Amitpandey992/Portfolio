import React from 'react';
// Importing icons from react-icons
import { 
  DiMongodb, 
  DiNodejsSmall, 
  DiReact, 
  DiJavascript1, // For Express.js (no official Express icon, using JS as a proxy)
  DiPostgresql, 
  SiSpotify, 
  SiYoutube, 
  SiInstagram, 
  SiX, 
  SiReddit, 
  SiSnapchat, 
  SiPinterest, 
  SiWhatsapp, 
  SiGmail, 
  SiLinkedin, 
  SiFiverr, 
  SiGithub, 
  SiPostman, 
  SiNginx 
} from 'react-icons/di'; // Devicons
import { SiExpress } from 'react-icons/si'; // Simple Icons

const IconList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
      {/* MERN Stack */}
      <div style={{ textAlign: 'center' }}>
        <DiMongodb size={40} color="#47A248" />
        <p>MongoDB</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SiExpress size={40} color="#000000" />
        <p>Express.js</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DiReact size={40} color="#61DAFB" />
        <p>React</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <DiNodejsSmall size={40} color="#339933" />
        <p>Node.js</p>
      </div>

      {/* PostgreSQL */}
      <div style={{ textAlign: 'center' }}>
        <DiPostgresql size={40} color="#336791" />
        <p>PostgreSQL</p>
      </div>

      {/* Spotify */}
      <div style={{ textAlign: 'center' }}>
        <SiSpotify size={40} color="#1DB954" />
        <p>Spotify</p>
      </div>

      {/* YouTube */}
      <div style={{ textAlign: 'center' }}>
        <SiYoutube size={40} color="#FF0000" />
        <p>YouTube</p>
      </div>

      {/* Instagram */}
      <div style={{ textAlign: 'center' }}>
        <SiInstagram size={40} color="#E4405F" />
        <p>Instagram</p>
      </div>

      {/* X */}
      <div style={{ textAlign: 'center' }}>
        <SiX size={40} color="#000000" />
        <p>X</p>
      </div>

      {/* Reddit */}
      <div style={{ textAlign: 'center' }}>
        <SiReddit size={40} color="#FF4500" />
        <p>Reddit</p>
      </div>

      {/* Snapchat */}
      <div style={{ textAlign: 'center' }}>
        <SiSnapchat size={40} color="#FFFC00" />
        <p>Snapchat</p>
      </div>

      {/* Pinterest */}
      <div style={{ textAlign: 'center' }}>
        <SiPinterest size={40} color="#BD081C" />
        <p>Pinterest</p>
      </div>

      {/* WhatsApp */}
      <div style={{ textAlign: 'center' }}>
        <SiWhatsapp size={40} color="#25D366" />
        <p>WhatsApp</p>
      </div>

      {/* Gmail */}
      <div style={{ textAlign: 'center' }}>
        <SiGmail size={40} color="#D14836" />
        <p>Gmail</p>
      </div>

      {/* LinkedIn */}
      <div style={{ textAlign: 'center' }}>
        <SiLinkedin size={40} color="#0A66C2" />
        <p>LinkedIn</p>
      </div>

      {/* Fiverr */}
      <div style={{ textAlign: 'center' }}>
        <SiFiverr size={40} color="#1DBF73" />
        <p>Fiverr</p>
      </div>

      {/* GitHub */}
      <div style={{ textAlign: 'center' }}>
        <SiGithub size={40} color="#181717" />
        <p>GitHub</p>
      </div>

      {/* Postman */}
      <div style={{ textAlign: 'center' }}>
        <SiPostman size={40} color="#FF6C37" />
        <p>Postman</p>
      </div>

      {/* Nginx */}
      <div style={{ textAlign: 'center' }}>
        <SiNginx size={40} color="#009639" />
        <p>Nginx</p>
      </div>
    </div>
  );
};

export default IconList;