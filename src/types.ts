export type DebugStyleRule = { className: string; cssRule: string };

export type DebugSequence = {
  id: string;
  direction: 'ltr' | 'rtl';
  rules: DebugStyleRule[];

  slot?: string;
  sourceMap?: string;
  sourceMapLine?: number;
};

export type DebugResult = {
  id: string;
  sequences: Record<string, DebugSequence>;
};
