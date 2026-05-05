import React from 'react';

interface Plugin {
    name: string;
    component: React.ComponentType<any>;
}
interface R3FViewerProps {
    color?: string;
    size?: number | [number, number, number];
    position?: [number, number, number];
    plugins?: Plugin[];
}
declare const R3FViewer: React.FC<R3FViewerProps>;

export { type Plugin, R3FViewer };
