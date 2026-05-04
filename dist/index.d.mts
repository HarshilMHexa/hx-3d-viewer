import React from 'react';

interface R3FViewerProps {
    color?: string;
    size?: number | [number, number, number];
    position?: [number, number, number];
}
declare const R3FViewer: React.FC<R3FViewerProps>;

export { R3FViewer };
