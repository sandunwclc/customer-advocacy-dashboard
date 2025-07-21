'use client';
import { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { getUserRole } from '../../lib/auth';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [role, setRole] = useState('');

  useEffect(() => {
    const email = localStorage.getItem('email') || '';
    setRole(getUserRole(email));

    setData([
      { channel: 'Twitter', advocates: 12 },
      { channel: 'LinkedIn', advocates: 25 },
      { channel: 'YouTube', advocates: 8 },
      { channel: 'Blog', advocates: 14 },
    ]);
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Welcome, {role}</h2>
      <div className="h-96">
        <ResponsiveBar
          data={data}
          keys={['advocates']}
          indexBy="channel"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          axisBottom={{ legend: 'Channels', legendPosition: 'middle', legendOffset: 32 }}
          axisLeft={{ legend: 'Advocates', legendPosition: 'middle', legendOffset: -40 }}
        />
      </div>
    </div>
  );
}