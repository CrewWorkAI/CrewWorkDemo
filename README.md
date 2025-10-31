# CrewWorkDemo
See the platform in action

## 📡 WebGPU Dial-Up Modem Simulator

An authentic dial-up modem sound synthesizer and visualizer built entirely with WebGPU shaders.

### Features

- **Pure WebGPU Audio Synthesis**: Uses compute shaders to generate realistic modem sounds from scratch
- **Real-time Visualization**: Fragment shaders render live waveforms and spectrum analysis
- **Authentic Modem Sequence**:
  1. Dial tone (350Hz + 440Hz)
  2. DTMF tone dialing (dual-frequency multi-frequency tones)
  3. Ring back tone
  4. Handshake (frequency sweeps, chirps, and warbles)
  5. Data carrier tone with amplitude and phase modulation
- **Retro UI**: Classic green terminal aesthetic with CRT scanline effects

### How to Use

1. Open `index.html` in a WebGPU-enabled browser (Chrome/Edge 113+)
2. Click "CONNECT" to start the modem sequence
3. Watch the real-time visualization and listen to the authentic sounds
4. Click "DISCONNECT" to stop

### Technical Details

- **Compute Shader**: Generates 20 seconds of audio samples at 44.1kHz
- **Fragment Shader**: Renders waveform (top) and frequency spectrum (bottom)
- **Web Audio API**: Plays back GPU-generated audio
- **No external libraries**: Pure WebGPU and vanilla JavaScript

### Browser Requirements

- Chrome/Edge 113+ or any browser with WebGPU support
- WebGPU must be enabled (enabled by default in recent versions)
