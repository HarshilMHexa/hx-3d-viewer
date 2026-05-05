import React from 'react';
import * as three from 'three';
export { three as THREE };
import * as fiber from '@react-three/fiber';
export { fiber as Fiber };
import * as drei from '@react-three/drei';
export { drei as Drei };

interface Plugin {
    name: string;
    component: React.ComponentType<any>;
}
interface R3FViewerProps {
    color?: string;
    size?: number | [number, number, number];
    position?: [number, number, number];
    plugins?: Plugin[];
    showControls?: boolean;
}
declare const R3FViewer: React.FC<R3FViewerProps>;

export { type Plugin, R3FViewer };
