"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ServerStatus {
  online: boolean;
  players: number;
  loading: boolean;
}

const ServerContext = createContext<ServerStatus | undefined>(undefined);

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: 0,
    loading: true,
  });

  const fetchStatus = async () => {
    try {
      const response = await fetch("/api/proxy-status");
      
      if (!response.ok) throw new Error("Network response was not ok");
      
      const data = await response.json();
      
      setStatus({
        online: data.status === "online",
        players: data.players || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Gagal sinkronisasi status server:", error);
      setStatus({ online: false, players: 0, loading: false });
    }
  };

  useEffect(() => {
    fetchStatus();

    const interval = setInterval(fetchStatus, 15000); 
    
    return () => clearInterval(interval);
  }, []);

  return (
    <ServerContext.Provider value={status}>
      {children}
    </ServerContext.Provider>
  );
}

export const useServer = () => {
  const context = useContext(ServerContext);
  if (!context) {
    throw new Error("useServer harus digunakan di dalam ServerProvider");
  }
  return context;
};