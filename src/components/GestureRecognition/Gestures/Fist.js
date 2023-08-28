import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const fistGestureDescription = new GestureDescription('Fist');

// thumb:
fistGestureDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
fistGestureDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 1.0);

// index:
fistGestureDescription.addCurl(Finger.Index, FingerCurl.FullCurl, 1.0);
fistGestureDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle:
fistGestureDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
fistGestureDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// ring:
fistGestureDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
fistGestureDescription.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

// pinky:
fistGestureDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
fistGestureDescription.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default fistGestureDescription;