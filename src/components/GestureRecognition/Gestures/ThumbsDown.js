import { Finger, FingerCurl, FingerDirection } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

const thumbsDownGestureDescription = new GestureDescription('Thumbs_Down');

// thumb:
thumbsDownGestureDescription.addCurl(Finger.Thumb, FingerCurl.FullCurl, 1.0);
thumbsDownGestureDescription.addDirection(Finger.Thumb, FingerDirection.VerticalDown, 1.0);

// index:
thumbsDownGestureDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
thumbsDownGestureDescription.addDirection(Finger.Index, FingerDirection.VerticalDown, 1.0);

// middle:
thumbsDownGestureDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
thumbsDownGestureDescription.addDirection(Finger.Middle, FingerDirection.VerticalDown, 1.0);

// ring:
thumbsDownGestureDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
thumbsDownGestureDescription.addDirection(Finger.Ring, FingerDirection.VerticalDown, 1.0);

// pinky:
thumbsDownGestureDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
thumbsDownGestureDescription.addDirection(Finger.Pinky, FingerDirection.VerticalDown, 1.0);

export default thumbsDownGestureDescription;