'use strict';

var repoData = [{
  repoId: '166302',
  name: 'bootstrap',
  desc: '"The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web."',
  url: 'https://github.com/twbs/bootstrap',
  found: 0,
  tags: ''
}, {
  repoId: '363623',
  name: 'react-native',
  desc: 'A framework for building native apps with React.',
  url: 'https://github.com/facebook/react-native',
  found: 0,
  tags: ''
}, {
  repoId: '16',
  name: 'angular.js',
  desc: 'HTML enhanced for web apps',
  url: 'https://github.com/angular/angular.js',
  found: 0,
  tags: ''
}, {
  repoId: '433781',
  name: 'flutter',
  desc: '"Framework for building high-performance, high-fidelity iOS and Android apps"',
  url: 'https://github.com/flutter/flutter',
  found: 0,
  tags: ''
}, {
  repoId: '462925',
  name: 'swift',
  desc: 'The Swift Programming Language',
  url: 'https://github.com/apple/swift',
  found: 0,
  tags: ''
}, {
  repoId: '293158',
  name: 'angular',
  desc: '',
  url: 'https://github.com/angular/angular',
  found: 0,
  tags: ''
}, {
  repoId: '518149',
  name: 'electron',
  desc: 'Build cross platform desktop apps with web technologies',
  url: 'https://github.com/electron/electron',
  found: 0,
  tags: ''
}, {
  repoId: '1182',
  name: 'html5-boilerplate',
  desc: '"A professional front-end template for building fast, robust, and adaptable web apps or sites."',
  url: 'https://github.com/h5bp/html5-boilerplate',
  found: 0,
  tags: ''
}, {
  repoId: '193381',
  name: 'free-programming-books-zh_CN',
  desc: ':books: �ɍ��_�_㏨���Ѿϼ�_Ѝ�܍�Ȋ�_���__����_ξ¢��_�_����',
  url: 'https://github.com/justjavac/free-programming-books-zh_CN',
  found: 0,
  tags: ''
}, {
  repoId: '184',
  name: 'meteor',
  desc: '"Meteor, the JavaScript App Platform"',
  url: 'https://github.com/meteor/meteor',
  found: 0,
  tags: ''
}, {
  repoId: '369197',
  name: 'thefuck',
  desc: 'Magnificent app which corrects your previous console command.',
  url: 'https://github.com/nvbn/thefuck',
  found: 0,
  tags: ''
}, {
  repoId: '326805',
  name: 'awesome-android-ui',
  desc: 'A curated list of awesome Android UI/UX libraries',
  url: 'https://github.com/wasabeef/awesome-android-ui',
  found: 0,
  tags: ''
}, {
  repoId: '443',
  name: 'AFNetworking',
  desc: 'A delightful iOS and OS X networking framework',
  url: 'https://github.com/AFNetworking/AFNetworking',
  found: 0,
  tags: ''
}, {
  repoId: '1764',
  name: 'jQuery-File-Upload',
  desc: '"File Upload widget with multiple file selection, drag&drop support, progress bar, validation and preview images, audio and video for jQuery. Supports cross-domain, chunked and resumable file uploads. Works with any server-side platform (Google App Engine,"',
  url: 'https://github.com/blueimp/jQuery-File-Upload',
  found: 0,
  tags: ''
}, {
  repoId: '397216',
  name: 'gatsby',
  desc: 'Transform plain text into dynamic blogs and websites using React.js',
  url: 'https://github.com/gatsbyjs/gatsby',
  found: 0,
  tags: ''
}, {
  repoId: '515769',
  name: 'android-architecture',
  desc: 'A collection of samples to discuss and showcase different architectural tools and patterns for Android apps.',
  url: 'https://github.com/googlesamples/android-architecture',
  found: 0,
  tags: ''
}, {
  repoId: '6943',
  name: 'retrofit',
  desc: '"Type-safe HTTP client for Android and Java by Square, Inc."',
  url: 'https://github.com/square/retrofit',
  found: 0,
  tags: ''
}, {
  repoId: '1801',
  name: 'okhttp',
  desc: 'An HTTP+HTTP/2 client for Android and Java applications.',
  url: 'https://github.com/square/okhttp',
  found: 0,
  tags: ''
}, {
  repoId: '276677',
  name: 'Alamofire',
  desc: 'Elegant HTTP Networking in Swift',
  url: 'https://github.com/Alamofire/Alamofire',
  found: 0,
  tags: ''
}, {
  repoId: '269486',
  name: 'awesome-ios',
  desc: '"A curated list of awesome iOS ecosystem, including Objective-C and Swift Projects "',
  url: 'https://github.com/vsouza/awesome-ios',
  found: 0,
  tags: ''
}, {
  repoId: '41057',
  name: 'build-web-application-with-golang',
  desc: 'A golang ebook intro how to build a web with golang',
  url: 'https://github.com/astaxie/build-web-application-with-golang',
  found: 0,
  tags: ''
}, {
  repoId: '515905',
  name: 'Awesome-Hacking',
  desc: '"A collection of various awesome lists for hackers, pentesters and security researchers"',
  url: 'https://github.com/Hack-with-Github/Awesome-Hacking',
  found: 0,
  tags: ''
}, {
  repoId: '11285',
  name: 'kotlin',
  desc: 'The Kotlin Programming Language',
  url: 'https://github.com/JetBrains/kotlin',
  found: 0,
  tags: ''
}, {
  repoId: '144824',
  name: 'todomvc',
  desc: '"Helping you select an MV* framework - Todo apps for Backbone.js, Ember.js, AngularJS, and many more"',
  url: 'https://github.com/tastejs/todomvc',
  found: 0,
  tags: ''
}, {
  repoId: '246056',
  name: 'MPAndroidChart',
  desc: '"A powerful Android chart view / graph view library, supporting line- bar- pie- radar- bubble- and candlestick charts as well as scaling, dragging and animations."',
  url: 'https://github.com/PhilJay/MPAndroidChart',
  found: 0,
  tags: ''
}, {
  repoId: '302304',
  name: 'android_guides',
  desc: 'Extensive Open-Source Guides for Android Developers',
  url: 'https://github.com/codepath/android_guides',
  found: 0,
  tags: ''
}, {
  repoId: '136809',
  name: 'phaser',
  desc: '"Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering."',
  url: 'https://github.com/photonstorm/phaser',
  found: 0,
  tags: ''
}, {
  repoId: '682715',
  name: 'storybook',
  desc: 'UI Component Dev Environment for React',
  url: 'https://github.com/storybooks/storybook',
  found: 0,
  tags: ''
}, {
  repoId: '160162',
  name: 'glide',
  desc: 'An image loading and caching library for Android focused on smooth scrolling',
  url: 'https://github.com/bumptech/glide',
  found: 0,
  tags: ''
}, {
  repoId: '277443',
  name: 'syncthing',
  desc: 'Open Source Continuous File Synchronization',
  url: 'https://github.com/syncthing/syncthing',
  found: 0,
  tags: ''
}, {
  repoId: '798871',
  name: 'create-react-app',
  desc: 'Create React apps with no build configuration.',
  url: 'https://github.com/facebook/create-react-app',
  found: 0,
  tags: ''
}, {
  repoId: '647975',
  name: 'lottie-android',
  desc: 'Render After Effects animations natively on Android and iOS',
  url: 'https://github.com/airbnb/lottie-android',
  found: 0,
  tags: ''
}, {
  repoId: '363741',
  name: 'awesome-react-native',
  desc: '"An ""awesome"" type curated list of React Native components, news, tools, and learning material"',
  url: 'https://github.com/jondot/awesome-react-native',
  found: 0,
  tags: ''
}, {
  repoId: '465966',
  name: 'serverless',
  desc: '"Serverless Framework ��� Build and maintain web, mobile and IoT applications running on AWS Lambda and API Gateway (formerly known as JAWS) ��� "',
  url: 'https://github.com/serverless/serverless',
  found: 0,
  tags: ''
}, {
  repoId: '599399',
  name: 'realworld',
  desc: '"Fullstack example codebases for React, Angular, Node, Django, Rails & more"',
  url: 'https://github.com/gothinkster/realworld',
  found: 0,
  tags: ''
}, {
  repoId: '128860',
  name: 'butterknife',
  desc: '"View ""injection"" library for Android."',
  url: 'https://github.com/JakeWharton/butterknife',
  found: 0,
  tags: ''
}, {
  repoId: '591719',
  name: 'styled-components',
  desc: '',
  url: 'https://github.com/styled-components/styled-components',
  found: 0,
  tags: ''
}, {
  repoId: '568332',
  name: 'AndroidUtilCode',
  desc: '',
  url: 'https://github.com/Blankj/AndroidUtilCode',
  found: 0,
  tags: ''
}, {
  repoId: '100582',
  name: 'shadowsocks-android',
  desc: 'A Shadowsocks client for Android',
  url: 'https://github.com/shadowsocks/shadowsocks-android',
  found: 0,
  tags: ''
}, {
  repoId: '381245',
  name: 'leakcanary',
  desc: 'A memory leak detection library for Android and Java.',
  url: 'https://github.com/square/leakcanary',
  found: 0,
  tags: ''
}, {
  repoId: '448722',
  name: 'fastlane',
  desc: 'Connect all iOS deployment tools into one streamlined workflow',
  url: 'https://github.com/fastlane/fastlane',
  found: 0,
  tags: ''
}, {
  repoId: '4974',
  name: 'zxing',
  desc: '"Official ZXing (""Zebra Crossing"") project home"',
  url: 'https://github.com/zxing/zxing',
  found: 0,
  tags: ''
}, {
  repoId: '351493',
  name: 'grpc',
  desc: '"The C based gRPC (C++, Node.js, Python, Ruby, Objective-C, PHP, C#)"',
  url: 'https://github.com/grpc/grpc',
  found: 0,
  tags: ''
}, {
  repoId: '452096',
  name: 'gold-miner',
  desc: '�_���ԍ�ȏ�ԏ����Օ_΍�ȏ�Ծ_���Ԋ�_�_�����_�ܱ�������',
  url: 'https://github.com/xitu/gold-miner',
  found: 0,
  tags: ''
}, {
  repoId: '289588',
  name: 'react-starter-kit',
  desc: '"React Starter Kit ��� a skeleton of an ""isomorphic"" web application / SPA built with React.js, Express, Flux, ES6+, JSX, Babel, PostCSS, Webpack, BrowserSync..."',
  url: 'https://github.com/kriasoft/react-starter-kit',
  found: 0,
  tags: ''
}, {
  repoId: '339276',
  name: 'open-source-ios-apps',
  desc: ':iphone: Collaborative List of Open-Source iOS Apps',
  url: 'https://github.com/dkhamsing/open-source-ios-apps',
  found: 0,
  tags: ''
}, {
  repoId: '115499',
  name: 'ReactiveCocoa',
  desc: 'Streams of values over time',
  url: 'https://github.com/ReactiveCocoa/ReactiveCocoa',
  found: 0,
  tags: ''
}, {
  repoId: '256057',
  name: 'the-swift-programming-language-in-chinese',
  desc: '��_����� Apple �����_ Swift �����܋�_The Swift Programming Language���',
  url: 'https://github.com/numbbbbb/the-swift-programming-language-in-chinese',
  found: 0,
  tags: ''
}, {
  repoId: '127634',
  name: 'fastjson',
  desc: ':bullettrain_side: Fast JSON Processor',
  url: 'https://github.com/alibaba/fastjson',
  found: 0,
  tags: ''
}, {
  repoId: '237455',
  name: 'iosched',
  desc: 'The Google I/O 2015 Android App',
  url: 'https://github.com/google/iosched',
  found: 0,
  tags: ''
}, {
  repoId: '582668',
  name: 'ShadowsocksX-NG',
  desc: 'Next Generation of ShadowsocksX https://github.com/shadowsocks/shadowsocks-iOS',
  url: 'https://github.com/shadowsocks/ShadowsocksX-NG',
  found: 0,
  tags: ''
}, {
  repoId: '287581',
  name: 'SwiftyJSON',
  desc: 'The better way to deal with JSON data in Swift',
  url: 'https://github.com/SwiftyJSON/SwiftyJSON',
  found: 0,
  tags: ''
}, {
  repoId: '16530',
  name: 'Swiper',
  desc: 'Most modern mobile touch slider with hardware accelerated transitions',
  url: 'https://github.com/nolimits4web/Swiper',
  found: 0,
  tags: ''
}, {
  repoId: '275942',
  name: 'android-best-practices',
  desc: '"Do\'s and Don\'ts for Android development, by Futurice developers"',
  url: 'https://github.com/futurice/android-best-practices',
  found: 0,
  tags: ''
}, {
  repoId: '283122',
  name: 'RxAndroid',
  desc: 'RxJava bindings for Android',
  url: 'https://github.com/ReactiveX/RxAndroid',
  found: 0,
  tags: ''
}, {
  repoId: '105713',
  name: 'Leaflet',
  desc: ' :leaves: JavaScript library for mobile-friendly interactive maps',
  url: 'https://github.com/Leaflet/Leaflet',
  found: 0,
  tags: ''
}, {
  repoId: '854305',
  name: 'mkcert',
  desc: 'A simple zero-config tool to make development certificates.',
  url: 'https://github.com/FiloSottile/mkcert',
  found: 0,
  tags: ''
}, {
  repoId: '245559',
  name: 'pop',
  desc: '"An extensible iOS and OS X animation library, useful for physics-based interactions."',
  url: 'https://github.com/facebook/pop',
  found: 0,
  tags: ''
}, {
  repoId: '375315',
  name: 'awesome-electron',
  desc: 'Useful resources for creating apps with Electron',
  url: 'https://github.com/sindresorhus/awesome-electron',
  found: 0,
  tags: ''
}, {
  repoId: '269585',
  name: 'awesome-swift',
  desc: 'A collaborative list of awesome swift resources. Feel free to contribute!',
  url: 'https://github.com/matteocrippa/awesome-swift',
  found: 0,
  tags: ''
}, {
  repoId: '352499',
  name: 'NativeScript',
  desc: 'Build truly native cross-platform iOS and Android apps with JavaScript',
  url: 'https://github.com/NativeScript/NativeScript',
  found: 0,
  tags: ''
}, {
  repoId: '231668',
  name: 'PhotoSwipe',
  desc: 'PhotoSwipe is a HTML/CSS/JavaScript based image gallery specifically targeting mobile touch devices',
  url: 'https://github.com/dimsemenov/PhotoSwipe',
  found: 0,
  tags: ''
}, {
  repoId: '520591',
  name: 'BaseRecyclerViewAdapterHelper',
  desc: '"Abstraction for the usual RecyclerAdapte ""RecyclerAdapte.ViewHolder"" pattern"',
  url: 'https://github.com/CymChad/BaseRecyclerViewAdapterHelper',
  found: 0,
  tags: ''
}, {
  repoId: '703880',
  name: 'SmartRefreshLayout',
  desc: 'An intelligent refresh layout',
  url: 'https://github.com/scwang90/SmartRefreshLayout',
  found: 0,
  tags: ''
}, {
  repoId: '505723',
  name: 'lighthouse',
  desc: '',
  url: 'https://github.com/GoogleChrome/lighthouse',
  found: 0,
  tags: ''
}, {
  repoId: '132383',
  name: 'jadx',
  desc: 'Dex to Java decompiler',
  url: 'https://github.com/skylot/jadx',
  found: 0,
  tags: ''
}, {
  repoId: '145834',
  name: 'picasso',
  desc: 'A powerful image downloading and caching library for Android',
  url: 'https://github.com/square/picasso',
  found: 0,
  tags: ''
}, {
  repoId: '646454',
  name: 'lottie-ios',
  desc: '',
  url: 'https://github.com/airbnb/lottie-ios',
  found: 0,
  tags: ''
}, {
  repoId: '784374',
  name: 'open-source-mac-os-apps',
  desc: 'List of open source applications for macOS.',
  url: 'https://github.com/serhii-londar/open-source-mac-os-apps',
  found: 0,
  tags: ''
}, {
  repoId: '363726',
  name: 'fresco',
  desc: 'An Android library for managing images and the memory they use.',
  url: 'https://github.com/facebook/fresco',
  found: 0,
  tags: ''
}, {
  repoId: '498752',
  name: 'vux',
  desc: 'yet another vue adapter for weui',
  url: 'https://github.com/airyland/vux',
  found: 0,
  tags: ''
}, {
  repoId: '496228',
  name: 'iris',
  desc: '"A very minimal but flexible golang web application framework, providing a robust set of features for building single & multi-page, web applications."',
  url: 'https://github.com/kataras/iris',
  found: 0,
  tags: ''
}, {
  repoId: '308438',
  name: 'material-dialogs',
  desc: 'Not even AppCompat uses Material theming for AlertDialogs for pre-Lollipop. This is a beautiful and easy solution.',
  url: 'https://github.com/afollestad/material-dialogs',
  found: 0,
  tags: ''
}, {
  repoId: '828195',
  name: 'taro',
  desc: '�__����_ی�ԏ����_��_���',
  url: 'https://github.com/NervJS/taro',
  found: 0,
  tags: ''
}, {
  repoId: '405873',
  name: 'RxSwift',
  desc: 'Reactive Programming in Swift',
  url: 'https://github.com/ReactiveX/RxSwift',
  found: 0,
  tags: ''
}, {
  repoId: '535496',
  name: 'swift-algorithm-club',
  desc: '"Algorithms and data structures in Swift, with explanations!"',
  url: 'https://github.com/raywenderlich/swift-algorithm-club',
  found: 0,
  tags: ''
}, {
  repoId: '285614',
  name: 'keystone',
  desc: 'node.js cms and web app framework',
  url: 'https://github.com/keystonejs/keystone',
  found: 0,
  tags: ''
}, {
  repoId: '554927',
  name: 'my-mac-os',
  desc: '��� a list of applications and various miscellaneous that make macOS experience even more amazing ',
  url: 'https://github.com/nikitavoloboev/my-mac-os',
  found: 0,
  tags: ''
}, {
  repoId: '37',
  name: 'angular-seed',
  desc: 'Seed project for angular apps. ',
  url: 'https://github.com/angular/angular-seed',
  found: 0,
  tags: ''
}, {
  repoId: '261057',
  name: 'SwiftGuide',
  desc: '�����_���Ѿ��ݠ���Swift��_��ۊ�Ⱦ���__�_ʏ�㾼��_Ό_��ȴ�_ی�ԏ�ɍ_㏤���վ������_о_Ջ��http://dev.swiftguide.cn ',
  url: 'https://github.com/ipader/SwiftGuide',
  found: 0,
  tags: ''
}, {
  repoId: '192894',
  name: 'js-xlsx',
  desc: 'XLSX / XLSM / XLSB / XLS / SpreadsheetML (Excel Spreadsheet) / ODS parser and writer',
  url: 'https://github.com/SheetJS/js-xlsx',
  found: 0,
  tags: ''
}, {
  repoId: '5',
  name: 'cocos2d-x',
  desc: 'cocos2d-x for C++',
  url: 'https://github.com/cocos2d/cocos2d-x',
  found: 0,
  tags: ''
}, {
  repoId: '544449',
  name: 'mint-ui',
  desc: 'Mobile UI elements for vue.js',
  url: 'https://github.com/ElemeFE/mint-ui',
  found: 0,
  tags: ''
}, {
  repoId: '692669',
  name: 'awesome-flutter',
  desc: '"A curated list of awesome Flutter frameworks, libraries, and software"',
  url: 'https://github.com/Solido/awesome-flutter',
  found: 0,
  tags: ''
}, {
  repoId: '372005',
  name: 'SnapKit',
  desc: 'A Swift Autolayout DSL for iOS & OS X',
  url: 'https://github.com/SnapKit/SnapKit',
  found: 0,
  tags: ''
}, {
  repoId: '368282',
  name: 'Kingfisher',
  desc: 'A lightweight and pure Swift implemented library for downloading and caching image from the web.',
  url: 'https://github.com/onevcat/Kingfisher',
  found: 0,
  tags: ''
}, {
  repoId: '2539',
  name: 'fmdb',
  desc: 'A Cocoa / Objective-C wrapper around SQLite',
  url: 'https://github.com/ccgus/fmdb',
  found: 0,
  tags: ''
}, {
  repoId: '532433',
  name: 'flexbox-layout',
  desc: 'Flexbox for Android ',
  url: 'https://github.com/google/flexbox-layout',
  found: 0,
  tags: ''
}, {
  repoId: '7799',
  name: 'PhotoView',
  desc: '',
  url: 'https://github.com/chrisbanes/PhotoView',
  found: 0,
  tags: ''
}, {
  repoId: '592725',
  name: 'tinker',
  desc: '"Tinker is a hot-fix solution library for Android, it supports dex, library and resources update without reinstall apk."',
  url: 'https://github.com/Tencent/tinker',
  found: 0,
  tags: ''
}, {
  repoId: '249345',
  name: 'odoo',
  desc: 'Odoo (formerly OpenERP). Open Source Apps To Grow Your Business.',
  url: 'https://github.com/odoo/odoo',
  found: 0,
  tags: ''
}, {
  repoId: '271171',
  name: 'realm-cocoa',
  desc: 'Realm is a mobile database: a replacement for Core Data & SQLite',
  url: 'https://github.com/realm/realm-cocoa',
  found: 0,
  tags: ''
}, {
  repoId: '35036',
  name: 'libgdx',
  desc: 'Desktop/Android/HTML5/iOS Java game development framework',
  url: 'https://github.com/libgdx/libgdx',
  found: 0,
  tags: ''
}, {
  repoId: '341283',
  name: 'Spring',
  desc: 'A library to simplify iOS animations in Swift.',
  url: 'https://github.com/MengTo/Spring',
  found: 0,
  tags: ''
}, {
  repoId: '244594',
  name: 'rclone',
  desc: '"Sync files to and from Google Drive, S3, Swift, Cloudfiles, Dropbox and Google Cloud Storage"',
  url: 'https://github.com/ncw/rclone',
  found: 0,
  tags: ''
}, {
  repoId: '116501',
  name: 'dagger',
  desc: 'A fast dependency injector for Android and Java.',
  url: 'https://github.com/google/dagger',
  found: 0,
  tags: ''
}, {
  repoId: '310516',
  name: 'Carthage',
  desc: '"A simple, decentralized dependency manager for Cocoa"',
  url: 'https://github.com/Carthage/Carthage',
  found: 0,
  tags: ''
}, {
  repoId: '450300',
  name: 'plaid',
  desc: '',
  url: 'https://github.com/nickbutcher/plaid',
  found: 0,
  tags: ''
}, {
  repoId: '159905',
  name: 'backbone',
  desc: '"Give your JS App some Backbone with Models, Views, Collections, and Events"',
  url: 'https://github.com/jashkenas/backbone',
  found: 0,
  tags: ''
}, {
  repoId: '516545',
  name: 'Charts',
  desc: 'Beautiful charts for iOS/tvOS/OSX! The Apple side of the crossplatform MPAndroidChart.',
  url: 'https://github.com/danielgindi/Charts',
  found: 0,
  tags: ''
}, {
  repoId: '457372',
  name: 'Perfect',
  desc: '"Server-side Swift. The Perfect library, application server, connectors and example apps. (For mobile back-end development, website and web app development, and more...)"',
  url: 'https://github.com/PerfectlySoft/Perfect',
  found: 0,
  tags: ''
}, {
  repoId: '31063',
  name: 'fastclick',
  desc: 'Polyfill to remove click delays on browsers with touch UIs',
  url: 'https://github.com/ftlabs/fastclick',
  found: 0,
  tags: ''
}, {
  repoId: '657142',
  name: 'AR.js',
  desc: 'Efficient Augmented Reality for the Web using ARToolKit - 60fps on mobile!',
  url: 'https://github.com/jeromeetienne/AR.js',
  found: 0,
  tags: ''
}, {
  repoId: '423614',
  name: 'react-native-web',
  desc: 'React Native for Web: A framework for building Native Web Apps',
  url: 'https://github.com/necolas/react-native-web',
  found: 0,
  tags: ''
}, {
  repoId: '263610',
  name: 'ExoPlayer',
  desc: 'An extensible media player for Android',
  url: 'https://github.com/google/ExoPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '174541',
  name: 'IQKeyboardManager',
  desc: 'Codeless drop-in universal library allows to prevent issues of keyboard sliding up and cover UITextField/UITextView. Neither need to write any code nor any setup required and much more.',
  url: 'https://github.com/hackiftekhar/IQKeyboardManager',
  found: 0,
  tags: ''
}, {
  repoId: '1231',
  name: 'jquery-mobile',
  desc: 'jQuery Mobile Framework',
  url: 'https://github.com/jquery/jquery-mobile',
  found: 0,
  tags: ''
}, {
  repoId: '461602',
  name: 'anko',
  desc: 'Pleasant Android application development',
  url: 'https://github.com/Kotlin/anko',
  found: 0,
  tags: ''
}, {
  repoId: '190844',
  name: 'Telegram',
  desc: 'Telegram for Android source',
  url: 'https://github.com/DrKLO/Telegram',
  found: 0,
  tags: ''
}, {
  repoId: '582755',
  name: 'egg',
  desc: "A web framework's framework for Node.js.",
  url: 'https://github.com/eggjs/egg',
  found: 0,
  tags: ''
}, {
  repoId: '639053',
  name: 'create-react-native-app',
  desc: '',
  url: 'https://github.com/react-community/create-react-native-app',
  found: 0,
  tags: ''
}, {
  repoId: '697433',
  name: 'android-architecture-components',
  desc: '',
  url: 'https://github.com/googlesamples/android-architecture-components',
  found: 0,
  tags: ''
}, {
  repoId: '570072',
  name: 'vapor',
  desc: 'A web framework and server for Swift that works on macOS and Ubuntu.',
  url: 'https://github.com/vapor/vapor',
  found: 0,
  tags: ''
}, {
  repoId: '631902',
  name: 'redux-saga',
  desc: 'An alternative side effect model for Redux apps',
  url: 'https://github.com/redux-saga/redux-saga',
  found: 0,
  tags: ''
}, {
  repoId: '1438',
  name: 'CocoaPods',
  desc: 'An Objective-C library dependency manager.',
  url: 'https://github.com/CocoaPods/CocoaPods',
  found: 0,
  tags: ''
}, {
  repoId: '522960',
  name: 'NativeBase',
  desc: 'The missing piece of React Native',
  url: 'https://github.com/GeekyAnts/NativeBase',
  found: 0,
  tags: ''
}, {
  repoId: '282768',
  name: 'mui',
  desc: '��۾_���Ԍ_ٍ��APP�_Ҏ�΍_����ۤ��_����_�',
  url: 'https://github.com/dcloudio/mui',
  found: 0,
  tags: ''
}, {
  repoId: '230552',
  name: 'chartist-js',
  desc: 'Simple responsive charts',
  url: 'https://github.com/gionkunz/chartist-js',
  found: 0,
  tags: ''
}, {
  repoId: '319791',
  name: 'framework',
  desc: 'The aurelia framework brings together all the required core aurelia libraries into a ready-to-go application-building platform.',
  url: 'https://github.com/aurelia/framework',
  found: 0,
  tags: ''
}, {
  repoId: '214433',
  name: 'CircleImageView',
  desc: 'A circular ImageView for Android',
  url: 'https://github.com/hdodenhof/CircleImageView',
  found: 0,
  tags: ''
}, {
  repoId: '2306',
  name: 'WordPress',
  desc: '"WordPress, Git-ified. Synced via SVN every 15 minutes, including branches and tags! This repository is just a mirror of the WordPress subversion repository. Please do not send pull requests. Submit patches to http://core.trac.wordpress.org/ instead."',
  url: 'https://github.com/WordPress/WordPress',
  found: 0,
  tags: ''
}, {
  repoId: '200841',
  name: 'CocoaLumberjack',
  desc: '"A fast & simple, yet powerful & flexible logging framework for Mac and iOS"',
  url: 'https://github.com/CocoaLumberjack/CocoaLumberjack',
  found: 0,
  tags: ''
}, {
  repoId: '384867',
  name: 'SwiftLint',
  desc: 'A tool to enforce Swift style and conventions.',
  url: 'https://github.com/realm/SwiftLint',
  found: 0,
  tags: ''
}, {
  repoId: '317574',
  name: 'homebridge',
  desc: 'HomeKit support for the impatient',
  url: 'https://github.com/nfarina/homebridge',
  found: 0,
  tags: ''
}, {
  repoId: '356884',
  name: 'android-UniversalMusicPlayer',
  desc: '"This sample shows how to implement an audio media app that works across multiple form factors and provide a consistent user experience on Android phones, tablets, Auto, Wear and Cast devices"',
  url: 'https://github.com/googlesamples/android-UniversalMusicPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '348378',
  name: 'stetho',
  desc: '"Stetho is a debug bridge for Android applications, enabling the powerful Chrome Developer Tools and much more."',
  url: 'https://github.com/facebook/stetho',
  found: 0,
  tags: ''
}, {
  repoId: '238422',
  name: 'PromiseKit',
  desc: 'Promises for iOS and OS X',
  url: 'https://github.com/mxcl/PromiseKit',
  found: 0,
  tags: ''
}, {
  repoId: '816573',
  name: 'scrcpy',
  desc: 'Display and control your Android device',
  url: 'https://github.com/Genymobile/scrcpy',
  found: 0,
  tags: ''
}, {
  repoId: '180',
  name: 'RestKit',
  desc: 'RestKit is a framework for consuming and modeling RESTful web resources on iOS and OS X',
  url: 'https://github.com/RestKit/RestKit',
  found: 0,
  tags: ''
}, {
  repoId: '292975',
  name: 'realm-java',
  desc: 'Realm is a mobile database: a replacement for SQLite & ORMs',
  url: 'https://github.com/realm/realm-java',
  found: 0,
  tags: ''
}, {
  repoId: '384048',
  name: 'react-native-vector-icons',
  desc: '"3000 Customizable Icons for React Native with support for NavBar/TabBar, image source and full stying."',
  url: 'https://github.com/oblador/react-native-vector-icons',
  found: 0,
  tags: ''
}, {
  repoId: '677030',
  name: 'react-native-elements',
  desc: 'React Native Elements UI Toolkit',
  url: 'https://github.com/react-native-training/react-native-elements',
  found: 0,
  tags: ''
}, {
  repoId: '13318',
  name: 'greenDAO',
  desc: 'greenDAO is a light & fast ORM solution for Android that maps objects to SQLite databases.',
  url: 'https://github.com/greenrobot/greenDAO',
  found: 0,
  tags: ''
}, {
  repoId: '341223',
  name: 'MaterialDrawer',
  desc: '"The flexible, easy to use, all in one drawer library for your Android project."',
  url: 'https://github.com/mikepenz/MaterialDrawer',
  found: 0,
  tags: ''
}, {
  repoId: '175087',
  name: 'feathers',
  desc: 'Build real-time apps faster than ever with our flexible JavaScript framework.',
  url: 'https://github.com/feathersjs/feathers',
  found: 0,
  tags: ''
}, {
  repoId: '274360',
  name: 'FLEX',
  desc: 'An in-app debugging and exploration tool for iOS',
  url: 'https://github.com/Flipboard/FLEX',
  found: 0,
  tags: ''
}, {
  repoId: '537927',
  name: 'react-native-guide',
  desc: 'React Native���Ѿ��ݠ�����㍱�react-native�__�_ʏ�㾼��ہ�_۾��App��΍��Ȧ',
  url: 'https://github.com/reactnativecn/react-native-guide',
  found: 0,
  tags: ''
}, {
  repoId: '740397',
  name: 'CodeHub',
  desc: 'CodeHub is an iOS application written using Xamarin',
  url: 'https://github.com/CodeHubApp/CodeHub',
  found: 0,
  tags: ''
}, {
  repoId: '508190',
  name: 'react-native-navigation',
  desc: 'Created by talkol',
  url: 'https://github.com/wix/react-native-navigation',
  found: 0,
  tags: ''
}, {
  repoId: '462929',
  name: 'swift-evolution',
  desc: 'This maintains proposals for changes and user-visible enhancements to the Swift Programming Language.',
  url: 'https://github.com/apple/swift-evolution',
  found: 0,
  tags: ''
}, {
  repoId: '314256',
  name: 'animated-tab-bar',
  desc: 'RAMAnimatedTabBarController is a Swift module for adding animation to tabbar items. ',
  url: 'https://github.com/Ramotion/animated-tab-bar',
  found: 0,
  tags: ''
}, {
  repoId: '300416',
  name: 'lazysizes',
  desc: '"High performance and SEO friendly lazy loader for images (responsive and normal), iframes and more, that detects any visibility changes triggered through user interaction, CSS or JavaScript without configuration."',
  url: 'https://github.com/aFarkas/lazysizes',
  found: 0,
  tags: ''
}, {
  repoId: '600281',
  name: 'IGListKit',
  desc: 'A data-driven UICollectionView framework for building fast and flexible lists.',
  url: 'https://github.com/Instagram/IGListKit',
  found: 0,
  tags: ''
}, {
  repoId: '394635',
  name: 'infer',
  desc: '"A static analyzer for Java, C and Objective-C"',
  url: 'https://github.com/facebook/infer',
  found: 0,
  tags: ''
}, {
  repoId: '475559',
  name: 'react-slingshot',
  desc: '"React + Redux starter kit with Babel, hot reloading, testing, linting and a working example app, all built in"',
  url: 'https://github.com/coryhouse/react-slingshot',
  found: 0,
  tags: ''
}, {
  repoId: '486096',
  name: 'Material',
  desc: 'A beautiful graphics framework for Material Design in Swift.',
  url: 'https://github.com/CosmicMind/Material',
  found: 0,
  tags: ''
}, {
  repoId: '266496',
  name: 'swift-style-guide',
  desc: 'The official Swift style guide for raywenderlich.com.',
  url: 'https://github.com/raywenderlich/swift-style-guide',
  found: 0,
  tags: ''
}, {
  repoId: '517730',
  name: 'ignite',
  desc: 'The ideal starting app for React Native',
  url: 'https://github.com/infinitered/ignite',
  found: 0,
  tags: ''
}, {
  repoId: '3828',
  name: 'CocoaAsyncSocket',
  desc: 'Asynchronous socket networking library for Mac and iOS',
  url: 'https://github.com/robbiehanson/CocoaAsyncSocket',
  found: 0,
  tags: ''
}, {
  repoId: '435451',
  name: 'Eureka',
  desc: 'Elegant iOS form builder in Swift 2',
  url: 'https://github.com/xmartlabs/Eureka',
  found: 0,
  tags: ''
}, {
  repoId: '403985',
  name: 'Moya',
  desc: 'Network abstraction layer written in Swift.',
  url: 'https://github.com/Moya/Moya',
  found: 0,
  tags: ''
}, {
  repoId: '732275',
  name: 'VasSonic',
  desc: '"VasSonic is a lightweight and high-performance Hybrid framework developed by tencent VAS team, which is intended to speed up the first screen of websites working on Android and iOS platform. "',
  url: 'https://github.com/Tencent/VasSonic',
  found: 0,
  tags: ''
}, {
  repoId: '276961',
  name: 'gun',
  desc: '"A realtime, decentralized, offline-first, graph database engine."',
  url: 'https://github.com/amark/gun',
  found: 0,
  tags: ''
}, {
  repoId: '256060',
  name: 'FlappySwift',
  desc: 'swift implementation of flappy bird. More at fullstackedu.com',
  url: 'https://github.com/fullstackio/FlappySwift',
  found: 0,
  tags: ''
}, {
  repoId: '565432',
  name: 'Luban',
  desc: 'Luban(�_���_)��Ӊ�ӌ����_�����۾_���Ԍ_������܌�܌���_��_���_܍_���Ѿ_�',
  url: 'https://github.com/Curzibn/Luban',
  found: 0,
  tags: ''
}, {
  repoId: '270633',
  name: 'react-intl',
  desc: 'React Components for internationalization.',
  url: 'https://github.com/yahoo/react-intl',
  found: 0,
  tags: ''
}, {
  repoId: '505453',
  name: 'spectre',
  desc: '"Spectre, a lightweight and clean CSS framework for faster and extendable development."',
  url: 'https://github.com/picturepan2/spectre',
  found: 0,
  tags: ''
}, {
  repoId: '2521',
  name: 'kivy',
  desc: '"Open source UI framework written in Python, running on Windows, Linux, OS X, Android and iOS"',
  url: 'https://github.com/kivy/kivy',
  found: 0,
  tags: ''
}, {
  repoId: '756457',
  name: 'tailwindcss',
  desc: 'A utility-first CSS framework for rapid UI development.',
  url: 'https://github.com/tailwindcss/tailwindcss',
  found: 0,
  tags: ''
}, {
  repoId: '467747',
  name: 'botkit',
  desc: 'Botkit is a toolkit for making bot applications',
  url: 'https://github.com/howdyai/botkit',
  found: 0,
  tags: ''
}, {
  repoId: '660168',
  name: 'vlayout',
  desc: '"Project vlayout is a powerfull LayoutManager extension for RecyclerView, it provides a group of layouts for RecyclerView. Make it able to handle a complicate situation when grid, list and other layouts in the same recyclerview. "',
  url: 'https://github.com/alibaba/vlayout',
  found: 0,
  tags: ''
}, {
  repoId: '471769',
  name: 'folding-cell',
  desc: 'FoldingCell is an expanding content cell inspired by folding paper material',
  url: 'https://github.com/Ramotion/folding-cell',
  found: 0,
  tags: ''
}, {
  repoId: '575526',
  name: 'react-dates',
  desc: '"An accessible, easily internationalizable, mobile-friendly datepicker library for the web"',
  url: 'https://github.com/airbnb/react-dates',
  found: 0,
  tags: ''
}, {
  repoId: '322561',
  name: 'TimLiu-iOS',
  desc: '�໌᱾�ȍ�ҍ_�iOS�ہmac�_۾����_�ݨ��_��ҕ_ξ΁��_�ݫ�С���������',
  url: 'https://github.com/Tim9Liu9/TimLiu-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '702481',
  name: 'ionic',
  desc: 'Build amazing native and progressive web apps with Angular and open web technologies. One app running on everything ????',
  url: 'https://github.com/ionic-team/ionic',
  found: 0,
  tags: ''
}, {
  repoId: '111934',
  name: 'appium',
  desc: ':iphone: Automation for iOS and Android Apps.',
  url: 'https://github.com/appium/appium',
  found: 0,
  tags: ''
}, {
  repoId: '330705',
  name: 'recyclerview-animators',
  desc: 'An Android Animation library which easily add itemanimator to RecyclerView items.',
  url: 'https://github.com/wasabeef/recyclerview-animators',
  found: 0,
  tags: ''
}, {
  repoId: '769957',
  name: 'awesome-cheatsheets',
  desc: '"Awesome cheatsheets for Javascript, Python, Node, Bash & others. ????"',
  url: 'https://github.com/LeCoupa/awesome-cheatsheets',
  found: 0,
  tags: ''
}, {
  repoId: '614553',
  name: 'GSYVideoPlayer',
  desc: '',
  url: 'https://github.com/CarGuo/GSYVideoPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '684113',
  name: 'Matisse',
  desc: ':fireworks: A well-designed local image selector for Android',
  url: 'https://github.com/zhihu/Matisse',
  found: 0,
  tags: ''
}, {
  repoId: '626730',
  name: 'ARouter',
  desc: 'A middleware that help app navigating from external environment into internal activity on Android.',
  url: 'https://github.com/alibaba/ARouter',
  found: 0,
  tags: ''
}, {
  repoId: '708077',
  name: 'ink',
  desc: '',
  url: 'https://github.com/vadimdemedes/ink',
  found: 0,
  tags: ''
}, {
  repoId: '288276',
  name: 'ios-good-practices',
  desc: '"Good ideas for iOS development, by Futurice developers."',
  url: 'https://github.com/futurice/ios-good-practices',
  found: 0,
  tags: ''
}, {
  repoId: '470475',
  name: 'better-scroll',
  desc: '"inspired by iscroll, and it has a better scroll perfermance"',
  url: 'https://github.com/ustbhuangyi/better-scroll',
  found: 0,
  tags: ''
}, {
  repoId: '458524',
  name: 'foundation-sites',
  desc: 'The most advanced responsive front-end framework in the world. Quickly create prototypes and production code for sites that work on any kind of device.',
  url: 'https://github.com/zurb/foundation-sites',
  found: 0,
  tags: ''
}, {
  repoId: '314962',
  name: 'libphonenumber',
  desc: '"Google\'s common Java, C++ and JavaScript library for parsing, formatting, and validating international phone numbers."',
  url: 'https://github.com/googlei18n/libphonenumber',
  found: 0,
  tags: ''
}, {
  repoId: '608733',
  name: 'quasar',
  desc: 'Quasar Framework',
  url: 'https://github.com/quasarframework/quasar',
  found: 0,
  tags: ''
}, {
  repoId: '806747',
  name: 'proton-native',
  desc: '"React Native for the desktop, cross compatible"',
  url: 'https://github.com/kusti8/proton-native',
  found: 0,
  tags: ''
}, {
  repoId: '622799',
  name: 'rxdb',
  desc: ':computer: :iphone: A reactive Database for Progressive Web Apps and more',
  url: 'https://github.com/pubkey/rxdb',
  found: 0,
  tags: ''
}, {
  repoId: '1083',
  name: 'xbmc',
  desc: 'Kodi Main Repository - By using this code you agree with our policy and will follow the GPLv2 license as included',
  url: 'https://github.com/xbmc/xbmc',
  found: 0,
  tags: ''
}, {
  repoId: '388426',
  name: 'hotel',
  desc: 'local .dev domains for everyone and more!',
  url: 'https://github.com/typicode/hotel',
  found: 0,
  tags: ''
}, {
  repoId: '477290',
  name: 'uCrop',
  desc: 'Image Cropping Library for Android',
  url: 'https://github.com/Yalantis/uCrop',
  found: 0,
  tags: ''
}, {
  repoId: '166253',
  name: 'protractor',
  desc: 'E2E test framework for Angular apps',
  url: 'https://github.com/angular/protractor',
  found: 0,
  tags: ''
}, {
  repoId: '750218',
  name: 'ngx-admin',
  desc: 'Angular admin dashboard framework',
  url: 'https://github.com/akveo/ngx-admin',
  found: 0,
  tags: ''
}, {
  repoId: '136544',
  name: 'mackup',
  desc: 'Keep your application settings in sync (OS X/Linux)',
  url: 'https://github.com/lra/mackup',
  found: 0,
  tags: ''
}, {
  repoId: '402302',
  name: 'stf',
  desc: 'Control and manage Android devices from your browser.',
  url: 'https://github.com/openstf/stf',
  found: 0,
  tags: ''
}, {
  repoId: '421380',
  name: 'react-native-router-flux',
  desc: 'iOS/Android React Native Router based on exNavigator ',
  url: 'https://github.com/aksonov/react-native-router-flux',
  found: 0,
  tags: ''
}, {
  repoId: '668596',
  name: 'brook',
  desc: '',
  url: 'https://github.com/txthinking/brook',
  found: 0,
  tags: ''
}, {
  repoId: '402016',
  name: 'RxBinding',
  desc: "RxJava binding APIs for Android's UI widgets.",
  url: 'https://github.com/JakeWharton/RxBinding',
  found: 0,
  tags: ''
}, {
  repoId: '408737',
  name: 'dash',
  desc: '"Flask, JS, and CSS boilerplate for interactive, web-based visualization apps in Python"',
  url: 'https://github.com/plotly/dash',
  found: 0,
  tags: ''
}, {
  repoId: '472107',
  name: 'FileDownloader',
  desc: 'Multitask�ہBreakpoint-resume�ہHigh-concurrency�ہSimple to use�ہSingle-process',
  url: 'https://github.com/lingochamp/FileDownloader',
  found: 0,
  tags: ''
}, {
  repoId: '403942',
  name: 'marko',
  desc: 'Marko template engine',
  url: 'https://github.com/marko-js/marko',
  found: 0,
  tags: ''
}, {
  repoId: '327757',
  name: 'react-grid-layout',
  desc: '"A draggable and resizable grid layout with responsive breakpoints, for React."',
  url: 'https://github.com/STRML/react-grid-layout',
  found: 0,
  tags: ''
}, {
  repoId: '403057',
  name: 'NVActivityIndicatorView',
  desc: 'Collection of nice loading animations',
  url: 'https://github.com/ninjaprox/NVActivityIndicatorView',
  found: 0,
  tags: ''
}, {
  repoId: '268205',
  name: 'Quick',
  desc: 'The Swift (and Objective-C) testing framework.',
  url: 'https://github.com/Quick/Quick',
  found: 0,
  tags: ''
}, {
  repoId: '487822',
  name: 'mjml',
  desc: 'MJML: the only framework that makes responsive-email easy',
  url: 'https://github.com/mjmlio/mjml',
  found: 0,
  tags: ''
}, {
  repoId: '375900',
  name: 'MaterialViewPager',
  desc: 'A Material Design ViewPager easy to use library',
  url: 'https://github.com/florent37/MaterialViewPager',
  found: 0,
  tags: ''
}, {
  repoId: '435636',
  name: 'RxPermissions',
  desc: 'Android runtime permissions powered by RxJava',
  url: 'https://github.com/tbruyelle/RxPermissions',
  found: 0,
  tags: ''
}, {
  repoId: '96281',
  name: 'interact.js',
  desc: '"JavaScript drag and drop, resizing and multi-touch gestures with inertia and snapping for modern browsers (and also IE8+)"',
  url: 'https://github.com/taye/interact.js',
  found: 0,
  tags: ''
}, {
  repoId: '306',
  name: 'SignalR',
  desc: 'Incredibly simple real-time web for .NET',
  url: 'https://github.com/SignalR/SignalR',
  found: 0,
  tags: ''
}, {
  repoId: '329549',
  name: 'trip-to-iOS',
  desc: '',
  url: 'https://github.com/Aufree/trip-to-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '410473',
  name: 'push.js',
  desc: '"A compact, cross-browser solution for Javascript desktop notifications"',
  url: 'https://github.com/Nickersoft/push.js',
  found: 0,
  tags: ''
}, {
  repoId: '445689',
  name: 'tachyons',
  desc: 'Functional CSS for humans',
  url: 'https://github.com/tachyons-css/tachyons',
  found: 0,
  tags: ''
}, {
  repoId: '562244',
  name: 'AndroidInterview-Q-A',
  desc: 'The top Internet companies interview questions and answers',
  url: 'https://github.com/JackyAndroid/AndroidInterview-Q-A',
  found: 0,
  tags: ''
}, {
  repoId: '415175',
  name: 'Google-Play-Music-Desktop-Player-UNOFFICIAL-',
  desc: 'A beautiful cross platform Desktop Player for Google Play Music',
  url: 'https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-',
  found: 0,
  tags: ''
}, {
  repoId: '679008',
  name: 'reactxp',
  desc: 'Library for cross-platform app development.',
  url: 'https://github.com/Microsoft/reactxp',
  found: 0,
  tags: ''
}, {
  repoId: '359014',
  name: 'open-source-android-apps',
  desc: 'Open-Source Android Apps',
  url: 'https://github.com/pcqpcq/open-source-android-apps',
  found: 0,
  tags: ''
}, {
  repoId: '696669',
  name: 'localstack',
  desc: 'A fully functional local AWS cloud stack. Develop and test your cloud apps offline!',
  url: 'https://github.com/localstack/localstack',
  found: 0,
  tags: ''
}, {
  repoId: '338875',
  name: 'wechat',
  desc: '�����_����ݨ�䍾�ۊ_���ɍ_�_������_ь__��� SDK ���',
  url: 'https://github.com/overtrue/wechat',
  found: 0,
  tags: ''
}, {
  repoId: '165385',
  name: 'Mars',
  desc: '�����Ԋ�����Ӭ��፼��_㍤Ȍ_����Web�����_��_���',
  url: 'https://github.com/AlloyTeam/Mars',
  found: 0,
  tags: ''
}, {
  repoId: '471615',
  name: 'muuri',
  desc: '',
  url: 'https://github.com/haltu/muuri',
  found: 0,
  tags: ''
}, {
  repoId: '684660',
  name: 'vant',
  desc: '',
  url: 'https://github.com/youzan/vant',
  found: 0,
  tags: ''
}, {
  repoId: '35292',
  name: 'spark',
  desc: 'A Sinatra inspired framework for java',
  url: 'https://github.com/perwendel/spark',
  found: 0,
  tags: ''
}, {
  repoId: '342328',
  name: 'browser-sync',
  desc: 'Keep multiple browsers & devices in sync when building websites. http://browsersync.io',
  url: 'https://github.com/BrowserSync/browser-sync',
  found: 0,
  tags: ''
}, {
  repoId: '803736',
  name: 'android-ktx',
  desc: 'A set of Kotlin extensions for Android app development.',
  url: 'https://github.com/android/android-ktx',
  found: 0,
  tags: ''
}, {
  repoId: '571497',
  name: 'MVPArms',
  desc: '"a common Architecture for Android Applications developing based on MVP�_�integrates many Open Source Projects ,to make your developing quicker and easier. ( ��ۊ������������_����Ⱦ���_۾����_�ݨ�_�Android Mvp��ǎ�پ�_�ȼ����_�)"',
  url: 'https://github.com/JessYanCoding/MVPArms',
  found: 0,
  tags: ''
}, {
  repoId: '77511',
  name: 'Apktool',
  desc: 'A tool for reverse engineering Android apk files',
  url: 'https://github.com/iBotPeaches/Apktool',
  found: 0,
  tags: ''
}, {
  repoId: '374059',
  name: 'react-native-swiper',
  desc: 'The best Swiper component for React Native.',
  url: 'https://github.com/leecade/react-native-swiper',
  found: 0,
  tags: ''
}, {
  repoId: '675370',
  name: 'wechat-app-mall',
  desc: '�_���������܌�������_�_Ό_���������܌���_����',
  url: 'https://github.com/EastWorld/wechat-app-mall',
  found: 0,
  tags: ''
}, {
  repoId: '402879',
  name: 'iOSInterviewQuestions',
  desc: 'iOS����������ݠ��_�_����_Ӿ���_�--�__�_ʊ�_����__465239521',
  url: 'https://github.com/ChenYilong/iOSInterviewQuestions',
  found: 0,
  tags: ''
}, {
  repoId: '772243',
  name: 'lottie-web',
  desc: 'after effects to html library',
  url: 'https://github.com/airbnb/lottie-web',
  found: 0,
  tags: ''
}, {
  repoId: '404024',
  name: 'Iosevka',
  desc: 'Spatial efficient monospace font family for programming. Built from code.',
  url: 'https://github.com/be5invis/Iosevka',
  found: 0,
  tags: ''
}, {
  repoId: '333260',
  name: 'glide-transformations',
  desc: 'An Android transformation library providing a variety of image transformations for Glide.',
  url: 'https://github.com/wasabeef/glide-transformations',
  found: 0,
  tags: ''
}, {
  repoId: '899472',
  name: 'flutter-go',
  desc: 'flutter �_ی�ԏ�Ɍ���_� APP�_Ό�Ɍ�� flutter ����Ӭ 130+ ���Ȧ�_��_���������_ demo �_Ӎ_�',
  url: 'https://github.com/alibaba/flutter-go',
  found: 0,
  tags: ''
}, {
  repoId: '207',
  name: 'mono',
  desc: '"Mono open source ECMA CLI, C# and .NET implementation."',
  url: 'https://github.com/mono/mono',
  found: 0,
  tags: ''
}, {
  repoId: '498963',
  name: 'Kitura',
  desc: 'Web framework and HTTP server for Swift',
  url: 'https://github.com/IBM-Swift/Kitura',
  found: 0,
  tags: ''
}, {
  repoId: '616126',
  name: 'botpress',
  desc: '',
  url: 'https://github.com/botpress/botpress',
  found: 0,
  tags: ''
}, {
  repoId: '5799',
  name: 'brunch',
  desc: '"Fast front-end web app build tool with simple declarative config, seamless incremental compilation for rapid development, an opinionated pipeline and workflow, and core support for source maps."',
  url: 'https://github.com/brunch/brunch',
  found: 0,
  tags: ''
}, {
  repoId: '197631',
  name: 'OnsenUI',
  desc: 'HTML5 Hybrid Mobile App Framework with Material Design and Flat UI',
  url: 'https://github.com/OnsenUI/OnsenUI',
  found: 0,
  tags: ''
}, {
  repoId: '472240',
  name: 'easypermissions',
  desc: 'Simplify Android M system permissions',
  url: 'https://github.com/googlesamples/easypermissions',
  found: 0,
  tags: ''
}, {
  repoId: '706923',
  name: 'wcdb',
  desc: 'Multi-platform database framework from WeChat application',
  url: 'https://github.com/Tencent/wcdb',
  found: 0,
  tags: ''
}, {
  repoId: '437326',
  name: 'WeChatLuckyMoney',
  desc: '":moneybag: �_�����_������ɾ�ՊȦ, ����_��_ʌϬ�_�����__��_�_������ɾѦ�����ʊ�����. An Android app that helps you snatch virtual red envelopes in WeChat group chat. "',
  url: 'https://github.com/geeeeeeeeek/WeChatLuckyMoney',
  found: 0,
  tags: ''
}, {
  repoId: '666966',
  name: 'atlas',
  desc: 'A powerful Android Dynamic Component Framework.',
  url: 'https://github.com/alibaba/atlas',
  found: 0,
  tags: ''
}, {
  repoId: '373725',
  name: 'WWDC',
  desc: 'WWDC app for OS X',
  url: 'https://github.com/insidegui/WWDC',
  found: 0,
  tags: ''
}, {
  repoId: '840487',
  name: 'redux',
  desc: 'Predictable state container for JavaScript apps',
  url: 'https://github.com/reduxjs/redux',
  found: 0,
  tags: ''
}, {
  repoId: '462936',
  name: 'swift-package-manager',
  desc: 'The Package Manager for the Swift Programming Language',
  url: 'https://github.com/apple/swift-package-manager',
  found: 0,
  tags: ''
}, {
  repoId: '611713',
  name: 'Dash-iOS',
  desc: 'Coming soon.',
  url: 'https://github.com/Kapeli/Dash-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '569586',
  name: 'noms',
  desc: '"The versioned, forkable, syncable database"',
  url: 'https://github.com/attic-labs/noms',
  found: 0,
  tags: ''
}, {
  repoId: '641347',
  name: 'joplin',
  desc: '',
  url: 'https://github.com/laurent22/joplin',
  found: 0,
  tags: ''
}, {
  repoId: '715634',
  name: 'VirtualAPK',
  desc: '',
  url: 'https://github.com/didi/VirtualAPK',
  found: 0,
  tags: ''
}, {
  repoId: '116325',
  name: 'android-gif-drawable',
  desc: 'Views and Drawable for displaying animated GIFs on Android',
  url: 'https://github.com/koral--/android-gif-drawable',
  found: 0,
  tags: ''
}, {
  repoId: '769831',
  name: 'SkeletonView',
  desc: 'An elegant way to show users that something is happening and also prepare them to which contents he is waiting',
  url: 'https://github.com/Juanpe/SkeletonView',
  found: 0,
  tags: ''
}, {
  repoId: '477040',
  name: 'AndroidNote',
  desc: '��䌍Ҍ__�_ʍ�ӏ��',
  url: 'https://github.com/GcsSloop/AndroidNote',
  found: 0,
  tags: ''
}, {
  repoId: '567428',
  name: 'ant-design-mobile',
  desc: 'A configurable Mobile UI',
  url: 'https://github.com/ant-design/ant-design-mobile',
  found: 0,
  tags: ''
}, {
  repoId: '784985',
  name: 'yew',
  desc: 'Elm replacement in Rust',
  url: 'https://github.com/DenisKolodin/yew',
  found: 0,
  tags: ''
}, {
  repoId: '261747',
  name: 'Cartography',
  desc: 'A declarative Auto Layout DSL for Swift :iphone::triangular_ruler:',
  url: 'https://github.com/robb/Cartography',
  found: 0,
  tags: ''
}, {
  repoId: '510101',
  name: 'tdesktop',
  desc: 'Telegram Desktop messaging app',
  url: 'https://github.com/telegramdesktop/tdesktop',
  found: 0,
  tags: ''
}, {
  repoId: '264360',
  name: 'LTMorphingLabel',
  desc: 'Graceful morphing effects for UILabel written in Swift.',
  url: 'https://github.com/lexrus/LTMorphingLabel',
  found: 0,
  tags: ''
}, {
  repoId: '689061',
  name: 'UltimateAndroidReference',
  desc: ':rocket: Ultimate Android Reference - Your Road to Become a Better Android Developer',
  url: 'https://github.com/aritraroy/UltimateAndroidReference',
  found: 0,
  tags: ''
}, {
  repoId: '712050',
  name: 'up',
  desc: '"Deploy serverless apps, apis, and sites in seconds."',
  url: 'https://github.com/apex/up',
  found: 0,
  tags: ''
}, {
  repoId: '607320',
  name: 'Winds',
  desc: '"Winds is an open source & beautiful RSS reader built using React/Redux/Sails/Node 7 and Stream (getstream.io). It showcases personalized feeds (using machine learning similar to Facebook, Flipboard, Etsy, Quora - powered by the getstream.io API). This tut"',
  url: 'https://github.com/GetStream/Winds',
  found: 0,
  tags: ''
}, {
  repoId: '270398',
  name: 'awesome-android',
  desc: 'A curated list of awesome Android packages and resources.',
  url: 'https://github.com/JStumpp/awesome-android',
  found: 0,
  tags: ''
}, {
  repoId: '229063',
  name: '2048',
  desc: 'A small clone of 1024 (https://play.google.com/store/apps/details?id=com.veewo.a1024)',
  url: 'https://github.com/gabrielecirulli/2048',
  found: 0,
  tags: ''
}, {
  repoId: '404622',
  name: 'RxLifecycle',
  desc: 'Lifecycle handling APIs for Android apps using RxJava',
  url: 'https://github.com/trello/RxLifecycle',
  found: 0,
  tags: ''
}, {
  repoId: '892040',
  name: 'awesome-python-applications',
  desc: '"Software to study and use, which also happens to be open-source Python."',
  url: 'https://github.com/mahmoud/awesome-python-applications',
  found: 0,
  tags: ''
}, {
  repoId: '728112',
  name: 'incubator-mxnet',
  desc: '"Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Scala, Go, Javascript and more"',
  url: 'https://github.com/apache/incubator-mxnet',
  found: 0,
  tags: ''
}, {
  repoId: '458520',
  name: 'AndroidAutoLayout',
  desc: 'Android����_����ɍ��_����_΍ݫ�_���ǌ����_�����_��_�_�ď��ʌ�������_�����ξ�����ɍ�_ξ�ی_������_�����_���ɍ�Ѩ������',
  url: 'https://github.com/hongyangAndroid/AndroidAutoLayout',
  found: 0,
  tags: ''
}, {
  repoId: '504771',
  name: 'FSCalendar',
  desc: '"A superiorly awesome iOS7+ calendar control, compatible with both Objective-C and Swift2"',
  url: 'https://github.com/WenchaoD/FSCalendar',
  found: 0,
  tags: ''
}, {
  repoId: '694871',
  name: 'workbox',
  desc: '(Currently Work in Progress) Service Worker helper libraries. ',
  url: 'https://github.com/GoogleChrome/workbox',
  found: 0,
  tags: ''
}, {
  repoId: '788848',
  name: 'react-navigation',
  desc: '"Learn once, navigate anywhere"',
  url: 'https://github.com/react-navigation/react-navigation',
  found: 0,
  tags: ''
}, {
  repoId: '877789',
  name: 'MMKV',
  desc: '"An efficient, samll mobile key-value storage framework developed by WeChat. Works on iOS and Android."',
  url: 'https://github.com/Tencent/MMKV',
  found: 0,
  tags: ''
}, {
  repoId: '514688',
  name: 'awesome-kotlin',
  desc: 'A curated list of awesome Kotlin related stuff Inspired by awesome-java. ',
  url: 'https://github.com/KotlinBy/awesome-kotlin',
  found: 0,
  tags: ''
}, {
  repoId: '267995',
  name: 'CryptoSwift',
  desc: 'Crypto related functions and helpers for Swift implemented in Swift programming language',
  url: 'https://github.com/krzyzanowskim/CryptoSwift',
  found: 0,
  tags: ''
}, {
  repoId: '514126',
  name: 'SmarterStreaming',
  desc: '�ᬌ__����_㏤���Ԏ��ݠ�ہ�ݫ��_SDK�_�����΁Windows/android/iOS�_�_Ί_ُ�������_��ɾ�ێ�ʏ���_㏤���ԍݫ��_�_�����ہ��_��_SDK�_܊�ە_Ό_��⬏_Ⱦ�_��_�_���Ȋ__��_�_��_Ջہ��ʌ���ہ��ю�_��ܾϼ�ݫ��_�_��ہ��_��_��_���',
  url: 'https://github.com/daniulive/SmarterStreaming',
  found: 0,
  tags: ''
}, {
  repoId: '163517',
  name: 'timber',
  desc: '"A logger with a small, extensible API which provides utility on top of Android\'s normal Log class."',
  url: 'https://github.com/JakeWharton/timber',
  found: 0,
  tags: ''
}, {
  repoId: '309555',
  name: 'AudioKit',
  desc: '"Open-source audio synthesis, processing, & analysis platform."',
  url: 'https://github.com/audiokit/AudioKit',
  found: 0,
  tags: ''
}, {
  repoId: '265477',
  name: 'AndroidDevTools',
  desc: '�Ӧ�ݠ������Android�_ی�Ծ�ێ�ۍ_�Android SDK�ہ�_ی�Ԋ�_�Ӭ����_�ᴌ��ہAndroid�_ی�Ծ����܋ہAndroid��_�������ĕ_Όɍ��_�_㏨_�����ʾ���_���',
  url: 'https://github.com/inferjay/AndroidDevTools',
  found: 0,
  tags: ''
}, {
  repoId: '444658',
  name: 'react-native-animatable',
  desc: 'Standard set of easy to use animations and declarative transitions for React Native',
  url: 'https://github.com/oblador/react-native-animatable',
  found: 0,
  tags: ''
}, {
  repoId: '658440',
  name: 'Android-PickerView',
  desc: '���iOS�_�PickerView�_��Ȧ�_ξ��Ѧ�ѫ���ܩ��Ύ���_���ܩ�_�����΁��ۊ�Ί�䍼���ӌ_�����_�',
  url: 'https://github.com/Bigkoo/Android-PickerView',
  found: 0,
  tags: ''
}, {
  repoId: '66818',
  name: 'Mobile-Detect',
  desc: 'Mobile_Detect is a lightweight PHP class for detecting mobile devices (including tablets). It uses the User-Agent string combined with specific HTTP headers to detect the mobile environment.',
  url: 'https://github.com/serbanghita/Mobile-Detect',
  found: 0,
  tags: ''
}, {
  repoId: '403683',
  name: 'WinObjC',
  desc: 'Objective-C for Windows',
  url: 'https://github.com/Microsoft/WinObjC',
  found: 0,
  tags: ''
}, {
  repoId: '494181',
  name: 'react-router-redux',
  desc: 'Ruthlessly simple bindings to keep react-router and redux in sync',
  url: 'https://github.com/reactjs/react-router-redux',
  found: 0,
  tags: ''
}, {
  repoId: '325326',
  name: 'android-testing',
  desc: 'A collection of samples demonstrating different frameworks and techniques for automated testing',
  url: 'https://github.com/googlesamples/android-testing',
  found: 0,
  tags: ''
}, {
  repoId: '539375',
  name: 'cli',
  desc: 'A small package for building command line apps in Go',
  url: 'https://github.com/urfave/cli',
  found: 0,
  tags: ''
}, {
  repoId: '337758',
  name: 'JsBridge',
  desc: '"android java and javascript bridge, inspired by wechat webview jsbridge"',
  url: 'https://github.com/lzyzsd/JsBridge',
  found: 0,
  tags: ''
}, {
  repoId: '546360',
  name: 'react-sortable-hoc',
  desc: '"Set of higher-order components to turn any list into a sortable, touch-friendly, animated list"',
  url: 'https://github.com/clauderic/react-sortable-hoc',
  found: 0,
  tags: ''
}, {
  repoId: '843926',
  name: 'android-sunflower',
  desc: '',
  url: 'https://github.com/googlesamples/android-sunflower',
  found: 0,
  tags: ''
}, {
  repoId: '290398',
  name: 'android-floating-action-button',
  desc: 'Floating Action Button for Android based on Material Design specification',
  url: 'https://github.com/futuresimple/android-floating-action-button',
  found: 0,
  tags: ''
}, {
  repoId: '626651',
  name: 'material-components-android',
  desc: 'Modular and customizable Material Design UI components for Android',
  url: 'https://github.com/material-components/material-components-android',
  found: 0,
  tags: ''
}, {
  repoId: '125907',
  name: 'LitePal',
  desc: 'An Android library that allows developers to use SQLite database extremely easy.',
  url: 'https://github.com/LitePalFramework/LitePal',
  found: 0,
  tags: ''
}, {
  repoId: '691884',
  name: 'python-spider',
  desc: 'Python3����',
  url: 'https://github.com/Jack-Cherish/python-spider',
  found: 0,
  tags: ''
}, {
  repoId: '397634',
  name: 'OpenRCT2',
  desc: 'An open source re-implementation of Roller Coaster Tycoon 2.',
  url: 'https://github.com/OpenRCT2/OpenRCT2',
  found: 0,
  tags: ''
}, {
  repoId: '7144',
  name: 'laptop',
  desc: 'A shell script which turns your OS X laptop into an awesome web development machine.',
  url: 'https://github.com/thoughtbot/laptop',
  found: 0,
  tags: ''
}, {
  repoId: '322254',
  name: 'R.swift',
  desc: '"Get strong typed, autocompleted resources like images, fonts and segues in Swift projects"',
  url: 'https://github.com/mac-cain13/R.swift',
  found: 0,
  tags: ''
}, {
  repoId: '7299',
  name: 'iOS-Runtime-Headers',
  desc: 'iOS Objective-C headers as derived from runtime introspection',
  url: 'https://github.com/nst/iOS-Runtime-Headers',
  found: 0,
  tags: ''
}, {
  repoId: '253722',
  name: 'synx',
  desc: 'A command-line tool that reorganizes your Xcode project folder to match your Xcode groups',
  url: 'https://github.com/venmo/synx',
  found: 0,
  tags: ''
}, {
  repoId: '773214',
  name: 'f2',
  desc: 'the mobile version of g2',
  url: 'https://github.com/antvis/f2',
  found: 0,
  tags: ''
}, {
  repoId: '511539',
  name: 'electron-builder',
  desc: 'Build installers for Electron apps the easy way',
  url: 'https://github.com/electron-userland/electron-builder',
  found: 0,
  tags: ''
}, {
  repoId: '865324',
  name: 'filament',
  desc: '',
  url: 'https://github.com/google/filament',
  found: 0,
  tags: ''
}, {
  repoId: '265698',
  name: 'MaterialDesign',
  desc: 'Design resources for Material Design.',
  url: 'https://github.com/Templarian/MaterialDesign',
  found: 0,
  tags: ''
}, {
  repoId: '137669',
  name: 'buck',
  desc: '"A fast build system that encourages the creation of small, reusable modules over a variety of platforms and languages."',
  url: 'https://github.com/facebook/buck',
  found: 0,
  tags: ''
}, {
  repoId: '868921',
  name: 'AndroidAutoSize',
  desc: 'A low-cost Android screen adaptation solution (��_�Ѵ�_��������_����ɍ��_�������_�����_Ί�ۊ���_��__�����_� Android ����_����ɍ��_���).',
  url: 'https://github.com/JessYanCoding/AndroidAutoSize',
  found: 0,
  tags: ''
}, {
  repoId: '237499',
  name: 'androidmvp',
  desc: 'MVP Android Example',
  url: 'https://github.com/antoniolg/androidmvp',
  found: 0,
  tags: ''
}, {
  repoId: '257803',
  name: 'jazzy',
  desc: 'Soulful docs for Swift & Objective-C',
  url: 'https://github.com/realm/jazzy',
  found: 0,
  tags: ''
}, {
  repoId: '325420',
  name: 'XLPagerTabStrip',
  desc: 'Android PagerTabStrip for iOS.',
  url: 'https://github.com/xmartlabs/XLPagerTabStrip',
  found: 0,
  tags: ''
}, {
  repoId: '321900',
  name: 'wego',
  desc: 'weather app for the terminal',
  url: 'https://github.com/schachmat/wego',
  found: 0,
  tags: ''
}, {
  repoId: '296219',
  name: 'SQLite.swift',
  desc: '"A type-safe, Swift-language layer over SQLite3."',
  url: 'https://github.com/stephencelis/SQLite.swift',
  found: 0,
  tags: ''
}, {
  repoId: '295773',
  name: 'Reachability.swift',
  desc: "Replacement for Apple's Reachability re-written in Swift with closures",
  url: 'https://github.com/ashleymills/Reachability.swift',
  found: 0,
  tags: ''
}, {
  repoId: '359556',
  name: 'dex2jar',
  desc: 'Tools to work with android .dex and java .class files',
  url: 'https://github.com/pxb1988/dex2jar',
  found: 0,
  tags: ''
}, {
  repoId: '615970',
  name: 'Android-Debug-Database',
  desc: 'A library for debugging android databases and shared preferences',
  url: 'https://github.com/amitshekhariitbhu/Android-Debug-Database',
  found: 0,
  tags: ''
}, {
  repoId: '515932',
  name: 'BotBuilder',
  desc: '"The Microsoft Bot Builder SDK is one of three main components of the Microsoft Bot Framework.  The Microsoft Bot Framework provides just what you need to build and connect intelligent bots that interact naturally wherever your users are talking, from text"',
  url: 'https://github.com/Microsoft/BotBuilder',
  found: 0,
  tags: ''
}, {
  repoId: '306412',
  name: 'helmet',
  desc: 'Help secure Express apps with various HTTP headers',
  url: 'https://github.com/helmetjs/helmet',
  found: 0,
  tags: ''
}, {
  repoId: '394885',
  name: 'android-ndk',
  desc: 'Android NDK samples',
  url: 'https://github.com/googlesamples/android-ndk',
  found: 0,
  tags: ''
}, {
  repoId: '684425',
  name: 'litho',
  desc: 'A declarative framework for building efficient UIs on Android.',
  url: 'https://github.com/facebook/litho',
  found: 0,
  tags: ''
}, {
  repoId: '811247',
  name: 'vue-native-core',
  desc: '',
  url: 'https://github.com/GeekyAnts/vue-native-core',
  found: 0,
  tags: ''
}, {
  repoId: '694610',
  name: 'howmanypeoplearearound',
  desc: 'Using tshark to quantify the number of people in a location',
  url: 'https://github.com/schollz/howmanypeoplearearound',
  found: 0,
  tags: ''
}, {
  repoId: '431368',
  name: 'laravel-permission',
  desc: 'Associate users with roles and permissions',
  url: 'https://github.com/spatie/laravel-permission',
  found: 0,
  tags: ''
}, {
  repoId: '725825',
  name: 'ncnn',
  desc: 'ncnn is a high-performance neural network inference framework optimized for the mobile platform',
  url: 'https://github.com/Tencent/ncnn',
  found: 0,
  tags: ''
}, {
  repoId: '395114',
  name: 'Timber',
  desc: 'Material Design Music Player',
  url: 'https://github.com/naman14/Timber',
  found: 0,
  tags: ''
}, {
  repoId: '665513',
  name: 'functions-samples',
  desc: 'Set of Cloud Functions for Firebase samples',
  url: 'https://github.com/firebase/functions-samples',
  found: 0,
  tags: ''
}, {
  repoId: '3159',
  name: 'MahApps.Metro',
  desc: 'A toolkit for creating Metro / Modern UI styled WPF apps.',
  url: 'https://github.com/MahApps/MahApps.Metro',
  found: 0,
  tags: ''
}, {
  repoId: '512676',
  name: 'Android-SpinKit',
  desc: 'Android  loading animations',
  url: 'https://github.com/ybq/Android-SpinKit',
  found: 0,
  tags: ''
}, {
  repoId: '196781',
  name: 'ShortcutBadger',
  desc: '"An Android library supports badge notification like iOS in Samsung, LG, Sony and HTC launchers."',
  url: 'https://github.com/leolin310148/ShortcutBadger',
  found: 0,
  tags: ''
}, {
  repoId: '229370',
  name: 'chisel',
  desc: 'Chisel is a collection of LLDB commands to assist debugging iOS apps.',
  url: 'https://github.com/facebook/chisel',
  found: 0,
  tags: ''
}, {
  repoId: '677653',
  name: 'kotlin-native',
  desc: '',
  url: 'https://github.com/JetBrains/kotlin-native',
  found: 0,
  tags: ''
}, {
  repoId: '769555',
  name: 'cube-ui',
  desc: '',
  url: 'https://github.com/didi/cube-ui',
  found: 0,
  tags: ''
}, {
  repoId: '446403',
  name: 'react-native-code-push',
  desc: 'React Native plugin for the CodePush service.',
  url: 'https://github.com/Microsoft/react-native-code-push',
  found: 0,
  tags: ''
}, {
  repoId: '3318',
  name: 'noty',
  desc: 'noty is a jQuery notification plugin that makes it easy to create alert - success - error - warning - information - confirmation messages as an alternative the standard alert dialog.',
  url: 'https://github.com/needim/noty',
  found: 0,
  tags: ''
}, {
  repoId: '706539',
  name: 'RePlugin',
  desc: '360��ܾϼ��ǌ�Ǿ�ՊȦ��о���_���_���',
  url: 'https://github.com/Qihoo360/RePlugin',
  found: 0,
  tags: ''
}, {
  repoId: '316744',
  name: 'qt',
  desc: 'Qt binding for Go (Windows / Mac OS X / Linux / Android)',
  url: 'https://github.com/therecipe/qt',
  found: 0,
  tags: ''
}, {
  repoId: '250338',
  name: 'AndroidAssetStudio',
  desc: "A set of web-based tools for generating graphics and other assets that would eventually be in an Android application's res/ directory.",
  url: 'https://github.com/romannurik/AndroidAssetStudio',
  found: 0,
  tags: ''
}, {
  repoId: '218006',
  name: 'j2objc',
  desc: 'A Java to iOS Objective-C translation tool and runtime.',
  url: 'https://github.com/google/j2objc',
  found: 0,
  tags: ''
}, {
  repoId: '688763',
  name: 'sizzy',
  desc: 'placeholder repo for a responsive design tool',
  url: 'https://github.com/kitze/sizzy',
  found: 0,
  tags: ''
}, {
  repoId: '235406',
  name: 'mal',
  desc: 'mal - Make a Lisp',
  url: 'https://github.com/kanaka/mal',
  found: 0,
  tags: ''
}, {
  repoId: '715199',
  name: 'awesome-arkit',
  desc: 'A curated list of awesome ARKit projects and resources. Feel free to contribute!',
  url: 'https://github.com/olucurious/awesome-arkit',
  found: 0,
  tags: ''
}, {
  repoId: '562945',
  name: 'awesome-adb',
  desc: 'Adb usage complete / Adb �Ӭ�_��_��ɬ',
  url: 'https://github.com/mzlogin/awesome-adb',
  found: 0,
  tags: ''
}, {
  repoId: '371641',
  name: 'ResearchKit',
  desc: 'ResearchKit is an open source software framework that makes it easy to create apps for medical research or for other research projects.',
  url: 'https://github.com/ResearchKit/ResearchKit',
  found: 0,
  tags: ''
}, {
  repoId: '509678',
  name: 'JTAppleCalendar',
  desc: 'This is the Apple Calendar control Apple whished they made.',
  url: 'https://github.com/patchthecode/JTAppleCalendar',
  found: 0,
  tags: ''
}, {
  repoId: '557853',
  name: 'VirtualApp',
  desc: 'An open source implementation of MultiAccount.',
  url: 'https://github.com/asLody/VirtualApp',
  found: 0,
  tags: ''
}, {
  repoId: '323539',
  name: 'flickity',
  desc: '":leaves: Touch, responsive, flickable galleries"',
  url: 'https://github.com/metafizzy/flickity',
  found: 0,
  tags: ''
}, {
  repoId: '505020',
  name: 'eruda',
  desc: 'Console for mobile JavaScript',
  url: 'https://github.com/liriliri/eruda',
  found: 0,
  tags: ''
}, {
  repoId: '626175',
  name: 'ios-oss',
  desc: '"Kickstarter for iOS. Bring new ideas to life, anywhere."',
  url: 'https://github.com/kickstarter/ios-oss',
  found: 0,
  tags: ''
}, {
  repoId: '542443',
  name: 'anbox',
  desc: '',
  url: 'https://github.com/anbox/anbox',
  found: 0,
  tags: ''
}, {
  repoId: '811133',
  name: 'VirtualXposed',
  desc: 'A Module to use Xposed without root or recovery(or modify system image etc).',
  url: 'https://github.com/android-hacker/VirtualXposed',
  found: 0,
  tags: ''
}, {
  repoId: '694985',
  name: 'AgentWeb',
  desc: 'This is android library on encapsulate webview . very easy to used . ',
  url: 'https://github.com/Justson/AgentWeb',
  found: 0,
  tags: ''
}, {
  repoId: '283167',
  name: 'RxKotlin',
  desc: 'RxJava bindings for Kotlin',
  url: 'https://github.com/ReactiveX/RxKotlin',
  found: 0,
  tags: ''
}, {
  repoId: '240245',
  name: 'XLForm',
  desc: 'XLForm is the most flexible and powerful iOS library to create dynamic table-view forms. Fully compatible with Swift & Obj-C. ',
  url: 'https://github.com/xmartlabs/XLForm',
  found: 0,
  tags: ''
}, {
  repoId: '537759',
  name: 'quickstart-android',
  desc: 'Firebase Quickstart Samples for Android',
  url: 'https://github.com/firebase/quickstart-android',
  found: 0,
  tags: ''
}, {
  repoId: '34446',
  name: 'antlr4',
  desc: '"ANTLR (ANother Tool for Language Recognition) is a powerful parser generator for reading, processing, executing, or translating structured text or binary files."',
  url: 'https://github.com/antlr/antlr4',
  found: 0,
  tags: ''
}, {
  repoId: '146617',
  name: 'knockout',
  desc: '"Knockout makes it easier to create rich, responsive UIs with JavaScript"',
  url: 'https://github.com/knockout/knockout',
  found: 0,
  tags: ''
}, {
  repoId: '13813',
  name: 'seafile',
  desc: '"File syncing and sharing software with file encryption and group sharing, emphasis on reliability and high performance. "',
  url: 'https://github.com/haiwen/seafile',
  found: 0,
  tags: ''
}, {
  repoId: '5951',
  name: 'fancyBox',
  desc: '"fancyBox is a tool that offers a nice and elegant way to add zooming functionality for images, html content and multi-media on your webpages."',
  url: 'https://github.com/fancyapps/fancyBox',
  found: 0,
  tags: ''
}, {
  repoId: '606470',
  name: 'ImmersionBar',
  desc: '��䌍�4.4�ȴ��_�_侵��_�(ImmersionBar)�_㍐�',
  url: 'https://github.com/gyf-dev/ImmersionBar',
  found: 0,
  tags: ''
}, {
  repoId: '769855',
  name: 'SuperTinyIcons',
  desc: 'Under 1KB each! Super Tiny Social Icons are miniscule SVG versions of your favourite logos',
  url: 'https://github.com/edent/SuperTinyIcons',
  found: 0,
  tags: ''
}, {
  repoId: '250790',
  name: 'ZhihuDailyPurify',
  desc: 'Purified version of Zhihu Daily - �ݫ�����ۍ_�ٴ�__�Ѵ�_�',
  url: 'https://github.com/izzyleung/ZhihuDailyPurify',
  found: 0,
  tags: ''
}, {
  repoId: '377091',
  name: 'androidtool-mac',
  desc: '"One-click screenshots, video recordings, app installation for iOS and Android"',
  url: 'https://github.com/mortenjust/androidtool-mac',
  found: 0,
  tags: ''
}, {
  repoId: '503595',
  name: 'ZFPlayer',
  desc: '�ټ��_AVPlayer�_Ό�_�_���_��ܾ�Ԍ_���ď_��_��_Ό�_��_��Ԍ_���ď_��_��_��݌�_',
  url: 'https://github.com/renzifeng/ZFPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '868693',
  name: 'watermelondb',
  desc: '',
  url: 'https://github.com/Nozbe/watermelondb',
  found: 0,
  tags: ''
}, {
  repoId: '2557',
  name: 'nimbus',
  desc: 'The iOS framework that grows only as fast as its documentation',
  url: 'https://github.com/jverkoey/nimbus',
  found: 0,
  tags: ''
}, {
  repoId: '618563',
  name: 'Keyframes',
  desc: 'A library for converting Adobe AE shape based animations to a data format and play it back on Android and iOS devices.',
  url: 'https://github.com/facebookincubator/Keyframes',
  found: 0,
  tags: ''
}, {
  repoId: '349155',
  name: 'mosby',
  desc: 'A Model-View-Presenter library for modern Android apps',
  url: 'https://github.com/sockeqwe/mosby',
  found: 0,
  tags: ''
}, {
  repoId: '478056',
  name: 'SVProgressHUD',
  desc: 'A clean and lightweight progress HUD for your iOS and tvOS app.',
  url: 'https://github.com/SVProgressHUD/SVProgressHUD',
  found: 0,
  tags: ''
}, {
  repoId: '59909',
  name: 'AndroidAsync',
  desc: '"Asynchronous socket, http (client+server), websocket, and socket.io library for android. Based on nio, not threads."',
  url: 'https://github.com/koush/AndroidAsync',
  found: 0,
  tags: ''
}, {
  repoId: '76596',
  name: 'webpack-dev-server',
  desc: 'Serves a webpack app. Updates the browser on changes.',
  url: 'https://github.com/webpack/webpack-dev-server',
  found: 0,
  tags: ''
}, {
  repoId: '441740',
  name: 'AndResGuard',
  desc: 'proguard resource for Android  by wechat team',
  url: 'https://github.com/shwenzhang/AndResGuard',
  found: 0,
  tags: ''
}, {
  repoId: '638984',
  name: 'rax',
  desc: ':tophat: A universal React-compatible render engine.',
  url: 'https://github.com/alibaba/rax',
  found: 0,
  tags: ''
}, {
  repoId: '664087',
  name: 'Texture',
  desc: '',
  url: 'https://github.com/TextureGroup/Texture',
  found: 0,
  tags: ''
}, {
  repoId: '579522',
  name: 'epoxy',
  desc: '',
  url: 'https://github.com/airbnb/epoxy',
  found: 0,
  tags: ''
}, {
  repoId: '642302',
  name: 'Toasty',
  desc: '"The usual Toast, but with steroids"',
  url: 'https://github.com/GrenderG/Toasty',
  found: 0,
  tags: ''
}, {
  repoId: '451180',
  name: 'AndroidLibs',
  desc: '�_��Ϭ��������_��_��یɬ������Android�_۾���ȣ�ʁ�_��ɬ~~~~�_��_��Ϭ�������Ӧ�ݠ�_Ί���_���۾۴~~���Star��ۊ�܌���_�',
  url: 'https://github.com/XXApple/AndroidLibs',
  found: 0,
  tags: ''
}, {
  repoId: '447943',
  name: 'CYLTabBarController',
  desc: '��ۊ__�����ۊ_ʊ�_��������㌍_�����ξ����Ⱦ��App����_���_�ȼ',
  url: 'https://github.com/ChenYilong/CYLTabBarController',
  found: 0,
  tags: ''
}, {
  repoId: '396603',
  name: 'android-topeka',
  desc: 'A fun to play quiz that showcases material design on Android',
  url: 'https://github.com/googlesamples/android-topeka',
  found: 0,
  tags: ''
}, {
  repoId: '483973',
  name: 'ReSwift',
  desc: 'Unidirectional Data Flow in Swift - Inspired by Redux',
  url: 'https://github.com/ReSwift/ReSwift',
  found: 0,
  tags: ''
}, {
  repoId: '263019',
  name: 'sandstorm',
  desc: 'Personal Cloud Sandbox',
  url: 'https://github.com/sandstorm-io/sandstorm',
  found: 0,
  tags: ''
}, {
  repoId: '448482',
  name: 'android-job',
  desc: 'Android library to handle jobs in the background.',
  url: 'https://github.com/evernote/android-job',
  found: 0,
  tags: ''
}, {
  repoId: '586761',
  name: 'AndPermission',
  desc: '',
  url: 'https://github.com/yanzhenjie/AndPermission',
  found: 0,
  tags: ''
}, {
  repoId: '174857',
  name: 'subsampling-scale-image-view',
  desc: '"Highly configurable, easily extendable view with pan and zoom gestures for displaying huge images without loss of detail. Perfect for photo galleries, maps, building plans etc."',
  url: 'https://github.com/davemorrissey/subsampling-scale-image-view',
  found: 0,
  tags: ''
}, {
  repoId: '337707',
  name: 'TextFieldEffects',
  desc: '"Custom UITextFields effects inspired by Codrops, built using Swift"',
  url: 'https://github.com/raulriera/TextFieldEffects',
  found: 0,
  tags: ''
}, {
  repoId: '749242',
  name: 'vConsole',
  desc: '"A lightweight, extendable front-end developer tool for mobile web page."',
  url: 'https://github.com/Tencent/vConsole',
  found: 0,
  tags: ''
}, {
  repoId: '740773',
  name: 'lozad.js',
  desc: '',
  url: 'https://github.com/ApoorvSaxena/lozad.js',
  found: 0,
  tags: ''
}, {
  repoId: '354815',
  name: 'falcon',
  desc: '"Falcon is a high-performance Python framework for building REST microservices, smart proxies, and app backends."',
  url: 'https://github.com/falconry/falcon',
  found: 0,
  tags: ''
}, {
  repoId: '648112',
  name: 'react-native-firebase',
  desc: '"Native firebase implementation for react native, supporting both ios and android."',
  url: 'https://github.com/invertase/react-native-firebase',
  found: 0,
  tags: ''
}, {
  repoId: '334056',
  name: 'Side-Menu.Android',
  desc: 'Side menu with some categories to choose.',
  url: 'https://github.com/Yalantis/Side-Menu.Android',
  found: 0,
  tags: ''
}, {
  repoId: '758888',
  name: 'ViewAnimator',
  desc: 'ViewAnimator brings your UI to life with just one line',
  url: 'https://github.com/marcosgriselli/ViewAnimator',
  found: 0,
  tags: ''
}, {
  repoId: '543925',
  name: 'sourcegraph',
  desc: '"Fast, global, semantic code search & cross-reference engine for developers."',
  url: 'https://github.com/sourcegraph/sourcegraph',
  found: 0,
  tags: ''
}, {
  repoId: '362841',
  name: 'responsive-html-email-template',
  desc: 'When all you need is a really simple HTML email template.',
  url: 'https://github.com/leemunroe/responsive-html-email-template',
  found: 0,
  tags: ''
}, {
  repoId: '344904',
  name: 'material-calendarview',
  desc: "A Material design back port of Android's CalendarView",
  url: 'https://github.com/prolificinteractive/material-calendarview',
  found: 0,
  tags: ''
}, {
  repoId: '719869',
  name: 'android-interview-questions',
  desc: 'Your Cheat Sheet For Android Interview - Android Interview Questions',
  url: 'https://github.com/MindorksOpenSource/android-interview-questions',
  found: 0,
  tags: ''
}, {
  repoId: '641234',
  name: 'reactotron',
  desc: 'A desktop app for inspecting your React JS and React Native projects.',
  url: 'https://github.com/infinitered/reactotron',
  found: 0,
  tags: ''
}, {
  repoId: '685435',
  name: 'react-redux-typescript-guide',
  desc: '"A comprehensive guide to static typing ""React & Redux"" apps using TypeScript"',
  url: 'https://github.com/piotrwitek/react-redux-typescript-guide',
  found: 0,
  tags: ''
}, {
  repoId: '270291',
  name: 'awesome-swift',
  desc: '"A curated list of awesome Swift frameworks, libraries and software."',
  url: 'https://github.com/Wolg/awesome-swift',
  found: 0,
  tags: ''
}, {
  repoId: '738502',
  name: 'stencil',
  desc: 'Stencil: A Compiler for Web Components',
  url: 'https://github.com/ionic-team/stencil',
  found: 0,
  tags: ''
}, {
  repoId: '365412',
  name: 'moshi',
  desc: 'A modern JSON library for Android and Java.',
  url: 'https://github.com/square/moshi',
  found: 0,
  tags: ''
}, {
  repoId: '520222',
  name: 'BGAQRCode-Android',
  desc: 'Android QRCode Library',
  url: 'https://github.com/bingoogolapple/BGAQRCode-Android',
  found: 0,
  tags: ''
}, {
  repoId: '363351',
  name: 'componentkit',
  desc: 'A React-inspired view framework for iOS.',
  url: 'https://github.com/facebook/componentkit',
  found: 0,
  tags: ''
}, {
  repoId: '475513',
  name: 'selectize.js',
  desc: '"Selectize is the hybrid of a textbox and <select> box. It\'s jQuery based and it has autocomplete and native-feeling keyboard navigation; useful for tagging, contact lists, etc."',
  url: 'https://github.com/selectize/selectize.js',
  found: 0,
  tags: ''
}, {
  repoId: '540467',
  name: 'expanding-collection',
  desc: '',
  url: 'https://github.com/Ramotion/expanding-collection',
  found: 0,
  tags: ''
}, {
  repoId: '518167',
  name: 'electron-quick-start',
  desc: 'Clone to try a simple Electron app',
  url: 'https://github.com/electron/electron-quick-start',
  found: 0,
  tags: ''
}, {
  repoId: '309921',
  name: 'drive',
  desc: 'Google Drive client for the commandline',
  url: 'https://github.com/odeke-em/drive',
  found: 0,
  tags: ''
}, {
  repoId: '499751',
  name: 'BackgroundMusic',
  desc: '"Background Music, an OS X audio utility"',
  url: 'https://github.com/kyleneideck/BackgroundMusic',
  found: 0,
  tags: ''
}, {
  repoId: '775549',
  name: 'haven',
  desc: 'Haven (formerly known as ���Phoneypot�۝) is an Android application that leverages on-device sensors to provide monitoring and protection of physical spaces.',
  url: 'https://github.com/guardianproject/haven',
  found: 0,
  tags: ''
}, {
  repoId: '501464',
  name: 'electron-packager',
  desc: '"Package and distribute your Electron app in OS executables (.app, .exe etc) via JS or CLI"',
  url: 'https://github.com/electron-userland/electron-packager',
  found: 0,
  tags: ''
}, {
  repoId: '148051',
  name: 'ion',
  desc: 'Android Asynchronous Networking and Image Loading',
  url: 'https://github.com/koush/ion',
  found: 0,
  tags: ''
}, {
  repoId: '350520',
  name: 'client',
  desc: '"Go library, client and local daemon"',
  url: 'https://github.com/keybase/client',
  found: 0,
  tags: ''
}, {
  repoId: '1963',
  name: 'XMPPFramework',
  desc: 'An XMPP Framework in Objective-C for Mac and iOS',
  url: 'https://github.com/robbiehanson/XMPPFramework',
  found: 0,
  tags: ''
}, {
  repoId: '359038',
  name: 'http-proxy-middleware',
  desc: '":zap: The one-liner node.js http-proxy middleware for connect, express and browser-sync"',
  url: 'https://github.com/chimurai/http-proxy-middleware',
  found: 0,
  tags: ''
}, {
  repoId: '258159',
  name: 'SCLAlertView-Swift',
  desc: 'Beautiful animated Alert View. Written in Swift',
  url: 'https://github.com/vikmeup/SCLAlertView-Swift',
  found: 0,
  tags: ''
}, {
  repoId: '600085',
  name: 'react-native-snap-carousel',
  desc: 'Simple carousel component with snapping effect on Android & iOS for React Native',
  url: 'https://github.com/archriss/react-native-snap-carousel',
  found: 0,
  tags: ''
}, {
  repoId: '793836',
  name: 'iOSProject',
  desc: '"oc��_�����_�ݨ,ios��_�����_�ݨ,iosdemo,ocdemo,demo,��_�۝����_ь��,�С����_���_,sina,QQ��_�_�,QQMusic,music,�����Ԍ�я��,��_�_���_��_,��о�_��_��_,�_ȍ����܏__,��_�Ѧ��_���,��Ҍ�� ios �Ѵ���,�ρ���μ��䍼���ӌ_�,�_�����_����ʏ,�໌�_�_��_����ʏ,�_ъ_Ҏ��ɍ����_�,�����_�������_�,�����_���,��_��������Ϗ�_������,��_�����������_������,YYText �_��Ӭ,��я���_㌱��_ی�ξӦ���,���ώ_Ў����Č��,��������Č��,�_�ݫ��������Č��,����__��������Č��,��_�������������Č��,�Ө����_㍐�,���Ȧ��܏__,Masonry ����_�,LKDB ���������,��_��_�ϡ��_,��΍ȫ�ʁ,�ɤ����_�_�"',
  url: 'https://github.com/NJHu/iOSProject',
  found: 0,
  tags: ''
}, {
  repoId: '542362',
  name: 'react-native-debugger',
  desc: '"The standalone app for React Native Debugger, with React DevTools / Redux DevTools"',
  url: 'https://github.com/jhen0409/react-native-debugger',
  found: 0,
  tags: ''
}, {
  repoId: '3709',
  name: 'SparkleShare',
  desc: '"Share and collaborate by syncing with any Git repository instantly. Linux, macOS, and Windows."',
  url: 'https://github.com/hbons/SparkleShare',
  found: 0,
  tags: ''
}, {
  repoId: '248266',
  name: 'soundnode-app',
  desc: '"Soundnode App is the Soundcloud for desktop. Built with NW.js, Angular.js and Soundcloud API."',
  url: 'https://github.com/Soundnode/soundnode-app',
  found: 0,
  tags: ''
}, {
  repoId: '587672',
  name: 'Magisk',
  desc: '',
  url: 'https://github.com/topjohnwu/Magisk',
  found: 0,
  tags: ''
}, {
  repoId: '496314',
  name: 'EarlGrey',
  desc: 'iOS UI Automation Test Framework',
  url: 'https://github.com/google/EarlGrey',
  found: 0,
  tags: ''
}, {
  repoId: '715200',
  name: 'kittenTricks',
  desc: '',
  url: 'https://github.com/akveo/kittenTricks',
  found: 0,
  tags: ''
}, {
  repoId: '617081',
  name: 'serverless-application-model',
  desc: 'AWS Serverless Application Model (AWS SAM) prescribes rules for expressing Serverless applications on AWS.',
  url: 'https://github.com/awslabs/serverless-application-model',
  found: 0,
  tags: ''
}, {
  repoId: '8608',
  name: 'chrome-app-samples',
  desc: 'Chrome Apps',
  url: 'https://github.com/GoogleChrome/chrome-app-samples',
  found: 0,
  tags: ''
}, {
  repoId: '672268',
  name: 'expo',
  desc: 'Expo iOS/Android Client',
  url: 'https://github.com/expo/expo',
  found: 0,
  tags: ''
}, {
  repoId: '871431',
  name: 'DoraemonKit',
  desc: 'A collection of testing tools for iOS App development',
  url: 'https://github.com/didi/DoraemonKit',
  found: 0,
  tags: ''
}, {
  repoId: '112123',
  name: 'WeiXinMPSDK',
  desc: '�_������_ь__���SDK Senparc.Weixin for C#�_Ό�_����΁�_������_ь��ہ�_���_���ہ�_۾�_�__����ہ�_�����������ہJSSDK���',
  url: 'https://github.com/JeffreySu/WeiXinMPSDK',
  found: 0,
  tags: ''
}, {
  repoId: '625134',
  name: 'FastHub',
  desc: 'TODO',
  url: 'https://github.com/k0shk0sh/FastHub',
  found: 0,
  tags: ''
}, {
  repoId: '813620',
  name: 'swift-nio',
  desc: 'Event-driven network application framework for high performance protocol servers & clients non-blocking.',
  url: 'https://github.com/apple/swift-nio',
  found: 0,
  tags: ''
}, {
  repoId: '593328',
  name: 'NewPipe',
  desc: 'A lightweight Youtube frontend for Android.',
  url: 'https://github.com/TeamNewPipe/NewPipe',
  found: 0,
  tags: ''
}, {
  repoId: '533474',
  name: 'pepperoni-app-kit',
  desc: 'Pepperoni - React Native App Starter Kit for Android and iOS',
  url: 'https://github.com/futurice/pepperoni-app-kit',
  found: 0,
  tags: ''
}, {
  repoId: '3336',
  name: 'Metro-UI-CSS',
  desc: 'CSS styles for build Windows 8 Metro UI stylable interface',
  url: 'https://github.com/olton/Metro-UI-CSS',
  found: 0,
  tags: ''
}, {
  repoId: '272025',
  name: 'starscream',
  desc: 'Websockets in swift for iOS and OSX',
  url: 'https://github.com/daltoniam/Starscream',
  found: 0,
  tags: ''
}, {
  repoId: '380626',
  name: 'SwiftDate',
  desc: '"Powerful NSDate & Time Zones Management, made in Swift 2"',
  url: 'https://github.com/malcommac/SwiftDate',
  found: 0,
  tags: ''
}, {
  repoId: '792047',
  name: 'sweetalert2',
  desc: '"A beautiful, responsive, customizable and accessible (WAI-ARIA) replacement for JavaScript\'s popup boxes. Zero dependencies."',
  url: 'https://github.com/sweetalert2/sweetalert2',
  found: 0,
  tags: ''
}, {
  repoId: '12232',
  name: 'python-for-android',
  desc: 'Turn your Python application into an Android APK',
  url: 'https://github.com/kivy/python-for-android',
  found: 0,
  tags: ''
}, {
  repoId: '528498',
  name: 'Depth-LIB-Android-',
  desc: '"A library gives depth to Views. It also contains some examples of Canvas drawing techniques to create particle systems, waves and grain effect. Don\'t expect to much from this lib, it was written as a quick prototype, so the visuals look good but the code "',
  url: 'https://github.com/danielzeller/Depth-LIB-Android-',
  found: 0,
  tags: ''
}, {
  repoId: '180901',
  name: 'JVFloatLabeledTextField',
  desc: "UITextField subclass with floating labels - inspired by Matt D. Smith's design: http://dribbble.com/shots/1254439--GIF-Mobile-Form-Interaction?list=users",
  url: 'https://github.com/jverdi/JVFloatLabeledTextField',
  found: 0,
  tags: ''
}, {
  repoId: '2643',
  name: 'facebook-android-sdk',
  desc: 'Used to integrate Android apps with Facebook Platform.',
  url: 'https://github.com/facebook/facebook-android-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '327111',
  name: 'KeychainAccess',
  desc: 'Simple Swift wrapper for Keychain that works on iOS and OS X',
  url: 'https://github.com/kishikawakatsumi/KeychainAccess',
  found: 0,
  tags: ''
}, {
  repoId: '73372',
  name: 'ReactiveUI',
  desc: '"A MVVM framework that integrates with the Reactive Extensions for .NET to create elegant, testable User Interfaces that run on any mobile or desktop platform. Supports Xamarin.iOS, Xamarin.Android, Xamarin.Mac, Xamarin Forms, WPF, Windows Forms, Windows P"',
  url: 'https://github.com/reactiveui/ReactiveUI',
  found: 0,
  tags: ''
}, {
  repoId: '338350',
  name: 'android-advancedrecyclerview',
  desc: '"RecyclerView extension library which provides advanced features. (ex. Google\'s Inbox app like swiping, Play Music app like drag and drop sorting)"',
  url: 'https://github.com/h6ah4i/android-advancedrecyclerview',
  found: 0,
  tags: ''
}, {
  repoId: '88816',
  name: 'ppsspp',
  desc: '"A PSP emulator for Android, Windows, Mac and Linux, written in C++. Want to contribute? Join us in #ppsspp on freenode (IRC) or just send pull requests / issues. For discussion use the forums on ppsspp.org."',
  url: 'https://github.com/hrydgard/ppsspp',
  found: 0,
  tags: ''
}, {
  repoId: '431262',
  name: 'pupy',
  desc: '"Pupy is an opensource, multi-platform (Windows, Linux, OSX, Android) Remote Administration Tool with an embedded Python interpreter."',
  url: 'https://github.com/n1nj4sec/pupy',
  found: 0,
  tags: ''
}, {
  repoId: '93083',
  name: 'pickadate.js',
  desc: '"(Looking for Project Maintainers) The mobile-friendly, responsive, and lightweight jQuery date & time input picker."',
  url: 'https://github.com/amsul/pickadate.js',
  found: 0,
  tags: ''
}, {
  repoId: '4002',
  name: 'k-9',
  desc: 'K-9 Mail ��� Advanced Email for Android',
  url: 'https://github.com/k9mail/k-9',
  found: 0,
  tags: ''
}, {
  repoId: '290994',
  name: 'jjwt',
  desc: 'Java JWT: JSON Web Token for Java',
  url: 'https://github.com/jwtk/jjwt',
  found: 0,
  tags: ''
}, {
  repoId: '489532',
  name: 'Douya',
  desc: '"Douban, yet another"',
  url: 'https://github.com/DreaminginCodeZH/Douya',
  found: 0,
  tags: ''
}, {
  repoId: '232156',
  name: 'bullet3',
  desc: 'Bullet 2.x official repository with optional experimental Bullet 3 GPU rigid body pipeline',
  url: 'https://github.com/bulletphysics/bullet3',
  found: 0,
  tags: ''
}, {
  repoId: '133958',
  name: 'koreader',
  desc: '"An ebook reader application supporting PDF, DjVu, EPUB, FB2 and many more formats, running on Kindle, Kobo, PocketBook, Ubuntu Touch and Android devices"',
  url: 'https://github.com/koreader/koreader',
  found: 0,
  tags: ''
}, {
  repoId: '576560',
  name: 'SwiftMessages',
  desc: 'A very flexible message bar for iOS written in Swift.',
  url: 'https://github.com/SwiftKickMobile/SwiftMessages',
  found: 0,
  tags: ''
}, {
  repoId: '144225',
  name: 'robolectric',
  desc: 'Android Unit Testing Framework',
  url: 'https://github.com/robolectric/robolectric',
  found: 0,
  tags: ''
}, {
  repoId: '622016',
  name: 'darkflow',
  desc: '"translate darknet to tensorflow. Load trained weights, retrain/fine-tune them using tensorflow, export constant graph def to C++"',
  url: 'https://github.com/thtrieu/darkflow',
  found: 0,
  tags: ''
}, {
  repoId: '638363',
  name: 'SwifterSwift',
  desc: 'A handy collection of more than 400 native Swift 3 extensions to boost your productivity.',
  url: 'https://github.com/SwifterSwift/SwifterSwift',
  found: 0,
  tags: ''
}, {
  repoId: '274577',
  name: 'Async',
  desc: 'Syntactic sugar in Swift for asynchronous dispatches in Grand Central Dispatch',
  url: 'https://github.com/duemunk/Async',
  found: 0,
  tags: ''
}, {
  repoId: '572034',
  name: 'react-app-rewired',
  desc: 'Configure the unconfigurable ... override Create React App WebPack configs',
  url: 'https://github.com/timarney/react-app-rewired',
  found: 0,
  tags: ''
}, {
  repoId: '516822',
  name: 'folding-cell-android',
  desc: '',
  url: 'https://github.com/Ramotion/folding-cell-android',
  found: 0,
  tags: ''
}, {
  repoId: '189877',
  name: 'Squirrel.Windows',
  desc: 'An installation and update framework for Windows desktop apps',
  url: 'https://github.com/Squirrel/Squirrel.Windows',
  found: 0,
  tags: ''
}, {
  repoId: '620751',
  name: 'CyberChef',
  desc: 'The Cyber Swiss Army Knife',
  url: 'https://github.com/gchq/CyberChef',
  found: 0,
  tags: ''
}, {
  repoId: '645973',
  name: 'react-native-interactable',
  desc: 'Experimental implementation of interactable views in React Native',
  url: 'https://github.com/wix/react-native-interactable',
  found: 0,
  tags: ''
}, {
  repoId: '446426',
  name: 'AndroidPicker',
  desc: '"��䌍Ҏ��ܩ�����Ȍ�ҕ_Ό�ɾ�¾Ѵ��پѦ�ѫ���ܩ����ہ�����_���ܩ����ہ�ϡ��ێ��ܩ����ہ��Ϗ�_���ܩ����ہ���Ȧ�ݨ�_����ܩ����ہ����_ю��ܩ����ہ��ٌ�����ܩ����_�_Ό���໌�_�_����Ĭ��_����Ĭ��Ύ���_Ό���໌�_�_䍻ь���_���ȋ��Picker for android, include date&time/option/number/address/city/color/file&directory."',
  url: 'https://github.com/gzu-liyujiang/AndroidPicker',
  found: 0,
  tags: ''
}, {
  repoId: '722388',
  name: 'ARKit-CoreLocation',
  desc: 'Combines the high accuracy of AR with the scale of GPS data.',
  url: 'https://github.com/ProjectDent/ARKit-CoreLocation',
  found: 0,
  tags: ''
}, {
  repoId: '781356',
  name: 'Manta',
  desc: '???? Painless invoicing with customizable templates',
  url: 'https://github.com/hql287/Manta',
  found: 0,
  tags: ''
}, {
  repoId: '665468',
  name: 'react-native-windows',
  desc: 'A framework for building native apps with React.',
  url: 'https://github.com/Microsoft/react-native-windows',
  found: 0,
  tags: ''
}, {
  repoId: '402295',
  name: 'react-native-material-kit',
  desc: 'Bringing Material Design to React Native',
  url: 'https://github.com/xinthink/react-native-material-kit',
  found: 0,
  tags: ''
}, {
  repoId: '521717',
  name: 'redex',
  desc: 'A bytecode optimizer for Android apps',
  url: 'https://github.com/facebook/redex',
  found: 0,
  tags: ''
}, {
  repoId: '627075',
  name: 'nexe',
  desc: '???? create a single executable out of your node.js apps',
  url: 'https://github.com/nexe/nexe',
  found: 0,
  tags: ''
}, {
  repoId: '767928',
  name: 'RIBs',
  desc: "Uber's cross-platform mobile architecture.",
  url: 'https://github.com/uber/RIBs',
  found: 0,
  tags: ''
}, {
  repoId: '667729',
  name: 'Awesome_APIs',
  desc: 'A collection of APIs',
  url: 'https://github.com/TonnyL/Awesome_APIs',
  found: 0,
  tags: ''
}, {
  repoId: '419462',
  name: 'react_on_rails',
  desc: 'Integration of React + Webpack + Rails to build Universal (Isomorphic) Apps',
  url: 'https://github.com/shakacode/react_on_rails',
  found: 0,
  tags: ''
}, {
  repoId: '441888',
  name: 'grommet',
  desc: 'The most advanced UX framework for enterprise applications.',
  url: 'https://github.com/grommet/grommet',
  found: 0,
  tags: ''
}, {
  repoId: '587287',
  name: 'TapTargetView',
  desc: 'An implementation of tap targets from the Material Design guidelines for feature discovery',
  url: 'https://github.com/KeepSafe/TapTargetView',
  found: 0,
  tags: ''
}, {
  repoId: '141140',
  name: 'xctool',
  desc: "A replacement for Apple's xcodebuild that makes it easier to build and test iOS or OSX apps.",
  url: 'https://github.com/facebook/xctool',
  found: 0,
  tags: ''
}, {
  repoId: '455352',
  name: 'nwb',
  desc: 'CLI tool for React apps and components & plain JS apps and npm modules',
  url: 'https://github.com/insin/nwb',
  found: 0,
  tags: ''
}, {
  repoId: '334876',
  name: 'Android-Image-Cropper',
  desc: 'Android widget for cropping and rotating an image.',
  url: 'https://github.com/ArthurHub/Android-Image-Cropper',
  found: 0,
  tags: ''
}, {
  repoId: '674946',
  name: 'UltraViewPager',
  desc: 'UltraViewPager is an extension for ViewPager to provide multiple features in a single ViewPager.',
  url: 'https://github.com/alibaba/UltraViewPager',
  found: 0,
  tags: ''
}, {
  repoId: '9442',
  name: 'snowplow',
  desc: '"Enterprise-strength web, mobile and event analytics, powered by Hadoop, Kinesis, Redshift and Elasticsearch"',
  url: 'https://github.com/snowplow/snowplow',
  found: 0,
  tags: ''
}, {
  repoId: '572469',
  name: 'cameraview',
  desc: '',
  url: 'https://github.com/google/cameraview',
  found: 0,
  tags: ''
}, {
  repoId: '97791',
  name: 'aws-sdk-js',
  desc: 'AWS SDK for JavaScript in the browser and Node.js',
  url: 'https://github.com/aws/aws-sdk-js',
  found: 0,
  tags: ''
}, {
  repoId: '596620',
  name: 'mas',
  desc: ':package: Mac App Store command line interface',
  url: 'https://github.com/mas-cli/mas',
  found: 0,
  tags: ''
}, {
  repoId: '552354',
  name: 'kotlinx.coroutines',
  desc: 'Libraries built upon Kotlin coroutines',
  url: 'https://github.com/Kotlin/kotlinx.coroutines',
  found: 0,
  tags: ''
}, {
  repoId: '637165',
  name: 'esp8266_deauther',
  desc: 'ESP8266 deauther',
  url: 'https://github.com/spacehuhn/esp8266_deauther',
  found: 0,
  tags: ''
}, {
  repoId: '666251',
  name: 'CalendarView',
  desc: 'Android��_��ۊ���_���ɋہ�����_�໌�_�_�ہ�ۤ��_�������_�Ѵ�_��_��Ȧ�_ξ���΁�����ہ�໌�_�_䎢Ϗ�_�ہ��ό_��_���Canvas�������_Ύ�ٌ�_��ǋہ��ʍӬ��Ɍ_��__',
  url: 'https://github.com/huanghaibin-dev/CalendarView',
  found: 0,
  tags: ''
}, {
  repoId: '189668',
  name: 'boto3',
  desc: 'AWS SDK for Python',
  url: 'https://github.com/boto/boto3',
  found: 0,
  tags: ''
}, {
  repoId: '666492',
  name: 'PRobot',
  desc: 'a trainable robot that responds to activity on GitHub',
  url: 'https://github.com/probot/PRobot',
  found: 0,
  tags: ''
}, {
  repoId: '476622',
  name: 'jquery-weui',
  desc: 'WeUI �_�jQuery�����_Ό_��_���۾��',
  url: 'https://github.com/lihongxun945/jquery-weui',
  found: 0,
  tags: ''
}, {
  repoId: '284872',
  name: 'Surge',
  desc: '"A Swift library that uses the Accelerate framework to provide high-performance functions for matrix math, digital signal processing, and image manipulation."',
  url: 'https://github.com/mattt/Surge',
  found: 0,
  tags: ''
}, {
  repoId: '550795',
  name: 'Compressor',
  desc: 'An android image compression library.',
  url: 'https://github.com/zetbaitsu/Compressor',
  found: 0,
  tags: ''
}, {
  repoId: '654838',
  name: 'Alerter',
  desc: 'An Android Alterting Library',
  url: 'https://github.com/Tapadoo/Alerter',
  found: 0,
  tags: ''
}, {
  repoId: '582705',
  name: 'Macaw',
  desc: 'Swift UI library',
  url: 'https://github.com/exyte/Macaw',
  found: 0,
  tags: ''
}, {
  repoId: '684136',
  name: 'aurora-imui',
  desc: '��_�Ӭ IM ��_�_� UI ���Ȧ',
  url: 'https://github.com/jpush/aurora-imui',
  found: 0,
  tags: ''
}, {
  repoId: '248602',
  name: 'tablesaw',
  desc: 'A group of plugins for responsive tables.',
  url: 'https://github.com/filamentgroup/tablesaw',
  found: 0,
  tags: ''
}, {
  repoId: '753040',
  name: 'weex-ui',
  desc: 'A Weex Ui Component Library',
  url: 'https://github.com/alibaba/weex-ui',
  found: 0,
  tags: ''
}, {
  repoId: '308013',
  name: 'Android-Iconics',
  desc: '"Android-Iconics - Use any icon font, or vector (.svg) as drawable in your application."',
  url: 'https://github.com/mikepenz/Android-Iconics',
  found: 0,
  tags: ''
}, {
  repoId: '684362',
  name: 'plugins',
  desc: 'Commonly used Flutter plugins',
  url: 'https://github.com/flutter/plugins',
  found: 0,
  tags: ''
}, {
  repoId: '431243',
  name: 'caprine',
  desc: 'Unofficial Facebook Messenger app',
  url: 'https://github.com/sindresorhus/caprine',
  found: 0,
  tags: ''
}, {
  repoId: '580625',
  name: 'RxJava2-Android-Samples',
  desc: 'RxJava2 Android Tutorials With Example',
  url: 'https://github.com/amitshekhariitbhu/RxJava2-Android-Samples',
  found: 0,
  tags: ''
}, {
  repoId: '572554',
  name: 'ui',
  desc: '',
  url: 'https://github.com/shoutem/ui',
  found: 0,
  tags: ''
}, {
  repoId: '226209',
  name: 'fastdfs',
  desc: '"FastDFS is an open source high performance distributed file system (DFS). It\'s major functions include: file storing, file syncing and file accessing, and design for high capacity and load balance."',
  url: 'https://github.com/happyfish100/fastdfs',
  found: 0,
  tags: ''
}, {
  repoId: '638238',
  name: 'walle',
  desc: 'Android Signature V2 Scheme�__�����܍_�С��ۊȣ��ʎ�Ҍ�ɾ�Ҍ�ɍ�_���',
  url: 'https://github.com/Meituan-Dianping/walle',
  found: 0,
  tags: ''
}, {
  repoId: '634918',
  name: 'xLua',
  desc: '"xLua is a hot-fix solution plugin for Unity3D, it supports android, ios, windows, osx, etc."',
  url: 'https://github.com/Tencent/xLua',
  found: 0,
  tags: ''
}, {
  repoId: '764367',
  name: 'heml',
  desc: 'HEML is an open source markup language for building responsive email.',
  url: 'https://github.com/SparkPost/heml',
  found: 0,
  tags: ''
}, {
  repoId: '419531',
  name: 'git-appraise',
  desc: 'Distributed code review system for Git repos',
  url: 'https://github.com/google/git-appraise',
  found: 0,
  tags: ''
}, {
  repoId: '894674',
  name: 'devhub',
  desc: '"DevHub: TweetDeck for GitHub - Android, iOS and Web  ????"',
  url: 'https://github.com/devhubapp/devhub',
  found: 0,
  tags: ''
}, {
  repoId: '549383',
  name: 'detox',
  desc: '',
  url: 'https://github.com/wix/detox',
  found: 0,
  tags: ''
}, {
  repoId: '720693',
  name: 'git-point',
  desc: ':zap: GitHub for iOS. Built with React Native.',
  url: 'https://github.com/gitpoint/git-point',
  found: 0,
  tags: ''
}, {
  repoId: '420367',
  name: 'che',
  desc: 'Eclipse Che: Next-generation Eclipse IDE.  Open source workspace server and cloud IDE.',
  url: 'https://github.com/eclipse/che',
  found: 0,
  tags: ''
}, {
  repoId: '515389',
  name: 'OwlCarousel2',
  desc: 'jQuery Responsive Carousel.',
  url: 'https://github.com/OwlCarousel2/OwlCarousel2',
  found: 0,
  tags: ''
}, {
  repoId: '626200',
  name: 'android-oss',
  desc: '"Kickstarter for Android. Bring new ideas to life, anywhere."',
  url: 'https://github.com/kickstarter/android-oss',
  found: 0,
  tags: ''
}, {
  repoId: '105013',
  name: 'GCDWebServer',
  desc: 'Lightweight GCD based HTTP server for OS X & iOS (includes web based uploader & WebDAV server)',
  url: 'https://github.com/swisspol/GCDWebServer',
  found: 0,
  tags: ''
}, {
  repoId: '575748',
  name: 'wiki',
  desc: '"A modern, lightweight and powerful wiki app built on NodeJS, Git and Markdown"',
  url: 'https://github.com/Requarks/wiki',
  found: 0,
  tags: ''
}, {
  repoId: '8182',
  name: 'cw-omnibus',
  desc: "Source code to omnibus edition of _The Busy Coder's Guide to Android Development_",
  url: 'https://github.com/commonsguy/cw-omnibus',
  found: 0,
  tags: ''
}, {
  repoId: '1467',
  name: 'html5demos',
  desc: 'Collection of hacks and demos showing capability of HTML5 apps',
  url: 'https://github.com/remy/html5demos',
  found: 0,
  tags: ''
}, {
  repoId: '754652',
  name: 'BulletinBoard',
  desc: 'Generate and Display Bottom Card Interfaces for iOS',
  url: 'https://github.com/alexaubry/BulletinBoard',
  found: 0,
  tags: ''
}, {
  repoId: '718045',
  name: 'sourcerer-app',
  desc: 'Sourcerer app makes engineering profiles from their git repositories.',
  url: 'https://github.com/sourcerer-io/sourcerer-app',
  found: 0,
  tags: ''
}, {
  repoId: '122138',
  name: 'gitignore.io',
  desc: 'Create useful .gitignore files for your project',
  url: 'https://github.com/joeblau/gitignore.io',
  found: 0,
  tags: ''
}, {
  repoId: '227575',
  name: 'vimr',
  desc: 'Project VimR ��� Refined Vim experience for OS X',
  url: 'https://github.com/qvacua/vimr',
  found: 0,
  tags: ''
}, {
  repoId: '333230',
  name: 'elm-architecture-tutorial',
  desc: 'How to create modular Elm code that scales nicely with your app',
  url: 'https://github.com/evancz/elm-architecture-tutorial',
  found: 0,
  tags: ''
}, {
  repoId: '742500',
  name: 'JiaoZiVideoPlayer',
  desc: 'Android VideoPlayer MediaPlayer VideoView MediaView Float View And Fullscreen',
  url: 'https://github.com/lipangit/JiaoZiVideoPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '389019',
  name: 'BGARefreshLayout-Android',
  desc: '�__�����ܾ����С����_ϋہ��_���_ʏ__�ݫ�__�ہ����ɍ�_��໌�_�_�_��Ĭ�_���_�_�',
  url: 'https://github.com/bingoogolapple/BGARefreshLayout-Android',
  found: 0,
  tags: ''
}, {
  repoId: '685301',
  name: 'casbin',
  desc: '"An authorization library that supports access control models like ACL, RBAC, ABAC"',
  url: 'https://github.com/casbin/casbin',
  found: 0,
  tags: ''
}, {
  repoId: '402781',
  name: 'Koloda',
  desc: 'KolodaView is a class designed to simplify the implementation of Tinder like cards on iOS. ',
  url: 'https://github.com/Yalantis/Koloda',
  found: 0,
  tags: ''
}, {
  repoId: '651621',
  name: 'FSPagerView',
  desc: '',
  url: 'https://github.com/WenchaoD/FSPagerView',
  found: 0,
  tags: ''
}, {
  repoId: '330057',
  name: 'MaterialDateTimePicker',
  desc: 'Pick a date or time on Android in style',
  url: 'https://github.com/wdullaer/MaterialDateTimePicker',
  found: 0,
  tags: ''
}, {
  repoId: '372324',
  name: 'InversifyJS',
  desc: 'A lightweight IoC container written in TypeScript.',
  url: 'https://github.com/inversify/InversifyJS',
  found: 0,
  tags: ''
}, {
  repoId: '561213',
  name: 'Fast-Android-Networking',
  desc: 'A Complete Fast Android Networking Library that also support HTTP/2',
  url: 'https://github.com/amitshekhariitbhu/Fast-Android-Networking',
  found: 0,
  tags: ''
}, {
  repoId: '807869',
  name: 'flutter-desktop-embedding',
  desc: '',
  url: 'https://github.com/google/flutter-desktop-embedding',
  found: 0,
  tags: ''
}, {
  repoId: '624601',
  name: 'webpacker',
  desc: 'Use Webpack to manage app-like JavaScript modules in Rails',
  url: 'https://github.com/rails/webpacker',
  found: 0,
  tags: ''
}, {
  repoId: '523388',
  name: 'GPUImage2',
  desc: 'GPUImage 2 is a BSD-licensed Swift framework for GPU-accelerated video and image processing.',
  url: 'https://github.com/BradLarson/GPUImage2',
  found: 0,
  tags: ''
}, {
  repoId: '676754',
  name: 'Halfrost-Field',
  desc: '',
  url: 'https://github.com/halfrost/Halfrost-Field',
  found: 0,
  tags: ''
}, {
  repoId: '569994',
  name: 'MultiType',
  desc: 'An Android library to retrofit multiple item view types',
  url: 'https://github.com/drakeet/MultiType',
  found: 0,
  tags: ''
}, {
  repoId: '693558',
  name: 'react-native-calendars',
  desc: 'React Native Calendar Components',
  url: 'https://github.com/wix/react-native-calendars',
  found: 0,
  tags: ''
}, {
  repoId: '78273',
  name: 'acra',
  desc: 'Application Crash Reports for Android',
  url: 'https://github.com/ACRA/acra',
  found: 0,
  tags: ''
}, {
  repoId: '210142',
  name: 'gremlins.js',
  desc: 'Monkey testing library for web apps and Node.js',
  url: 'https://github.com/marmelab/gremlins.js',
  found: 0,
  tags: ''
}, {
  repoId: '632755',
  name: 'create-react-app-typescript',
  desc: 'Create React apps using typescript with no build configuration.',
  url: 'https://github.com/wmonk/create-react-app-typescript',
  found: 0,
  tags: ''
}, {
  repoId: '518665',
  name: 'fantastic-ios-animation',
  desc: 'A collection of iOS animation repos',
  url: 'https://github.com/onmyway133/fantastic-ios-animation',
  found: 0,
  tags: ''
}, {
  repoId: '508298',
  name: 'macdown',
  desc: 'Open source Markdown editor for OS X.',
  url: 'https://github.com/MacDownApp/macdown',
  found: 0,
  tags: ''
}, {
  repoId: '388870',
  name: 'opengapps',
  desc: 'The main repository of the Open GApps Project',
  url: 'https://github.com/opengapps/opengapps',
  found: 0,
  tags: ''
}, {
  repoId: '225376',
  name: 'jspaint',
  desc: '"classic mspaint, revived"',
  url: 'https://github.com/1j01/jspaint',
  found: 0,
  tags: ''
}, {
  repoId: '365649',
  name: 'Xiaomi_Kernel_OpenSource',
  desc: '"Xiaomi kernel OpenSource�__cancro-kk-oss(contain MI 3W, MI 3C, MI 4 series, MI NOTE), armani-jb-oss(H1S), dior-kk-oss(HM-NOTE-LTE), ferrari-l-oss(Xiaomi 4i)"',
  url: 'https://github.com/MiCode/Xiaomi_Kernel_OpenSource',
  found: 0,
  tags: ''
}, {
  repoId: '398847',
  name: 'PLDroidPlayer',
  desc: '"Pili Live Streaming player SDK for Android, RTMP and HLS supported."',
  url: 'https://github.com/pili-engineering/PLDroidPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '511118',
  name: 'BottomNavigation',
  desc: '',
  url: 'https://github.com/Ashok-Varma/BottomNavigation',
  found: 0,
  tags: ''
}, {
  repoId: '468880',
  name: 'react-native-push-notification',
  desc: 'React Native Local and Remote Notifications',
  url: 'https://github.com/zo0r/react-native-push-notification',
  found: 0,
  tags: ''
}, {
  repoId: '437627',
  name: 'Instructions',
  desc: '"Create walkthroughs and guided tours (using coach marks) in a simple way, using Swift."',
  url: 'https://github.com/ephread/Instructions',
  found: 0,
  tags: ''
}, {
  repoId: '403026',
  name: 'Blurry',
  desc: 'Blurry is an easy blur library for Android',
  url: 'https://github.com/wasabeef/Blurry',
  found: 0,
  tags: ''
}, {
  repoId: '887676',
  name: 'lorca',
  desc: 'Web rendering surface for Go applications',
  url: 'https://github.com/zserge/lorca',
  found: 0,
  tags: ''
}, {
  repoId: '572157',
  name: 'react-native-macos',
  desc: 'React Native for macOS',
  url: 'https://github.com/ptmt/react-native-macos',
  found: 0,
  tags: ''
}, {
  repoId: '291189',
  name: 'cpprestsdk',
  desc: 'The C++ REST SDK is a Microsoft project for cloud-based client-server communication in native code using a modern asynchronous C++ API design. This project aims to help C++ developers connect to and interact with services.',
  url: 'https://github.com/Microsoft/cpprestsdk',
  found: 0,
  tags: ''
}, {
  repoId: '526343',
  name: 'SwiftOCR',
  desc: '',
  url: 'https://github.com/garnele007/SwiftOCR',
  found: 0,
  tags: ''
}, {
  repoId: '416159',
  name: 'PureLayout',
  desc: '"The ultimate API for iOS & OS X Auto Layout ��� impressively simple, immensely powerful. Objective-C and Swift compatible."',
  url: 'https://github.com/PureLayout/PureLayout',
  found: 0,
  tags: ''
}, {
  repoId: '468658',
  name: 'SwiftyBeaver',
  desc: '"Colorful, lightweight & fast logging in Swift 2"',
  url: 'https://github.com/SwiftyBeaver/SwiftyBeaver',
  found: 0,
  tags: ''
}, {
  repoId: '428804',
  name: 'JFoenix',
  desc: 'JavaFX Material Design Library',
  url: 'https://github.com/jfoenixadmin/JFoenix',
  found: 0,
  tags: ''
}, {
  repoId: '610150',
  name: 'flex-layout',
  desc: 'Experimental work on flex layouts API for Angular',
  url: 'https://github.com/angular/flex-layout',
  found: 0,
  tags: ''
}, {
  repoId: '14086',
  name: 'assimp',
  desc: 'Official Git mirror of the Open Asset Import Library SVN repository.',
  url: 'https://github.com/assimp/assimp',
  found: 0,
  tags: ''
}, {
  repoId: '738746',
  name: 'Awesome-CoreML-Models',
  desc: 'The largest list of available CoreML models',
  url: 'https://github.com/likedan/Awesome-CoreML-Models',
  found: 0,
  tags: ''
}, {
  repoId: '406779',
  name: 'learn-json-web-tokens',
  desc: ':closed_lock_with_key: Learn how to use JSON Web Token (JWT) to secure your next Web App! (Example with Tests!!)',
  url: 'https://github.com/dwyl/learn-json-web-tokens',
  found: 0,
  tags: ''
}, {
  repoId: '847316',
  name: 'JSUI',
  desc: 'One UI to rule them all (JS apps) ... Get it? JS UI? No? ok',
  url: 'https://github.com/kitze/JSUI',
  found: 0,
  tags: ''
}, {
  repoId: '431302',
  name: 'iOS-9-Sampler',
  desc: 'Code examples for the new features of iOS 9.',
  url: 'https://github.com/shu223/iOS-9-Sampler',
  found: 0,
  tags: ''
}, {
  repoId: '427605',
  name: 'SwiftyStoreKit',
  desc: 'Lightweight In App Purchases Swift framework for iOS 8.0+ and OSX 9.0+',
  url: 'https://github.com/bizz84/SwiftyStoreKit',
  found: 0,
  tags: ''
}, {
  repoId: '242484',
  name: 'dev-blog',
  desc: '��ۊ�� iOS / Web �_ی�ԍ����_�_��ȏ�Ծ�Ќ_ٌ�݌�_��������',
  url: 'https://github.com/nixzhu/dev-blog',
  found: 0,
  tags: ''
}, {
  repoId: '273675',
  name: 'android-security-awesome',
  desc: 'A collection of android security related resources',
  url: 'https://github.com/ashishb/android-security-awesome',
  found: 0,
  tags: ''
}, {
  repoId: '747762',
  name: 'Framework7',
  desc: 'Full featured HTML framework for building iOS & Android apps',
  url: 'https://github.com/framework7io/Framework7',
  found: 0,
  tags: ''
}, {
  repoId: '639268',
  name: 'Android-skin-support',
  desc: 'Android-skin-support: ��۾�_�Ӭ��Č_Ȍ�_�_�Android�����_����_�',
  url: 'https://github.com/ximsfei/Android-skin-support',
  found: 0,
  tags: ''
}, {
  repoId: '579990',
  name: 'android-tips-tricks',
  desc: '',
  url: 'https://github.com/nisrulz/android-tips-tricks',
  found: 0,
  tags: ''
}, {
  repoId: '420825',
  name: 'dryrun',
  desc: ':coffee: Try the demo project of any Android Library',
  url: 'https://github.com/cesarferreira/dryrun',
  found: 0,
  tags: ''
}, {
  repoId: '260958',
  name: 'TLYShyNavBar',
  desc: '"Unlike all those arrogant UINavigationBar, this one is shy and humble! Easily create auto-scrolling navigation bars!"',
  url: 'https://github.com/telly/TLYShyNavBar',
  found: 0,
  tags: ''
}, {
  repoId: '573973',
  name: 'Shadowrocket-ADBlock-Rules',
  desc: '��������۾���_� Shadowrocket ������_Ό�_�_���_����_�_ُ�_',
  url: 'https://github.com/h2y/Shadowrocket-ADBlock-Rules',
  found: 0,
  tags: ''
}, {
  repoId: '602485',
  name: 'owasp-mstg',
  desc: 'OWASP Mobile Security Testing Guide',
  url: 'https://github.com/OWASP/owasp-mstg',
  found: 0,
  tags: ''
}, {
  repoId: '81',
  name: 'json-framework',
  desc: "JSON (JavaScript Object Notation) is a light-weight data interchange format that's easy to read and write for humans and computers alike. This framework implements a strict JSON parser and generator in Objective-C. ",
  url: 'https://github.com/stig/json-framework',
  found: 0,
  tags: ''
}, {
  repoId: '665439',
  name: 'wechaty',
  desc: 'Wechat for Bot. Powered by WebDriver / Node.js / Docker',
  url: 'https://github.com/Chatie/wechaty',
  found: 0,
  tags: ''
}, {
  repoId: '460607',
  name: 'Chatto',
  desc: '"A lightweight framework to build chat applications, made in Swift"',
  url: 'https://github.com/badoo/Chatto',
  found: 0,
  tags: ''
}, {
  repoId: '531681',
  name: 'SocketRocket',
  desc: 'A conforming Objective-C WebSocket client library.',
  url: 'https://github.com/facebook/SocketRocket',
  found: 0,
  tags: ''
}, {
  repoId: '402986',
  name: 'PINRemoteImage',
  desc: '"A thread safe, performant, feature rich image fetcher"',
  url: 'https://github.com/pinterest/PINRemoteImage',
  found: 0,
  tags: ''
}, {
  repoId: '378275',
  name: 'openvr',
  desc: 'OpenVR SDK',
  url: 'https://github.com/ValveSoftware/openvr',
  found: 0,
  tags: ''
}, {
  repoId: '626023',
  name: 'Sourcery',
  desc: '"A tool that brings meta-programming to Swift, allowing you to code generate Swift code."',
  url: 'https://github.com/krzysztofzablocki/Sourcery',
  found: 0,
  tags: ''
}, {
  repoId: '538871',
  name: 'JAViewer',
  desc: '',
  url: 'https://github.com/SplashCodes/JAViewer',
  found: 0,
  tags: ''
}, {
  repoId: '446365',
  name: 'code-push',
  desc: 'A cloud service that enables Cordova and React Native developers to deploy mobile app updates directly to their users�۪ devices',
  url: 'https://github.com/Microsoft/code-push',
  found: 0,
  tags: ''
}, {
  repoId: '336565',
  name: 'SwiftyUserDefaults',
  desc: 'Modern Swift API for NSUserDefaults',
  url: 'https://github.com/radex/SwiftyUserDefaults',
  found: 0,
  tags: ''
}, {
  repoId: '510157',
  name: 'ahbottomnavigation',
  desc: 'A library to reproduce the behavior of the Bottom Navigation guidelines from Material Design.',
  url: 'https://github.com/aurelhubert/ahbottomnavigation',
  found: 0,
  tags: ''
}, {
  repoId: '646284',
  name: 'android-mvp-architecture',
  desc: '"This repository contains a detailed sample app that implements MVP architecture using Dagger2, Retrofit,  GreenDao, and RxJava"',
  url: 'https://github.com/MindorksOpenSource/android-mvp-architecture',
  found: 0,
  tags: ''
}, {
  repoId: '149536',
  name: 'shenzhen',
  desc: 'CLI for Building & Distributing iOS Apps (.ipa Files)',
  url: 'https://github.com/nomad/shenzhen',
  found: 0,
  tags: ''
}, {
  repoId: '642189',
  name: 'react-native-ui-kitten',
  desc: 'React Native UI-Kitten',
  url: 'https://github.com/akveo/react-native-ui-kitten',
  found: 0,
  tags: ''
}, {
  repoId: '378371',
  name: 'awesome-appsec',
  desc: 'A curated list of resources for learning about application security',
  url: 'https://github.com/paragonie/awesome-appsec',
  found: 0,
  tags: ''
}, {
  repoId: '121554',
  name: 'ios-webkit-debug-proxy',
  desc: 'A DevTools proxy (Chrome Remote Debugging Protocol) for iOS devices (Safari Remote Web Inspector).',
  url: 'https://github.com/google/ios-webkit-debug-proxy',
  found: 0,
  tags: ''
}, {
  repoId: '333950',
  name: 'Context-Menu.Android',
  desc: 'You can easily add awesome animated context menu to your app.',
  url: 'https://github.com/Yalantis/Context-Menu.Android',
  found: 0,
  tags: ''
}, {
  repoId: '353424',
  name: 'socket.io-client-swift',
  desc: '',
  url: 'https://github.com/socketio/socket.io-client-swift',
  found: 0,
  tags: ''
}, {
  repoId: '996',
  name: 'zeus',
  desc: 'Boot any rails app in under a second.',
  url: 'https://github.com/burke/zeus',
  found: 0,
  tags: ''
}, {
  repoId: '381826',
  name: 'openshare',
  desc: '����Ӭ�����_SDK�_Ό���Ӭ�__��_�_��Ȧ��Ȍ_���������(�_����/QQ/�_���_/������/���������)������/��Ȍ_�/���������',
  url: 'https://github.com/100apps/openshare',
  found: 0,
  tags: ''
}, {
  repoId: '650690',
  name: 'hydra',
  desc: 'A security-first open source OAuth2 and OpenID Connect server for new and existing infrastructures. Written in Go.',
  url: 'https://github.com/ory/hydra',
  found: 0,
  tags: ''
}, {
  repoId: '316132',
  name: 'MMWormhole',
  desc: 'Message passing between iOS apps and extensions.',
  url: 'https://github.com/mutualmobile/MMWormhole',
  found: 0,
  tags: ''
}, {
  repoId: '587132',
  name: 'PageIndicatorView',
  desc: '',
  url: 'https://github.com/romandanylyk/PageIndicatorView',
  found: 0,
  tags: ''
}, {
  repoId: '299213',
  name: 'google-authenticator',
  desc: 'Open source version of Google Authenticator (except the Android app)',
  url: 'https://github.com/google/google-authenticator',
  found: 0,
  tags: ''
}, {
  repoId: '625141',
  name: 'CloudReader',
  desc: 'Netease cloud music Ui && Retrofit + RxJava + Mvvm-databinding && GankIo�ہDouban Api',
  url: 'https://github.com/youlookwhat/CloudReader',
  found: 0,
  tags: ''
}, {
  repoId: '862814',
  name: 'GSYGithubAppFlutter',
  desc: '��Ɍ�ξ���_�Flutter��_�ݨ�_Ό_ُ�_�����Ε_Ύ�⌐��__�_ʌ�ξѴ����_��Ӭ�_Ό�_��䌐ξ�_�_۾��React Native�ہWeex�_�������ᬌ__����_�_۾��Github��������App�_ξݫ��_�_�_Ҏ�Ε_ξݫ�����΍_�_ُ�_�_ξѬ�Ϭ�ݫ��_�_�Ѵ�����������΍ȫ�__������Github�_ξ���_ݾݫ��_�ݫ��_�_��_㎩_�__�_Ҏ�Ε__�__�(���������_�)�_��⌐ξ�_Weex������ �__ https://github.com/CarGuo/GSYGithubAppWeex    �ہ��ξ�_React Native������ �__ https://github.com/CarGuo/GSYGithub',
  url: 'https://github.com/CarGuo/GSYGithubAppFlutter',
  found: 0,
  tags: ''
}, {
  repoId: '835157',
  name: 'swift',
  desc: 'Swift for TensorFlow documentation repository.',
  url: 'https://github.com/tensorflow/swift',
  found: 0,
  tags: ''
}, {
  repoId: '457763',
  name: 'Dexter',
  desc: 'Android library that simplifies the process of requesting permissions at runtime.',
  url: 'https://github.com/Karumi/Dexter',
  found: 0,
  tags: ''
}, {
  repoId: '311621',
  name: 'mobile',
  desc: '[mirror] Go on Mobile',
  url: 'https://github.com/golang/mobile',
  found: 0,
  tags: ''
}, {
  repoId: '521392',
  name: 'Android-ZBLibrary',
  desc: '"��������ࠌ�ҕ_�Android��ǎ�ٌ_ی�Ծ���_��_ξ���_݊�ی�ь_ی�Ծ��ࠕ_�UI,Data,Listener�_�ȴ��_��������Όᴌ�፱Ȍ_�����Ċȣ�ʁ����ی���ȣ�ʁ��������_�_��ɬ��۾�Ԍ_���ӌ�_�_���������_�_ݎݠ�����_�_���Ǿ��_�ύ�_������ྍ���Ύ���ہ�ɤ�����ܩ����ہ�Ѵ��َ��ܩ����ہ�ϡ��ێ��ܩ����ہ�Ѧ�ѫ���С����_���"',
  url: 'https://github.com/TommyLemon/Android-ZBLibrary',
  found: 0,
  tags: ''
}, {
  repoId: '359039',
  name: 'Nuke',
  desc: '"Image loading, processing, caching and preheating"',
  url: 'https://github.com/kean/Nuke',
  found: 0,
  tags: ''
}, {
  repoId: '635773',
  name: 'Store',
  desc: 'Android Library for Async Data Loading and Caching',
  url: 'https://github.com/NYTimes/Store',
  found: 0,
  tags: ''
}, {
  repoId: '227497',
  name: 'lightGallery',
  desc: '"A customizable, modular, responsive, lightbox gallery plugin. :+1:"',
  url: 'https://github.com/sachinchoolur/lightGallery',
  found: 0,
  tags: ''
}, {
  repoId: '403409',
  name: 'PocketHub',
  desc: 'PocketHub Android App',
  url: 'https://github.com/pockethub/PocketHub',
  found: 0,
  tags: ''
}, {
  repoId: '4233',
  name: 'countly-server',
  desc: 'This is the home for Countly Mobile & Web Analytics and Marketing Platform. Countly helps you collect data and understand insights of your application. Available self-hosted or on private cloud. ',
  url: 'https://github.com/Countly/countly-server',
  found: 0,
  tags: ''
}, {
  repoId: '448074',
  name: 'termux-app',
  desc: 'Android terminal emulator and Linux environment - app repository.',
  url: 'https://github.com/termux/termux-app',
  found: 0,
  tags: ''
}, {
  repoId: '737387',
  name: 'PermissionsDispatcher',
  desc: 'Simple annotation-based API to handle runtime permissions.',
  url: 'https://github.com/permissions-dispatcher/PermissionsDispatcher',
  found: 0,
  tags: ''
}, {
  repoId: '727577',
  name: 'shadowsocksr-android',
  desc: 'A ShadowsocksR client for Android',
  url: 'https://github.com/shadowsocksrr/shadowsocksr-android',
  found: 0,
  tags: ''
}, {
  repoId: '493204',
  name: 'react-server',
  desc: '',
  url: 'https://github.com/Redfin/react-server',
  found: 0,
  tags: ''
}, {
  repoId: '42591',
  name: 'OHHTTPStubs',
  desc: '"Stub your network requests easily! Test your apps with fake network data and custom response time, response code and headers!"',
  url: 'https://github.com/AliSoftware/OHHTTPStubs',
  found: 0,
  tags: ''
}, {
  repoId: '140518',
  name: 'Tesseract-OCR-iOS',
  desc: '"Tesseract OCR iOS is a Framework for iOS7+, compiled also for armv7s and arm64."',
  url: 'https://github.com/gali8/Tesseract-OCR-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '896886',
  name: 'matrix',
  desc: '"Matrix is a plugin style, no-intrusion APM system developed by WeChat."',
  url: 'https://github.com/Tencent/matrix',
  found: 0,
  tags: ''
}, {
  repoId: '140819',
  name: 'PostgresApp',
  desc: 'The easiest way to get started with PostgreSQL on the Mac',
  url: 'https://github.com/PostgresApp/PostgresApp',
  found: 0,
  tags: ''
}, {
  repoId: '339302',
  name: 'konva',
  desc: 'Konva.js is an HTML5 Canvas JavaScript framework that extends the 2d context by enabling canvas interactivity for desktop and mobile applications.',
  url: 'https://github.com/konvajs/konva',
  found: 0,
  tags: ''
}, {
  repoId: '607840',
  name: 'RxDownload',
  desc: '"�ټ��_RxJava��Ҏ�ʍ_��܏__�ᴌ��, ����΁�__�����܊�܏__��ξ�_��_��_�_�, �����_��_��_�����_����΁��_��_��_�_ʍ_�_ُ�_"',
  url: 'https://github.com/ssseasonnn/RxDownload',
  found: 0,
  tags: ''
}, {
  repoId: '200294',
  name: 'examples',
  desc: 'Example Koa apps',
  url: 'https://github.com/koajs/examples',
  found: 0,
  tags: ''
}, {
  repoId: '698900',
  name: 'from-java-to-kotlin',
  desc: 'From Java To Kotlin - Your Cheat Sheet For Java To Kotlin',
  url: 'https://github.com/MindorksOpenSource/from-java-to-kotlin',
  found: 0,
  tags: ''
}, {
  repoId: '588261',
  name: 'iOS-10-Sampler',
  desc: 'Code examples for new APIs of iOS 10.',
  url: 'https://github.com/shu223/iOS-10-Sampler',
  found: 0,
  tags: ''
}, {
  repoId: '12814',
  name: 'ideavim',
  desc: 'Vim emulation plug-in for IDEs based on the IntelliJ platform.',
  url: 'https://github.com/JetBrains/ideavim',
  found: 0,
  tags: ''
}, {
  repoId: '535319',
  name: 'ESTabBarController',
  desc: '',
  url: 'https://github.com/eggswift/ESTabBarController',
  found: 0,
  tags: ''
}, {
  repoId: '221569',
  name: 'angular-translate',
  desc: '"i18n in your Angular apps, made easy."',
  url: 'https://github.com/angular-translate/angular-translate',
  found: 0,
  tags: ''
}, {
  repoId: '237361',
  name: 'jitsi-meet',
  desc: 'Jitsi Videobridge meets WebRTC',
  url: 'https://github.com/jitsi/jitsi-meet',
  found: 0,
  tags: ''
}, {
  repoId: '445846',
  name: 'StarWars.iOS',
  desc: 'This component implements transition animation to crumble view-controller into tiny pieces.',
  url: 'https://github.com/Yalantis/StarWars.iOS',
  found: 0,
  tags: ''
}, {
  repoId: '650627',
  name: 'AnimatedCollectionViewLayout',
  desc: 'A UICollectionViewLayout subclass that adds custom transitions/animations to the UICollectionView without effecting your existing code.',
  url: 'https://github.com/KelvinJin/AnimatedCollectionViewLayout',
  found: 0,
  tags: ''
}, {
  repoId: '498898',
  name: 'realm-js',
  desc: ' Realm is a mobile database: an alternative to SQLite & key-value stores',
  url: 'https://github.com/realm/realm-js',
  found: 0,
  tags: ''
}, {
  repoId: '473221',
  name: 'SideMenu',
  desc: 'Simple side menu control in Swift inspired by Facebook. Right and Left sides. No coding required.',
  url: 'https://github.com/jonkykong/SideMenu',
  found: 0,
  tags: ''
}, {
  repoId: '462930',
  name: 'swift-corelibs-foundation',
  desc: '"The Foundation Project, providing core utilities, internationalization, and OS independence"',
  url: 'https://github.com/apple/swift-corelibs-foundation',
  found: 0,
  tags: ''
}, {
  repoId: '546337',
  name: 'LFLiveKit',
  desc: 'iOS Live Kit',
  url: 'https://github.com/LaiFengiOS/LFLiveKit',
  found: 0,
  tags: ''
}, {
  repoId: '563231',
  name: 'ticker',
  desc: 'A textview for Android that supports scrolling text animation',
  url: 'https://github.com/robinhood/ticker',
  found: 0,
  tags: ''
}, {
  repoId: '509816',
  name: 'Conductor',
  desc: '"A small, yet full-featured framework that allows building View-based Android applications"',
  url: 'https://github.com/bluelinelabs/Conductor',
  found: 0,
  tags: ''
}, {
  repoId: '408572',
  name: 'FirebaseUI-Android',
  desc: '',
  url: 'https://github.com/firebase/FirebaseUI-Android',
  found: 0,
  tags: ''
}, {
  repoId: '395486',
  name: 'MyLinearLayout',
  desc: '"A powerful iOS view layout library, suitable for all kinds of screen size. Don\'t need to learn AutoLayout and SizeClass. You can use MyLinearLayout, MyRelativeLayout,MyFrameLayout,MyTableLayout,MyFlowLayout,MyLayoutSizeClass  to build your UI Layout"',
  url: 'https://github.com/youngsoft/MyLinearLayout',
  found: 0,
  tags: ''
}, {
  repoId: '430803',
  name: 'JKeyboardPanelSwitch',
  desc: 'For resolve keybord & panel switch layout conflict(Android�Ө�����������_��� ��Č�ێѻ�_��_㍐���_���)',
  url: 'https://github.com/Jacksgong/JKeyboardPanelSwitch',
  found: 0,
  tags: ''
}, {
  repoId: '384342',
  name: 'sdk',
  desc: '"The Dart SDK, including the VM, dart2js, core libraries, and more."',
  url: 'https://github.com/dart-lang/sdk',
  found: 0,
  tags: ''
}, {
  repoId: '161352',
  name: 'parceler',
  desc: ':package: Android Parcelables made easy through code generation.',
  url: 'https://github.com/johncarl81/parceler',
  found: 0,
  tags: ''
}, {
  repoId: '168760',
  name: 'KIF',
  desc: 'Keep It Functional - An iOS Functional Testing Framework',
  url: 'https://github.com/kif-framework/KIF',
  found: 0,
  tags: ''
}, {
  repoId: '564656',
  name: 'RNStudyNotes',
  desc: 'React Native Study Notes.',
  url: 'https://github.com/crazycodeboy/RNStudyNotes',
  found: 0,
  tags: ''
}, {
  repoId: '268245',
  name: 'android-priority-jobqueue',
  desc: '"A Job Queue specifically written for Android to easily schedule jobs (tasks) that run in the background, improving UX and application stability."',
  url: 'https://github.com/yigit/android-priority-jobqueue',
  found: 0,
  tags: ''
}, {
  repoId: '88341',
  name: 'poco',
  desc: 'POCO C++ Libraries - Cross-platform C++ libraries with a network/internet focus.',
  url: 'https://github.com/pocoproject/poco',
  found: 0,
  tags: ''
}, {
  repoId: '355849',
  name: 'shimmer-android',
  desc: '"An easy, flexible way to add a shimmering effect to any view in an Android app."',
  url: 'https://github.com/facebook/shimmer-android',
  found: 0,
  tags: ''
}, {
  repoId: '141271',
  name: 'sfml',
  desc: 'Simple and Fast Multimedia Library',
  url: 'https://github.com/SFML/SFML',
  found: 0,
  tags: ''
}, {
  repoId: '21132',
  name: 'noUiSlider',
  desc: '"noUiSlider is a lightweight JavaScript range slider library. It offers a wide selection of options and settings, and is compatible with a ton of (touch) devices, including those running iOS, Android, Windows 8/8.1/10, Windows Phone 8.1 and Windows Mobile "',
  url: 'https://github.com/leongersen/noUiSlider',
  found: 0,
  tags: ''
}, {
  repoId: '434783',
  name: 'react-responsive',
  desc: 'Media queries in react for responsive design',
  url: 'https://github.com/contra/react-responsive',
  found: 0,
  tags: ''
}, {
  repoId: '291007',
  name: 'YapDatabase',
  desc: 'YapDatabase is an extensible database for iOS & Mac.',
  url: 'https://github.com/yapstudios/YapDatabase',
  found: 0,
  tags: ''
}, {
  repoId: '15783',
  name: 'libextobjc',
  desc: 'A Cocoa library to extend the Objective-C programming language.',
  url: 'https://github.com/jspahrsummers/libextobjc',
  found: 0,
  tags: ''
}, {
  repoId: '519017',
  name: 'yasea',
  desc: 'RTMP streaming client in pure Java for Android for those who hate JNI.',
  url: 'https://github.com/begeekmyfriend/yasea',
  found: 0,
  tags: ''
}, {
  repoId: '427513',
  name: 'WebDriverAgent',
  desc: 'A WebDriver server for iOS that runs inside the Simulator.',
  url: 'https://github.com/facebook/WebDriverAgent',
  found: 0,
  tags: ''
}, {
  repoId: '82246',
  name: 'Sloth',
  desc: 'OS X app that shows all open files and sockets in use by all running applications. GUI for lsof.',
  url: 'https://github.com/sveinbjornt/Sloth',
  found: 0,
  tags: ''
}, {
  repoId: '325400',
  name: 'zxing-android-embedded',
  desc: '"Port of the ZXing Android application as an Android library project, for embedding in an Android application."',
  url: 'https://github.com/journeyapps/zxing-android-embedded',
  found: 0,
  tags: ''
}, {
  repoId: '521801',
  name: 'gorush',
  desc: 'A push notification server written in Go (Golang).',
  url: 'https://github.com/appleboy/gorush',
  found: 0,
  tags: ''
}, {
  repoId: '137409',
  name: 'git-ftp',
  desc: 'Git powered FTP client written as shell script.',
  url: 'https://github.com/git-ftp/git-ftp',
  found: 0,
  tags: ''
}, {
  repoId: '319296',
  name: 'SlideMenuControllerSwift',
  desc: '"iOS Slide Menu View based on Google+, iQON, Feedly, Ameba iOS app.  It is written in pure swift."',
  url: 'https://github.com/dekatotoro/SlideMenuControllerSwift',
  found: 0,
  tags: ''
}, {
  repoId: '460316',
  name: 'directus',
  desc: '"Directus is a free and open source, customer-friendly database GUI written in backbone.js that provides a feature-rich environment for rapid development and management of custom database schemas."',
  url: 'https://github.com/directus/directus',
  found: 0,
  tags: ''
}, {
  repoId: '458304',
  name: 'cli',
  desc: '"This repo contains the .NET Core command-line (CLI) tools, used for building .NET Core apps and libraries through your development flow (compiling, NuGet package management, running, testing, ...)."',
  url: 'https://github.com/dotnet/cli',
  found: 0,
  tags: ''
}, {
  repoId: '575216',
  name: 'ramme',
  desc: '????  Unofficial Instagram Desktop App',
  url: 'https://github.com/terkelg/ramme',
  found: 0,
  tags: ''
}, {
  repoId: '258466',
  name: 'XCGLogger',
  desc: '"A debug log framework for use in Swift projects. Allows you to log details to the console (and optionally a file), just like you would have with NSLog or println, but with additional information, such as the date, function name, filename and line number."',
  url: 'https://github.com/DaveWoodCom/XCGLogger',
  found: 0,
  tags: ''
}, {
  repoId: '151139',
  name: 'css-element-queries',
  desc: 'CSS-Element-Queries Polyfill. proof-of-concept for high-speed element dimension/media queries in valid css.',
  url: 'https://github.com/marcj/css-element-queries',
  found: 0,
  tags: ''
}, {
  repoId: '741125',
  name: 'arcore-android-sdk',
  desc: 'Google ARCore SDK for Android',
  url: 'https://github.com/google-ar/arcore-android-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '762523',
  name: 'ktor',
  desc: 'Source repository for Ktor',
  url: 'https://github.com/ktorio/ktor',
  found: 0,
  tags: ''
}, {
  repoId: '900495',
  name: 'chameleon',
  desc: '',
  url: 'https://github.com/didi/chameleon',
  found: 0,
  tags: ''
}, {
  repoId: '24469',
  name: 'ua-parser-js',
  desc: '"UAParser.js - Lightweight JavaScript-based User-Agent string parser. Supports browser & node.js environment. Also available as jQuery/Zepto plugin, Component/Bower/Meteor package, & RequireJS/AMD module"',
  url: 'https://github.com/faisalman/ua-parser-js',
  found: 0,
  tags: ''
}, {
  repoId: '283156',
  name: 'jquery-focuspoint',
  desc: "jQuery plugin for 'responsive cropping'. Dynamically crop images to fill available space without cutting out the image's subject. Great for full-screen images.",
  url: 'https://github.com/jonom/jquery-focuspoint',
  found: 0,
  tags: ''
}, {
  repoId: '221264',
  name: 'muzei',
  desc: 'Muzei Live Wallpaper for Android',
  url: 'https://github.com/romannurik/muzei',
  found: 0,
  tags: ''
}, {
  repoId: '896850',
  name: 'revery',
  desc: '":zap: Native, high-performance, cross-platform desktop apps - built with Reason!"',
  url: 'https://github.com/revery-ui/revery',
  found: 0,
  tags: ''
}, {
  repoId: '256549',
  name: 'mapbox-gl-native',
  desc: '"Render Mapbox styles in mobile, desktop, and node applications using C++ and OpenGL"',
  url: 'https://github.com/mapbox/mapbox-gl-native',
  found: 0,
  tags: ''
}, {
  repoId: '293973',
  name: 'SCLAlertView',
  desc: 'Beautiful animated Alert View. Written in Swift but ported to Objective-C',
  url: 'https://github.com/dogo/SCLAlertView',
  found: 0,
  tags: ''
}, {
  repoId: '714743',
  name: 'MonkeyDev',
  desc: 'MonkeyDev',
  url: 'https://github.com/AloneMonkey/MonkeyDev',
  found: 0,
  tags: ''
}, {
  repoId: '311258',
  name: 'lazyload',
  desc: '"LazyLoad is a fast, lightweight and flexible script to allow you enhance performance on your website by loading images only as they enter (or are about to enter) the viewport or a scrollable area, with best support to the img srcset attribute and to the p"',
  url: 'https://github.com/verlok/lazyload',
  found: 0,
  tags: ''
}, {
  repoId: '498720',
  name: 'TSWeChat',
  desc: '"A high copy WeChat, written by Swift."',
  url: 'https://github.com/hilen/TSWeChat',
  found: 0,
  tags: ''
}, {
  repoId: '757780',
  name: 'Cards',
  desc: "Awesome card views in iOS 11 AppStore's style.",
  url: 'https://github.com/PaoloCuscela/Cards',
  found: 0,
  tags: ''
}, {
  repoId: '487359',
  name: 'SkyFloatingLabelTextField',
  desc: '"A beautiful and flexible text field control implementation of  ""Float Label Pattern"". Written in Swift. As used in the Skyscanner TravelPro iOS app."',
  url: 'https://github.com/Skyscanner/SkyFloatingLabelTextField',
  found: 0,
  tags: ''
}, {
  repoId: '227733',
  name: 'Conversations',
  desc: 'Conversations is an open source XMPP/Jabber client for Android 4.0+ smart phones. ',
  url: 'https://github.com/siacs/Conversations',
  found: 0,
  tags: ''
}, {
  repoId: '821101',
  name: 'outline-client',
  desc: 'Multi-platform Outline client.',
  url: 'https://github.com/Jigsaw-Code/outline-client',
  found: 0,
  tags: ''
}, {
  repoId: '809361',
  name: 'iOS-Developer-Roadmap',
  desc: 'Roadmap to becoming an iOS developer in 2018.',
  url: 'https://github.com/BohdanOrlov/iOS-Developer-Roadmap',
  found: 0,
  tags: ''
}, {
  repoId: '268202',
  name: 'Nimble',
  desc: 'A Matcher Framework for Swift and Objective-C',
  url: 'https://github.com/Quick/Nimble',
  found: 0,
  tags: ''
}, {
  repoId: '391559',
  name: 'aws-sdk-go',
  desc: 'AWS SDK for the Go programming language.',
  url: 'https://github.com/aws/aws-sdk-go',
  found: 0,
  tags: ''
}, {
  repoId: '626549',
  name: 'material-components-ios',
  desc: 'Modular and customizable Material Design UI components for iOS',
  url: 'https://github.com/material-components/material-components-ios',
  found: 0,
  tags: ''
}, {
  repoId: '467177',
  name: 'reading',
  desc: 'Reading App  Write In React-Native',
  url: 'https://github.com/attentiveness/reading',
  found: 0,
  tags: ''
}, {
  repoId: '287668',
  name: 'docpad',
  desc: '"Empower your website frontends with layouts, meta-data, pre-processors (markdown, jade, coffeescript, etc.), partials, skeletons, file watching, querying, and an amazing plugin system. DocPad will streamline your web development process allowing you to cr"',
  url: 'https://github.com/docpad/docpad',
  found: 0,
  tags: ''
}, {
  repoId: '5346',
  name: 'InAppSettingsKit',
  desc: 'This iOS framework allows settings to be in-app in addition to or instead of being in the Settings app.',
  url: 'https://github.com/futuretap/InAppSettingsKit',
  found: 0,
  tags: ''
}, {
  repoId: '151204',
  name: 'html5-device-mockups',
  desc: '"HTML5 mockups of popular devices, to showcase your portfolio and spice up your website."',
  url: 'https://github.com/pixelsign/html5-device-mockups',
  found: 0,
  tags: ''
}, {
  repoId: '354621',
  name: 'react-data-grid',
  desc: '"Excel-like grid component built with React, with editors, keyboard navigation, copy & paste, and the like http://adazzle.github.io/react-data-grid/  "',
  url: 'https://github.com/adazzle/react-data-grid',
  found: 0,
  tags: ''
}, {
  repoId: '392995',
  name: 'BGABanner-Android',
  desc: 'Splash��Ύ����Ԍ_���_���+��㍤���ྍ��_���ȏ໌_��_���_����_�',
  url: 'https://github.com/bingoogolapple/BGABanner-Android',
  found: 0,
  tags: ''
}, {
  repoId: '250228',
  name: 'EhViewer',
  desc: 'E-Hentai Application for Android',
  url: 'https://github.com/seven332/EhViewer',
  found: 0,
  tags: ''
}, {
  repoId: '289806',
  name: 'iOS8-Sampler',
  desc: 'Code examples for the new features of iOS 8.',
  url: 'https://github.com/shu223/iOS8-Sampler',
  found: 0,
  tags: ''
}, {
  repoId: '2761',
  name: 'libfreenect',
  desc: '"Drivers and libraries for the Xbox Kinect device on Windows, Linux, and OS X"',
  url: 'https://github.com/OpenKinect/libfreenect',
  found: 0,
  tags: ''
}, {
  repoId: '261867',
  name: 'PKHUD',
  desc: '"A Swift based reimplementation of the Apple HUD (Volume, Ringer, Rotation,��_) for iOS 8."',
  url: 'https://github.com/pkluz/PKHUD',
  found: 0,
  tags: ''
}, {
  repoId: '580583',
  name: 'vonic',
  desc: 'Ionic UI in Vue.js way.',
  url: 'https://github.com/wangdahoo/vonic',
  found: 0,
  tags: ''
}, {
  repoId: '441845',
  name: 'slidingtutorial-android',
  desc: 'Android Library for making animated tutorials inside your app',
  url: 'https://github.com/Cleveroad/slidingtutorial-android',
  found: 0,
  tags: ''
}, {
  repoId: '737899',
  name: 'CollectionKit',
  desc: '',
  url: 'https://github.com/SoySauceLab/CollectionKit',
  found: 0,
  tags: ''
}, {
  repoId: '401981',
  name: 'deeplinkdispatch',
  desc: '"A simple, annotation-based library for making deep link handling better on Android"',
  url: 'https://github.com/airbnb/DeepLinkDispatch',
  found: 0,
  tags: ''
}, {
  repoId: '771077',
  name: 'after.js',
  desc: 'what comes after next.js? this.',
  url: 'https://github.com/jaredpalmer/after.js',
  found: 0,
  tags: ''
}, {
  repoId: '536305',
  name: 'MessageKit',
  desc: '"Eventually, a Swift re-write of JSQMessagesViewController"',
  url: 'https://github.com/MessageKit/MessageKit',
  found: 0,
  tags: ''
}, {
  repoId: '391946',
  name: 'Valet',
  desc: 'Valet lets you securely store data in the iOS or OS X Keychain without knowing a thing about how the Keychain works. It�۪s easy. We promise.',
  url: 'https://github.com/square/Valet',
  found: 0,
  tags: ''
}, {
  repoId: '667681',
  name: 'Robust',
  desc: 'Robust is an Android HotFix solution with high compatibility and high stability.Robust can fix bug immediately without publishing apk.',
  url: 'https://github.com/Meituan-Dianping/Robust',
  found: 0,
  tags: ''
}, {
  repoId: '159529',
  name: 'node-express-mongoose-demo',
  desc: '"A simple demo app in node.js using express, mongoose, passport.js for beginners"',
  url: 'https://github.com/madhums/node-express-mongoose-demo',
  found: 0,
  tags: ''
}, {
  repoId: '11241',
  name: 'SoundJS',
  desc: '"A Javascript library for working with Audio. It provides a consistent API for loading and playing audio on different browsers and devices. Currently supports WebAudio, HTML5 Audio, Cordova / PhoneGap, and a Flash fallback."',
  url: 'https://github.com/CreateJS/SoundJS',
  found: 0,
  tags: ''
}, {
  repoId: '537508',
  name: 'react-native-image-crop-picker',
  desc: 'iOS/Android image picker with support for multiple images and cropping',
  url: 'https://github.com/ivpusic/react-native-image-crop-picker',
  found: 0,
  tags: ''
}, {
  repoId: '217896',
  name: 'Bolts-Android',
  desc: 'Bolts is a collection of low-level libraries designed to make developing mobile apps easier.',
  url: 'https://github.com/BoltsFramework/Bolts-Android',
  found: 0,
  tags: ''
}, {
  repoId: '618094',
  name: 'quorum',
  desc: 'A permissioned implementation of Ethereum supporting data privacy',
  url: 'https://github.com/jpmorganchase/quorum',
  found: 0,
  tags: ''
}, {
  repoId: '426199',
  name: 'Android-Best-Practices',
  desc: 'Android��ۊ__��_�ᵍ_��_�',
  url: 'https://github.com/tianzhijiexian/Android-Best-Practices',
  found: 0,
  tags: ''
}, {
  repoId: '250686',
  name: 'ActionSheetPicker-3.0',
  desc: 'Quickly reproduce the dropdown UIPickerView / ActionSheet functionality on iOS.',
  url: 'https://github.com/skywinder/ActionSheetPicker-3.0',
  found: 0,
  tags: ''
}, {
  repoId: '435220',
  name: 'omim',
  desc: 'MAPS.ME - Offline OpenStreetMap maps for iOS/Android/Mac/Linux/Windows',
  url: 'https://github.com/mapsme/omim',
  found: 0,
  tags: ''
}, {
  repoId: '761383',
  name: 'Electron.NET',
  desc: 'Build cross platform desktop apps with .NET Core and ASP.NET NET Core.',
  url: 'https://github.com/ElectronNET/Electron.NET',
  found: 0,
  tags: ''
}, {
  repoId: '553237',
  name: 'MagicaSakura',
  desc: 'MagicaSakura is an Android multi theme library which supporting both daily colorful theme and night theme. ',
  url: 'https://github.com/Bilibili/MagicaSakura',
  found: 0,
  tags: ''
}, {
  repoId: '720082',
  name: 'MVVMHabit',
  desc: 'In perfect...',
  url: 'https://github.com/goldze/MVVMHabit',
  found: 0,
  tags: ''
}, {
  repoId: '552477',
  name: 'PopupDialog',
  desc: '"A simple, customizable popup dialog"',
  url: 'https://github.com/Orderella/PopupDialog',
  found: 0,
  tags: ''
}, {
  repoId: '608808',
  name: 'basicScroll',
  desc: '',
  url: 'https://github.com/electerious/basicScroll',
  found: 0,
  tags: ''
}, {
  repoId: '569547',
  name: 'react-native-video',
  desc: 'A <Video /> component for react-native',
  url: 'https://github.com/react-native-community/react-native-video',
  found: 0,
  tags: ''
}, {
  repoId: '854891',
  name: 'mace',
  desc: '',
  url: 'https://github.com/XiaoMi/mace',
  found: 0,
  tags: ''
}, {
  repoId: '649449',
  name: 'TinyConstraints',
  desc: 'Nothing but sugar.',
  url: 'https://github.com/roberthein/TinyConstraints',
  found: 0,
  tags: ''
}, {
  repoId: '599350',
  name: 'Kotlin-Tutorials',
  desc: '�_����Kotlin��_�����_�����ٍ�_��_�_ξ�Ԍ�_�ȏ�_ی�܌Ϭ��ي���_���Ċ�_�_��Ӭ��ċ���ď�Ԍ���ݨ�䍌�_��ɏ��Ъ�_Č�ԕ_Ί_ϊ���_ݍ�Ќ_��_�_Ώ�Ծ�پ�Ԍ_ی�܍__��Ռ_������ی�я����Ծ����܋��',
  url: 'https://github.com/enbandari/Kotlin-Tutorials',
  found: 0,
  tags: ''
}, {
  repoId: '403035',
  name: 'Swinject',
  desc: 'Dependency injection framework for Swift',
  url: 'https://github.com/Swinject/Swinject',
  found: 0,
  tags: ''
}, {
  repoId: '588466',
  name: 'react-native-splash-screen',
  desc: '',
  url: 'https://github.com/crazycodeboy/react-native-splash-screen',
  found: 0,
  tags: ''
}, {
  repoId: '573764',
  name: 'react-native-styling-cheat-sheet',
  desc: '',
  url: 'https://github.com/vhpoet/react-native-styling-cheat-sheet',
  found: 0,
  tags: ''
}, {
  repoId: '823165',
  name: 'devdocs',
  desc: 'API Documentation Browser',
  url: 'https://github.com/freeCodeCamp/devdocs',
  found: 0,
  tags: ''
}, {
  repoId: '748',
  name: 'redmine',
  desc: 'Mirror of redmine code source - Official SVN repository is at https://svn.redmine.org/redmine - contact: @jbbarth or jeanbaptiste.barth (at) gmail (dot) com',
  url: 'https://github.com/redmine/redmine',
  found: 0,
  tags: ''
}, {
  repoId: '610998',
  name: 'React-Native-Apps',
  desc: 'Curated List of Open Source React Native Apps',
  url: 'https://github.com/ReactNativeNews/React-Native-Apps',
  found: 0,
  tags: ''
}, {
  repoId: '400199',
  name: 'FlexibleAdapter',
  desc: '"1 Adapter for SelectionMode, ViewHolders, Filter, FastScroller, Animations, Undo, Headers, Expandable, Draggable, Swipeable :-)"',
  url: 'https://github.com/davideas/FlexibleAdapter',
  found: 0,
  tags: ''
}, {
  repoId: '769482',
  name: 'smartTable',
  desc: '��۾�_android�໌_���پ�������_����_�---A Android automatically generated table framework',
  url: 'https://github.com/huangyanbin/smartTable',
  found: 0,
  tags: ''
}, {
  repoId: '386896',
  name: 'laravel-backup',
  desc: 'A package to backup your Laravel 5 app',
  url: 'https://github.com/spatie/laravel-backup',
  found: 0,
  tags: ''
}, {
  repoId: '697105',
  name: 'SwiftTips',
  desc: "A collection of Swift tips & tricks that I've shared on Twitter",
  url: 'https://github.com/JohnSundell/SwiftTips',
  found: 0,
  tags: ''
}, {
  repoId: '5250',
  name: 'lsyncd',
  desc: 'Lsyncd (Live Syncing Daemon) synchronizes local directories with remote targets',
  url: 'https://github.com/axkibe/lsyncd',
  found: 0,
  tags: ''
}, {
  repoId: '566434',
  name: 'IBAnimatable',
  desc: '"Design and prototype customized UI, interaction, navigation, transition and animation for App Store ready Apps in Interface Builder with IBAnimatable."',
  url: 'https://github.com/IBAnimatable/IBAnimatable',
  found: 0,
  tags: ''
}, {
  repoId: '487233',
  name: 'circle-menu',
  desc: '"CircleMenu is a simple, elegant menu with a circular layout."',
  url: 'https://github.com/Ramotion/circle-menu',
  found: 0,
  tags: ''
}, {
  repoId: '518763',
  name: 'fantastic-ios-architecture',
  desc: 'Better ways to structure apps',
  url: 'https://github.com/onmyway133/fantastic-ios-architecture',
  found: 0,
  tags: ''
}, {
  repoId: '578607',
  name: 'react-native-svg',
  desc: 'SVG library for React Native.',
  url: 'https://github.com/react-native-community/react-native-svg',
  found: 0,
  tags: ''
}, {
  repoId: '88813',
  name: 'aws-sdk-php',
  desc: 'Official repository of the AWS SDK for PHP (@awsforphp)',
  url: 'https://github.com/aws/aws-sdk-php',
  found: 0,
  tags: ''
}, {
  repoId: '14363',
  name: 'hue',
  desc: 'Let�۪s Big Data. Hue is an open source Web interface for analyzing data with Hadoop and Spark.',
  url: 'https://github.com/cloudera/hue',
  found: 0,
  tags: ''
}, {
  repoId: '691769',
  name: 'ish',
  desc: '',
  url: 'https://github.com/tbodt/ish',
  found: 0,
  tags: ''
}, {
  repoId: '364608',
  name: 'tcomb-form-native',
  desc: 'Forms library for react-native',
  url: 'https://github.com/gcanti/tcomb-form-native',
  found: 0,
  tags: ''
}, {
  repoId: '179300',
  name: 'Android',
  desc: 'Android related examples',
  url: 'https://github.com/hmkcode/Android',
  found: 0,
  tags: ''
}, {
  repoId: '61347',
  name: 'android',
  desc: ':phone: The ownCloud Android App',
  url: 'https://github.com/owncloud/android',
  found: 0,
  tags: ''
}, {
  repoId: '842174',
  name: 'react-native-dom',
  desc: '"An experimental, comprehensive port of React Native to the web."',
  url: 'https://github.com/vincentriemer/react-native-dom',
  found: 0,
  tags: ''
}, {
  repoId: '460983',
  name: 'dev-setup',
  desc: '"Mac OS X development environment setup:  Easy-to-understand instructions with automated setup scripts for developer tools like Vim, Sublime Text, Bash, iTerm, Python data analysis, Spark, Hadoop MapReduce, AWS, Heroku, JavaScript web development, Android "',
  url: 'https://github.com/donnemartin/dev-setup',
  found: 0,
  tags: ''
}, {
  repoId: '769408',
  name: 'Optimizing-Swift-Build-Times',
  desc: 'Collection of advice on optimizing compile times of Swift projects.',
  url: 'https://github.com/fastred/Optimizing-Swift-Build-Times',
  found: 0,
  tags: ''
}, {
  repoId: '644688',
  name: 'ShapeShifter',
  desc: '',
  url: 'https://github.com/alexjlockwood/ShapeShifter',
  found: 0,
  tags: ''
}, {
  repoId: '830208',
  name: 'FlutterExampleApps',
  desc: '"[Example APPS] Basic Flutter apps, for flutter devs."',
  url: 'https://github.com/iampawan/FlutterExampleApps',
  found: 0,
  tags: ''
}, {
  repoId: '833181',
  name: 'SwiftEntryKit',
  desc: 'In App notification views made easier.',
  url: 'https://github.com/huri000/SwiftEntryKit',
  found: 0,
  tags: ''
}, {
  repoId: '642152',
  name: 'material-kit',
  desc: ' Free Bootstrap Material Design UI Kit',
  url: 'https://github.com/creativetimofficial/material-kit',
  found: 0,
  tags: ''
}, {
  repoId: '691854',
  name: 'Pastel',
  desc: 'Pastel Gradient Animation View',
  url: 'https://github.com/cruisediary/Pastel',
  found: 0,
  tags: ''
}, {
  repoId: '11677',
  name: 'TouchSwipe-Jquery-Plugin',
  desc: '"TouchSwipe is a jquery plugin to be used with jQuery on touch input devices such as iPad, iPhone etc. "',
  url: 'https://github.com/mattbryson/TouchSwipe-Jquery-Plugin',
  found: 0,
  tags: ''
}, {
  repoId: '795806',
  name: 'qr-filetransfer',
  desc: '',
  url: 'https://github.com/claudiodangelis/qr-filetransfer',
  found: 0,
  tags: ''
}, {
  repoId: '90726',
  name: 'aws-sdk-ruby',
  desc: 'The official AWS SDK for Ruby.',
  url: 'https://github.com/aws/aws-sdk-ruby',
  found: 0,
  tags: ''
}, {
  repoId: '682752',
  name: 'webtorrent-desktop',
  desc: '":heart: Streaming torrent app for Mac, Windows, and Linux (BitTorrent/WebTorrent)"',
  url: 'https://github.com/webtorrent/webtorrent-desktop',
  found: 0,
  tags: ''
}, {
  repoId: '467227',
  name: 'XLActionController',
  desc: 'Fully customizable and extensible action sheet controller written in Swift 2',
  url: 'https://github.com/xmartlabs/XLActionController',
  found: 0,
  tags: ''
}, {
  repoId: '581153',
  name: 'dat',
  desc: ':floppy_disk: open source peer to peer data sharing',
  url: 'https://github.com/datproject/dat',
  found: 0,
  tags: ''
}, {
  repoId: '654625',
  name: 'reactivesearch',
  desc: '(in the works) A data aware UI components library for building search experiences',
  url: 'https://github.com/appbaseio/reactivesearch',
  found: 0,
  tags: ''
}, {
  repoId: '255994',
  name: 'egret-core',
  desc: '"Egret is a brand new open mobile game and application engine which allows you to quickly build mobile games and apps on Android,iOS and Windows."',
  url: 'https://github.com/egret-labs/egret-core',
  found: 0,
  tags: ''
}, {
  repoId: '381102',
  name: 'git-it-electron',
  desc: ':computer: :mortar_board: A Git-it Desktop App',
  url: 'https://github.com/jlord/git-it-electron',
  found: 0,
  tags: ''
}, {
  repoId: '374346',
  name: 'YoCelsius',
  desc: '��۾�_�_���ӎ��_��_㌼ӍӬ�_���_�ϬAppStore��_����_�',
  url: 'https://github.com/YouXianMing/YoCelsius',
  found: 0,
  tags: ''
}, {
  repoId: '531603',
  name: 'BuildTimeAnalyzer-for-Xcode',
  desc: '',
  url: 'https://github.com/RobertGummesson/BuildTimeAnalyzer-for-Xcode',
  found: 0,
  tags: ''
}, {
  repoId: '331682',
  name: 'Siren',
  desc: '"Notify users when a new version of your iOS app is available, and prompt them with the App Store link. Sire is a Swift port of the Objective-C \'Harpy\' repository."',
  url: 'https://github.com/ArtSabintsev/Siren',
  found: 0,
  tags: ''
}, {
  repoId: '395578',
  name: 'ZipArchive',
  desc: 'ZipArchive is a simple utility class for zipping and unzipping files on iOS and Mac.',
  url: 'https://github.com/ZipArchive/ZipArchive',
  found: 0,
  tags: ''
}, {
  repoId: '668028',
  name: 'AAChartKit',
  desc: 'A friendly chart library for iOS developer',
  url: 'https://github.com/AAChartModel/AAChartKit',
  found: 0,
  tags: ''
}, {
  repoId: '799453',
  name: 'Signal-Android',
  desc: 'A private messenger for Android.',
  url: 'https://github.com/signalapp/Signal-Android',
  found: 0,
  tags: ''
}, {
  repoId: '532717',
  name: 'iOS-Performance-Optimization',
  desc: '��_��_iOS �ۤ��_�_���о�_����ہ��Ɍ_��_��_�ہ�������ہ�_ԍ�ϋہGPU�ہ�ӵ��ہ App ��Ɋ_ҍ����_��ǋہ����_���ٌ�_�_���Ѝ_�ہInstruments �������_یᤋہ�������_�_���о_ۏ�_- Get ��� Edit',
  url: 'https://github.com/skyming/iOS-Performance-Optimization',
  found: 0,
  tags: ''
}, {
  repoId: '371469',
  name: 'GuillotineMenu',
  desc: 'Our Guillotine Menu Transitioning Animation implemented in Swift reminds a bit of a notorious killing machine.',
  url: 'https://github.com/Yalantis/GuillotineMenu',
  found: 0,
  tags: ''
}, {
  repoId: '198019',
  name: 'Cerberus',
  desc: '"A few simple, but solid patterns for responsive HTML email templates and newsletters. Even in Outlook and Gmail."',
  url: 'https://github.com/TedGoas/Cerberus',
  found: 0,
  tags: ''
}, {
  repoId: '527519',
  name: 'paper-onboarding',
  desc: '',
  url: 'https://github.com/Ramotion/paper-onboarding',
  found: 0,
  tags: ''
}, {
  repoId: '643910',
  name: 'boxing',
  desc: 'Android multi-media selector based on MVP mode.',
  url: 'https://github.com/Bilibili/boxing',
  found: 0,
  tags: ''
}, {
  repoId: '802975',
  name: 'filebrowser',
  desc: ':file_folder: Web File Manager which can be used as a middleware or standalone app.',
  url: 'https://github.com/filebrowser/filebrowser',
  found: 0,
  tags: ''
}, {
  repoId: '330895',
  name: 'Gadgetbridge',
  desc: "A free and cloudless replacement for your gadget vendors' closed source Android applications. Pebble and Mi Band supported.",
  url: 'https://github.com/Freeyourgadget/Gadgetbridge',
  found: 0,
  tags: ''
}, {
  repoId: '379117',
  name: 'Presentation',
  desc: '"Presentation helps you to make tutorials, release notes and animated pages."',
  url: 'https://github.com/hyperoslo/Presentation',
  found: 0,
  tags: ''
}, {
  repoId: '480307',
  name: 'junit5',
  desc: 'The next generation of JUnit.',
  url: 'https://github.com/junit-team/junit5',
  found: 0,
  tags: ''
}, {
  repoId: '599259',
  name: 'androidannotations',
  desc: 'Fast Android Development. Easy maintainance.',
  url: 'https://github.com/androidannotations/androidannotations',
  found: 0,
  tags: ''
}, {
  repoId: '392797',
  name: 'TOCropViewController',
  desc: 'A view controller that allows users to crop UIImage objects.',
  url: 'https://github.com/TimOliver/TOCropViewController',
  found: 0,
  tags: ''
}, {
  repoId: '130913',
  name: 'ioscreator',
  desc: 'Tutorials from ioscreator.com',
  url: 'https://github.com/ioscreator/ioscreator',
  found: 0,
  tags: ''
}, {
  repoId: '715433',
  name: 'franz',
  desc: '',
  url: 'https://github.com/meetfranz/franz',
  found: 0,
  tags: ''
}, {
  repoId: '900817',
  name: 'learn-react-app',
  desc: 'Application that will help you learn React fundamentals.',
  url: 'https://github.com/tyroprogrammer/learn-react-app',
  found: 0,
  tags: ''
}, {
  repoId: '253518',
  name: 'xamarin-forms-samples',
  desc: 'Sample apps built using the Xamarin.Forms framework',
  url: 'https://github.com/xamarin/xamarin-forms-samples',
  found: 0,
  tags: ''
}, {
  repoId: '821',
  name: 'Reader',
  desc: 'PDF Reader Core for iOS',
  url: 'https://github.com/vfr/Reader',
  found: 0,
  tags: ''
}, {
  repoId: '456464',
  name: 'requery',
  desc: 'requery - compile time ORM and SQL query library for Java & Android',
  url: 'https://github.com/requery/requery',
  found: 0,
  tags: ''
}, {
  repoId: '743897',
  name: 'yanxuan-weex-demo',
  desc: 'yanxuan app demo by weex',
  url: 'https://github.com/zwwill/yanxuan-weex-demo',
  found: 0,
  tags: ''
}, {
  repoId: '384733',
  name: 'EasyAnimation',
  desc: '"A Swift library to take the power of UIView.animateWithDuration(_:, animations:...) to a whole new level - layers, springs, chain-able animations and mixing view and layer animations together!"',
  url: 'https://github.com/icanzilb/EasyAnimation',
  found: 0,
  tags: ''
}, {
  repoId: '249808',
  name: 'shairport-sync',
  desc: 'AirPlay audio player. Shairport Sync adds multi-room capability with Audio Synchronisation',
  url: 'https://github.com/mikebrady/shairport-sync',
  found: 0,
  tags: ''
}, {
  repoId: '750224',
  name: 'react-native-paper',
  desc: 'Material Design for React Native',
  url: 'https://github.com/callstack/react-native-paper',
  found: 0,
  tags: ''
}, {
  repoId: '482317',
  name: 'tachiyomi',
  desc: '',
  url: 'https://github.com/inorichi/tachiyomi',
  found: 0,
  tags: ''
}, {
  repoId: '324886',
  name: 'ChinaMobilePhoneNumberRegex',
  desc: '��_�ɍ��_��_�_������ܾϼ���ʁ',
  url: 'https://github.com/VincentSit/ChinaMobilePhoneNumberRegex',
  found: 0,
  tags: ''
}, {
  repoId: '426350',
  name: 'ActiveLabel.swift',
  desc: '"UILabel drop-in replacement supporting Hashtags (#), Mentions (@) and URLs (http://) written in Swift"',
  url: 'https://github.com/optonaut/ActiveLabel.swift',
  found: 0,
  tags: ''
}, {
  repoId: '603212',
  name: 'SuperTextView',
  desc: '�_ُ�_�_��_��_�TextView',
  url: 'https://github.com/lygttpod/SuperTextView',
  found: 0,
  tags: ''
}, {
  repoId: '17949',
  name: 'tess-two',
  desc: 'Fork of Tesseract Tools for Android.',
  url: 'https://github.com/rmtheis/tess-two',
  found: 0,
  tags: ''
}, {
  repoId: '702483',
  name: 'ionicons',
  desc: 'The premium icon font for Ionic',
  url: 'https://github.com/ionic-team/ionicons',
  found: 0,
  tags: ''
}, {
  repoId: '575662',
  name: 'express-status-monitor',
  desc: '"???? Realtime Monitoring solution for Express.js apps, inspired by status.github.com"',
  url: 'https://github.com/RafalWilinski/express-status-monitor',
  found: 0,
  tags: ''
}, {
  repoId: '811068',
  name: 'gifski-app',
  desc: 'Convert videos to high-quality GIFs on your Mac',
  url: 'https://github.com/sindresorhus/gifski-app',
  found: 0,
  tags: ''
}, {
  repoId: '338588',
  name: 'Developing_iOS_8_Apps_With_Swift',
  desc: 'Stanford ��_ۏ�_�_�Developing iOS 8 Apps with Swift �_ь_���ȏ��',
  url: 'https://github.com/X140Yu/Developing_iOS_8_Apps_With_Swift',
  found: 0,
  tags: ''
}, {
  repoId: '897245',
  name: 'HistoryOfEverything',
  desc: 'Flutter Launch Timeline Demo',
  url: 'https://github.com/2d-inc/HistoryOfEverything',
  found: 0,
  tags: ''
}, {
  repoId: '70767',
  name: 'android-saripaar',
  desc: 'UI form validation library for Android',
  url: 'https://github.com/ragunathjawahar/android-saripaar',
  found: 0,
  tags: ''
}, {
  repoId: '620777',
  name: 'corda',
  desc: 'Corda core',
  url: 'https://github.com/corda/corda',
  found: 0,
  tags: ''
}, {
  repoId: '540799',
  name: 'AlloyFinger',
  desc: ' multi-touch gestures library for the web',
  url: 'https://github.com/AlloyTeam/AlloyFinger',
  found: 0,
  tags: ''
}, {
  repoId: '411565',
  name: 'RichText',
  desc: 'Android�__�����܍_��ξ���¾�_�_��_��Ȧ',
  url: 'https://github.com/zzhoujay/RichText',
  found: 0,
  tags: ''
}, {
  repoId: '449132',
  name: 'PhoneNumberKit',
  desc: '"A Swift framework for parsing, formatting and validating international phone numbers. Inspired by Google\'s libphonenumber."',
  url: 'https://github.com/marmelroy/PhoneNumberKit',
  found: 0,
  tags: ''
}, {
  repoId: '694462',
  name: 'SpreadsheetView',
  desc: '"Full configurable spreadsheet view user interfaces for iOS applications. With this framework, you can easily create complex layouts like schedule, Gantt chart, timetable as if you are using Excel."',
  url: 'https://github.com/kishikawakatsumi/SpreadsheetView',
  found: 0,
  tags: ''
}, {
  repoId: '639664',
  name: 'bluepill',
  desc: 'Bluepill is a reliable iOS testing tool that runs UI tests using multiple simulators on a single machine',
  url: 'https://github.com/linkedin/bluepill',
  found: 0,
  tags: ''
}, {
  repoId: '578637',
  name: 'FastBle',
  desc: 'Android BLE �ҝ�䪌_ی�Ծ���_��_Ί_��Ӭ��_��ľ�_�_��_㍐��_ξ�ύ���ہ��_�_��ہnotify�ہindicate�ہ��ȋہ����_��ۍ_Ȍ�яҝ�䪾ҍ�_ϋ��',
  url: 'https://github.com/Jasonchenlijian/FastBle',
  found: 0,
  tags: ''
}, {
  repoId: '481618',
  name: 'BasePopup',
  desc: '// ��Ҏ�ʎ�_�Ӭ�_�popupwindow',
  url: 'https://github.com/razerdp/BasePopup',
  found: 0,
  tags: ''
}, {
  repoId: '488731',
  name: 'Awesome-Swift-Playgrounds',
  desc: 'A List of Awesome Swift Playgrounds!',
  url: 'https://github.com/uraimo/Awesome-Swift-Playgrounds',
  found: 0,
  tags: ''
}, {
  repoId: '241987',
  name: 'kendo-ui-core',
  desc: '"An HTML5, jQuery-based widget library for building modern web apps."',
  url: 'https://github.com/telerik/kendo-ui-core',
  found: 0,
  tags: ''
}, {
  repoId: '578490',
  name: 'SwiftFormat',
  desc: 'A command-line tool for formatting Swift code',
  url: 'https://github.com/nicklockwood/SwiftFormat',
  found: 0,
  tags: ''
}, {
  repoId: '592850',
  name: 'firefox-ios',
  desc: 'Firefox for iOS',
  url: 'https://github.com/mozilla-mobile/firefox-ios',
  found: 0,
  tags: ''
}, {
  repoId: '596462',
  name: 'habitica',
  desc: 'A habit tracker app which treats your goals like a Role Playing Game.',
  url: 'https://github.com/HabitRPG/habitica',
  found: 0,
  tags: ''
}, {
  repoId: '513357',
  name: 'react-native-material-ui',
  desc: '',
  url: 'https://github.com/xotahal/react-native-material-ui',
  found: 0,
  tags: ''
}, {
  repoId: '422592',
  name: 'kotlin-in-chinese',
  desc: 'kotlin �����_�������ȏ��',
  url: 'https://github.com/huanglizhuo/kotlin-in-chinese',
  found: 0,
  tags: ''
}, {
  repoId: '137901',
  name: 'CotEditor',
  desc: 'Lightweight Plain-Text Editor for OS X',
  url: 'https://github.com/coteditor/CotEditor',
  found: 0,
  tags: ''
}, {
  repoId: '549585',
  name: 'LayoutKit',
  desc: '',
  url: 'https://github.com/linkedin/LayoutKit',
  found: 0,
  tags: ''
}, {
  repoId: '472891',
  name: 'Then',
  desc: '�Ϭ Super sweet syntactic sugar for Swift initializers.',
  url: 'https://github.com/devxoul/Then',
  found: 0,
  tags: ''
}, {
  repoId: '339994',
  name: 'awesome-test-automation',
  desc: '"A curated list of awesome test automation frameworks, tools, libraries, and software for different programming languages"',
  url: 'https://github.com/atinfo/awesome-test-automation',
  found: 0,
  tags: ''
}, {
  repoId: '5584',
  name: 'angular-phonecat',
  desc: 'Tutorial on building an angular application.',
  url: 'https://github.com/angular/angular-phonecat',
  found: 0,
  tags: ''
}, {
  repoId: '681895',
  name: 'react-native-fast-image',
  desc: '',
  url: 'https://github.com/DylanVann/react-native-fast-image',
  found: 0,
  tags: ''
}, {
  repoId: '336076',
  name: 'Side-Menu.iOS',
  desc: 'Animated side menu with customizable UI',
  url: 'https://github.com/Yalantis/Side-Menu.iOS',
  found: 0,
  tags: ''
}, {
  repoId: '3212',
  name: 'cocos2d-html5',
  desc: 'cocos2d for Web Browsers. Built using JavaScript',
  url: 'https://github.com/cocos2d/cocos2d-html5',
  found: 0,
  tags: ''
}, {
  repoId: '236701',
  name: 'copay',
  desc: 'A multisignature wallet.',
  url: 'https://github.com/bitpay/copay',
  found: 0,
  tags: ''
}, {
  repoId: '391064',
  name: 'MasteringAndroidDataBinding',
  desc: 'A comprehensive tutorial for Android Data Binding',
  url: 'https://github.com/LyndonChin/MasteringAndroidDataBinding',
  found: 0,
  tags: ''
}, {
  repoId: '112499',
  name: 'django-cors-headers',
  desc: 'Django app for handling the server headers required for Cross-Origin Resource Sharing (CORS)',
  url: 'https://github.com/ottoyiu/django-cors-headers',
  found: 0,
  tags: ''
}, {
  repoId: '597358',
  name: 'react-redux-realworld-example-app',
  desc: 'An example real world application built with Redux',
  url: 'https://github.com/gothinkster/react-redux-realworld-example-app',
  found: 0,
  tags: ''
}, {
  repoId: '591232',
  name: 'status-react',
  desc: '',
  url: 'https://github.com/status-im/status-react',
  found: 0,
  tags: ''
}, {
  repoId: '634800',
  name: 'compiler-explorer',
  desc: 'Run GCC (and other compilers) interactively from your web browser and experiment with its generated code',
  url: 'https://github.com/mattgodbolt/compiler-explorer',
  found: 0,
  tags: ''
}, {
  repoId: '178593',
  name: 'mobile-detect.js',
  desc: '"Device detection (phone, tablet, desktop, mobile grade, os, versions)"',
  url: 'https://github.com/hgoebl/mobile-detect.js',
  found: 0,
  tags: ''
}, {
  repoId: '624428',
  name: 'thingsboard',
  desc: 'Thingsboard IoT Platform',
  url: 'https://github.com/thingsboard/thingsboard',
  found: 0,
  tags: ''
}, {
  repoId: '851666',
  name: 'XXPermissions',
  desc: '',
  url: 'https://github.com/getActivity/XXPermissions',
  found: 0,
  tags: ''
}, {
  repoId: '854690',
  name: 'CrunchyCalendar',
  desc: '"A beautiful material calendar with endless scroll, range selection and a lot more!"',
  url: 'https://github.com/CleverPumpkin/CrunchyCalendar',
  found: 0,
  tags: ''
}, {
  repoId: '855993',
  name: 'UserDefaultsStore',
  desc: 'Why not use UserDefaults to store Codable objects ????',
  url: 'https://github.com/omaralbeik/UserDefaultsStore',
  found: 0,
  tags: ''
}, {
  repoId: '854901',
  name: 'top',
  desc: 'Top App Developers',
  url: 'https://github.com/app-developers/top',
  found: 0,
  tags: ''
}, {
  repoId: '853929',
  name: 'ladybug',
  desc: 'Handle rdar:// links gracefully',
  url: 'https://github.com/ethanhuang13/ladybug',
  found: 0,
  tags: ''
}, {
  repoId: '854065',
  name: 'android-face-detector',
  desc: 'A face detection Android library',
  url: 'https://github.com/husaynhakeem/android-face-detector',
  found: 0,
  tags: ''
}, {
  repoId: '836796',
  name: 'IndicatorFastScroll',
  desc: '',
  url: 'https://github.com/reddit/IndicatorFastScroll',
  found: 0,
  tags: ''
}, {
  repoId: '850482',
  name: 'CrashSDK',
  desc: 'capture crash on Android(arm/x86)',
  url: 'https://github.com/SummerOak/CrashSDK',
  found: 0,
  tags: ''
}, {
  repoId: '840855',
  name: 'Web',
  desc: '"�Pad is an open digital note taking app. �Pad works with the open XML-based format: NPX, so anyone can implement it into their software allowing a truly open and free experience."',
  url: 'https://github.com/MicroPad/Web',
  found: 0,
  tags: ''
}, {
  repoId: '855610',
  name: 'AppUpdater',
  desc: 'initial',
  url: 'https://github.com/jenly1314/AppUpdater',
  found: 0,
  tags: ''
}, {
  repoId: '846520',
  name: 'simple-vlc-player',
  desc: 'An Android library that aims to simplify VLC media playback when casting or playing locally.',
  url: 'https://github.com/masterwok/simple-vlc-player',
  found: 0,
  tags: ''
}, {
  repoId: '851318',
  name: 'react-native-easy-router',
  desc: '',
  url: 'https://github.com/sergeyshpadyrev/react-native-easy-router',
  found: 0,
  tags: ''
}, {
  repoId: '824262',
  name: 'CameraRecorder-android',
  desc: '',
  url: 'https://github.com/MasayukiSuda/CameraRecorder-android',
  found: 0,
  tags: ''
}, {
  repoId: '836353',
  name: 'EasyValidation',
  desc: 'A text and input validation library in Kotlin for Android',
  url: 'https://github.com/wajahatkarim3/EasyValidation',
  found: 0,
  tags: ''
}, {
  repoId: '834009',
  name: 'appkernel',
  desc: 'Python micro-services made easy / a beautiful and opinionated micro-service chassis ',
  url: 'https://github.com/accelero-cloud/appkernel',
  found: 0,
  tags: ''
}, {
  repoId: '846833',
  name: 'androme',
  desc: 'Converts and optimizes HTML pages into the various standard Android layouts in XML. Resources and drawables are also auto-generated. iOS and Xamarin Forms will be supported as well.',
  url: 'https://github.com/anpham6/androme',
  found: 0,
  tags: ''
}, {
  repoId: '816072',
  name: 'Bark',
  desc: '',
  url: 'https://github.com/Finb/Bark',
  found: 0,
  tags: ''
}, {
  repoId: '743233',
  name: 'iOS-Security-Guides',
  desc: 'iOS security white papers',
  url: 'https://github.com/0xmachos/iOS-Security-Guides',
  found: 0,
  tags: ''
}, {
  repoId: '841964',
  name: 'android-test',
  desc: 'An extensive framework for testing Android apps',
  url: 'https://github.com/android/android-test',
  found: 0,
  tags: ''
}, {
  repoId: '851237',
  name: 'contacts',
  desc: '',
  url: 'https://github.com/harsh159357/contacts',
  found: 0,
  tags: ''
}, {
  repoId: '814274',
  name: 'simple-keyboard',
  desc: 'Simple React.js Virtual Keyboard - no jQuery dependency.',
  url: 'https://github.com/hodgef/simple-keyboard',
  found: 0,
  tags: ''
}, {
  repoId: '853344',
  name: 'KotlinSnapshot',
  desc: 'Snapshot Testing in Kotlin',
  url: 'https://github.com/Karumi/KotlinSnapshot',
  found: 0,
  tags: ''
}, {
  repoId: '822341',
  name: 'WeScan',
  desc: 'Document Scanning Made Easy for iOS',
  url: 'https://github.com/WeTransfer/WeScan',
  found: 0,
  tags: ''
}, {
  repoId: '854505',
  name: 'BookPlayer',
  desc: 'Player for your DRM-free audiobooks',
  url: 'https://github.com/TortugaPower/BookPlayer',
  found: 0,
  tags: ''
}, {
  repoId: '854581',
  name: 'flutter-webrtc-server',
  desc: 'A Dart WebRTC Signaling server for flutter-webrtc and html5.',
  url: 'https://github.com/cloudwebrtc/flutter-webrtc-server',
  found: 0,
  tags: ''
}, {
  repoId: '854261',
  name: 'WalleLibrary',
  desc: 'Android library ��_�_��_ی��',
  url: 'https://github.com/moz1q1/WalleLibrary',
  found: 0,
  tags: ''
}, {
  repoId: '851475',
  name: 'ant-design-mobile-chart',
  desc: 'Ant Design Mobile Chart based on F2',
  url: 'https://github.com/ant-design/ant-design-mobile-chart',
  found: 0,
  tags: ''
}, {
  repoId: '855555',
  name: 'simple_auth',
  desc: 'The Simplest way to Authenticate in Flutter',
  url: 'https://github.com/Clancey/simple_auth',
  found: 0,
  tags: ''
}, {
  repoId: '854879',
  name: 'MobileNet-YOLO',
  desc: '',
  url: 'https://github.com/eric612/MobileNet-YOLO',
  found: 0,
  tags: ''
}, {
  repoId: '839001',
  name: 'ArcSlidingHelper',
  desc: 'Android�_��_���Ԍ_��_Ɍ_�',
  url: 'https://github.com/wuyr/ArcSlidingHelper',
  found: 0,
  tags: ''
}, {
  repoId: '830561',
  name: 'jndcrash',
  desc: 'A Java wrapper over NDCrash C library https://github.com/ivanarh/ndcrash',
  url: 'https://github.com/ivanarh/jndcrash',
  found: 0,
  tags: ''
}, {
  repoId: '855545',
  name: 'Hero',
  desc: 'Elegant transition library for iOS & tvOS',
  url: 'https://github.com/HeroTransitions/Hero',
  found: 0,
  tags: ''
}, {
  repoId: '849145',
  name: 'guardian',
  desc: "Your guardian for permissions. Stop those who aren't invited to the party.",
  url: 'https://github.com/rennokki/guardian',
  found: 0,
  tags: ''
}, {
  repoId: '852772',
  name: 'saas',
  desc: 'build your own SaaS product with Async SaaS boilerplate app',
  url: 'https://github.com/async-labs/saas',
  found: 0,
  tags: ''
}, {
  repoId: '842492',
  name: 'BlueSwift',
  desc: '',
  url: 'https://github.com/netguru/BlueSwift',
  found: 0,
  tags: ''
}, {
  repoId: '812379',
  name: 'phonegap-template',
  desc: 'A template for an Android application using PhoneGap with material-ui',
  url: 'https://github.com/mrkipling/phonegap-template',
  found: 0,
  tags: ''
}, {
  repoId: '673505',
  name: 'trackerjacker',
  desc: 'Tracks WiFi devices by capturing raw 802.11 frames in monitor mode',
  url: 'https://github.com/calebmadrigal/trackerjacker',
  found: 0,
  tags: ''
}, {
  repoId: '818717',
  name: 'rnset',
  desc: 'A demonstrate project of react native and integrated & verified opened react native components ',
  url: 'https://github.com/suijunqiang/rnset',
  found: 0,
  tags: ''
}, {
  repoId: '823568',
  name: 'EasyRouter',
  desc: '',
  url: 'https://github.com/Xiasm/EasyRouter',
  found: 0,
  tags: ''
}, {
  repoId: '854151',
  name: 'ZYMK',
  desc: '����ٴ��_�_ǌ�������������',
  url: 'https://github.com/wzmyyj/ZYMK',
  found: 0,
  tags: ''
}, {
  repoId: '849549',
  name: 'samples',
  desc: 'A collection of Flutter examples and demos.',
  url: 'https://github.com/flutter/samples',
  found: 0,
  tags: ''
}, {
  repoId: '853063',
  name: 'shepherd',
  desc: 'Guide your users through a tour of your app #hubspot-open-source',
  url: 'https://github.com/shipshapecode/shepherd',
  found: 0,
  tags: ''
}, {
  repoId: '838257',
  name: 'JCNavigator',
  desc: '',
  url: 'https://github.com/imjoych/JCNavigator',
  found: 0,
  tags: ''
}, {
  repoId: '803456',
  name: 'apify-js',
  desc: 'Apify Actor runtime for JavaScript / Node.js',
  url: 'https://github.com/apifytech/apify-js',
  found: 0,
  tags: ''
}, {
  repoId: '853643',
  name: 'GDMS-DeviceManagementSystem',
  desc: '�ټ��_web�_㏨_�_������_ȍ�ٕ_Ό䍌�_�������_�',
  url: 'https://github.com/manier13579/GDMS-DeviceManagementSystem',
  found: 0,
  tags: ''
}, {
  repoId: '849676',
  name: 'SnippetStore',
  desc: 'A snippet management app for developers',
  url: 'https://github.com/ZeroX-DG/SnippetStore',
  found: 0,
  tags: ''
}, {
  repoId: '842367',
  name: 'alpha',
  desc: 'Alpha�����ۊ���ټ��_PERT��_�_�ȼ�_�Android�_�_�����_�����_��_Ό�č�ی���_Ύ������_Ό_ُ�_��Ό���� �Ϭ��ӍӬ����_��_�Ѧ�۪�_ξ�Ԋ��_����__���_��__�ᴊ_ώ�ۏ_���_�_Ί���������������_���ٌ�_�_ξ�Ԋ�__��_�����_��������݌ᴊ_ό_���ԏ�ݏ�΋��_������݌ᴊ_ϊ_܎ѫ�����_�_��Ϭ�䍌�_�_���Ѝ_��_�_ȕ_ξ�ۊȴ��Ԋ�����ۏ_���_�__�_���������Њ�¾䤏�Ύ������_�_�����ۤ���Alpha����������__��Ώ�_����_�_Ί_��Ӭ��Ɍ����ی�_�_䌴_�໌ᱍ_�task�_Ό_���������Ċ_���Ѝ_�task�_Ό����ľ�Ȍ_ʌ��Project��_������_��__�໌_��_���Ծ�䌼��ϡ�䤏�Ώ�����task�_Ό_�����䤏�΍_��Ҿ_Ͼ_݌༾�����',
  url: 'https://github.com/alibaba/alpha',
  found: 0,
  tags: ''
}, {
  repoId: '847313',
  name: 'go-structure-examples',
  desc: 'Examples for my talk on structuring go apps',
  url: 'https://github.com/katzien/go-structure-examples',
  found: 0,
  tags: ''
}, {
  repoId: '785572',
  name: 'blog_backups',
  desc: 'Android ��_�ݨ�_���Ћہ����������ݠ�_Ό�Ɍ��Android�ہJava�ہ��������Ҿ_�ہ��Ѿ_��ہ������blog�_��_�_���',
  url: 'https://github.com/crazyandcoder/blog_backups',
  found: 0,
  tags: ''
}, {
  repoId: '839465',
  name: 'Bassa-mobile',
  desc: 'Bassa mobile',
  url: 'https://github.com/scorelab/Bassa-mobile',
  found: 0,
  tags: ''
}, {
  repoId: '851287',
  name: 'koin',
  desc: 'KOIN - a pragmatic lightweight dependency injection framework for Kotlin https://insert-koin.io/',
  url: 'https://github.com/InsertKoinIO/koin',
  found: 0,
  tags: ''
}, {
  repoId: '815603',
  name: 'UnityCapture',
  desc: '"Unity3D Virtual webcam plugin, streams unity viewport contents to other applications as virtual camera"',
  url: 'https://github.com/schellingb/UnityCapture',
  found: 0,
  tags: ''
}, {
  repoId: '779860',
  name: 'validatetor',
  desc: 'Android library for fast and simple string validation',
  url: 'https://github.com/nisrulz/validatetor',
  found: 0,
  tags: ''
}, {
  repoId: '813706',
  name: 'JReadHub',
  desc: 'Readhub Android client',
  url: 'https://github.com/guanpj/JReadHub',
  found: 0,
  tags: ''
}, {
  repoId: '854339',
  name: 'Sica',
  desc: 'Sica can execute various animations sequentially or parallely',
  url: 'https://github.com/cats-oss/Sica',
  found: 0,
  tags: ''
}, {
  repoId: '841725',
  name: 'swiftProject',
  desc: 'swift��_�ݨ',
  url: 'https://github.com/NJHu/swiftProject',
  found: 0,
  tags: ''
}, {
  repoId: '851745',
  name: 'functions-serverless-chat-app-tutorial',
  desc: '"Tutorial for building a serverless chat app with Azure Functions, SignalR Service, and Cosmos DB"',
  url: 'https://github.com/Azure-Samples/functions-serverless-chat-app-tutorial',
  found: 0,
  tags: ''
}, {
  repoId: '852052',
  name: 'bloqly',
  desc: 'Bloqly Project:  JavaScript Smart Contracts Engine',
  url: 'https://github.com/bloqly/bloqly',
  found: 0,
  tags: ''
}, {
  repoId: '811902',
  name: 'hcxdumptool',
  desc: '',
  url: 'https://github.com/ZerBea/hcxdumptool',
  found: 0,
  tags: ''
}, {
  repoId: '847773',
  name: 'ABridge',
  desc: 'the abridge for android ipc',
  url: 'https://github.com/yifei8/ABridge',
  found: 0,
  tags: ''
}, {
  repoId: '855991',
  name: 'react-native-articles',
  desc: 'React Native Articles',
  url: 'https://github.com/burhanyilmaz/react-native-articles',
  found: 0,
  tags: ''
}, {
  repoId: '841521',
  name: 'Meshenger',
  desc: 'open-source P2P messenger',
  url: 'https://github.com/dakhnod/Meshenger',
  found: 0,
  tags: ''
}, {
  repoId: '854447',
  name: 'ketro',
  desc: 'Retrofit 2 wrapper written in Kotlin which makes it easier to get LiveData values from a REST API client',
  url: 'https://github.com/smilecs/ketro',
  found: 0,
  tags: ''
}, {
  repoId: '820519',
  name: 'Android-Tips',
  desc: '',
  url: 'https://github.com/RealMoMo/Android-Tips',
  found: 0,
  tags: ''
}, {
  repoId: '613910',
  name: 'Analysis',
  desc: '',
  url: 'https://github.com/BasThomas/Analysis',
  found: 0,
  tags: ''
}, {
  repoId: '855020',
  name: 'calepin-frontend',
  desc: '',
  url: 'https://github.com/orditeck/calepin-frontend',
  found: 0,
  tags: ''
}, {
  repoId: '838174',
  name: 'Delir',
  desc: 'Web Tech driven Hackable VFX App',
  url: 'https://github.com/ra-gg/Delir',
  found: 0,
  tags: ''
}, {
  repoId: '831065',
  name: 'cp8',
  desc: 'GitHub review bot',
  url: 'https://github.com/cookpad/cp8',
  found: 0,
  tags: ''
}, {
  repoId: '766212',
  name: 'AlarmAndJob',
  desc: '��依��Ȧ�໌_������_�ύ�_�',
  url: 'https://github.com/dxsdyhm/AlarmAndJob',
  found: 0,
  tags: ''
}, {
  repoId: '837832',
  name: 'TextureSignalProcessing',
  desc: 'Gradient-Domain Processing within a Texture Atlas',
  url: 'https://github.com/mkazhdan/TextureSignalProcessing',
  found: 0,
  tags: ''
}, {
  repoId: '813817',
  name: 'ReactNative-Book-Demo',
  desc: '',
  url: 'https://github.com/ParryQiu/ReactNative-Book-Demo',
  found: 0,
  tags: ''
}, {
  repoId: '843615',
  name: 'OmniThing',
  desc: 'A cross-platform successor to ST_Anything',
  url: 'https://github.com/DanielOgorchock/OmniThing',
  found: 0,
  tags: ''
}, {
  repoId: '855322',
  name: 'Instabug-Android',
  desc: 'Bug reporting tool for Android apps',
  url: 'https://github.com/Instabug/Instabug-Android',
  found: 0,
  tags: ''
}, {
  repoId: '843891',
  name: 'python-aiocqhttp',
  desc: 'A Python SDK with acync I/O for CoolQ HTTP API plugin.',
  url: 'https://github.com/richardchien/python-aiocqhttp',
  found: 0,
  tags: ''
}, {
  repoId: '848458',
  name: 'create-fusion-app',
  desc: '',
  url: 'https://github.com/fusionjs/create-fusion-app',
  found: 0,
  tags: ''
}, {
  repoId: '849313',
  name: 'react-native-workshop',
  desc: 'This repository is for the react-native-workshop materials',
  url: 'https://github.com/ReactBangalore/react-native-workshop',
  found: 0,
  tags: ''
}, {
  repoId: '837631',
  name: 'augur-app',
  desc: 'Augur Desktop Electron Application',
  url: 'https://github.com/AugurProject/augur-app',
  found: 0,
  tags: ''
}, {
  repoId: '825597',
  name: 'trace',
  desc: '',
  url: 'https://github.com/trentpiercy/trace',
  found: 0,
  tags: ''
}, {
  repoId: '845979',
  name: 'Android-Cheat-sheet',
  desc: 'Cheat Sheet for Android Interviews',
  url: 'https://github.com/anitaa1990/Android-Cheat-sheet',
  found: 0,
  tags: ''
}, {
  repoId: '831022',
  name: 'LNPropertyListEditor',
  desc: '"A property list editor for macOS, similar to Xcode\'s."',
  url: 'https://github.com/LeoNatan/LNPropertyListEditor',
  found: 0,
  tags: ''
}, {
  repoId: '852743',
  name: 'fatturapa-php-sdk',
  desc: 'PHP SDK per la fatturazione elettronica',
  url: 'https://github.com/italia/fatturapa-php-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '794288',
  name: 'node-basic-boilerplate-docker',
  desc: '',
  url: 'https://github.com/gmoralesc/node-basic-boilerplate-docker',
  found: 0,
  tags: ''
}, {
  repoId: '854393',
  name: 'Xam.Plugin.SimpleAppIntro',
  desc: 'Just a nice and simple AppIntro for your Xamarin Forms project',
  url: 'https://github.com/galadril/Xam.Plugin.SimpleAppIntro',
  found: 0,
  tags: ''
}, {
  repoId: '781812',
  name: 'android-week-calendar',
  desc: '',
  url: 'https://github.com/chenyongci/android-week-calendar',
  found: 0,
  tags: ''
}, {
  repoId: '851508',
  name: 'cnoder',
  desc: 'Yet another CNode Flutter App',
  url: 'https://github.com/ali322/cnoder',
  found: 0,
  tags: ''
}, {
  repoId: '808061',
  name: 'FullMaterialLoader',
  desc: 'FullMaterialLoader is the swift library to show and animate the loader',
  url: 'https://github.com/sathishvgs/FullMaterialLoader',
  found: 0,
  tags: ''
}, {
  repoId: '844571',
  name: 'config-preview-sdk',
  desc: 'Preview SDK for orb authors',
  url: 'https://github.com/CircleCI-Public/config-preview-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '814223',
  name: 'react-simple-keyboard',
  desc: 'Simple React.js Virtual Keyboard - no jQuery dependency.',
  url: 'https://github.com/hodgef/react-simple-keyboard',
  found: 0,
  tags: ''
}, {
  repoId: '842366',
  name: 'JsonLube',
  desc: '�������������ϡ���Json��_����_�о��Java bean��_����_Ί_ʍ�ي�_��Ԋ�¾���Ϭ�����ξ������Ӭ�����㾝���_�_����_�����Ϭ��Ȍ_��__�����_�_Ύ����_�_����_�Json�_Ύ��Ӭ������_��_�_��_ی_۾ۤ��_��ӏ_Čᨕ_Ί�������_���_��્_�ۤ��_�_ξ�Ԋ����ȴ���ӬAndroid�_ٍ�ٍ_�Json��ҏ�ݏ�Ώ���_����_���������_��ۊ���_����_�_�Json�_Όټ��_�_ٍ��Json��Ҍ_Ⱦ�܌_�����_��ᴊ_ώ�_��_��_Ί�ӌ�_��Ҍ༎Ӫ���JsonLube�������__��Ώ�_����_���JsonLube�__�Ϭ�_Џ�Ծ�ُ໌_���پ��Json����_��ȣ�ʁ�_΍Ӭ���_��Ӭ��_�_���ی���_Ί_���������_�Ӧ�_�_ٍ�ُ���_��_�ۤ��_���',
  url: 'https://github.com/alibaba/JsonLube',
  found: 0,
  tags: ''
}, {
  repoId: '844825',
  name: 'Optimize',
  desc: '',
  url: 'https://github.com/anitaa1990/Optimize',
  found: 0,
  tags: ''
}, {
  repoId: '817828',
  name: 'fsig',
  desc: 'Send signals to a subprocess when files change',
  url: 'https://github.com/sagikazarmark/fsig',
  found: 0,
  tags: ''
}, {
  repoId: '838233',
  name: 'FGO-Planning-Tool',
  desc: '',
  url: 'https://github.com/ssttkkl/FGO-Planning-Tool',
  found: 0,
  tags: ''
}, {
  repoId: '844165',
  name: 'SignalR',
  desc: 'SignalR Core support for Microsoft AspNet Core Blazor',
  url: 'https://github.com/BlazorExtensions/SignalR',
  found: 0,
  tags: ''
}, {
  repoId: '838434',
  name: 'libiocm',
  desc: '��_��_�ӵ����䩏�Ӎ_Ԍ_۾�_�__���API��_�_����',
  url: 'https://github.com/zeevin/libiocm',
  found: 0,
  tags: ''
}, {
  repoId: '855894',
  name: 'duoduoke-sdk',
  desc: '�__�__���API SDK',
  url: 'https://github.com/justmd5/duoduoke-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '855125',
  name: 'livedata-ktx',
  desc: '"Kotlin extension for LiveData, chaining like RxJava"',
  url: 'https://github.com/Shopify/livedata-ktx',
  found: 0,
  tags: ''
}, {
  repoId: '372558',
  name: 'Form',
  desc: 'The most flexible and powerful way to build a form on iOS',
  url: 'https://github.com/3lvis/Form',
  found: 0,
  tags: ''
}, {
  repoId: '832695',
  name: 'MapMoves',
  desc: 'Import from Moves app to Unity',
  url: 'https://github.com/bionicl/MapMoves',
  found: 0,
  tags: ''
}, {
  repoId: '850371',
  name: 'react-native-template-pro',
  desc: 'React Native template with async and debugging tools.',
  url: 'https://github.com/thiagobrez/react-native-template-pro',
  found: 0,
  tags: ''
}, {
  repoId: '826170',
  name: 'ZimLX',
  desc: 'Open Source and free launcher for Android',
  url: 'https://github.com/otakuhqz/ZimLX',
  found: 0,
  tags: ''
}, {
  repoId: '846798',
  name: 'eDistantObject',
  desc: '',
  url: 'https://github.com/google/eDistantObject',
  found: 0,
  tags: ''
}, {
  repoId: '851057',
  name: 'datetime_picker_formfield',
  desc: 'A Flutter widget that wraps a TextFormField and integrates the date and/or time picker dialogs.',
  url: 'https://github.com/jifalops/datetime_picker_formfield',
  found: 0,
  tags: ''
}, {
  repoId: '852465',
  name: 'web-foundation',
  desc: '"Principles, decision logs, and best practices for building web apps at Shopify"',
  url: 'https://github.com/Shopify/web-foundation',
  found: 0,
  tags: ''
}, {
  repoId: '827460',
  name: 'fenix',
  desc: "Fenix is not your parent's Android browser.",
  url: 'https://github.com/mozilla-mobile/fenix',
  found: 0,
  tags: ''
}, {
  repoId: '836000',
  name: 'urban',
  desc: "Dark themes inspired by Xcode's Civic theme",
  url: 'https://github.com/divadretlaw/urban',
  found: 0,
  tags: ''
}, {
  repoId: '722524',
  name: 'PickerView',
  desc: 'Android��_�_����ܩ���',
  url: 'https://github.com/duanhong169/PickerView',
  found: 0,
  tags: ''
}, {
  repoId: '740284',
  name: 'react-native-shop-ui',
  desc: 'A react native clothes shopping UI template with storage and user management.',
  url: 'https://github.com/ATF19/react-native-shop-ui',
  found: 0,
  tags: ''
}, {
  repoId: '847637',
  name: 'mobile-ffmpeg',
  desc: 'Source code and scripts to build FFmpeg for Android platform and IOS platform',
  url: 'https://github.com/tanersener/mobile-ffmpeg',
  found: 0,
  tags: ''
}, {
  repoId: '823609',
  name: 'PopItUp',
  desc: 'a Popup system for iOS',
  url: 'https://github.com/fritzgerald/PopItUp',
  found: 0,
  tags: ''
}, {
  repoId: '849509',
  name: 'react-native-fix-xcode-10',
  desc: 'Fix Xcode 10 beta 1 issues with compiling React Native apps',
  url: 'https://github.com/rhdeck/react-native-fix-xcode-10',
  found: 0,
  tags: ''
}, {
  repoId: '845996',
  name: 'Localizr.swift',
  desc: 'Simplified Localization library in IOS.',
  url: 'https://github.com/michaelhenry/Localizr.swift',
  found: 0,
  tags: ''
}, {
  repoId: '855782',
  name: 'SwiftyCodeView',
  desc: '',
  url: 'https://github.com/arturdev/SwiftyCodeView',
  found: 0,
  tags: ''
}, {
  repoId: '848051',
  name: 'hn_app',
  desc: 'The HN reader app developed live on The Boring Flutter Development Show',
  url: 'https://github.com/filiph/hn_app',
  found: 0,
  tags: ''
}, {
  repoId: '823266',
  name: 'blue-notes',
  desc: 'Twelve classic Blue Note album sleeves recreated in the browser using HTML and CSS.',
  url: 'https://github.com/stevehoneyman/blue-notes',
  found: 0,
  tags: ''
}, {
  repoId: '852691',
  name: 'txai',
  desc: '��_���AI�_ی�Ԍ__���sdk',
  url: 'https://github.com/shiguanghuxian/txai',
  found: 0,
  tags: ''
}, {
  repoId: '833972',
  name: 'Promega',
  desc: '',
  url: 'https://github.com/PrintM3D/Promega',
  found: 0,
  tags: ''
}, {
  repoId: '849937',
  name: 'traveling_salesman_demo',
  desc: '',
  url: 'https://github.com/thomasnield/traveling_salesman_demo',
  found: 0,
  tags: ''
}, {
  repoId: '828591',
  name: 'tailor_made',
  desc: 'A Flutter experiment.',
  url: 'https://github.com/jogboms/tailor_made',
  found: 0,
  tags: ''
}, {
  repoId: '815647',
  name: 'miniApps',
  desc: '��Ǌ�Č_���������܌��',
  url: 'https://github.com/hbxq2018/miniApps',
  found: 0,
  tags: ''
}, {
  repoId: '842732',
  name: 'react-native-boilerplate',
  desc: '???? React Native Boilerplate ',
  url: 'https://github.com/victorkvarghese/react-native-boilerplate',
  found: 0,
  tags: ''
}, {
  repoId: '824471',
  name: 'SamMitiAR-iOS',
  desc: '',
  url: 'https://github.com/prolificinteractive/SamMitiAR-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '842830',
  name: 'RainbowMiner',
  desc: 'A windows multi pool switching miner script',
  url: 'https://github.com/RainbowMiner/RainbowMiner',
  found: 0,
  tags: ''
}, {
  repoId: '776706',
  name: 'UberEATS',
  desc: '',
  url: 'https://github.com/sean7218/UberEATS',
  found: 0,
  tags: ''
}, {
  repoId: '854799',
  name: 'lightify',
  desc: 'a reverse proxy that just minify and compress the output',
  url: 'https://github.com/alash3al/lightify',
  found: 0,
  tags: ''
}, {
  repoId: '854021',
  name: 'rn-fetch-blob',
  desc: '"A project committed to making file access and data transfer easier, efficient for React Native developers."',
  url: 'https://github.com/joltup/rn-fetch-blob',
  found: 0,
  tags: ''
}, {
  repoId: '849400',
  name: 'OXChart',
  desc: '��㍤��໌�_�_��_�����ҕ_Ί_��Ӭ��ی���_ξ���΁�䩌��',
  url: 'https://github.com/openXu/OXChart',
  found: 0,
  tags: ''
}, {
  repoId: '835019',
  name: 'RWidgetHelper',
  desc: '�Ȥ����ټ��۾_��Ȧ 1.�ȣ���selecter�ݫ�_���_�_�xml��_�ۤ��_�_��Ϡ�_��_ΌϠ��Օ_ξِ��۾�_��ԌϠ��� 2.�����state�_��ہ��ξ��/�__���/���_ь����_ ',
  url: 'https://github.com/RuffianZhong/RWidgetHelper',
  found: 0,
  tags: ''
}, {
  repoId: '855025',
  name: 'AccordionSwift',
  desc: 'The best way of implement an accordion menu using an UITableView in Swift',
  url: 'https://github.com/Vkt0r/AccordionSwift',
  found: 0,
  tags: ''
}, {
  repoId: '851026',
  name: 'signal-hook',
  desc: 'Library allowing to register multiple handlers for the same signal',
  url: 'https://github.com/vorner/signal-hook',
  found: 0,
  tags: ''
}, {
  repoId: '852544',
  name: 'flowa',
  desc: 'Flow control for Node.js',
  url: 'https://github.com/faressoft/flowa',
  found: 0,
  tags: ''
}, {
  repoId: '813860',
  name: 'kotlin-ktor-exposed-starter',
  desc: '"Starter REST service using Kotlin, Ktor and Exposed"',
  url: 'https://github.com/raharrison/kotlin-ktor-exposed-starter',
  found: 0,
  tags: ''
}, {
  repoId: '842495',
  name: 'frameDemoMo2',
  desc: 'Android���Ȧ��Ў�_�ݨ����_�',
  url: 'https://github.com/tome34/frameDemoMo2',
  found: 0,
  tags: ''
}, {
  repoId: '853322',
  name: 'plans',
  desc: '"Laravel Plans is a package for SaaS-like apps that need easy management over plans, features and event-driven updates on plans."',
  url: 'https://github.com/rennokki/plans',
  found: 0,
  tags: ''
}, {
  repoId: '724495',
  name: 'AndroidOpenGLTutorial',
  desc: 'Android OpenGL ES Development Tutorials',
  url: 'https://github.com/glumes/AndroidOpenGLTutorial',
  found: 0,
  tags: ''
}, {
  repoId: '830981',
  name: 'community',
  desc: 'Here are some sample swift files to be used in the Swift for Arduino IDE.',
  url: 'https://github.com/swiftforarduino/community',
  found: 0,
  tags: ''
}, {
  repoId: '711275',
  name: 'blog',
  desc: '"Articles about Swift, ��� Platforms, and Software Engineering."',
  url: 'https://github.com/oliverrussellwhite/blog',
  found: 0,
  tags: ''
}, {
  repoId: '854452',
  name: 'aic-mobile-android',
  desc: 'Art Institute of Chicago Official Mobile App - Android',
  url: 'https://github.com/art-institute-of-chicago/aic-mobile-android',
  found: 0,
  tags: ''
}, {
  repoId: '851054',
  name: 'Uno.WindowsCommunityToolkit',
  desc: '"The Windows Community Toolkit is a collection of helper functions, custom controls, and app services. It simplifies and demonstrates common developer tasks building UWP apps for Windows 10. The toolkit is part of the .NET Foundation."',
  url: 'https://github.com/nventive/Uno.WindowsCommunityToolkit',
  found: 0,
  tags: ''
}, {
  repoId: '672555',
  name: 'MagiRefresh',
  desc: '"Swift���MJRefresh,�_���������_��������۾��_�۝�����_��ӏ����۾��,��_�_о�Ԋ_��Ӭ���runtime,�_ٌ�����Swift�_�_Џ����܎���_ٍӬ���OC�_�_ϊȴ��_��䏤���_�__�_�,�_܌�_�����_�__�ݫ�С�_�"',
  url: 'https://github.com/AnRanScheme/MagiRefresh',
  found: 0,
  tags: ''
}, {
  repoId: '851039',
  name: 'VaporElasticsearch',
  desc: '',
  url: 'https://github.com/ryangrimm/VaporElasticsearch',
  found: 0,
  tags: ''
}, {
  repoId: '846586',
  name: 'loco-answers',
  desc: 'This a open source Android app for LOCO ANSWERS ',
  url: 'https://github.com/SubhamTyagi/loco-answers',
  found: 0,
  tags: ''
}, {
  repoId: '841339',
  name: 'Earthquake-Data-Mapper',
  desc: '',
  url: 'https://github.com/NilsBacke/Earthquake-Data-Mapper',
  found: 0,
  tags: ''
}, {
  repoId: '851018',
  name: 'Carlos',
  desc: 'A simple but flexible cache',
  url: 'https://github.com/spring-media/Carlos',
  found: 0,
  tags: ''
}, {
  repoId: '729698',
  name: 'packages',
  desc: 'A collection of useful packages maintained by the Flutter team',
  url: 'https://github.com/flutter/packages',
  found: 0,
  tags: ''
}, {
  repoId: '811037',
  name: 'recipe-api-only',
  desc: '"API server for recipe based projects. If you want to have an app or website with recipes, but don\'t want to spend a lot of time - this can be a good choice"',
  url: 'https://github.com/ChickenKyiv/recipe-api-only',
  found: 0,
  tags: ''
}, {
  repoId: '849476',
  name: 'component-preview',
  desc: 'Ionic v4 component preview app',
  url: 'https://github.com/ionic-team/component-preview',
  found: 0,
  tags: ''
}, {
  repoId: '847443',
  name: 'MviDroid',
  desc: 'MVI framework designed for Android',
  url: 'https://github.com/arkivanov/MviDroid',
  found: 0,
  tags: ''
}, {
  repoId: '811213',
  name: 'OpenYourEyes',
  desc: '����_ۍ�_��������-��Ɋ_݌__�_ʊ_��Ӭ',
  url: 'https://github.com/SherlockGougou/OpenYourEyes',
  found: 0,
  tags: ''
}, {
  repoId: '778265',
  name: 'KDispatcher',
  desc: 'Simple event dispatcher',
  url: 'https://github.com/Rasalexman/KDispatcher',
  found: 0,
  tags: ''
}, {
  repoId: '799346',
  name: 'what-to-wear',
  desc: 'A bot that tells you what to wear every day',
  url: 'https://github.com/rohanp/what-to-wear',
  found: 0,
  tags: ''
}, {
  repoId: '845553',
  name: 'kotlin-mpp-example',
  desc: 'Example of Kotlin multiplatform project',
  url: 'https://github.com/JetBrains/kotlin-mpp-example',
  found: 0,
  tags: ''
}, {
  repoId: '642665',
  name: 'swiftshield',
  desc: 'Swift Classes Protector',
  url: 'https://github.com/rockbruno/swiftshield',
  found: 0,
  tags: ''
}, {
  repoId: '640885',
  name: 'slim.js',
  desc: 'slim.js robust web components with less code',
  url: 'https://github.com/slimjs/slim.js',
  found: 0,
  tags: ''
}, {
  repoId: '801278',
  name: 'WebSocketDemo',
  desc: '',
  url: 'https://github.com/0xZhangKe/WebSocketDemo',
  found: 0,
  tags: ''
}, {
  repoId: '842800',
  name: 'better-onetab',
  desc: 'A better onetab for chrome',
  url: 'https://github.com/cnwangjie/better-onetab',
  found: 0,
  tags: ''
}, {
  repoId: '846739',
  name: 'TeamManagerApp',
  desc: '"A sample app structure using the MVVM architecture LiveData, RxJava, ViewModel, Room and the Navigation Arch Components."',
  url: 'https://github.com/Levi-Moreira/TeamManagerApp',
  found: 0,
  tags: ''
}, {
  repoId: '850137',
  name: 'INA',
  desc: 'Combined INA219 and INA226 Arduino library for reading multiple devices',
  url: 'https://github.com/SV-Zanshin/INA',
  found: 0,
  tags: ''
}, {
  repoId: '802872',
  name: 'recyclerview-extensions',
  desc: '"RecyclerView Extensions, Mentalstack"',
  url: 'https://github.com/mentalstack/recyclerview-extensions',
  found: 0,
  tags: ''
}, {
  repoId: '802249',
  name: 'simple-mern-passport',
  desc: 'A template and tutorial for integrating passport to a MERN app.',
  url: 'https://github.com/b-bly/simple-mern-passport',
  found: 0,
  tags: ''
}, {
  repoId: '854079',
  name: 'Rocket.Chat.Apps-cli',
  desc: 'The Rocket.Chat Apps development environment.',
  url: 'https://github.com/RocketChat/Rocket.Chat.Apps-cli',
  found: 0,
  tags: ''
}, {
  repoId: '845623',
  name: 'UINavigation',
  desc: '"A UE4 plugin designed to help easily make UMG menus navigable by mouse, keyboard and controller"',
  url: 'https://github.com/goncasmage1/UINavigation',
  found: 0,
  tags: ''
}, {
  repoId: '789657',
  name: 'react-native-appicons',
  desc: 'Create and manage application icons for RN Apps',
  url: 'https://github.com/rhdeck/react-native-appicons',
  found: 0,
  tags: ''
}, {
  repoId: '854829',
  name: 'Adafruit_Blinka',
  desc: '',
  url: 'https://github.com/adafruit/Adafruit_Blinka',
  found: 0,
  tags: ''
}, {
  repoId: '853996',
  name: 'tikzDevice',
  desc: 'A R package for producing graphics output as PGF/TikZ code for use in TeX documents.',
  url: 'https://github.com/daqana/tikzDevice',
  found: 0,
  tags: ''
}, {
  repoId: '790943',
  name: 'universal-parallax',
  desc: 'Easy parallax plugin using pure javascript. Also works on mobile platforms. Cross browser support.',
  url: 'https://github.com/marrio-h/universal-parallax',
  found: 0,
  tags: ''
}, {
  repoId: '724212',
  name: 'flutter-test',
  desc: 'Various test scenarios',
  url: 'https://github.com/xster/flutter-test',
  found: 0,
  tags: ''
}, {
  repoId: '818206',
  name: 'MVICore',
  desc: '',
  url: 'https://github.com/badoo/MVICore',
  found: 0,
  tags: ''
}, {
  repoId: '814147',
  name: 'realtime_object_detection',
  desc: 'Plug and Play Real-Time Object Detection App with Tensorflow and OpenCV. No Bugs No Worries. Enjoy!',
  url: 'https://github.com/naisy/realtime_object_detection',
  found: 0,
  tags: ''
}, {
  repoId: '837530',
  name: 'mrpoid2018',
  desc: '',
  url: 'https://github.com/Yichou/mrpoid2018',
  found: 0,
  tags: ''
}, {
  repoId: '855454',
  name: 'PyFiSync',
  desc: '',
  url: 'https://github.com/Jwink3101/PyFiSync',
  found: 0,
  tags: ''
}, {
  repoId: '795685',
  name: 'CircleFloatBar',
  desc: 'CircleFloatBar',
  url: 'https://github.com/RealMoMo/CircleFloatBar',
  found: 0,
  tags: ''
}, {
  repoId: '813751',
  name: 'laravan',
  desc: 'Ansible Playbooks for Laravel - machine provisioning and app deployment',
  url: 'https://github.com/jsphpl/laravan',
  found: 0,
  tags: ''
}, {
  repoId: '825381',
  name: 'rick-morty-app',
  desc: 'Rick and Morty information App',
  url: 'https://github.com/Bamii/rick-morty-app',
  found: 0,
  tags: ''
}, {
  repoId: '841591',
  name: 'MERN-app',
  desc: '"Simple starter for the MERN stack (MongoDB, Express, React, Node.js) on Kubernetes"',
  url: 'https://github.com/IBM-Cloud/MERN-app',
  found: 0,
  tags: ''
}, {
  repoId: '821410',
  name: 'HardwareVideoCodec',
  desc: 'Hardware video recorder',
  url: 'https://github.com/lmylr/HardwareVideoCodec',
  found: 0,
  tags: ''
}, {
  repoId: '808738',
  name: 'FlintDemo-iOS',
  desc: 'iOS Demo app for Flint tools',
  url: 'https://github.com/MontanaFlossCo/FlintDemo-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '762516',
  name: 'APIJSONAuto',
  desc: 'APIJSON Auto powered by Vue.js',
  url: 'https://github.com/TommyLemon/APIJSONAuto',
  found: 0,
  tags: ''
}, {
  repoId: '842999',
  name: 'CryptoTracker',
  desc: '',
  url: 'https://github.com/Blakexx/CryptoTracker',
  found: 0,
  tags: ''
}, {
  repoId: '851339',
  name: 'appbuilder-portal',
  desc: 'Portal for App Publishing Service',
  url: 'https://github.com/sillsdev/appbuilder-portal',
  found: 0,
  tags: ''
}, {
  repoId: '854313',
  name: 'datum-sdk',
  desc: '',
  url: 'https://github.com/Datum/datum-sdk',
  found: 0,
  tags: ''
}, {
  repoId: '819675',
  name: 'react-native-aztec',
  desc: 'Wrapping Aztec Android and Aztec iOS in a React Native component',
  url: 'https://github.com/wordpress-mobile/react-native-aztec',
  found: 0,
  tags: ''
}, {
  repoId: '829445',
  name: 'BLE-iOS-demo',
  desc: '',
  url: 'https://github.com/dzindra/BLE-iOS-demo',
  found: 0,
  tags: ''
}, {
  repoId: '849556',
  name: 'ClassifierKit',
  desc: '???? A suite of tools and examples for training CoreML models with CreateML.',
  url: 'https://github.com/pdil/ClassifierKit',
  found: 0,
  tags: ''
}, {
  repoId: '831334',
  name: 'flutter-movie-app',
  desc: 'flutter',
  url: 'https://github.com/DhytoDev/flutter-movie-app',
  found: 0,
  tags: ''
}, {
  repoId: '828333',
  name: 'react-native-date-picker',
  desc: '',
  url: 'https://github.com/henninghall/react-native-date-picker',
  found: 0,
  tags: ''
}, {
  repoId: '738044',
  name: 'articles',
  desc: 'Code snippets for articles posted at 4comprehension.com',
  url: 'https://github.com/pivovarit/articles',
  found: 0,
  tags: ''
}, {
  repoId: '854650',
  name: 'YNPageViewController',
  desc: 'ScrollView--��_��������Ȧ�ہ�__��������Ό�Ѿ�_�_��ہ���Ͼ���_ϋہ�__�ݢ�ہ�������ہ���ϋہ�_���_�ہ��_����С��ȋہ�_Ծ�ҾС��ȋہ��_�Ѵ�_�����_������_�_������_',
  url: 'https://github.com/yongyuandouneng/YNPageViewController',
  found: 0,
  tags: ''
}, {
  repoId: '848572',
  name: 'QQPurify',
  desc: "A Xposed module that hides the view that the Android QQ doesn't want to see.",
  url: 'https://github.com/zpp0196/QQPurify',
  found: 0,
  tags: ''
}, {
  repoId: '852804',
  name: 'kritis',
  desc: '',
  url: 'https://github.com/grafeas/kritis',
  found: 0,
  tags: ''
}, {
  repoId: '844889',
  name: 'iosched-ios',
  desc: '',
  url: 'https://github.com/google/iosched-ios',
  found: 0,
  tags: ''
}, {
  repoId: '851024',
  name: 'lambda-proxy',
  desc: '',
  url: 'https://github.com/puresec/lambda-proxy',
  found: 0,
  tags: ''
}, {
  repoId: '846221',
  name: 'shinny-futures-android',
  desc: '',
  url: 'https://github.com/shinnytech/shinny-futures-android',
  found: 0,
  tags: ''
}, {
  repoId: '854392',
  name: 'flowr',
  desc: 'declarative flow control components for React apps',
  url: 'https://github.com/monojack/flowr',
  found: 0,
  tags: ''
}, {
  repoId: '853245',
  name: 'EthereumKit',
  desc: '"EthereumKit is a free, open-source Swift framework for easily interacting with the Ethereum."',
  url: 'https://github.com/D-Technologies/EthereumKit',
  found: 0,
  tags: ''
}, {
  repoId: '831637',
  name: 'DTGradientButton',
  desc: 'Easy way to set gradient background to your buttons.',
  url: 'https://github.com/tungvoduc/DTGradientButton',
  found: 0,
  tags: ''
}, {
  repoId: '854440',
  name: 'MediaPickerPoject',
  desc: 'Media Picker like Wechat  support Cordova �_Ί���_���������Ԍ�_�����ܩ����_ΉϬ����΁cordova��čӬ',
  url: 'https://github.com/DmcSDK/MediaPickerPoject',
  found: 0,
  tags: ''
}, {
  repoId: '806243',
  name: 'Flint',
  desc: 'FlintCore framework',
  url: 'https://github.com/MontanaFlossCo/Flint',
  found: 0,
  tags: ''
}, {
  repoId: '823698',
  name: 'weapp',
  desc: 'GO �_���������܌�� SDK',
  url: 'https://github.com/medivhzhan/weapp',
  found: 0,
  tags: ''
}, {
  repoId: '838628',
  name: 'MobileFace',
  desc: 'A face recognition solution on mobile device.',
  url: 'https://github.com/becauseofAI/MobileFace',
  found: 0,
  tags: ''
}, {
  repoId: '850769',
  name: 'expedition',
  desc: 'The Expedition monorepo',
  url: 'https://github.com/ExpeditionRPG/expedition',
  found: 0,
  tags: ''
}, {
  repoId: '814599',
  name: 'swifty-sk-scroll-view',
  desc: 'A Swift helper for integrating UIScrollViews in your spriteKit scenes.',
  url: 'https://github.com/crashoverride777/swifty-sk-scroll-view',
  found: 0,
  tags: ''
}, {
  repoId: '844003',
  name: 'react-native-daummap',
  desc: '',
  url: 'https://github.com/asata/react-native-daummap',
  found: 0,
  tags: ''
}, {
  repoId: '847208',
  name: 'reason-expo',
  desc: 'ReasonML bindings for Expo',
  url: 'https://github.com/FiberJW/reason-expo',
  found: 0,
  tags: ''
}, {
  repoId: '843156',
  name: 'worldwind-react-globe',
  desc: 'React Globe component built with NASA WorldWind',
  url: 'https://github.com/emxsys/worldwind-react-globe',
  found: 0,
  tags: ''
}, {
  repoId: '752667',
  name: 'android_device_xiaomi_land',
  desc: '',
  url: 'https://github.com/RiteshSaxena/android_device_xiaomi_land',
  found: 0,
  tags: ''
}, {
  repoId: '844250',
  name: 'holochain-ui',
  desc: 'React based UI for composing Holochain experiences.',
  url: 'https://github.com/holochain/holochain-ui',
  found: 0,
  tags: ''
}, {
  repoId: '828759',
  name: 'SIM7500-LTE-Shield',
  desc: '',
  url: 'https://github.com/botletics/SIM7500-LTE-Shield',
  found: 0,
  tags: ''
}, {
  repoId: '832296',
  name: 'android_device_xiaomi_whyred',
  desc: '',
  url: 'https://github.com/GuaiYiHu/android_device_xiaomi_whyred',
  found: 0,
  tags: ''
}, {
  repoId: '845134',
  name: 'NavigationArchitecture',
  desc: 'Android develpoment new Navigation Architecture Component',
  url: 'https://github.com/shanmugasanthosh7/NavigationArchitecture',
  found: 0,
  tags: ''
}, {
  repoId: '841618',
  name: 'bsnav',
  desc: '',
  url: 'https://github.com/fitodac/bsnav',
  found: 0,
  tags: ''
}, {
  repoId: '851573',
  name: 'recheck-web',
  desc: 'Web implementation of rechec',
  url: 'https://github.com/retest/recheck-web',
  found: 0,
  tags: ''
}, {
  repoId: '798742',
  name: 'react-native-website',
  desc: 'The site and docs for React Native',
  url: 'https://github.com/reactnativecn/react-native-website',
  found: 0,
  tags: ''
}, {
  repoId: '711667',
  name: 'NKFrameLayoutKit',
  desc: 'An auto layout kit',
  url: 'https://github.com/kennic/NKFrameLayoutKit',
  found: 0,
  tags: ''
}, {
  repoId: '853849',
  name: 'Android-Knowledge',
  desc: 'Android����ʁ�_Ό���Ӭ�_�����_��Ҿ���ʁ����_��ȴ��_�ٴ�����ȍ��',
  url: 'https://github.com/24Kshign/Android-Knowledge',
  found: 0,
  tags: ''
}, {
  repoId: '852834',
  name: 'calendar_views',
  desc: 'Calendar Views for Flutter',
  url: 'https://github.com/ZedTheLed/calendar_views',
  found: 0,
  tags: ''
}, {
  repoId: '719307',
  name: 'DocumentReader-iOS',
  desc: '[Beta] iOS Framework for reading and validation of identification documents',
  url: 'https://github.com/regulaforensics/DocumentReader-iOS',
  found: 0,
  tags: ''
}, {
  repoId: '739600',
  name: 'airr-react',
  desc: 'UI Components for ReactJS',
  url: 'https://github.com/rafal-r/airr-react',
  found: 0,
  tags: ''
}, {
  repoId: '853308',
  name: 'thor-sync',
  desc: '',
  url: 'https://github.com/vechain/thor-sync',
  found: 0,
  tags: ''
}, {
  repoId: '852118',
  name: 'TensorFlowAndroidDemo',
  desc: 'TensorFlow android demo �__��ҍ�� �__�_� ������ �_��_� ����_� ������ ��۾��',
  url: 'https://github.com/yuxitong/TensorFlowAndroidDemo',
  found: 0,
  tags: ''
}, {
  repoId: '854509',
  name: 'Elmish.Bridge',
  desc: 'Create client-server Fable-Elmish apps keeping a single mindset',
  url: 'https://github.com/Nhowka/Elmish.Bridge',
  found: 0,
  tags: ''
}, {
  repoId: '853726',
  name: 'react-native-multi-language-sample',
  desc: 'A tutorial on how to implement user-selectable language settings for your react-native app.',
  url: 'https://github.com/appfoundry/react-native-multi-language-sample',
  found: 0,
  tags: ''
}, {
  repoId: '825618',
  name: 'rengorum',
  desc: ':clipboard: Minimal internet forum built in React & Django',
  url: 'https://github.com/endiliey/rengorum',
  found: 0,
  tags: ''
}, {
  repoId: '822188',
  name: 'cordova-plugin-wechat',
  desc: '"A cordova plugin, a JS version of Wechat SDK"',
  url: 'https://github.com/guoanfamily/cordova-plugin-wechat',
  found: 0,
  tags: ''
}, {
  repoId: '851523',
  name: 'fabu.love',
  desc: '"��ӍӬ��Ԍ�Č__�����Ȋ__fir.im/��_��ܱ,����΁��۾ٴ�ݫ�С,�����_��Ԍ�č_�_�. demo�ϡ��� https://fabu.love"',
  url: 'https://github.com/HeadingMobile/fabu.love',
  found: 0,
  tags: ''
}, {
  repoId: '834876',
  name: 'FastAdapter',
  desc: '��ǎ�ي_��ӬRecyclerView Adapter',
  url: 'https://github.com/aizuzi/FastAdapter',
  found: 0,
  tags: ''
}, {
  repoId: '848735',
  name: 'frida-snippets',
  desc: 'currently: repo of frida related scripts. future: ebook',
  url: 'https://github.com/iddoeldor/frida-snippets',
  found: 0,
  tags: ''
}, {
  repoId: '621916',
  name: 'fib',
  desc: 'Comparison of top 10 Github languages to Crystal',
  url: 'https://github.com/drujensen/fib',
  found: 0,
  tags: ''
}, {
  repoId: '841880',
  name: 'Greatfit',
  desc: 'Amazfit APKs watchfaces',
  url: 'https://github.com/GreatApo/Greatfit',
  found: 0,
  tags: ''
}, {
  repoId: '817971',
  name: 'android-image-slider',
  desc: 'an android auto image slider',
  url: 'https://github.com/smarteist/android-image-slider',
  found: 0,
  tags: ''
}, {
  repoId: '802994',
  name: 'swift-frida',
  desc: 'Frida API for interacting with Swift code. Very much a work in progress!',
  url: 'https://github.com/maltek/swift-frida',
  found: 0,
  tags: ''
}, {
  repoId: '841156',
  name: 'EasyProtector',
  desc: '��ێӨ�ݠ�����_�__�_���_',
  url: 'https://github.com/lamster2018/EasyProtector',
  found: 0,
  tags: ''
}, {
  repoId: '840406',
  name: 'Android-references',
  desc: 'Android�_ی�Ԍ����',
  url: 'https://github.com/Shouheng88/Android-references',
  found: 0,
  tags: ''
}, {
  repoId: '832965',
  name: 'Android_Spy_App',
  desc: '"This is a android spy app, which uploads user data such as contacts, messages, call log, send message(s), photos, videos, open a browser link etc."',
  url: 'https://github.com/abhinavsuthar/Android_Spy_App',
  found: 0,
  tags: ''
}, {
  repoId: '850747',
  name: 'HybridCamera',
  desc: 'Video and photo camera for iOS',
  url: 'https://github.com/eonist/HybridCamera',
  found: 0,
  tags: ''
}, {
  repoId: '831249',
  name: 'kubernetes-rbac-synchroniser',
  desc: 'Google groups to k8s role binding synchroniser',
  url: 'https://github.com/google-cloud-tools/kubernetes-rbac-synchroniser',
  found: 0,
  tags: ''
}, {
  repoId: '728975',
  name: 'Sejil',
  desc: 'View and filter your ASP.net core log events right from your app',
  url: 'https://github.com/alaatm/Sejil',
  found: 0,
  tags: ''
}, {
  repoId: '807948',
  name: 'PFLockScreen-Android',
  desc: '',
  url: 'https://github.com/thealeksandr/PFLockScreen-Android',
  found: 0,
  tags: ''
}, {
  repoId: '837015',
  name: 'M365-Power',
  desc: '',
  url: 'https://github.com/maisi/M365-Power',
  found: 0,
  tags: ''
}, {
  repoId: '829344',
  name: 'GitHubBrowserApp',
  desc: 'GitHubBrowserApp on kotlin + rxJava2 + rxLifeCycle + Dagger2 + Dagger2 Android + retrofit2 + mvvm',
  url: 'https://github.com/omjoonkim/GitHubBrowserApp',
  found: 0,
  tags: ''
}, {
  repoId: '843897',
  name: 'Android-Study',
  desc: '',
  url: 'https://github.com/taeiim/Android-Study',
  found: 0,
  tags: ''
}, {
  repoId: '759151',
  name: 'Music-Player',
  desc: 'From UI Proposal to Code :notes::arrow_forward:',
  url: 'https://github.com/MaxFour/Music-Player',
  found: 0,
  tags: ''
}, {
  repoId: '764129',
  name: 'syncano-node',
  desc: '',
  url: 'https://github.com/Syncano/syncano-node',
  found: 0,
  tags: ''
}, {
  repoId: '821588',
  name: 'android-components',
  desc: '',
  url: 'https://github.com/mozilla-mobile/android-components',
  found: 0,
  tags: ''
}, {
  repoId: '613955',
  name: 'GfxSampleFramework',
  desc: 'OpenGL-based app framework for graphics samples/prototyping.',
  url: 'https://github.com/john-chapman/GfxSampleFramework',
  found: 0,
  tags: ''
}, {
  repoId: '842807',
  name: 'FireAnime',
  desc: 'An android app that allows you to Stream anime that is specifically tailored to work on the Amazon Fire Stick',
  url: 'https://github.com/XenTeckzX/FireAnime',
  found: 0,
  tags: ''
}, {
  repoId: '847387',
  name: 'MCW-OSS-DevOps',
  desc: 'MCW OSS DevOps',
  url: 'https://github.com/Microsoft/MCW-OSS-DevOps',
  found: 0,
  tags: ''
}, {
  repoId: '853346',
  name: 'close-issue-app',
  desc: 'A github app to close issue',
  url: 'https://github.com/offu/close-issue-app',
  found: 0,
  tags: ''
}, {
  repoId: '851209',
  name: 'rn-wechat',
  desc: '�_��ӬReactNative�_ی�ԍ_����_�������������_ξ���΁Android���iOS',
  url: 'https://github.com/yubo725/rn-wechat',
  found: 0,
  tags: ''
}, {
  repoId: '848164',
  name: 'progressive-wordpress',
  desc: 'This Plugin adds progressive features to your WordPress site and converts it to a progressive web app',
  url: 'https://github.com/SayHelloGmbH/progressive-wordpress',
  found: 0,
  tags: ''
}, {
  repoId: '850733',
  name: 'GoogleIoTCoreApp',
  desc: '',
  url: 'https://github.com/GabeWeiss/GoogleIoTCoreApp',
  found: 0,
  tags: ''
}, {
  repoId: '836679',
  name: 'MacOS-Developers-Excuses',
  desc: 'A macOS screen saver that shows a random developer excuse over a beautiful photo background. Made with ��_',
  url: 'https://github.com/ayltai/MacOS-Developers-Excuses',
  found: 0,
  tags: ''
}, {
  repoId: '844285',
  name: 'synology-cloud-sync-decrypt-tool',
  desc: 'Open source version of the Synology Cloud Sync decryption tool with a GUI',
  url: 'https://github.com/anojht/synology-cloud-sync-decrypt-tool',
  found: 0,
  tags: ''
}, {
  repoId: '787644',
  name: 'swipeableOnboardingUIPageView',
  desc: 'Swipeable cards lookalike used for onboarding',
  url: 'https://github.com/apraka16/swipeableOnboardingUIPageView',
  found: 0,
  tags: ''
}, {
  repoId: '767877',
  name: 'buffalo-auth',
  desc: '',
  url: 'https://github.com/gobuffalo/buffalo-auth',
  found: 0,
  tags: ''
}, {
  repoId: '818087',
  name: 'AndroidAPS',
  desc: '',
  url: 'https://github.com/andyrozman/AndroidAPS',
  found: 0,
  tags: ''
}, {
  repoId: '846899',
  name: 'Packet_Sender_Mobile',
  desc: 'iOS and Android version of Packet Sender',
  url: 'https://github.com/dannagle/Packet_Sender_Mobile',
  found: 0,
  tags: ''
}, {
  repoId: '853575',
  name: 'aws-sdk-lisp',
  desc: 'AWS-SDK for Common Lisp',
  url: 'https://github.com/pokepay/aws-sdk-lisp',
  found: 0,
  tags: ''
}, {
  repoId: '821489',
  name: 'grand-challenge.org',
  desc: 'Django web-frontend for the COMIC project',
  url: 'https://github.com/comic/grand-challenge.org',
  found: 0,
  tags: ''
}, {
  repoId: '771791',
  name: 'Unlucky',
  desc: 'LibGDX Android RPG/Dungeon Crawler game based on RNG',
  url: 'https://github.com/mingli1/Unlucky',
  found: 0,
  tags: ''
}, {
  repoId: '847524',
  name: 'Librarian',
  desc: '',
  url: 'https://github.com/biocross/Librarian',
  found: 0,
  tags: ''
}, {
  repoId: '852325',
  name: 'appsync-resolvers-example',
  desc: '"Example project for AppSync, GraphQL, and AWS Lambda resolvers using Go."',
  url: 'https://github.com/sbstjn/appsync-resolvers-example',
  found: 0,
  tags: ''
}, {
  repoId: '840975',
  name: 'RealDeviceRaidMap',
  desc: 'A Raid-Map for Pok̩mon Go entirely powered by real devices. (Requires a Monocle DB |��RocketMap support soon)',
  url: 'https://github.com/123FLO321/RealDeviceRaidMap',
  found: 0,
  tags: ''
}, {
  repoId: '823539',
  name: 'flutter_url_webview_examples',
  desc: '',
  url: 'https://github.com/tensor-programming/flutter_url_webview_examples',
  found: 0,
  tags: ''
}, {
  repoId: '829363',
  name: 'react-native-audio-recorder-player',
  desc: 'Npm module for react-native audio recorder and player.',
  url: 'https://github.com/dooboolab/react-native-audio-recorder-player',
  found: 0,
  tags: ''
}, {
  repoId: '850535',
  name: 'bumo-sdk-go',
  desc: '',
  url: 'https://github.com/bumoproject/bumo-sdk-go',
  found: 0,
  tags: ''
}, {
  repoId: '842661',
  name: '1space',
  desc: 'Swift-S3 synchronization tool',
  url: 'https://github.com/swiftstack/1space',
  found: 0,
  tags: ''
}, {
  repoId: '833178',
  name: 'react-native-audio-record',
  desc: 'Audio record buffers for React Native (iOS and Android)',
  url: 'https://github.com/goodatlas/react-native-audio-record',
  found: 0,
  tags: ''
}, {
  repoId: '831798',
  name: 'techies',
  desc: '',
  url: 'https://github.com/ammezie/techies',
  found: 0,
  tags: ''
}, {
  repoId: '849228',
  name: 'core',
  desc: 'Light Dynamic UI Engine for Native and Web with a React Compatible API',
  url: 'https://github.com/syrjs/core',
  found: 0,
  tags: ''
}, {
  repoId: '854808',
  name: 'grokSwiftREST_v1.4',
  desc: 'Demo code for iOS Apps with REST APIs book v1.4 https://leanpub.com/iosappswithrest',
  url: 'https://github.com/cmoulton/grokSwiftREST_v1.4',
  found: 0,
  tags: ''
}, {
  repoId: '839952',
  name: 'TreeTableView',
  desc: 'iOS ��ԍ_���я���_��Ȧ�_΍����Ⱦۤ����_Ό���໌�_�_���_����',
  url: 'https://github.com/mayan29/TreeTableView',
  found: 0,
  tags: ''
}, {
  repoId: '855588',
  name: 'Form',
  desc: 'Form is an iOS Swift library for building and styling UIs',
  url: 'https://github.com/iZettle/Form',
  found: 0,
  tags: ''
}, {
  repoId: '844221',
  name: 'flushbar',
  desc: 'Custom widget for Flutter',
  url: 'https://github.com/AndreHaueisen/flushbar',
  found: 0,
  tags: ''
}, {
  repoId: '702559',
  name: 'Android-',
  desc: 'Android ��ݍ�܊����ȏ��Ъ����Ȋ�_��_�����_�������_��ۊ�ݏ��Ъ',
  url: 'https://github.com/852172891/Android-',
  found: 0,
  tags: ''
}, {
  repoId: '680334',
  name: 'scaleview',
  desc: '',
  url: 'https://github.com/yhongm/scaleview',
  found: 0,
  tags: ''
}, {
  repoId: '853890',
  name: 'meetingApp',
  desc: '��ۊ���_���������܌���_��__�����_�_���ܕ_�',
  url: 'https://github.com/Zinc925/meetingApp',
  found: 0,
  tags: ''
}, {
  repoId: '853602',
  name: 'Astroid-Framework',
  desc: '',
  url: 'https://github.com/joomdev/Astroid-Framework',
  found: 0,
  tags: ''
}, {
  repoId: '850460',
  name: 'flutter-osc',
  desc: '�ټ��_Google Flutter�_�_۾����_��_���������_ξ���΁Android���iOS���',
  url: 'https://github.com/yubo725/flutter-osc',
  found: 0,
  tags: ''
}, {
  repoId: '826685',
  name: 'ZCommon',
  desc: '',
  url: 'https://github.com/yuyuyu123/ZCommon',
  found: 0,
  tags: ''
}, {
  repoId: '738299',
  name: 'JSAPI_demos',
  desc: 'Simple demos for ArcGIS API for JavaScript',
  url: 'https://github.com/RalucaNicola/JSAPI_demos',
  found: 0,
  tags: ''
}, {
  repoId: '762774',
  name: 'node-cq-websocket',
  desc: 'A Node SDK  for developing CoolQ apps which are depending on WebSocket plugins on CoolQ.',
  url: 'https://github.com/momocow/node-cq-websocket',
  found: 0,
  tags: ''
}, {
  repoId: '845612',
  name: 'flutter_study',
  desc: 'study',
  url: 'https://github.com/zhujian1989/flutter_study',
  found: 0,
  tags: ''
}, {
  repoId: '835604',
  name: 'react-native-walkthrough-tooltip',
  desc: 'An inline wrapper for calling out React Native components via tooltip',
  url: 'https://github.com/jasongaare/react-native-walkthrough-tooltip',
  found: 0,
  tags: ''
}, {
  repoId: '853227',
  name: 'NVIDIA-DeepStreamSDK',
  desc: 'NVIDIA DeepStream SDK ',
  url: 'https://github.com/ghostbbbmt/NVIDIA-DeepStreamSDK',
  found: 0,
  tags: ''
}, {
  repoId: '852892',
  name: 'flutter_after_layout',
  desc: '"Flutter After Layout - Brings functionality to execute code after the first layout of a widget has been performed, i.e. after the first frame has been displayed. Maintainer: @slightfoot"',
  url: 'https://github.com/fluttercommunity/flutter_after_layout',
  found: 0,
  tags: ''
}, {
  repoId: '784962',
  name: 'youtube-dl-android',
  desc: '',
  url: 'https://github.com/tastelessjolt/youtube-dl-android',
  found: 0,
  tags: ''
}, {
  repoId: '552251',
  name: 'android-debugging-challenges',
  desc: '',
  url: 'https://github.com/codepath/android-debugging-challenges',
  found: 0,
  tags: ''
}, {
  repoId: '797097',
  name: 'xtend',
  desc: '',
  url: 'https://github.com/zerh/xtend',
  found: 0,
  tags: ''
}, {
  repoId: '845255',
  name: 'Pixiv-android',
  desc: 'Pixiv( P�Ǫ ) / Hitokoto( ��ۏ�� ) client for android �_�Material Design�_�',
  url: 'https://github.com/CeuiLiSA/Pixiv-android',
  found: 0,
  tags: ''
}, {
  repoId: '849240',
  name: 'PinLayout',
  desc: '"Fast Swift Views layouting without auto layout. No magic, pure code, full control and blazing fast. Concise syntax, intuitive, readable & chainable. [iOS/macOS/tvOS]"',
  url: 'https://github.com/layoutBox/PinLayout',
  found: 0,
  tags: ''
}, {
  repoId: '835448',
  name: 'angular-ngrx-nx-realworld-example-app',
  desc: '"Exemplary real world application built with Angular 5, ngrx, nrwl/nx"',
  url: 'https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app',
  found: 0,
  tags: ''
}, {
  repoId: '844692',
  name: 'ios-sim',
  desc: 'Command-line application launcher for the iOS Simulator',
  url: 'https://github.com/ios-control/ios-sim',
  found: 0,
  tags: ''
}, {
  repoId: '854361',
  name: 'flutter_spinkit',
  desc: 'A collection of loading indicators animated with flutter. Inspired by [https://github.com/tobiasahlin/SpinKit]',
  url: 'https://github.com/jogboms/flutter_spinkit',
  found: 0,
  tags: ''
}, {
  repoId: '812317',
  name: 'solid-panes',
  desc: 'A set of core solid-compatible apps based on solid-ui',
  url: 'https://github.com/solid/solid-panes',
  found: 0,
  tags: ''
}, {
  repoId: '821192',
  name: 'trommel',
  desc: 'TROMMEL: Sift Through Embedded Device Files to Identify Potential Vulnerable Indicators',
  url: 'https://github.com/CERTCC/trommel',
  found: 0,
  tags: ''
}, {
  repoId: '804284',
  name: 'react-daterange-picker',
  desc: '',
  url: 'https://github.com/wojtekmaj/react-daterange-picker',
  found: 0,
  tags: ''
}, {
  repoId: '847265',
  name: 'flutter_refresh',
  desc: 'flutter refresh ��_�����С ��ܾ��_ʏ__',
  url: 'https://github.com/While1true/flutter_refresh',
  found: 0,
  tags: ''
}, {
  repoId: '835056',
  name: 'ClassicDownload',
  desc: '��_�����ی_�RxDownload�_�bug�_Ώ����_�������_ξ�Ռ_ь_ȍ�܊�Ѝ_㌨_�_��_Ώ໌᱌�������ی�ьټ��_RxJava�_�Android��_����_��܏__�_ξ���΁�����ܾ�ʍ������ہ��_��_��_�_ʋہ��܏__��ξ�������΋ہ��܏__��_��_',
  url: 'https://github.com/zerochl/ClassicDownload',
  found: 0,
  tags: ''
}, {
  repoId: '821167',
  name: 'web3.swift',
  desc: 'Ethereum Swift API with support for smart contracts and ENS',
  url: 'https://github.com/argentlabs/web3.swift',
  found: 0,
  tags: ''
}];
module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Repo', repoData, {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Repo', null, {});
  }
};