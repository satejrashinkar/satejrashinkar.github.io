self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Chat Room',
  description: "A real time chat application built using React with Google Authentication, hosted on Firebase. Components included : Sidebar Header , Sidebar Main component, Chat Header and Chat main Component.",
  image: '/images/chatroom.jpg',
  tags: ['React', 'NodeJS', 'Firebase', 'Firestore'],
  source: 'https://github.com/satejrashinkar/WhatsApp-Clone',
  visit: 'https://whatsapp-clone-b655b.web.app',
  id: 0
}, {
  title: 'WhatsApp Web UI',
  description: "WhatsApp Frontend built in REACT.Components included : Sidebar Header , Sidebar Main component, Chat Header and Chat main Component.",
  image: '/images/whatsappwebui.png',
  tags: ['React', 'MaterialUI'],
  source: 'https://github.com/satejrashinkar/whatsapp-frontend',
  visit: 'https://google.com',
  id: 1
}, {
  title: 'Face Mask Detection',
  description: "Face Mask Detection utilizes technologies like OpenCV, NumPy, Matplotlib and TensorFlow to provide real time recognition of face mask and facial features. It can be implemented in security systems wherein only authorized users with masks are allowed entry.",
  image: '/images/FaceMask.jpg',
  tags: ['Python', 'OpenCV'],
  source: 'https://github.com/satejrashinkar/Face-Mask-Detection',
  visit: 'https://google.com',
  id: 2
}, {
  title: 'ChatBot',
  description: "Chatbot is a software application that uses artificial intelligence & natural language processing to understand what a human wants, and guides them to their desired outcome with as little work for the end user as possible, similar to a virtual assistant for your customer experience touchpoints.",
  image: '/images/chatbot.png',
  tags: ['Python', 'NLTK', 'Tkinter', 'Pickle'],
  source: 'https://github.com/satejrashinkar/Chatbot',
  visit: 'https://google.com',
  id: 3
}, {
  title: 'Keyless Entry using RFID',
  description: "The project utilises RFID based technology to provide contactless operation in case of actuating mechanism for door. It can be implemented in real-time in Schools, Offices,etc. for attendance monitoring purposes.",
  image: '/images/RFID.png',
  tags: ['Embedded C'],
  source: 'https://github.com/satejrashinkar/Keyless-Entry-using-RFID',
  visit: 'https://google.com',
  id: 4
}, {
  title: 'PID-Temperature-Controller',
  description: "This controller uses the method PID (Proportional-Integral-Derivative) to control temperature of  metal surfaces in different environments. The project is widely used in various industrial applications to control parameters such as Temperature, Pressure and Speed. ",
  image: '/images/PID.png',
  tags: ['C'],
  source: 'https://github.com/satejrashinkar/PID-Temperature-Controller',
  visit: 'https://google.com',
  id: 5
}, {
  title: 'TicTacToe',
  description: "A Tic-Tac-Toe game with GUI implemented using modules like PyGame in Python.",
  image: '/images/ttt.jpg',
  tags: ['Python', 'PyGame'],
  source: 'https://github.com/satejrashinkar/TicTacToe',
  visit: 'https://google.com',
  id: 6
}, {
  title: 'Weather Station',
  description: "Model to obtain real time climate data using Arduino Uno and sensors like ALS-PT19 and 4N25 optocoupler provided with suitable signal conditioning.",
  image: '/images/Weather.png',
  tags: ['C'],
  source: 'https://github.com/satejrashinkar/Weather-Station',
  visit: 'https://google.com',
  id: 7
}];
var TimeLineData = [{
  year: 'Jun2013-Apr2016',
  text: 'Secondary School Certificate - Crescent High School, Pune'
}, {
  year: 'Jun2016-Mar2018',
  text: 'Higher Secondary Certificate - Fergusson College, Pune'
}, {
  year: 'Aug2018-Present',
  text: 'BE ENTC - Pune Institute of Computer Technology,Pune'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLFdBRFQ7QUFFRUMsYUFBVyxFQUFFLG9NQUZmO0FBR0VDLE9BQUssRUFBRSxzQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVMsUUFBVCxFQUFtQixVQUFuQixFQUE4QixXQUE5QixDQUpSO0FBS0VDLFFBQU0sRUFBRSxrREFMVjtBQU1FQyxPQUFLLEVBQUUsc0NBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FEc0IsRUFVdEI7QUFDRU4sT0FBSyxFQUFFLGlCQURUO0FBRUVDLGFBQVcsRUFBRSxzSUFGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFlBQVYsQ0FKUjtBQUtFQyxRQUFNLEVBQUUscURBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUscUJBRFQ7QUFFRUMsYUFBVyxFQUFFLGtRQUZmO0FBR0VDLE9BQUssRUFBRSxzQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUpSO0FBS0VDLFFBQU0sRUFBRSx1REFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNkJ0QjtBQUNFTixPQUFLLEVBQUUsU0FEVDtBQUVFQyxhQUFXLEVBQUMseVNBRmQ7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFNBQW5CLEVBQStCLFFBQS9CLENBSlI7QUFLRUMsUUFBTSxFQUFFLDJDQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQTdCc0IsRUFzQ3RCO0FBQ0VOLE9BQUssRUFBRSwwQkFEVDtBQUVFQyxhQUFXLEVBQUUsc05BRmY7QUFHRUMsT0FBSyxFQUFFLGtCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFlBQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsNERBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBdENzQixFQStDdEI7QUFDRU4sT0FBSyxFQUFFLDRCQURUO0FBRUVDLGFBQVcsRUFBRSwyUUFGZjtBQUdFQyxPQUFLLEVBQUUsaUJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsR0FBRCxDQUpSO0FBS0VDLFFBQU0sRUFBRSw4REFMVjtBQU1FQyxPQUFLLEVBQUUsb0JBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0EvQ3NCLEVBd0R0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsOEVBRmY7QUFHRUMsT0FBSyxFQUFFLGlCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLENBSlI7QUFLRUMsUUFBTSxFQUFFLDZDQUxWO0FBTUVDLE9BQUssRUFBRSxvQkFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXhEc0IsRUFpRXRCO0FBQ0VOLE9BQUssRUFBRSxpQkFEVDtBQUVFQyxhQUFXLEVBQUUscUpBRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLEdBQUQsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsbURBTFY7QUFNRUMsT0FBSyxFQUFFLG9CQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBakVzQixDQUFqQjtBQTRFQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxNQUFJLEVBQUU7QUFBakMsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxNQUFJLEVBQUU7QUFBakMsQ0FGMEIsRUFHMUI7QUFBRUQsTUFBSSxFQUFFLGlCQUFSO0FBQTJCQyxNQUFJLEVBQUU7QUFBakMsQ0FIMEIsQ0FBckIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmMyYzM2NDUxMmEzYjU0ZmNmNWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcbiAge1xuICAgIHRpdGxlOiAnQ2hhdCBSb29tJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIHJlYWwgdGltZSBjaGF0IGFwcGxpY2F0aW9uIGJ1aWx0IHVzaW5nIFJlYWN0IHdpdGggR29vZ2xlIEF1dGhlbnRpY2F0aW9uLCBob3N0ZWQgb24gRmlyZWJhc2UuIENvbXBvbmVudHMgaW5jbHVkZWQgOiBTaWRlYmFyIEhlYWRlciAsIFNpZGViYXIgTWFpbiBjb21wb25lbnQsIENoYXQgSGVhZGVyIGFuZCBDaGF0IG1haW4gQ29tcG9uZW50LlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9jaGF0cm9vbS5qcGcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCdOb2RlSlMnICwnRmlyZWJhc2UnLCdGaXJlc3RvcmUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vc2F0ZWpyYXNoaW5rYXIvV2hhdHNBcHAtQ2xvbmUnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly93aGF0c2FwcC1jbG9uZS1iNjU1Yi53ZWIuYXBwJyxcbiAgICBpZDogMCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnV2hhdHNBcHAgV2ViIFVJJyxcbiAgICBkZXNjcmlwdGlvbjogXCJXaGF0c0FwcCBGcm9udGVuZCBidWlsdCBpbiBSRUFDVC5Db21wb25lbnRzIGluY2x1ZGVkIDogU2lkZWJhciBIZWFkZXIgLCBTaWRlYmFyIE1haW4gY29tcG9uZW50LCBDaGF0IEhlYWRlciBhbmQgQ2hhdCBtYWluIENvbXBvbmVudC5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvd2hhdHNhcHB3ZWJ1aS5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnTWF0ZXJpYWxVSSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXRlanJhc2hpbmthci93aGF0c2FwcC1mcm9udGVuZCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2dvb2dsZS5jb20nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdGYWNlIE1hc2sgRGV0ZWN0aW9uJyxcbiAgICBkZXNjcmlwdGlvbjogXCJGYWNlIE1hc2sgRGV0ZWN0aW9uIHV0aWxpemVzIHRlY2hub2xvZ2llcyBsaWtlIE9wZW5DViwgTnVtUHksIE1hdHBsb3RsaWIgYW5kIFRlbnNvckZsb3cgdG8gcHJvdmlkZSByZWFsIHRpbWUgcmVjb2duaXRpb24gb2YgZmFjZSBtYXNrIGFuZCBmYWNpYWwgZmVhdHVyZXMuIEl0IGNhbiBiZSBpbXBsZW1lbnRlZCBpbiBzZWN1cml0eSBzeXN0ZW1zIHdoZXJlaW4gb25seSBhdXRob3JpemVkIHVzZXJzIHdpdGggbWFza3MgYXJlIGFsbG93ZWQgZW50cnkuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL0ZhY2VNYXNrLmpwZycsXG4gICAgdGFnczogWydQeXRob24nLCAnT3BlbkNWJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhdGVqcmFzaGlua2FyL0ZhY2UtTWFzay1EZXRlY3Rpb24nLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogMixcbiAgfSxcbiBcbiAge1xuICAgIHRpdGxlOiAnQ2hhdEJvdCcsXG4gICAgZGVzY3JpcHRpb246XCJDaGF0Ym90IGlzIGEgc29mdHdhcmUgYXBwbGljYXRpb24gdGhhdCB1c2VzIGFydGlmaWNpYWwgaW50ZWxsaWdlbmNlICYgbmF0dXJhbCBsYW5ndWFnZSBwcm9jZXNzaW5nIHRvIHVuZGVyc3RhbmQgd2hhdCBhIGh1bWFuIHdhbnRzLCBhbmQgZ3VpZGVzIHRoZW0gdG8gdGhlaXIgZGVzaXJlZCBvdXRjb21lIHdpdGggYXMgbGl0dGxlIHdvcmsgZm9yIHRoZSBlbmQgdXNlciBhcyBwb3NzaWJsZSwgc2ltaWxhciB0byBhIHZpcnR1YWwgYXNzaXN0YW50IGZvciB5b3VyIGN1c3RvbWVyIGV4cGVyaWVuY2UgdG91Y2hwb2ludHMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2NoYXRib3QucG5nJyxcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdOTFRLJywgJ1RraW50ZXInICwgJ1BpY2tsZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXRlanJhc2hpbmthci9DaGF0Ym90JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0tleWxlc3MgRW50cnkgdXNpbmcgUkZJRCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIHByb2plY3QgdXRpbGlzZXMgUkZJRCBiYXNlZCB0ZWNobm9sb2d5IHRvIHByb3ZpZGUgY29udGFjdGxlc3Mgb3BlcmF0aW9uIGluIGNhc2Ugb2YgYWN0dWF0aW5nIG1lY2hhbmlzbSBmb3IgZG9vci4gSXQgY2FuIGJlIGltcGxlbWVudGVkIGluIHJlYWwtdGltZSBpbiBTY2hvb2xzLCBPZmZpY2VzLGV0Yy4gZm9yIGF0dGVuZGFuY2UgbW9uaXRvcmluZyBwdXJwb3Nlcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvUkZJRC5wbmcnLFxuICAgIHRhZ3M6IFsnRW1iZWRkZWQgQyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zYXRlanJhc2hpbmthci9LZXlsZXNzLUVudHJ5LXVzaW5nLVJGSUQnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9nb29nbGUuY29tJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUElELVRlbXBlcmF0dXJlLUNvbnRyb2xsZXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgY29udHJvbGxlciB1c2VzIHRoZSBtZXRob2QgUElEIChQcm9wb3J0aW9uYWwtSW50ZWdyYWwtRGVyaXZhdGl2ZSkgdG8gY29udHJvbCB0ZW1wZXJhdHVyZSBvZiAgbWV0YWwgc3VyZmFjZXMgaW4gZGlmZmVyZW50IGVudmlyb25tZW50cy4gVGhlIHByb2plY3QgaXMgd2lkZWx5IHVzZWQgaW4gdmFyaW91cyBpbmR1c3RyaWFsIGFwcGxpY2F0aW9ucyB0byBjb250cm9sIHBhcmFtZXRlcnMgc3VjaCBhcyBUZW1wZXJhdHVyZSwgUHJlc3N1cmUgYW5kIFNwZWVkLiBcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvUElELnBuZycsXG4gICAgdGFnczogWydDJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhdGVqcmFzaGlua2FyL1BJRC1UZW1wZXJhdHVyZS1Db250cm9sbGVyJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1RpY1RhY1RvZScsXG4gICAgZGVzY3JpcHRpb246IFwiQSBUaWMtVGFjLVRvZSBnYW1lIHdpdGggR1VJIGltcGxlbWVudGVkIHVzaW5nIG1vZHVsZXMgbGlrZSBQeUdhbWUgaW4gUHl0aG9uLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy90dHQuanBnJyxcbiAgICB0YWdzOiBbJ1B5dGhvbicsICdQeUdhbWUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vc2F0ZWpyYXNoaW5rYXIvVGljVGFjVG9lJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDYsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1dlYXRoZXIgU3RhdGlvbicsXG4gICAgZGVzY3JpcHRpb246IFwiTW9kZWwgdG8gb2J0YWluIHJlYWwgdGltZSBjbGltYXRlIGRhdGEgdXNpbmcgQXJkdWlubyBVbm8gYW5kIHNlbnNvcnMgbGlrZSBBTFMtUFQxOSBhbmQgNE4yNSBvcHRvY291cGxlciBwcm92aWRlZCB3aXRoIHN1aXRhYmxlIHNpZ25hbCBjb25kaXRpb25pbmcuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL1dlYXRoZXIucG5nJyxcbiAgICB0YWdzOiBbJ0MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vc2F0ZWpyYXNoaW5rYXIvV2VhdGhlci1TdGF0aW9uJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vZ29vZ2xlLmNvbScsXG4gICAgaWQ6IDcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6ICdKdW4yMDEzLUFwcjIwMTYnLCB0ZXh0OiAnU2Vjb25kYXJ5IFNjaG9vbCBDZXJ0aWZpY2F0ZSAtIENyZXNjZW50IEhpZ2ggU2Nob29sLCBQdW5lJywgfSxcbiAgeyB5ZWFyOiAnSnVuMjAxNi1NYXIyMDE4JywgdGV4dDogJ0hpZ2hlciBTZWNvbmRhcnkgQ2VydGlmaWNhdGUgLSBGZXJndXNzb24gQ29sbGVnZSwgUHVuZScsIH0sXG4gIHsgeWVhcjogJ0F1ZzIwMTgtUHJlc2VudCcsIHRleHQ6ICdCRSBFTlRDIC0gUHVuZSBJbnN0aXR1dGUgb2YgQ29tcHV0ZXIgVGVjaG5vbG9neSxQdW5lJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==