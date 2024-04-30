import { AudioVisualizer } from "./audio-visualizer";
import { Track } from "./model";

export const AUDIO_PLAYER_ID = "audio-player";
export const AUDIO_VISUALIZER_ID = "audio-visualizer";

export class AudioPlayer {
  private audioElement: HTMLAudioElement | null = null;
  private visualizerElement: HTMLDivElement | null = null;
  private tracks: Track[] = [];
  private visualizer: AudioVisualizer;

  constructor(
    elementId: string,
    visualizeId: string,
    Visualizer: typeof AudioVisualizer
  ) {
    const el = document.getElementById(elementId);
    if (!el) {
      throw new Error(`Element with id ${elementId} not found`);
    }
    this.audioElement = document.createElement("audio");
    this.visualizerElement = document.getElementById(
      visualizeId
    )! as HTMLDivElement;
    this.audioElement.id = AUDIO_PLAYER_ID;
    el.appendChild(this.audioElement);
    this.visualizer = new Visualizer(this.audioElement, this.visualizerElement);
    this.visualizer.initializeVisualizer();
  }

  public loadTrack(track: Track) {
    this.audioElement!.src = track.url;
  }

  public loadTracks(tracks: Track[]) {
    this.tracks = tracks;
  }

  public play() {
    this.audioElement?.play();
    this.visualizer.renderVisualizer();
  }

  public pause() {
    this.audioElement?.pause();
  }

  public stop() {
    this.audioElement!.currentTime = 0;
    this.audioElement?.pause();
  }

  public next() {
    this.audioElement?.pause();
    const currentIndex = this.tracks.findIndex(
      (track) => track.url === this.audioElement?.src
    );
    if (this.tracks[currentIndex + 1]) {
      this.audioElement!.src = this.tracks[currentIndex + 1].url;
      this.audioElement!.play();
    }
  }

  public previous() {
    this.audioElement?.pause();
    const currentIndex = this.tracks.findIndex(
      (track) => track.url === this.audioElement?.src
    );
    if (currentIndex > 0) {
      this.audioElement!.src = this.tracks[currentIndex - 1].url;
      this.audioElement!.play();
    }
  }
}
