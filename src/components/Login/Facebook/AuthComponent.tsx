// import React from "react";

// const AuthComponent = () => {
//   const componentDidMount = () => {
//     window.fbAsyncInit = function () {
//       window.FB.init({
//         appId: "115731834904417",
//         cookie: true,
//         xfbml: true,
//         version: "v17.0",
//       });
//       window.FB.Event.subscribe("auth.statusChange", (res: any) => {
//         if (res.authResponse) {
//           this.updateLoggedInState(res);
//         } else {
//           this.updateLoggedOutState();
//         }
//       }).bind(this);
//       (function (d: any, s: any, id: any) {
//         var js,
//           fjs = d.getElementsByTagName(s)[0];
//         if (d.getElementById(id)) {
//           return;
//         }
//         js = d.createElement(s);
//         js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         fjs.parentNode.insertBefore(js, fjs);
//       })(document, "script", "facebook-jssdk");
//     };
//   };

//   return <div>AuthComponent</div>;
// };

// export default AuthComponent;
