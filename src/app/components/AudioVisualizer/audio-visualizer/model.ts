/**
 * The type of stem instrument. It will define the type of visual effect to display
 */
export const stemType = {
  VOICE: "voice",
  DRUMS: "drums",
  BASS: "bass",
  GUITAR: "guitar",
  PIANO: "piano",
  SYNTH: "synth",
  STRINGS: "strings",
  CHORUS: "chorus",
  FX: "fx",
} as const;

/**
 * The type of stem as string
 */
export type StemType = (typeof stemType)[keyof typeof stemType];

/**
 * The type of renderer to use to display the stem as const object
 */
export const rendererTypes = {
  // For now only ball exists
  BALL: "ball",
} as const;

/**
 * The type of renderer to use to display the stem as string
 */
export type RendererType = (typeof rendererTypes)[keyof typeof rendererTypes];

/**
 * The default renderer for each stem type
 */
export type DefaultRederType = Record<StemType, RendererType>;

/**
 * A stem is an audio track of one of the instruments
 */
export type Stem = {
  type: StemType;
  url: string;
  options?: StemOption;
};

/**
 * Override the default renederer for a specific stem
 */
export type StemOption = {
  rendererType?: RendererType;
};

/**
 * A track is a music, it can have multiple stems (track with one instrument) or not
 */
export type Track = {
  trackId: string;
  title: string;
  authorId: string;
  date: string;
  duration: string;
  url: string;
  stems?: Stem[];
};

export type AudioVisualizerConfiguration = {};

/**
 * All results profided by the audio analyser plus the analyser instance itself
 */
export type AudioAnalysisResults = {
  analyser: AnalyserNode;
  frequency: AudioData;
  volume?: AudioData;
};

/**
 * Represent the data of an audio track from a specific property (frequency or volume)
 */
export type AudioData<T = AudioDataPorperties> = {
  dataArray: Uint8Array;
  properties: T;
};

/**
 * Represent extra properties computed directly from the audio data array
 */
export type AudioDataPorperties = {
  overallAvg: number;
  lowerMax: number;
  lowerAvg: number;
  upperMax: number;
  upperAvg: number;
  lowerMaxFr: number;
  lowerAvgFr: number;
  upperMaxFr: number;
  upperAvgFr: number;
};
