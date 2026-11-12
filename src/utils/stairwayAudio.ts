/**
 * Web Audio API synthesizer for the iconic acoustic guitar intro of Led Zeppelin's "Stairway to Heaven"
 * Notes: A minor arpeggio intro (A - C - E - A - B - G# - C - E - C - A - C - E - F# - D - F# - F - C - E - C...)
 * Synthesized using dual harmonic oscillators with plucked acoustic guitar envelope and subtle reverb simulation.
 */

class StairwayAudioPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private gainNode: GainNode | null = null;

  // Frequencies for the opening Stairway to Heaven acoustic arpeggio
  // A minor descending chromatic bassline: A4 -> G#4 -> G4 -> F#4 -> F4
  private sequence: { note: number; duration: number }[] = [
    // Measure 1: Am (A - C - E - A)
    { note: 220.00, duration: 0.65 }, // A3 (bass)
    { note: 261.63, duration: 0.35 }, // C4
    { note: 329.63, duration: 0.35 }, // E4
    { note: 440.00, duration: 0.65 }, // A4 (high melody)

    // Measure 2: E+/G# (B - G# - C - E)
    { note: 493.88, duration: 0.65 }, // B4
    { note: 329.63, duration: 0.35 }, // E4
    { note: 261.63, duration: 0.35 }, // C4
    { note: 415.30, duration: 0.65 }, // G#4

    // Measure 3: C/G (C - G - C - E)
    { note: 523.25, duration: 0.65 }, // C5
    { note: 329.63, duration: 0.35 }, // E4
    { note: 261.63, duration: 0.35 }, // C4
    { note: 392.00, duration: 0.65 }, // G4

    // Measure 4: D/F# (F# - D - A - D)
    { note: 369.99, duration: 0.65 }, // F#4
    { note: 293.66, duration: 0.35 }, // D4
    { note: 220.00, duration: 0.35 }, // A3
    { note: 293.66, duration: 0.65 }, // D4

    // Measure 5: Fmaj7 (F - C - A - C)
    { note: 349.23, duration: 0.65 }, // F4
    { note: 261.63, duration: 0.35 }, // C4
    { note: 220.00, duration: 0.35 }, // A3
    { note: 261.63, duration: 0.65 }, // C4

    // Measure 6: G/B - Am cadential flourish
    { note: 392.00, duration: 0.40 }, // G4
    { note: 440.00, duration: 0.40 }, // A4
    { note: 329.63, duration: 0.40 }, // E4
    { note: 220.00, duration: 0.80 }, // A3

    // Pause between phrases
    { note: 0, duration: 0.50 }
  ];

  private currentIndex: number = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    if (this.isPlaying) return;
    this.initContext();
    if (!this.ctx) return;

    this.isPlaying = true;
    this.currentIndex = 0;

    // Master volume control
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(0.28, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);

    this.playNextNote();
  }

  private playNextNote = () => {
    if (!this.isPlaying || !this.ctx || !this.gainNode) return;

    const item = this.sequence[this.currentIndex];
    const duration = item.duration;

    if (item.note > 0) {
      // Acoustic guitar string synthesis with dual oscillators (fundamental + octave harmonic)
      const now = this.ctx.currentTime;
      
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Triangle + gentle sine for warm woody acoustic tone
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(item.note, now);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(item.note * 2, now); // 2nd harmonic overtone

      // Pluck attack & exponential decay envelope
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.linearRampToValueAtTime(0.35, now + 0.02); // sharp pluck
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.6); // resonant decay

      osc1.connect(noteGain);
      osc2.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + duration + 0.7);
      osc2.stop(now + duration + 0.7);
    }

    this.currentIndex = (this.currentIndex + 1) % this.sequence.length;
    this.timerId = window.setTimeout(this.playNextNote, duration * 1000);
  };

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      } catch {
        // ignore
      }
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }
}

export const stairwayAudio = new StairwayAudioPlayer();
