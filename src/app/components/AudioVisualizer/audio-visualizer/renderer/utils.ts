export class Utils {
  /**
   * fractionate
   */
  static fractionate = (val: number, minVal: number, maxVal: number) =>
    (val - minVal) / (maxVal - minVal);
  /**
   * modulate
   */
  static modulate = (
    val: number,
    minVal: number,
    maxVal: number,
    outMin: number,
    outMax: number
  ) => {
    const fr = Utils.fractionate(val, minVal, maxVal);
    const delta = outMax - outMin;
    return outMin + fr * delta;
  };
  /**
   * compute the average value of an Uint8Array
   */
  static avg = (arr: Uint8Array) =>
    arr.reduce((sum, b) => sum + b, 0) / arr.length;
  /**
   * compute the maximum value of an Uint8Array
   */
  static max = (arr: Uint8Array) => arr.reduce((a, b) => Math.max(a, b));

  /**
   * Analyse frequency data
   */
  static frequencyAnalyser = (analyser: AnalyserNode) => {
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);

    const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
    const upperHalfArray = dataArray.slice(
      dataArray.length / 2 - 1,
      dataArray.length - 1
    );

    const overallAvg = Utils.avg(dataArray);
    const lowerMax = Utils.max(lowerHalfArray);
    const lowerAvg = Utils.avg(lowerHalfArray);
    const upperMax = Utils.max(upperHalfArray);
    const upperAvg = Utils.avg(upperHalfArray);

    const lowerMaxFr = lowerMax / lowerHalfArray.length;
    const lowerAvgFr = lowerAvg / lowerHalfArray.length;
    const upperMaxFr = upperMax / upperHalfArray.length;
    const upperAvgFr = upperAvg / upperHalfArray.length;
    return {
      analyser,
      frequency: {
        dataArray,
        properties: {
          // {number} overallAvg - Overall average of the frequency data
          overallAvg,
          // {number} lowerMax - Maximum value of the lower half of the frequency data
          lowerMax,
          // {number} lowerAvg - Average value of the lower half of the frequency data
          lowerAvg,
          // {number} upperMax - Maximum value of the upper half of the frequency data
          upperMax,
          // {number} upperAvg - Average value of the upper half of the frequency data
          upperAvg,
          // {number} lowerMaxFr - Fractional value of the maximum value of the lower half of the frequency data
          lowerMaxFr,
          // {number} lowerAvgFr - Fractional value of the average value of the lower half of the frequency data
          lowerAvgFr,
          // {number} upperMaxFr - Fractional value of the maximum value of the upper half of the frequency data
          upperMaxFr,
          // {number} upperAvgFr - Fractional value of the average value of the upper half of the frequency data
          upperAvgFr,
        },
      },
    };
  };
  /**
   * Analyse audio file
   * @param media
   * @returns Object containing the analyser, and various audio data
   */
  static createAudioAnalyzer = (media: HTMLMediaElement) => {
    const context = new AudioContext();
    const src = context.createMediaElementSource(media);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    return analyser;
  };
}
