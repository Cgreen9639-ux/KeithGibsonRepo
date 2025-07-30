import React, { useState, useEffect } from 'react';
import Swipeable from 'react-swipy';
import { supabase } from '../supabaseClient';
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import picture4 from './picture4.jpg';
import picture5 from './picture5.jpg';
import picture6 from './picture6.jpg';
import picture7 from './picture7.jpg';
import picture8 from './picture8.jpg';
import picture9 from './picture9.jpg';
import picture10 from './picture10.jpg';
import picture11 from './picture11.jpg';
import picture12 from './picture12.jpg';
import picture13 from './picture13.jpg';
import picture14 from './picture14.jpg';
import picture15 from './picture15.jpg';
import picture16 from './picture16.jpg';
import picture17 from './picture17.jpg';
import picture18 from './picture18.jpg';
import picture19 from './picture19.jpg';
import picture20 from './picture20.jpg';
import picture21 from './picture21.jpg';
import picture22 from './picture22.jpg';
import picture23 from './picture23.jpg';
import picture24 from './picture24.jpg';
import picture25 from './picture25.jpg';
import picture26 from './picture26.jpg';
import picture27 from './picture27.jpg';
import picture28 from './picture28.jpg';
import picture29 from './picture29.jpg';
import picture30 from './picture30.jpg';
import picture31 from './picture31.jpg';
import picture32 from './picture32.jpg';
import picture33 from './picture33.jpg';
import picture34 from './picture34.jpg';
import picture35 from './picture35.jpg';
import picture36 from './picture36.jpg';
import picture37 from './picture37.jpg';
import picture38 from './picture38.jpg';
import picture39 from './picture39.jpg';
import picture40 from './picture40.jpg';
import picture41 from './picture41.jpg';
import picture42 from './picture42.jpg';
import picture43 from './picture43.jpg';
import picture44 from './picture44.jpg';
import picture45 from './picture45.jpg';
import picture46 from './picture46.jpg';
import picture47 from './picture47.jpg';
import picture48 from './picture48.jpg';
import picture49 from './picture49.jpg';
import picture50 from './picture50.jpg';
import picture51 from './picture51.jpg';
import picture52 from './picture52.jpg';
import picture53 from './picture53.jpg';
import picture54 from './picture54.jpg';
import picture1 from './picture1.jpg';
import picture2 from './picture2.jpg';
import picture3 from './picture3.jpg';
import picture4 from './picture4.jpg';
import picture5 from './picture5.jpg';
import picture6 from './picture6.jpg';
import picture7 from './picture7.jpg';
import picture8 from './picture8.jpg';
import picture9 from './picture9.jpg';
import picture10 from './picture10.jpg';
import picture11 from './picture11.jpg';
import picture12 from './picture12.jpg';
import picture13 from './picture13.jpg';
import picture14 from './picture14.jpg';
import picture15 from './picture15.jpg';
import picture16 from './picture16.jpg';
import picture17 from './picture17.jpg';
import picture18 from './picture18.jpg';
import picture19 from './picture19.jpg';
import picture20 from './picture20.jpg';
import picture21 from './picture21.jpg';
import picture22 from './picture22.jpg';
import picture23 from './picture23.jpg';
import picture24 from './picture24.jpg';
import picture25 from './picture25.jpg';
import picture26 from './picture26.jpg';
import picture27 from './picture27.jpg';
import picture28 from './picture28.jpg';
import picture29 from './picture29.jpg';
import picture30 from './picture30.jpg';
import picture31 from './picture31.jpg';
import picture32 from './picture32.jpg';
import picture33 from './picture33.jpg';
import picture34 from './picture34.jpg';
import picture35 from './picture35.jpg';
import picture36 from './picture36.jpg';
import picture37 from './picture37.jpg';
import picture38 from './picture38.jpg';
import picture39 from './picture39.jpg';
import picture40 from './picture40.jpg';
import picture41 from './picture41.jpg';
import picture42 from './picture42.jpg';
import picture43 from './picture43.jpg';
import picture44 from './picture44.jpg';
import picture45 from './picture45.jpg';
import picture46 from './picture46.jpg';
import picture47 from './picture47.jpg';
import picture48 from './picture48.jpg';
import picture49 from './picture49.jpg';
import picture50 from './picture50.jpg';
import picture51 from './picture51.jpg';
import picture52 from './picture52.jpg';
import picture53 from './picture53.jpg';
import picture54 from './picture54.jpg';
import picture55 from './picture55.jpg';
import picture56 from './picture56.jpg';
import picture57 from './picture57.jpg';
import picture58 from './picture58.jpg';
import picture59 from './picture59.jpg';
import picture60 from './picture60.jpg';
import picture61 from './picture61.jpg';
import picture62 from './picture62.jpg';
import picture63 from './picture63.jpg';
import picture64 from './picture64.jpg';
import picture65 from './picture65.jpg';
import picture66 from './picture66.jpg';
import picture67 from './picture67.jpg';
import picture68 from './picture68.jpg';
import picture69 from './picture69.jpg';
import picture70 from './picture70.jpg';
import picture71 from './picture71.jpg';
import picture72 from './picture72.jpg';
import picture73 from './picture73.jpg';
import picture74 from './picture74.jpg';
import picture75 from './picture75.jpg';
import picture76 from './picture76.jpg';
import picture77 from './picture77.jpg';
import picture78 from './picture78.jpg';
import picture79 from './picture79.jpg';
import picture80 from './picture80.jpg';

const imageList = [
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  picture7,
  picture8,
  picture9,
  picture10,
  picture11,
  picture12,
  picture13,
  picture14,
  picture15,
  picture16,
  picture17,
  picture18,
  picture19,
  picture20,
  picture21,
  picture22,
  picture23,
  picture24,
  picture25,
  picture26,
  picture27,
  picture28,
  picture29,
  picture30,
  picture31,
  picture32,
  picture33,
  picture34,
  picture35,
  picture36,
  picture37,
  picture38,
  picture39,
  picture40,
  picture41,
  picture42,
  picture43,
  picture44,
  picture45,
  picture46,
  picture47,
  picture48,
  picture49,
  picture50,
  picture51,
  picture52,
  picture53,
  picture54,
  picture55,
  picture56,
  picture57,
  picture58,
  picture59,
  picture60,
  picture61,
  picture62,
  picture63,
  picture64,
  picture65,
  picture66,
  picture67,
  picture68,
  picture69,
  picture70,
  picture71,
  picture72,
  picture73,
  picture74,
  picture75,
  picture76,
  picture77,
  picture78,
  picture79,
  picture80,
];

export default imageList;