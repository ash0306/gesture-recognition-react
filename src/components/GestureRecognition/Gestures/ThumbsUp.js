import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const thumbsUpDescription = new GestureDescription('Thumbs_Up');

thumbsUpDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 0.9);
thumbsUpDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpRight, 0.9);

for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
  thumbsUpDescription.addCurl(finger, FingerCurl.FullCurl, 1.0);
  thumbsUpDescription.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}

thumbsUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpDescription.addDirection(Finger.Index, FingerDirection.HorizontalLeft, 1.0);
thumbsUpDescription.addDirection(Finger.Index, FingerDirection.HorizontalRight, 1.0);
thumbsUpDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 1.0);

export default thumbsUpDescription;