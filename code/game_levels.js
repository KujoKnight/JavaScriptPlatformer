var GAME_LEVELS = [
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                  ###                         ",
   "                                                                                 #####                        ",
   "        ###                                                                       ###                         ",
   "       #####                                                  ###                                             ",
   "        ###                                                  #####                                            ",
   "                          ###                                 ###                                             ",
   "                         #####                                                                                ",
   "                          ###                                                                                 ",
   "                                                                          p                                   ",
   "                                                                                      o         o             ",
   "                                                                          a                               o?? ",
   "                                                                      xxxxxxxxx       xx        xx      xxcccc",
   "              o       o       o              o               o       xzzzzzzzzz                           zccc",
   "  @                       a                                    a    xzzzzzzzzzz                            zcc",
   "ccccxxxxxxxxxxx   x   xxxxxxxxx     xxx     xxx     xxx    xxxxxxxxxzzzzzzzzzzz                             zc",
   "cccczzzzzzzzzzz!!!z!!!zzzzzzzzz                            zzzzzzzzzzzzzzzzzzzz                              z",
   "cccczzzzzzzzzzzzzzzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!zzzzzzzzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!z",
   "cccczzzzzzzzzzzzzzzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!zzzzzzzzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!z",
   "cccczzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz"],

   ["c     xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                        xxxxxxxxxxxxxxxxxx",
    "z  @  zzzzzzzzzzzzzzzzzzzzzzzzzzzzz                                                        zzzzzzzzzzzzzzzzzz",
    "z                 zzzzzzzzzzzzzzzzz                                                        zzzzzzzzzzzzzzzzzz",
    "z                  zzzzzzzzzzzzzzzz                                                        zzzzzzzzzzzzzzzzzz",
    "z                   zzzzzzzzzzzzzzz                                                        zzzzzzzzzzzzzzzzzz",
    "z         o          zzzzzz!!!zzzzz                       o            o                   zzzzzzzzzzzzzzzzzz",
    "z                     zzzz!!!!!zzzz                          a      a                      zzzzzzzzzzzzzzzzzz",
    "zxxxxx!!!xxx!!!!xx    zzzzz!!!zzzzz                    xxxxxxxxxxxxxxxxxxxx                zzzzzzzzzzzzzzzzzz",
    "zzzzzzzzzzzzzzzzzz    zzzzzzvzzzzzz             x      z!!!!!!!!!!!!!!!!!!z        a       zzzzzzzzzzzzzzzzzz",
    "z                     zzz       zzz                    z!!vvvv!!vvvvv!!vvvz                zzzzzzzzzzzzzzzzzz",
    "z                     zz  z   z  zz        o                                       a       zzzzzzzzzzzzzzzzzz",
    "z                     zz         zz        x                                                                 ",
    "z           a         zz         zz                                                a                         ",
    "z   xxxxxxxxxxxxxxxxxxzz  z   z  zz                                                                          ",
    "z   zzzzzzzzzzzzzzzzzzzz   zoz   zz             x                                                            ",
    "z                     zzz       zzz                            p            o               o                ",
    "z                     zzzz     zzzz        o                                                                 ",
    "z o          o                             x            xx    xx     xx    xxx      x      xxx          o    ",
    "z o          a                                                                                            ???",
    "zxxxxxxxxxxxxxxxxxxxxxxxxxx   xxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!ccccccc",
    "zzzzzzzzzzzzzzzzzzzzzzzzzzz!!!zzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!zzzzzzz"],

    ["xxxxxxx                                                                                                      ",
     "zzzzzzz                                                                                                      ",
     "zzzzzzz            o                                                                                         ",
     "zzzzzzz?????????                 o       b         o                                                         ",
     "zzzzzzzcccccccccccccc                                             o                                          ",
     "zzzzzzzzzzzzzzzzzzzzz    xx      xx                xx                           o                            ",
     "zzzzzzz                                                    x      x      x                                   ",
     "zzzzzzz                                                                         xxx       xxx         o      ",
     "zzzzzzz                                xx      xx                                               a            ",
     "zzzzzzz                                                                                              xxx     ",
     "zzzzzzz                                                                                                      ",
     "zzzzzzz                                                                                        o      o    xx",
     "zzzzzzz                                                                                                      ",
     "zzzzzzz                                                                                 x     xxx    xxx     ",
     "zzzzzzz             p                       b                                                               ",
     "zzzzzz                                    x       x                                x                        ",
     "zzzzz               a                                                                                        ",
     "        o   o   x   a   x     o o      x             x        o   o           x                              ",
     "  @            xz   a   zx                                 a         a                                       ",
     "ccccccxxxxxxxxxzz!!!!!!!zzxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
     "zzzzzzzzzzzzzzzzz!!!!!!!zzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!zzzzzzzzzzzzzzzzzz!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],

     ["                                                                          ",
      "                                                                          ",
      "                                                                          ",
      "                                                                          ",
      "                                                                          ",
      "                                                                          ",
      "                       o   o ooo o o   o     o ooo oo  o  o               ",
      "                        o o  o o o o   o  o  o  o  o o o  o               ",
      "                         o   o o o o   o o o o  o  o o o  o               ",
      "                         o   o o o o   oo   oo  o  o o o                  ",
      "                         o   ooo ooo   o     o ooo o  oo  o               ",
      "                                                                          ",
      "  @                                                        ?              ",
      "xxxxxxxxxxxxxxxxxxxxxcccccccccccccccccccccccccccccccccccccccxxxxxxxxxxxxxx",
      "zzzzzzzzzzzzzzzzzzzzzccccccccccccccccccccccccccccccccccccccczzzzzzzzzzzzzz"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
