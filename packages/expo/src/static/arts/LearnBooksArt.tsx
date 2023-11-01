import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const LearnBooks = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#173444"
        d="M5.421 45.449c-2.442-4.954-.325-10.777 4.728-13.006L74.54 4.036c5.053-2.229 11.13-.02 13.57 4.934l40.72 82.612c4.883 9.907.65 21.553-9.456 26.012l-55.242 24.37c-5.053 2.229-11.129.02-13.57-4.934L5.421 45.449Z"
      />
    </G>
    <Path
      fill="#5089DA"
      d="m113.422 101.171 16.538-7.296c4.259 8.641.566 18.798-8.248 22.687l-.578.255-7.712-15.646Z"
    />
    <Path
      fill="#173444"
      d="m113.422 101.171 16.538-7.296c4.259 8.641.566 18.798-8.248 22.687l-.578.255-7.712-15.646Z"
    />
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={10}
      d="M50.277 95.605c.264-6.386 2.594-18.825 9.802-17.49 9.01 1.667 16.783 13.285 22.747 8.773 4.77-3.61 10.362-17.737 12.561-24.35"
    />
    <G filter="url(#b)">
      <Path
        fill="#6CB9FF"
        d="M232.579 45.449c2.442-4.954.325-10.777-4.728-13.006L163.46 4.036c-5.053-2.229-11.129-.02-13.571 4.934L109.17 91.582c-4.883 9.907-.65 21.553 9.456 26.012l55.242 24.37c5.053 2.229 11.129.02 13.571-4.934l45.14-91.581Z"
      />
    </G>
    <Path
      fill="#6CB9FF"
      d="m124.578 101.171-16.538-7.296c-4.259 8.641-.566 18.798 8.248 22.687l.578.255 7.712-15.646Z"
    />
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={10}
      d="M187.723 95.605c-.264-6.386-2.594-18.825-9.802-17.49-9.009 1.667-16.783 13.285-22.747 8.773-4.771-3.61-10.362-17.737-12.561-24.35"
    />
    <G filter="url(#c)">
      <Path
        fill="#99FD89"
        d="M69.758 17.411c0-5.523 4.477-10 10-10h79.648c5.523 0 10 4.478 10 10v101.983c0 11.046-8.954 20-20 20H79.758c-5.523 0-10-4.477-10-10V17.411Z"
      />
    </G>
    <Path
      fill="#99FD89"
      d="M149.477 120.54h19.929c0 10.413-8.441 18.855-18.854 18.855h-1.075V120.54Z"
    />
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={10}
      d="M89.688 87.455c3.376-6.206 11.751-17.5 18.235-13.032 8.105 5.585 10.131 20.48 18.236 18.618 6.484-1.49 18.911-13.033 24.314-18.618"
    />
    <Path
      stroke="#FEFEFE"
      strokeLinecap="round"
      strokeWidth={10}
      d="M89.688 87.455c3.376-6.206 11.751-17.5 18.235-13.032 8.105 5.585 10.131 20.48 18.236 18.618 6.484-1.49 18.911-13.033 24.314-18.618"
    />
    <Defs></Defs>
  </Svg>
);
export default LearnBooks;