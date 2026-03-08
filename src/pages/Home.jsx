import { useEffect, useRef, useState, useCallback } from "react";
import {
  XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Area, AreaChart,
} from "recharts";
import Navbar from "../components/Navbar";
import "../css/Home.css";

const BASE       = import.meta.env.VITE_API_URL ?? "";
const STREAM_URL = `${BASE}/video_feed`;

/* ── Custom tooltip ─────────────────────────────────────────────────────────── */
const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="chart-tooltip">
      <p className="tooltip-time">{label}</p>
      {payload.map((p) => (
        <p key={p.name} className="tooltip-row">
          <span className="tooltip-dot" style={{ background: p.color }} />
          {p.name}: <strong>{p.value}</strong>
        </p>
      ))}
    </div>
  );
};

/* ── Small reusable SVG icons ───────────────────────────────────────────────── */
const Icon = {
  Play:   () => <svg viewBox="0 0 24 24" fill="none"><path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Stop:   () => <svg viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Webcam: () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12z" stroke="currentColor" strokeWidth="2"/></svg>,
  Upload: () => <svg viewBox="0 0 24 24" fill="none"><path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Reset:  () => <svg viewBox="0 0 24 24" fill="none"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 3v5h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Chart:  () => <svg viewBox="0 0 24 24" fill="none"><path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 9L13 14L9 10L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Wave:   () => <svg viewBox="0 0 24 24" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  People: () => <svg viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 17.93 16.58 16.92 15.83 16.17C15.08 15.42 14.07 15 13 15H5C3.93 15 2.92 15.42 2.17 16.17C1.42 16.92 1 17.93 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 11C11.21 11 13 9.21 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7C5 9.21 6.79 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21V19C22.99 18.11 22.7 17.25 22.16 16.55C21.62 15.85 20.86 15.35 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13C16.86 3.35 17.62 3.85 18.17 4.55C18.71 5.25 19.01 6.12 19.01 7.01C19.01 7.89 18.71 8.76 18.17 9.46C17.62 10.16 16.86 10.66 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  In:     () => <svg viewBox="0 0 24 24" fill="none"><path d="M15 3H19C19.53 3 20.04 3.21 20.41 3.58C20.79 3.96 21 4.47 21 5V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Out:    () => <svg viewBox="0 0 24 24" fill="none"><path d="M9 21H5C4.47 21 3.96 20.79 3.58 20.41C3.21 20.04 3 19.53 3 19V5C3 4.47 3.21 3.96 3.58 3.58C3.96 3.21 4.47 3 5 3H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 17L9 12L14 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Bolt:   () => <svg viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ArrowUp:() => <svg viewBox="0 0 24 24" fill="none"><path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Dash:   () => <svg viewBox="0 0 24 24" fill="none"><path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

/* ── Main component ─────────────────────────────────────────────────────────── */
export default function Home() {
  const [animate,      setAnimate]      = useState(false);
  const [metricsIn,    setMetricsIn]    = useState(0);
  const [metricsOut,   setMetricsOut]   = useState(0);
  const [isRunning,    setIsRunning]    = useState(false);
  const [sourceLabel,  setSourceLabel]  = useState("Webcam");
  const [peakCount,    setPeakCount]    = useState(0);
  const [chartData,    setChartData]    = useState([]);
  const [uploading,    setUploading]    = useState(false);
  const [uploadMsg,    setUploadMsg]    = useState("");
  const [streamActive, setStreamActive] = useState(false);
  const fileInputRef = useRef(null);

  const timeLabel = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  /* poll metrics every 1 s */
  useEffect(() => {
    setAnimate(true);
    const poll = async () => {
      try {
        const res  = await fetch(`${BASE}/api/metrics`);
        const data = await res.json();
        setMetricsIn(data.in);
        setMetricsOut(data.out);
        setIsRunning(data.is_running);
        setSourceLabel(data.source_label ?? "Webcam");
        setPeakCount((p) => Math.max(p, data.occupancy ?? 0));
        setChartData((prev) => {
          const next = [...prev, { time: timeLabel(), In: data.in, Out: data.out }];
          return next.length > 20 ? next.slice(-20) : next;
        });
      } catch { /* backend unreachable */ }
    };
    poll();
    const id = setInterval(poll, 1000);
    return () => clearInterval(id);
  }, []);

  const handleUpload = useCallback(async (file) => {
    if (!file) return;
    setUploading(true); setUploadMsg("");
    const form = new FormData();
    form.append("video", file);
    try {
      const res  = await fetch(`${BASE}/api/upload`, { method: "POST", body: form });
      const data = await res.json();
      if (data.success) { setUploadMsg(`✓ ${data.source_label}`); setStreamActive(true); }
      else               setUploadMsg(`✗ ${data.error}`);
    } catch { setUploadMsg("✗ Upload failed"); }
    finally  { setUploading(false); }
  }, []);

  const handleUseWebcam = useCallback(async () => {
    try { await fetch(`${BASE}/api/source/webcam`, { method: "POST" }); setStreamActive(true); setUploadMsg("✓ Webcam"); }
    catch { setUploadMsg("✗ Backend unreachable"); }
  }, []);

  const handleReset = useCallback(async () => {
    try { await fetch(`${BASE}/api/reset`, { method: "POST" }); setChartData([]); setPeakCount(0); setUploadMsg("✓ Reset"); }
    catch { setUploadMsg("✗ Reset failed"); }
  }, []);

  const occupancy = Math.max(0, metricsIn - metricsOut);

  return (
    <div className="home-page">
      <Navbar />

      {/* bg blobs */}
      <div className="background-animation">
        <div className="shape shape-1" /><div className="shape shape-2" /><div className="shape shape-3" />
      </div>

      <div className={`home-layout ${animate ? "home-enter" : ""}`}>

        {/* ── Header strip ── */}
        <header className="home-header">
          <div className="badge"><span className="badge-dot" />Live Dashboard</div>
          <h1 className="page-title">People <span className="gradient-text">Counter</span></h1>
          <p className="page-subtitle">Real-time foot-traffic · {new Date().toLocaleTimeString()}</p>
        </header>

        {/* ══════════ LEFT — Video ══════════ */}
        <section className="monitoring-section">
          <div className="section-header">
            <h2 className="section-heading"><Icon.Wave /> Live Feed</h2>
            <div className={`status-indicator ${isRunning ? "running" : ""}`}>
              <span className="status-dot" />
              <span className="status-text">{isRunning ? "Live" : "Idle"}</span>
            </div>
          </div>

          <div className="cctv-box">
            <div className="cctv-overlay"><div className="cctv-grid-overlay" /></div>

            {streamActive ? (
              <img src={STREAM_URL} alt="Live feed" className="live-stream-img"
                   onError={() => setStreamActive(false)} />
            ) : (
              <div className="cctv-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path d="M23 19C23 19.53 22.79 20.04 22.41 20.41C22.04 20.79 21.53 21 21 21H3C2.47 21 1.96 20.79 1.58 20.41C1.21 20.04 1 19.53 1 19V8C1 7.47 1.21 6.96 1.58 6.58C1.96 6.21 2.47 6 3 6H7L9 3H15L17 6H21C21.53 6 22.04 6.21 22.41 6.58C22.79 6.96 23 7.47 23 8V19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 17C14.21 17 16 15.21 16 13C16 10.79 14.21 9 12 9C9.79 9 8 10.79 8 13C8 15.21 9.79 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>CCTV Stream</p>
                <span className="cctv-info">Press Start or upload a video</span>
              </div>
            )}

            {streamActive && (
              <div className="stream-source-badge">
                <span className="status-dot small" />{sourceLabel}
              </div>
            )}

            {/* Controls */}
            <div className="cctv-controls">
              <button className="control-btn" onClick={() => setStreamActive(true)}><Icon.Play />Start</button>
              <button className="control-btn" onClick={() => setStreamActive(false)}><Icon.Stop />Stop</button>
              <button className="control-btn webcam-btn" onClick={handleUseWebcam}><Icon.Webcam />Webcam</button>
              <button className="control-btn upload-btn" disabled={uploading}
                      onClick={() => fileInputRef.current?.click()}>
                <Icon.Upload />{uploading ? "…" : "Upload"}
              </button>
              <button className="control-btn reset-btn" onClick={handleReset}><Icon.Reset />Reset</button>
              <input ref={fileInputRef} type="file"
                     accept="video/mp4,video/avi,video/mov,video/mkv,video/webm"
                     style={{ display: "none" }}
                     onChange={(e) => handleUpload(e.target.files?.[0])} />
            </div>
          </div>

          {uploadMsg && (
            <p className={`upload-msg ${uploadMsg.startsWith("✓") ? "success" : "error"}`}>
              {uploadMsg}
            </p>
          )}
        </section>

        {/* ══════════ RIGHT — Analytics ══════════ */}
        <section className="analytics-section">

          {/* 4 metric cards */}
          <div className="section-header">
            <h2 className="section-heading"><Icon.Chart /> Analytics</h2>
            <span className="analytics-timestamp">Updated live</span>
          </div>

          <div className="analytics-grid">
            <div className="analytics-card occupancy">
              <div className="card-icon"><Icon.People /></div>
              <div className="card-content">
                <span className="metric-label">Occupancy</span>
                <span className="metric-value">{occupancy}</span>
                <div className="metric-trend up"><Icon.ArrowUp /><span>In − Out</span></div>
              </div>
            </div>

            <div className="analytics-card entries">
              <div className="card-icon"><Icon.In /></div>
              <div className="card-content">
                <span className="metric-label">Total In</span>
                <span className="metric-value">{metricsIn}</span>
                <div className="metric-trend neutral"><Icon.Dash /><span>Entries</span></div>
              </div>
            </div>

            <div className="analytics-card exits">
              <div className="card-icon"><Icon.Out /></div>
              <div className="card-content">
                <span className="metric-label">Total Out</span>
                <span className="metric-value">{metricsOut}</span>
                <div className="metric-trend neutral"><Icon.Dash /><span>Exits</span></div>
              </div>
            </div>

            <div className="analytics-card peak">
              <div className="card-icon"><Icon.Bolt /></div>
              <div className="card-content">
                <span className="metric-label">Peak</span>
                <span className="metric-value">{peakCount}</span>
                <div className="metric-trend down"><Icon.Dash /><span>Session high</span></div>
              </div>
            </div>
          </div>

          {/* Traffic chart — fills remaining height */}
          <div className="chart-section">
            <div className="section-header" style={{ marginBottom: "4px" }}>
              <h2 className="section-heading"><Icon.Wave /> Traffic Flow</h2>
              <span className="analytics-timestamp">Last 20 pts</span>
            </div>

            <div className="chart-card">
              {chartData.length === 0 ? (
                <div className="chart-empty">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p>Waiting for data…</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 4, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="gIn"  x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#3b82f6" stopOpacity={0.32}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="gOut" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#fbbf24" stopOpacity={0.32}/>
                        <stop offset="95%" stopColor="#fbbf24" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="time" tick={{ fill:"#888", fontSize:9 }}
                           axisLine={{ stroke:"rgba(255,255,255,0.08)" }} tickLine={false}
                           interval="preserveStartEnd" />
                    <YAxis tick={{ fill:"#888", fontSize:9 }} axisLine={false} tickLine={false} allowDecimals={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ paddingTop:"4px", fontSize:".68rem", color:"#ccc" }} />
                    <Area type="monotone" dataKey="In"  stroke="#3b82f6" strokeWidth={2}
                          fill="url(#gIn)"  dot={false} activeDot={{ r:4, fill:"#3b82f6" }} />
                    <Area type="monotone" dataKey="Out" stroke="#fbbf24" strokeWidth={2}
                          fill="url(#gOut)" dot={false} activeDot={{ r:4, fill:"#fbbf24" }} />
                  </AreaChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          {/* 3 info pills */}
          <div className="info-cards">
            <div className="info-card">
              <span className="info-icon">📊</span>
              <div className="info-content">
                <h4>Net Flow</h4>
                <p>{metricsIn - metricsOut >= 0 ? "+" : ""}{metricsIn - metricsOut}</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">🎯</span>
              <div className="info-content">
                <h4>Source</h4>
                <p style={{ fontSize:".68rem", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:"80px" }}>{sourceLabel}</p>
              </div>
            </div>
            <div className="info-card">
              <span className="info-icon">📡</span>
              <div className="info-content">
                <h4>Backend</h4>
                <p>{isRunning ? "Streaming" : "Idle"}</p>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}