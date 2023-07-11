import {StyleSheet, Platform, Dimensions} from 'react-native';
import COLORS from '../../consts/colors';
const {height, width} = Dimensions.get('window');

export const backIconSize = width <= 480 ? 20 : 35;
export const bottomTabHeight = height * 0.08;
export const bottomTabsIconsSize = width <= 480 ? 20 : 35;
export const subscribedIconSize = width * 0.08;
export const menuOptionSubIconSize = width * 0.05;
export const chevronLeftIconSize = width * 0.065;

export default StyleSheet.create({
  positionTypes: {
    top: 'top',
    bottom: 'bottom',
  },
  empty: {},
  // dimensions
  deviceWidth: {width},
  deviceHeight: {height},
  fullHeight: {height: '100%'},
  fullWidth: {width: '100%'},
  full: {
    height: '100%',
    width: '100%',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  // flex
  flex1: {flex: 1},
  flex4: {flex: 4},
  flexGrow1: {flexGrow: 1},
  wrap: {flexWrap: 'wrap'},
  flexFlexgrow: {
    flex: 1,
    flexGrow: 1,
  },

  // alignment
  row: {flexDirection: 'row'},
  column: {flexDirection: 'column'},
  displayCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredItemsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  startItemsRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  showTransition: {transition: '0.3s ease'},
  centeredBetweenRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyCenter: {justifyContent: 'center'},
  justifyBetween: {justifyContent: 'space-between'},
  justifyEnd: {justifyContent: 'flex-end'},
  justifyEvenly: {justifyContent: 'space-evenly'},
  justifyAround: {justifyContent: 'space-around'},
  alignStart: {alignItems: 'flex-start'},
  alignCenter: {alignItems: 'center'},
  alignSelfStart: {alignSelf: 'flex-start'},
  alignSelfEnd: {alignSelf: 'flex-end'},
  alignSelfCenter: {alignSelf: 'center'},

  absolute: StyleSheet.absoluteFill,
  absoluteTop: {position: 'absolute', top: 0},
  absoluteBottom: {position: 'absolute', bottom: 0},
  relative: {position: 'relative'},

  // background

  transparent: {
    backgroundColor: 'transparent',
  },

  backdropBg: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  blackBg: {backgroundColor: '#000000'},
  whiteBg: {flex: 1, backgroundColor: COLORS.white},

  //borders
  noBorder: {
    borderBottomWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  borderRadius10: {
    borderRadius: 10,
  },

  // padding
  p_h_002: {padding: height * 0.02},
  pv_h_002: {paddingVertical: height * 0.02},
  pv_h_01: {paddingVertical: height * 0.1},
  pb_h_01: {paddingBottom: height * 0.1},
  pv_h_005: {paddingVertical: height * 0.05},
  pt_h_01: {paddingTop: height * 0.1},
  pt_h_005: {paddingTop: height * 0.05},
  ph_w_002: {paddingHorizontal: width * 0.02},
  pv_h_001: {paddingVertical: height * 0.01},
  ph_w_001: {paddingHorizontal: width * 0.01},
  ph_w_003: {paddingHorizontal: width * 0.03},

  // margin
  mt_h_001: {marginTop: height * 0.01},
  mb_h_001: {marginBottom: height * 0.01},
  mb_h_002: {marginBottom: height * 0.02},
  ml_w_001: {marginLeft: width * 0.01},
  mt_h_005: {marginTop: height * 0.05},
  ml_w_002: {marginLeft: width * 0.02},

  glassHeaderBg: {backgroundColor: '#13182A'},
  willChange: Platform.select({
    web: {willChange: 'transform'},
  }),
  disabledOpacity: {opacity: 0.65},
  disabledTextInput: {backgroundColor: '#ffffff34', opacity: 0.65},
  none: {display: 'none'},
});
