# hx-3d-viewer

A closed-source 3D viewer SDK built with React, Three.js, and @react-three/fiber.

## Installation

```bash
npm install github:username/hx-3d-viewer
```

## Usage

```tsx
import { R3FViewer } from 'hx-3d-viewer';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <R3FViewer 
        color="royalblue" 
        size={2} 
        position={[0, 0, 0]} 
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | `'orange'` | The color of the cube |
| `size` | `number \| [number, number, number]` | `1` | The size of the cube |
| `position` | `[number, number, number]` | `[0, 0, 0]` | The position of the cube |
