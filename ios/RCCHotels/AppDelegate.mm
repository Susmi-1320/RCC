#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
// #import <React/RCTBridge.h>
// #import <React/RCTRootView.h>
// #import <GoogleMaps/GoogleMaps.h> // Import GoogleMaps module


@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"RCCHotels";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
//  [GMSServices provideAPIKey:@"AIzaSyCOf7LRg_WZGzj95JPs2gieSnYMxMvgynU"];
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
