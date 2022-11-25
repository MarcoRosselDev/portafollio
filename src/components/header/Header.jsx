// import React, { useEffect, useState } from "react";
// import "./header.css";

// const Header = (props) => {
//   /*============= Change Background header ============= */
//   window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header");
//     if (this.scrollY >= 80) header.classList.add("scroll-header");
//     else header.classList.remove("scroll-header");
//   });

//   /*============= Toggle Menu ============= */
//   const [Toggle, showMenu] = useState(false);
//   const [activeNav, setActiveNav] = useState("#home");
//   return (
//     <header className={`header ${props.mode ? "dark-mode" : ""}`}>
//       <nav className="nav container">
//         <div className="left-side">
//           <a href="index.html" className="nav__logo">
//             Marco
//           </a>
//         </div>

//         <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
//           <ul className="nav__list grid">
//             <li className="nav__item">
//               <a
//                 href="#home"
//                 onClick={() => setActiveNav("#home")}
//                 className={
//                   // activeNav === "#home" ? "nav__link active-link" : "nav__link "
//                   activeNav === "#home" ? "nav__link active-link" : "nav__link "
//                 }
//               >
//                 {/* <i className="uil uil-estate nav__icon"></i> Home */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="nav__icon"
//                 >
//                   <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
//                 </svg>
//                 Home
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="#about"
//                 onClick={() => setActiveNav("#about")}
//                 className={
//                   activeNav === "#about"
//                     ? "nav__link active-link"
//                     : "nav__link "
//                 }
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="nav__icon"
//                 >
//                   <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
//                 </svg>
//                 About
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="#skills"
//                 onClick={() => setActiveNav("#skills")}
//                 className={
//                   activeNav === "#skills"
//                     ? "nav__link active-link"
//                     : "nav__link "
//                 }
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="nav__icon"
//                 >
//                   <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
//                   <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z" />
//                 </svg>
//                 Skills
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="#portfolio"
//                 onClick={() => setActiveNav("#portfolio")}
//                 className={
//                   activeNav === "#portfolio"
//                     ? "nav__link active-link"
//                     : "nav__link "
//                 }
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="nav__icon"
//                 >
//                   <path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V7c0-1.103-.897-2-2-2h-6.1L9.616 3.213A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14h.007a1 1 0 0 0 .158.551zM17.341 18H4.517l2.143-5h12.824l-2.143 5zM18 7v4H6c-.4 0-.762.238-.919.606L4 14.129V7h14z" />
//                 </svg>
//                 Portfolio
//               </a>
//             </li>
//             <li className="nav__item">
//               <a
//                 href="#contact"
//                 onClick={() => setActiveNav("#contact")}
//                 className={
//                   activeNav === "#contact"
//                     ? "nav__link active-link"
//                     : "nav__link "
//                 }
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="nav__icon"
//                 >
//                   <path d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z" />
//                 </svg>
//                 Contact
//               </a>
//             </li>
//           </ul>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             className="nav__close"
//             onClick={() => showMenu(!Toggle)}
//           >
//             <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z" />
//           </svg>
//           {/* <i
//             className="uil uil-times nav__close"
//             onClick={() => showMenu(!Toggle)}
//           ></i> */}
//         </div>
//         <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
//           </svg>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;
