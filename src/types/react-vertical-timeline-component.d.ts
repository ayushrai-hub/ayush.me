declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineProps {
    animate?: boolean;
    className?: string;
    children?: React.ReactNode;
  }

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties | { [key: string]: string };
    date?: string | React.ReactNode;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
