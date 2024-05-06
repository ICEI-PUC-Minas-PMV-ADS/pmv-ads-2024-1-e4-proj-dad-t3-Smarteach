'use client'
import { useSession } from "next-auth/react";
import React from 'react';
import ClassList from "@/components/class-list";
import Mural from "@/components/mural";

function UserProfile(props,params) {
  const {avatarUrl } = props;
  const session = useSession();

  const profileStyle = {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '20px',
    maxWidth: '600px',
    marginLeft: '300px',
    height:'400px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const avatarStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
  };

  const infoStyle = {
    marginLeft: '20px',
  };

  const headingStyle = {
    margin: '0',
    fontSize: '24px',
    color: '#333',
    width: '400px'
  };

  const paragraphStyle = {
    margin: '5px 0',
    color: '#666',
  };

  return (
    <div style={profileStyle}>
        <img style={avatarStyle} src={avatarUrl} alt="Avatar" />
      <div style={infoStyle}>
        <h2 style={headingStyle}>{session?.data?.user?.name}</h2>
        <h3>Professor(a)</h3>
        <p style={paragraphStyle}><strong>Email:</strong> {session?.data?.user?.email}</p>
      </div>
    <div style={{ display: 'flex', marginLeft: '-600px',marginTop:'1000px' }}>
    <ClassList />
    </div>
    <div style={{ display: 'flex', marginLeft: '100px', marginTop:'-50px' }}>
    <Mural />
    </div>
    </div>

  );
}

// Exemplo de uso:
const user = {
  avatarUrl: 'https://github.com/shadcn.png',
};

function App() {
  return (
    
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <UserProfile {...user} />
    </div>
  );
}

export default App;