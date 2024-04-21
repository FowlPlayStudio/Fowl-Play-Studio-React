import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Testimonal from '../components/testimonal'
import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fowl Play Studio</title>
        <meta
          name="description"
          content="Fowls of a feather, slide tackle together. Funner than the best 45 games you ever played 69% of the time"
        />
        <meta property="og:title" content="Fowl Play Studio" />
        <meta
          property="og:description"
          content="Fowls of a feather, slide tackle together. Funner than the best 45 games you ever played 69% of the time"
        />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <a href="#Top" className="home-link">
              <img
                alt="pastedImage"
                src="/FowlPlay/fowlplaystudio-1500h.jpg"
                className="home-logo"
              />
            </a>
            <div className="home-links">
              <a href="#Games" className="home-link01 Link">
                Games
              </a>
              <a href="#Utility" className="home-link02 Link">
                Utility
              </a>
              <a href="#Tokenomics" className="home-link03 Link">
                Tokenomics
              </a>
              <a href="#Funds Use" className="home-link04 Link">
                Funds Use
              </a>
              <a href="#FAQs" className="home-link05 Link">
                <span>FAQs</span>
                <br></br>
              </a>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav id="Top" className="home-centered">
              <div className="home-left">
                <a href="#Top" className="home-link06">
                  <img
                    alt="pastedImage"
                    src="/FowlPlay/fowlplaystudio-1500h.jpg"
                    className="home-logo1"
                  />
                </a>
                <div className="home-links1">
                  <a href="#Games" className="home-link07 Link">
                    Games
                  </a>
                  <a href="#Utility" className="home-link08 Link">
                    Utility
                  </a>
                  <a href="#Tokenomics" className="home-link09 Link">
                    Tokenomics
                  </a>
                  <a href="#Funds Use" className="home-link10 Link">
                    Funds Use
                  </a>
                  <a href="#FAQs" className="home-link11 Link">
                    FAQs
                  </a>
                </div>
              </div>
              <div className="home-right">
                <div className="home-get-started">
                  <span className="home-text002">ERC 404 MINT</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/Base/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text003">
            <span className="home-text004">FOWL PLAY STUDIO🦚</span>
            <br></br>
          </h1>
          <h1 className="home-text006">
            Decentralized Gaming
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </h1>
          <p className="home-text007">
            I am become decentralized, destroyer of silos
          </p>
          <a
            href="https://play.google.com/store/apps/dev?id=8380099800154204994"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link12"
          >
            <div className="home-get-started01">
              <svg viewBox="0 0 1024 1024" className="home-icon02">
                <path d="M640 214v-44h-42v44h42zM426 214v-44h-42v44h42zM662 92q106 76 106 206h-512q0-54 30-114t74-92l-56-56q-16-16 0-30t30 0l64 64q52-28 114-28 52 0 112 28l64-64q16-14 30 0t0 30zM874 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM150 342q26 0 45 19t19 45v298q0 28-19 46t-45 18-45-18-19-46v-298q0-26 19-45t45-19zM256 768v-426h512v426q0 18-12 30t-30 12h-44v150q0 28-19 46t-45 18-45-18-19-46v-150h-84v150q0 28-19 46t-45 18-45-18-19-46v-150h-44q-18 0-30-12t-12-30z"></path>
              </svg>
            </div>
          </a>
          <div className="home-container03">
            <div className="home-get-started02">
              <span className="home-text008">Coming Soon</span>
            </div>
            <div className="home-get-started03">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
              </svg>
            </div>
            <div className="home-get-started04">
              <svg viewBox="0 0 796.0137142857142 1024" className="home-icon06">
                <path d="M796 694.286c-14.286 45.143-37.143 93.143-70.286 142.857-49.143 74.857-98.286 112-146.857 112-19.429 0-45.714-6.286-80-18.286-33.714-12.571-62.857-18.286-86.286-18.286-22.857 0-50.286 6.286-81.143 18.857-31.429 13.143-56.571 19.429-75.429 19.429-58.857 0-115.429-49.714-172-148-55.429-98.286-84-193.714-84-287.429 0-87.429 21.714-158.286 64.571-213.714 42.857-54.857 96.571-82.286 162.286-82.286 28 0 61.143 5.714 101.143 17.143 39.429 11.429 65.714 17.143 78.857 17.143 16.571 0 44-6.286 81.714-19.429 37.714-12.571 70.857-19.429 98.857-19.429 45.714 0 86.286 12.571 121.714 37.143 20 13.714 40 33.143 59.429 57.143-29.714 25.143-51.429 47.429-65.143 67.429-24.571 35.429-37.143 74.857-37.143 118.286 0 46.857 13.143 89.714 39.429 127.429s56.571 61.714 90.286 72zM581.143 24c0 23.429-5.714 49.714-16.571 77.714-11.429 28.571-29.143 54.857-53.143 78.857-20.571 20.571-41.143 34.286-61.714 41.143-13.143 4-32.571 7.429-59.429 9.714 1.143-56.571 16-105.714 44.571-146.857s76.571-69.143 142.857-84.571c1.143 5.143 2.286 9.143 2.857 12.571 0 4 0.571 7.429 0.571 11.429z"></path>
              </svg>
            </div>
            <div className="home-get-started05">
              <svg viewBox="0 0 1024 1024" className="home-icon08">
                <path d="M981.333 512c0-129.579-52.565-246.997-137.472-331.861s-202.283-137.472-331.861-137.472-246.997 52.565-331.861 137.472-137.472 202.283-137.472 331.861 52.565 246.997 137.472 331.861 202.283 137.472 331.861 137.472 246.997-52.565 331.861-137.472 137.472-202.283 137.472-331.861zM896 512c0 106.069-42.923 201.984-112.469 271.531s-165.461 112.469-271.531 112.469-201.984-42.923-271.531-112.469-112.469-165.461-112.469-271.531 42.923-201.984 112.469-271.531 165.461-112.469 271.531-112.469 201.984 42.923 271.531 112.469 112.469 165.461 112.469 271.531zM353.835 414.165l97.835 97.835-97.835 97.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l97.835-97.835 97.835 97.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-97.835-97.835 97.835-97.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-97.835 97.835-97.835-97.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-get-started06">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M704 384h234v256h-234l-128-128zM384 704l128-128 128 128v234h-256v-234zM320 384l128 128-128 128h-234v-256h234zM640 320l-128 128-128-128v-234h256v234z"></path>
              </svg>
            </div>
            <div className="home-get-started07">
              <svg viewBox="0 0 1097.142857142857 1024" className="home-icon12">
                <path d="M475.429 621.714v-73.143c0-10.286-8-18.286-18.286-18.286h-109.714v-109.714c0-10.286-8-18.286-18.286-18.286h-73.143c-10.286 0-18.286 8-18.286 18.286v109.714h-109.714c-10.286 0-18.286 8-18.286 18.286v73.143c0 10.286 8 18.286 18.286 18.286h109.714v109.714c0 10.286 8 18.286 18.286 18.286h73.143c10.286 0 18.286-8 18.286-18.286v-109.714h109.714c10.286 0 18.286-8 18.286-18.286zM804.571 658.286c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM950.857 512c0-40.571-32.571-73.143-73.143-73.143s-73.143 32.571-73.143 73.143 32.571 73.143 73.143 73.143 73.143-32.571 73.143-73.143zM1097.143 585.143c0 161.714-130.857 292.571-292.571 292.571-74.286 0-141.714-28-193.143-73.143h-125.714c-51.429 45.143-118.857 73.143-193.143 73.143-161.714 0-292.571-130.857-292.571-292.571s130.857-292.571 292.571-292.571h512c161.714 0 292.571 130.857 292.571 292.571z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/FowlPlay/play%20store%20listing-1000h.jpg"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text009">
            Building on unity, unreal engine using chainsafe, immutable &amp;
            Eidolon sdks
          </span>
          <span className="home-text010">
            ___________________________________________________________________________
          </span>
        </div>
        <div className="home-cards">
          <div className="home-container04">
            <div className="card">
              <img
                alt="pastedImage"
                src="/Base/pastedimage-fii6m-200h.png"
                className="home-icon14"
              />
              <span className="home-text011">
                <span className="home-text012">Launch Status</span>
                <br></br>
              </span>
              <div className="home-container05">
                <img
                  alt="image"
                  src="/Foldery/pugizard-200w.png"
                  className="home-image01"
                />
                <img
                  alt="image"
                  src="/Foldery/officerun-300w.png"
                  className="home-image02"
                />
                <img
                  alt="image"
                  src="/Foldery/hyperdrive-200h.png"
                  className="home-image03"
                />
                <img
                  alt="image"
                  src="/Foldery/gameplay-300w.jpg"
                  className="home-image04"
                />
                <img
                  alt="image"
                  src="/Foldery/tko-300h.png"
                  className="home-image05"
                />
              </div>
              <span className="home-text014">
                <span>
                  Each of these games follow a seperate timeline with different
                  developers from different parts of the world working on them
                  with release ranging 3-23 months
                </span>
                <br></br>
              </span>
              <div className="home-container06">
                <img
                  alt="image"
                  src="/Foldery/water-300h.png"
                  className="home-image06"
                />
                <img
                  alt="image"
                  src="/FowlPlay/egge%20card%20mini-1200w.png"
                  className="home-image07"
                />
                <img
                  alt="image"
                  src="/FowlPlay/pondtopia-200h.jpeg"
                  className="home-image08"
                />
                <img
                  alt="image"
                  src="/FowlPlay/cowpocalypse-300h.jpg"
                  className="home-image09"
                />
              </div>
            </div>
            <div className="home-publish card">
              <img
                alt="pastedImage"
                src="/Base/pastedimage-mimg-200h.png"
                className="home-icon15"
              />
              <span className="home-text017">
                A brief history of our studio
              </span>
              <div className="home-container07">
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M542.286 510.286c0 18.857-13.143 36.571-33.143 36.571-18.857 0-36.571-13.714-36.571-33.143 0-18.857 13.714-36.571 33.714-36.571 18.286 0 36 13.143 36 33.143zM550.857 543.429l200-332c-26.857 25.143-277.143 255.429-284 267.429l-199.429 331.429c26.286-24.571 277.143-256 283.429-266.857zM920.571 512c0 74.857-20.571 148.571-59.429 212-5.714-2.857-29.714-20-34.286-20-4 0-7.429 3.429-7.429 7.429 0 7.429 26.857 21.143 33.714 25.143-56.571 85.714-144 147.429-243.429 172l-9.143-38.286c-0.571-5.143-4-5.714-8.571-5.714-4 0-6.286 5.714-5.714 8.571l9.143 38.857c-27.429 5.714-55.429 8.571-83.429 8.571-74.857 0-148.571-21.143-212.571-60 3.429-5.714 25.143-37.143 25.143-41.714 0-4-3.429-7.429-7.429-7.429-8 0-25.143 34.286-30.286 41.143-86.286-57.143-148.571-145.714-172.571-246.857l39.429-8.571c4.571-1.143 5.714-4.571 5.714-8.571s-5.714-6.286-9.143-5.714l-38.857 8.571c-5.143-26.286-8-52.571-8-79.429 0-76.571 21.714-152 62.286-216.571 5.714 3.429 33.143 22.286 37.714 22.286 4 0 7.429-2.857 7.429-6.857 0-8-30.286-23.429-37.143-28 58.286-85.143 146.857-146.286 247.429-169.143l8.571 38.286c1.143 4.571 4.571 5.714 8.571 5.714s6.286-5.714 5.714-9.143l-8.571-37.714c25.143-4.571 50.857-7.429 76.571-7.429v0c76.571 0 151.429 21.714 216.571 62.286-4 5.714-22.286 32.571-22.286 37.143 0 4 2.857 7.429 6.857 7.429 8 0 23.429-29.714 27.429-36.571 84.571 57.143 145.143 144.571 168.571 244l-32 6.857c-5.143 1.143-5.714 4.571-5.714 9.143 0 4 5.714 6.286 8.571 5.714l32.571-7.429c5.143 26.286 8 53.143 8 80zM969.143 512c0-252.571-204.571-457.143-457.143-457.143s-457.143 204.571-457.143 457.143 204.571 457.143 457.143 457.143 457.143-204.571 457.143-457.143zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M964.73 178.804c-93.902-109.45-233.21-178.804-388.73-178.804-282.77 0-512 229.23-512 512s229.23 512 512 512c155.52 0 294.828-69.356 388.728-178.804l-324.728-333.196 324.73-333.196zM704 120.602c39.432 0 71.398 31.964 71.398 71.398 0 39.432-31.966 71.398-71.398 71.398s-71.398-31.966-71.398-71.398c0-39.432 31.966-71.398 71.398-71.398z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M0 1024c128-384 463-1024 1024-1024-263 211-384 704-576 704s-192 0-192 0l-192 320h-64z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon22">
                  <path d="M384 640l128-64 448-448-64-64-448 448-64 128zM289.3 867.098c-31.632-66.728-65.666-100.762-132.396-132.394l99.096-272.792 128-77.912 384-384h-192l-384 384-192 640 640-192 384-384v-192l-384 384-77.912 128z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon24">
                  <path d="M864 0c88.364 0 160 71.634 160 160 0 36.020-11.91 69.258-32 96l-64 64-224-224 64-64c26.742-20.090 59.978-32 96-32zM64 736l-64 288 288-64 592-592-224-224-592 592zM715.578 363.578l-448 448-55.156-55.156 448-448 55.156 55.156z"></path>
                </svg>
                <svg viewBox="0 0 1280 1024" className="home-icon26">
                  <path d="M640 576c105.87 0 201.87 43.066 271.402 112.598l-90.468 90.468c-46.354-46.356-110.356-75.066-180.934-75.066s-134.578 28.71-180.934 75.066l-90.468-90.468c69.532-69.532 165.532-112.598 271.402-112.598zM187.452 507.452c120.88-120.88 281.598-187.452 452.548-187.452s331.668 66.572 452.55 187.452l-90.51 90.508c-96.706-96.704-225.28-149.96-362.040-149.96-136.762 0-265.334 53.256-362.038 149.962l-90.51-90.51zM988.784 134.438c106.702 45.132 202.516 109.728 284.782 191.996v0l-90.508 90.508c-145.056-145.056-337.92-224.942-543.058-224.942-205.14 0-398 79.886-543.058 224.942l-90.51-90.51c82.268-82.266 178.082-146.862 284.784-191.994 110.504-46.738 227.852-70.438 348.784-70.438s238.278 23.7 348.784 70.438zM576 896c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64s-64-28.654-64-64z"></path>
                </svg>
              </div>
              <span className="home-text018">
                <span>We are a team of eth lovers,</span>
                <span>
                   game devs, coders, gamers and artists from India, Egypt,
                  Indonesia, Nigeria, France, Germany, UK, USA
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  Some are partners in coins, couple eth contractors and some
                  dev friends, all made possible by decentralized finance &amp;
                  remote work
                </span>
                <br></br>
                <span>
                  We participated in builders program with Chainsafe to make
                  blockchain gaming even more smoother &amp; frictionless
                </span>
                <br></br>
                <span>
                  We&apos;re still expanding and looking forward to bring some
                  fun games to life
                </span>
                <br></br>
                <span>Hopefully we achieve moderate success in that</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container08">
            <div className="card home-analyze">
              <img
                alt="pastedImage"
                src="/Base/pastedimage-l6p-200h.png"
                className="home-icon28"
              />
              <span className="home-text030">Launch Strategy</span>
              <div className="home-container09">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon29"
                >
                  <path d="M621.714 0c141.143 0 256 81.714 256 182.857v512c0 98.857-109.143 178.857-246.286 182.286l121.714 115.429c12 11.429 4 31.429-12.571 31.429h-603.429c-16.571 0-24.571-20-12.571-31.429l121.714-115.429c-137.143-3.429-246.286-83.429-246.286-182.286v-512c0-101.143 114.857-182.857 256-182.857h365.714zM164.571 749.714c50.286 0 91.429-41.143 91.429-91.429s-41.143-91.429-91.429-91.429-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429zM402.286 438.857v-292.571h-310.857v292.571h310.857zM713.143 749.714c50.286 0 91.429-41.143 91.429-91.429s-41.143-91.429-91.429-91.429-91.429 41.143-91.429 91.429 41.143 91.429 91.429 91.429zM804.571 438.857v-292.571h-329.143v292.571h329.143z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon31">
                  <path d="M422 826l-298-58 16-86 210 42 68-346-78 30v146h-84v-200l222-94q6 0 17-2t17-2q42 0 72 42l42 68q58 102 184 102v86q-142 0-234-106l-26 128 90 84v320h-86v-256l-90-84zM576 234q-34 0-60-26t-26-60 26-59 60-25 59 25 25 59-25 60-59 26z"></path>
                </svg>
                <svg viewBox="0 0 822.272 1024" className="home-icon33">
                  <path d="M786.286 91.429c36.571 36.571 0 128-54.857 182.857l-92 92 91.429 397.714c1.714 6.857-1.143 14.286-6.857 18.857l-73.143 54.857c-2.857 2.286-6.857 3.429-10.857 3.429-1.143 0-2.286 0-4-0.571-5.143-1.143-9.714-4-12-9.143l-159.429-290.286-148 148 30.286 110.857c1.714 6.286 0 12.571-4.571 17.714l-54.857 54.857c-3.429 3.429-8.571 5.143-13.143 5.143h-1.143c-5.714-0.571-10.286-2.857-13.714-7.429l-108-144-144-108c-4.571-2.857-6.857-8-7.429-13.143s1.714-10.286 5.143-14.286l54.857-55.429c3.429-3.429 8.571-5.143 13.143-5.143 1.714 0 3.429 0 4.571 0.571l110.857 30.286 148-148-290.286-159.429c-5.143-2.857-8.571-8-9.714-13.714-0.571-5.143 1.143-11.429 5.143-15.429l73.143-73.143c4.571-4 11.429-6.286 17.143-4.571l380 90.857 91.429-91.429c54.857-54.857 146.286-91.429 182.857-54.857z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon35">
                  <path d="M768 790q28 0 46-19t18-45-18-45-46-19-46 19-18 45 18 45 46 19zM832 406h-106v106h190zM256 790q28 0 46-19t18-45-18-45-46-19-46 19-18 45 18 45 46 19zM854 342l128 170v214h-86q0 52-38 90t-90 38-90-38-38-90h-256q0 52-38 90t-90 38-90-38-38-90h-86v-470q0-34 26-60t60-26h598v172h128z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon37">
                  <path d="M1022 388q2 2 2 5t-2 5l-50 64q-4 4-8 4l-30-6-14 44q-4 8-13 8t-13-8l-28-60-46-10-94 224 34 272q0 8-8 8h-40q-4 0-8-6l-40-162-20-34-50 196q0 6-8 6h-42q-8 0-8-8l46-270h-270l-70 132 16 136q4 10-8 10h-40q-6 0-8-4l-56-204-68 78 12 120q4 10-8 10h-44q-8 0-8-4l-26-112 42-164v-288q-46-18-46-60h548q96 2 190-66-16-44 12-72 56 40 72 50 14 8 23-3t5-25q-18-56-90-84-2 0-6-2-24-6-20-16 0-6 8-6 58 8 99 45t55 71l8 6q6 8 13 16t12 23 3 31q0 10 4 14z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon39">
                  <path d="M938.496 549.632c0.939-9.941-1.621-20.309-8.021-29.056-13.867-19.029-40.576-23.211-59.605-9.344-40.533 29.568-87.851 46.336-136.021 49.579-58.368 3.925-118.016-12.075-168.533-49.408-56.875-42.027-91.264-103.040-100.992-167.893s5.291-133.291 47.317-190.123c6.059-8.149 9.216-18.56 8.149-29.483-2.261-23.467-23.125-40.619-46.592-38.315-96.341 9.387-184.064 50.347-251.52 113.109-74.069 68.907-123.819 164.139-133.845 272.469-10.837 117.291 26.923 227.968 96.683 311.936s171.605 141.355 288.939 152.192 227.968-26.923 311.936-96.683 141.355-171.605 152.192-288.939zM834.859 626.091c-20.907 58.155-56.96 108.501-103.083 146.816-67.243 55.851-155.648 86.016-249.515 77.355s-175.275-54.528-231.125-121.771-86.016-155.648-77.355-249.515c7.979-86.699 47.659-162.731 106.965-217.856 33.365-31.061 72.96-55.467 116.523-71.339-19.456 53.931-24.619 111.189-16.384 166.357 12.928 86.315 58.88 167.851 134.656 223.872 67.371 49.792 147.115 71.168 224.981 65.92 32.085-2.133 63.829-8.832 94.293-19.84z"></path>
                </svg>
              </div>
              <span className="home-text031">
                <span className="home-text032">
                  While we are nimble and quick in experimenting &amp; accepting
                  wins and losses, we will stick with some of these stratagems
                </span>
                <br></br>
                <span>
                  The runner will be simple Proof of Concept of In game assets
                  and is still worth a quick hour or 2 of entertainment, graded
                  time pass worthy by our near and dear school headmaster &amp;
                  some football friends of mine
                </span>
                <br></br>
                <span>
                  Games down the line are more mechanically challenging and thus
                  will be promoted more with financial backing
                </span>
                <br></br>
                <span>
                  Sports games will be streamed with partner streamers
                </span>
                <br></br>
                <span>
                  We have partners in professional sports leagues who are
                  willing to work with us on promotion of our kabaddi game
                </span>
                <br></br>
                <span>
                  Then there&apos;s guerilla stunts of CT free mints, cool
                  passes, one offs
                </span>
                <br></br>
                <span>
                  Then there&apos;s just gaining web3 audience in Bazooka Bois
                  by hosting tournaments for not just partner projects but
                  rugged and forgotten projects
                </span>
                <br></br>
                <br></br>
                <span>Different games different gameplans</span>
                <br></br>
              </span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <div className="card">
                  <img
                    alt="pastedImage"
                    src="/Base/pastedimage-vyi5-200h.png"
                    className="home-icon41"
                  />
                  <span className="home-text049">Blockchain Polytheistic</span>
                  <div className="home-container12">
                    <img
                      alt="image"
                      src="/dos logos/eth-1200w.png"
                      className="home-image10"
                    />
                    <img
                      alt="image"
                      src="/dos logos/polygon-200h.png"
                      className="home-image11"
                    />
                    <img
                      alt="image"
                      src="/dos logos/skale-200h.png"
                      className="home-image12"
                    />
                    <img
                      alt="image"
                      src="/dos logos/solana-200h.png"
                      className="home-image13"
                    />
                    <img
                      alt="image"
                      src="/dos logos/immutablex-200h.png"
                      className="home-image14"
                    />
                  </div>
                  <span className="home-text050">
                    <span>
                      Starting with ethereum, experimenting with all of them
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="home-container13">
                  <svg viewBox="0 0 1024 1024" className="home-icon42">
                    <path d="M341.333 777.515c-36.907 7.509-61.995 5.163-79.787-0.469-9.856-3.115-18.389-7.509-26.197-12.885-17.536-12.117-31.019-28.8-47.744-50.005-15.189-19.243-36.267-47.232-66.176-62.976-7.893-4.181-16.469-7.552-25.771-9.899-22.869-5.717-46.037 8.192-51.755 31.061s8.192 46.037 31.061 51.755l6.613 2.56c10.752 5.675 20.779 17.237 38.997 40.363 15.616 19.797 36.523 46.848 66.261 67.371 14.165 9.771 30.336 18.176 49.024 24.064 30.379 9.6 65.067 11.947 105.515 5.76l-0.043 74.453c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-165.12c0-0.896-0.043-1.92-0.085-2.944-0.256-3.584-0.299-7.168-0.171-10.709 0.853-24.277 10.283-48.043 28.373-66.773 6.187-6.357 10.496-14.805 11.691-24.405 2.901-23.381-13.696-44.715-37.077-47.616-14.507-1.792-28.885-4.011-42.923-6.784-33.707-6.656-64.768-16.427-91.605-31.275-56.235-31.104-102.869-89.344-102.869-218.496-0.299-47.232 17.024-94.635 52.224-131.584 10.965-11.691 14.933-28.672 9.088-44.373-11.947-31.957-14.549-67.413-6.016-102.059 20.949 4.565 57.813 17.749 112.939 54.741 10.069 6.699 22.741 9.131 35.243 5.632 85.205-23.765 180.992-25.685 276.053 0.085 11.563 3.115 24.277 1.408 34.901-5.76 55.168-36.949 91.989-50.133 112.939-54.699 8.064 32.683 6.699 68.053-6.016 102.059-5.504 15.019-2.475 32.213 9.088 44.373 32.341 33.92 52.224 79.872 52.224 130.56 0 131.2-47.531 189.653-104.32 220.288-26.581 14.336-57.301 23.68-90.581 29.867-13.739 2.56-27.776 4.523-41.941 6.101-8.96 0.981-17.835 4.864-24.917 11.733-16.939 16.384-17.408 43.392-1.024 60.331 2.859 2.944 5.547 6.101 8.021 9.344 14.549 19.157 22.272 43.307 20.267 69.035 0 1.024-0.043 2.176-0.128 3.328v165.12c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-161.792c2.219-29.184-2.389-57.301-12.459-82.859 33.152-7.296 66.688-18.219 98.005-35.115 88.875-47.957 149.163-138.325 149.163-295.381 0-64.128-22.016-123.179-58.837-169.856 15.147-57.387 9.643-116.309-12.501-167.808-5.205-12.075-15.317-20.565-27.093-24.064-15.232-4.523-73.899-13.184-186.581 58.112-96.981-23.083-194.432-21.717-283.563-0.085-112.597-71.211-171.221-62.549-186.453-58.027-12.629 3.755-22.229 12.8-27.093 24.107-23.637 55.125-26.624 114.005-12.459 167.765-39.68 50.261-59.179 110.976-58.837 171.392 0 154.539 59.264 244.181 146.816 292.651 32.085 17.749 66.56 29.227 100.565 36.992-7.893 19.968-12.245 41.003-12.971 62.165-0.213 6.016-0.128 12.032 0.213 18.048z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="home-icon44">
                    <path d="M170.667 213.419c0 0 0.128-4.053 9.088-12.288 10.453-9.6 28.629-20.608 55.723-31.147 63.957-24.96 163.029-41.984 276.523-41.984s212.565 17.024 276.565 41.984c27.051 10.539 45.269 21.547 55.723 31.147 8.875 8.192 9.045 12.117 9.045 12.288 0 0-0.128 3.925-9.088 12.117-10.453 9.6-28.629 20.608-55.723 31.147-63.957 24.96-163.029 41.984-276.523 41.984s-212.565-17.024-276.565-41.984c-27.051-10.539-45.269-21.547-55.723-31.147-8.875-8.192-9.045-12.117-9.045-12.117zM853.333 620.032v190.763l-0.725 2.091c-1.024 2.048-3.371 5.632-8.491 10.325-10.453 9.6-28.629 20.565-55.595 31.061-63.829 24.832-162.56 41.728-276.523 41.728s-212.693-16.896-276.48-41.728c-27.008-10.496-45.141-21.461-55.595-31.061-5.12-4.693-7.509-8.277-8.491-10.325l-0.768-2.219v-190.635c10.709 5.461 22.059 10.496 33.877 15.104 76.672 29.824 186.752 47.531 307.456 47.531s230.784-17.707 307.456-47.531c11.819-4.608 23.168-9.6 33.877-15.104zM853.333 321.152v190.421c0 0.171 0 0.341 0 0.555l-0.725 2.091c-1.024 2.048-3.371 5.632-8.491 10.325-10.453 9.6-28.629 20.565-55.595 31.061-63.829 24.832-162.56 41.728-276.523 41.728s-212.693-16.896-276.48-41.728c-27.008-10.496-45.141-21.461-55.595-31.061-5.12-4.693-7.509-8.277-8.491-10.325l-0.768-2.091v-190.976c10.667 5.461 22.016 10.453 33.792 15.061 76.843 29.952 187.221 47.787 307.541 47.787s230.699-17.835 307.541-47.787c11.776-4.608 23.125-9.6 33.792-15.061zM85.333 213.333v597.333c0 2.475 0.085 4.949 0.299 7.424 2.432 28.373 18.133 51.072 36.565 68.011 21.248 19.499 50.133 35.157 82.347 47.701 76.672 29.824 186.752 47.531 307.456 47.531s230.784-17.707 307.456-47.531c32.213-12.544 61.099-28.203 82.347-47.701 18.432-16.939 34.133-39.637 36.565-68.011 0.213-2.475 0.299-4.949 0.299-7.424v-597.333c0-2.389-0.085-4.779-0.299-7.168-2.347-28.331-18.005-50.987-36.352-67.84-21.248-19.584-50.219-35.285-82.475-47.872-76.843-29.952-187.221-47.787-307.541-47.787s-230.699 17.835-307.541 47.787c-32.256 12.587-61.227 28.331-82.475 47.872-18.347 16.853-34.005 39.552-36.352 67.84-0.213 2.389-0.299 4.779-0.299 7.168z"></path>
                  </svg>
                </div>
                <span className="home-text053">Open Source, Open Hearts</span>
                <div className="home-container14">
                  <svg viewBox="0 0 1024 1024" className="home-icon46">
                    <path d="M512 640q34 0 60-26t26-60-26-59-60-25-60 25-26 59 26 60 60 26zM298 298q0 34 26 60t60 26 60-26 26-60-26-59-60-25-60 25-26 59zM512 86q230 0 384 170l-384 682-384-682q154-170 384-170z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon48"
                  >
                    <path d="M585.143 713.143v237.714h-530.286c-30.286 0-54.857-24.571-54.857-54.857v-768c0-30.286 24.571-54.857 54.857-54.857h768c30.286 0 54.857 24.571 54.857 54.857v530.286h-237.714c-30.286 0-54.857 24.571-54.857 54.857zM658.286 731.429h217.714c-5.143 27.429-20 58.286-37.143 75.429l-105.143 105.143c-17.143 17.143-48 32-75.429 37.143v-217.714z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="home-icon50">
                    <path d="M1024 483.429c0 44.571-25.143 82.857-62.286 101.714 4.571 17.714 6.857 36 6.857 54.857 0 180.571-204 326.857-455.429 326.857-250.857 0-454.857-146.286-454.857-326.857 0-18.286 2.286-36.571 6.286-53.714-38.286-18.857-64.571-57.714-64.571-102.857 0-62.857 50.857-113.714 113.714-113.714 32.571 0 61.714 13.714 82.857 36 77.143-53.714 180-88.571 294.286-92.571l66.286-297.714c2.286-10.286 13.143-17.143 23.429-14.857l210.857 46.286c13.714-27.429 42.857-46.857 76-46.857 47.429 0 85.714 38.286 85.714 85.143 0 47.429-38.286 85.714-85.714 85.714-46.857 0-85.143-38.286-85.143-85.143l-190.857-42.286-59.429 269.714c114.857 3.429 218.857 37.714 296.571 91.429 20.571-21.714 49.714-34.857 81.714-34.857 62.857 0 113.714 50.857 113.714 113.714zM238.857 597.143c0 47.429 38.286 85.714 85.143 85.714 47.429 0 85.714-38.286 85.714-85.714 0-46.857-38.286-85.143-85.714-85.143-46.857 0-85.143 38.286-85.143 85.143zM701.714 800c8.571-8.571 8.571-21.143 0-29.714-8-8-21.143-8-29.143 0-34.286 34.857-108 46.857-160.571 46.857s-126.286-12-160.571-46.857c-8-8-21.143-8-29.143 0-8.571 8-8.571 21.143 0 29.714 54.286 54.286 158.857 58.286 189.714 58.286s135.429-4 189.714-58.286zM700 682.857c46.857 0 85.143-38.286 85.143-85.714 0-46.857-38.286-85.143-85.143-85.143-47.429 0-85.714 38.286-85.714 85.143 0 47.429 38.286 85.714 85.714 85.714z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="home-icon52">
                    <path d="M640 384q18 0 30-12t12-30-12-31-30-13-30 13-12 31 12 30 30 12zM384 384q18 0 30-12t12-30-12-31-30-13-30 13-12 31 12 30 30 12zM688 186q122 90 122 240v44h-596v-44q0-150 122-240l-90-90 36-34 98 98q64-32 132-32t132 32l98-98 36 34zM214 682v-170h596v170q0 124-87 212t-211 88-211-88-87-212z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="home-icon54">
                    <path d="M548.571 146.286c0-20-16.571-36.571-36.571-36.571s-36.571 16.571-36.571 36.571 16.571 36.571 36.571 36.571 36.571-16.571 36.571-36.571zM1024 676.571v201.143c0 7.429-4.571 14.286-11.429 17.143-2.286 0.571-4.571 1.143-6.857 1.143-4.571 0-9.143-1.714-13.143-5.143l-53.143-53.143c-89.714 108-250.857 177.143-427.429 177.143s-337.714-69.143-427.429-177.143l-53.143 53.143c-3.429 3.429-8.571 5.143-13.143 5.143-2.286 0-4.571-0.571-6.857-1.143-6.857-2.857-11.429-9.714-11.429-17.143v-201.143c0-10.286 8-18.286 18.286-18.286h201.143c7.429 0 14.286 4.571 17.143 11.429s1.143 14.286-4 20l-57.143 57.143c51.429 69.143 150.286 119.429 263.429 134.857v-369.714h-109.714c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h109.714v-93.143c-43.429-25.143-73.143-72-73.143-126.286 0-80.571 65.714-146.286 146.286-146.286s146.286 65.714 146.286 146.286c0 54.286-29.714 101.143-73.143 126.286v93.143h109.714c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-109.714v369.714c113.143-15.429 212-65.714 263.429-134.857l-57.143-57.143c-5.143-5.714-6.857-13.143-4-20s9.714-11.429 17.143-11.429h201.143c10.286 0 18.286 8 18.286 18.286z"></path>
                  </svg>
                  <svg viewBox="0 0 1024 1024" className="home-icon56">
                    <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM320 512c0-106.040 85.96-192 192-192s192 85.96 192 192-85.96 192-192 192-192-85.96-192-192zM925.98 683.476v0l-177.42-73.49c12.518-30.184 19.44-63.276 19.44-97.986s-6.922-67.802-19.44-97.986l177.42-73.49c21.908 52.822 34.020 110.73 34.020 171.476s-12.114 118.654-34.020 171.476v0zM683.478 98.020v0 0l-73.49 177.42c-30.184-12.518-63.276-19.44-97.988-19.44s-67.802 6.922-97.986 19.44l-73.49-177.422c52.822-21.904 110.732-34.018 171.476-34.018 60.746 0 118.654 12.114 171.478 34.020zM98.020 340.524l177.422 73.49c-12.518 30.184-19.442 63.276-19.442 97.986s6.922 67.802 19.44 97.986l-177.42 73.49c-21.906-52.822-34.020-110.73-34.020-171.476s12.114-118.654 34.020-171.476zM340.524 925.98l73.49-177.42c30.184 12.518 63.276 19.44 97.986 19.44s67.802-6.922 97.986-19.44l73.49 177.42c-52.822 21.904-110.73 34.020-171.476 34.020-60.744 0-118.654-12.114-171.476-34.020z"></path>
                  </svg>
                </div>
                <span className="home-text054">
                  <span>We got here jumping off of shoulders of giants</span>
                  <br></br>
                  <span>
                    So we&apos;ll help some join the next wave of ownership
                    gaming
                  </span>
                  <br></br>
                  <span>
                    We&apos;ll hold sessions, game design tutorials, asset
                    integrations
                  </span>
                  <br></br>
                  <span>
                    Will also fund games for our Openheimers down the line
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Games" className="home-testimonals">
        <div className="home-left1">
          <span className="home-text063">
            <span>SNEAK PEEK</span>
            <br></br>
          </span>
          <span className="home-text066 title">GAME ON</span>
        </div>
        <div className="home-right1">
          <div className="home-column">
            <Testimonal
              from="Infinite Runner"
              name="Barn Bacon"
              quote="Subway surfer still gets 100million MAU and we wanted to make an MVP game that ties in game assets with blockchain. Behold our runner"
              avatarSrc="/Foldery/officerun-300w.png"
              rootClassName="testimonal-root-class-name1"
            ></Testimonal>
            <Testimonal
              from="4x turn based strategy, 1v1 multiplayer"
              name="Blitz Brigade"
              quote="Chess but military troops, guns, warships, resources. Explore Strategize Conquer"
              avatarSrc="/Foldery/food-300h.png"
              rootClassName="testimonal-root-class-name2"
            ></Testimonal>
            <div className="home-testimonal testimonal">
              <span className="home-text067">
                <span className="home-text068">
                  Driven by a thirst for adventure and a desire to bring joy
                  back to his desolate world, Skully embarked on a quest to
                  showcase the underworld his incredible skateboarding skills
                </span>
                <br></br>
                <span>The underworld has water</span>
                <br></br>
                <span>cause ringwoodites, it&apos;s canon to science now</span>
                <br></br>
              </span>
              <div className="home-author">
                <div className="home-avatar">
                  <img
                    alt="image"
                    src="/Foldery/skeletony-200h.png"
                    className="home-image15"
                  />
                </div>
              </div>
              <div className="home-user">
                <span className="home-name">Skeleton Skateboarder</span>
                <span className="home-divider">—</span>
                <span className="home-from">
                  <span className="home-text074">
                    Platform runner, skateboarder,
                  </span>
                  <br></br>
                  <span>Arcade</span>
                  <br></br>
                </span>
              </div>
            </div>
            <Testimonal
              from="RTS Card game, Online Multiplayer"
              name="FutLol"
              quote="FutSal meets league as secret tournaments happen on unreal exotic fields to alien stadiums"
              avatarSrc="/Foldery/gameplay-300w.jpg"
              rootClassName="testimonal-root-class-name6"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              from="2d platformer shooter"
              name="Bazooka Bois"
              quote="Bamboos, bazookas and bamboozlement as Pandas Fight Club turns nasty. Sick of zoos, soon to be extinct species going out with a bang"
              avatarSrc="/Foldery/bazooka%20bois%20twitch-300w.jpg"
              rootClassName="testimonal-root-class-name"
            ></Testimonal>
            <div className="home-testimonal1 testimonal">
              <span className="home-text078">
                Hyperspeed, hypercompetition, hyperfun
              </span>
              <div className="home-author1">
                <div className="home-avatar1">
                  <img
                    alt="image"
                    src="/Foldery/hyperdrive-200h.png"
                    className="home-image16"
                  />
                </div>
              </div>
              <div className="home-user1">
                <span className="home-name1">HyperDrive Havoc</span>
                <span className="home-divider1">—</span>
                <span className="home-from1">SciFi Racing</span>
              </div>
            </div>
            <Testimonal
              from="Sports simulation"
              name="Total Kabaddi Online"
              quote="Tag, wrestling, acrobatics all in one. This subcontinental super sport has no good needs a sports simulator befitting it's fanfare"
              avatarSrc="/Foldery/tko-300h.png"
              rootClassName="testimonal-root-class-name3"
            ></Testimonal>
            <Testimonal
              from="3d fps shooter valorant be damned"
              name="Cowpocalypse"
              quote="Cheesy one liners and rpgs blowing on your face as cows take over the wasteland. Moo Motherfucker"
              avatarSrc="/FowlPlay/cowpocalypse-300h.jpg"
              rootClassName="testimonal-root-class-name4"
            ></Testimonal>
            <Testimonal
              from="You Decide"
              name="AngryTempleSaga??"
              quote="Have an idea but not the temperament to tinker with unity, get included, monthly test builds and just for fun gameplay tinkering"
              avatarSrc="/dos logos/eth-1200w.png"
              rootClassName="testimonal-root-class-name5"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text079">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-statistics">
        <div className="home-container15">
          <ActiveUsers caption="Barn Bacon" statistic="2024 Q3"></ActiveUsers>
          <ActiveUsers caption="Pandas FIght Club" statistic="Q3"></ActiveUsers>
          <ActiveUsers caption="Blitz Brigade" statistic="Q4"></ActiveUsers>
          <ActiveUsers caption="Hyperdrive Havoc" statistic="Q4"></ActiveUsers>
        </div>
      </section>
      <section id="Funds Use" className="home-statistics1">
        <div className="home-container16">
          <ActiveUsers
            caption="Skeleton Skateboarder"
            statistic="2025 Q1"
          ></ActiveUsers>
          <ActiveUsers
            caption="Total Kabaddi Online"
            statistic="Q2"
          ></ActiveUsers>
          <ActiveUsers caption="FutLol" statistic="Q3"></ActiveUsers>
          <ActiveUsers caption="Cowpocalypse" statistic="Q4"></ActiveUsers>
        </div>
      </section>
      <section className="home-quote-container">
        <div className="home-quote">
          <span className="home-message">FUNDS USE</span>
          <div className="home-author2">
            <img
              alt="image"
              src="/dos logos/eth-1200w.png"
              className="home-avatar2"
            />
            <span className="home-quote1">
              DOTH MAMA KNOW WHAT HAPPENED TO THE ETH
            </span>
          </div>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container17">
            <div className="home-left2">
              <span className="sub-title">5 ETH</span>
              <span className="home-text083 title">
                <span>Giveaways</span>
                <br></br>
                <span>Collabs</span>
                <br></br>
                <span>Cross game characters</span>
              </span>
              <span className="home-text089">
                <span className="home-text090">
                  It&apos;s Eggeverse and we are simply cohabitating, expansion
                  charges are real though
                </span>
                <br></br>
                <span>We&apos;ll get some famous collections in our game</span>
                <br></br>
                <span>
                  We&apos;ll include a few web3 projects to be a part of our
                  universe
                </span>
                <br></br>
                <span>
                  Run some Eth contests,online campaigns, get the hype going
                </span>
                <br></br>
                <span>Musk chargeth before the musketeers</span>
                <br></br>
              </span>
              <div className="home-get-started08 template-button">
                <span className="home-text100">
                  <span>EGGE COLLECTION</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/FowlPlay/chainsafe%20gdc%20loot%20egge-1200w.jpg"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-centered-container">
          <div className="home-image-container1">
            <img
              alt="pastedImage"
              src="/Foldery/tower1-300h.png"
              className="home-cards-image1"
            />
            <img
              alt="pastedImage"
              src="/Foldery/water-300h.png"
              className="home-cards-image2"
            />
            <img
              alt="pastedImage"
              src="/Foldery/food-300h.png"
              className="home-cards-image3"
            />
          </div>
          <div className="home-right2">
            <span className="sub-title">20ETH</span>
            <h2 className="home-text104 title">Game Development</h2>
            <div className="home-category">
              <span className="home-text105">Developer Salary</span>
              <span className="home-text106">
                <span className="home-text107">Our devs run on passion</span>
                <br></br>
                <span>Hard to be passionate on an empty stomach</span>
                <br></br>
              </span>
              <span className="home-text111">15 ETH</span>
            </div>
            <div className="home-category1">
              <span className="home-text112">
                Improved graphics, UI &amp; art style
              </span>
              <span className="home-text113">
                <span className="home-text114">
                  What mechanization did to farming, AI is doing to creative
                  work but a good farmer like a good creative still lies at the
                  heart
                </span>
                <br></br>
                <span>
                  Plus 3d models aren&apos;t there yet in terms, diffusion has a
                  few years to go imo
                </span>
                <br></br>
              </span>
              <span className="home-text118">5 ETH</span>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container18">
            <div className="home-left3">
              <span className="home-text119">20ETH</span>
              <h2 className="home-text120 title">
                <span>PROMOTION</span>
                <br></br>
                <span>STREAMERS</span>
                <br></br>
                <span>GIVEAWAYS</span>
                <br></br>
                <span>GAMEOFFS</span>
                <br></br>
              </h2>
              <span className="home-text129">
                <span>PSGG</span>
                <br></br>
                <span>While we do want to be the Galacticos of </span>
                <br></br>
                <span>
                  There is no doubt support and success go hand in hand
                </span>
                <br></br>
                <span>While we&apos;ll be a doing a lot of </span>
                <br></br>
                <span>
                  We&apos;ll have to win over the web3 native gamer audience of
                  a million in the east before we drive over the journey to the
                  west
                </span>
                <br></br>
                <span>
                  But we&apos;ll also go the traditional media route and social
                  media and partner up with streamers, gamers, youtubers and
                  some instagram stories where needed
                </span>
                <br></br>
              </span>
              <div className="home-get-started09 template-button">
                <span className="home-text142">Calendar</span>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/Foldery/promo-600h.jpg"
                className="home-cards-image4"
              />
            </div>
          </div>
        </div>
        <div className="home-centered-container1">
          <div className="home-image-container3">
            <img
              alt="pastedImage"
              src="/Foldery/game%20studio-1200w.jpeg"
              className="home-cards-image5"
            />
          </div>
          <div className="home-right3">
            <span className="sub-title">20ETH</span>
            <h2 className="home-text144 title">
              <span>LAND DEVELOPER</span>
              <br></br>
            </h2>
            <div className="home-category2">
              <span className="home-text147">LAND</span>
              <span className="home-text148">
                <span>
                  Here&apos;s a crazy idea, we need office space, we need a
                  place where we can build for coming years and beyond
                </span>
                <br></br>
                <span>Instead of online land, we buy offline land</span>
                <br></br>
                <span>We&apos;re buying real estate in India</span>
                <br></br>
                <span>
                  Building a game studio is about having a base to jump off of
                </span>
                <br></br>
              </span>
              <span className="home-text157">10 ETH</span>
            </div>
            <div className="home-category3">
              <span className="home-text158">GAME STUDIO</span>
              <span className="home-text159">
                <span>
                  Investment in office space, hardware &amp; developer tools is
                  a leveller against the likes of supercell, Nintendo or EA. We
                  aim for success not only in web3 space but in the bigger space
                  as well
                </span>
                <br></br>
                <span>
                  While a lot of our devs, artists &amp;  have their own setup
                  some will benefit greatly from getting a professional build
                </span>
                <br></br>
              </span>
              <span className="home-text164">10 ETH</span>
            </div>
          </div>
        </div>
        <div className="home-banner1">
          <div className="home-container19">
            <div className="home-left4">
              <span className="home-text165">4 ETH</span>
              <h2 className="home-text166 title">
                <span>Olympics </span>
                <br></br>
              </h2>
              <span className="home-text169">
                <span>Someone with an MBA explain why this is important</span>
                <br></br>
                <span>Something something boosted productivity</span>
                <br></br>
                <span>A few days of holidays for my team</span>
                <br></br>
                <span>
                  I got 10 in my team and my parents might sue me if I
                  don&apos;t include them
                </span>
                <br></br>
                <span>Teambuilding was never cheap</span>
                <br></br>
                <span>We&apos;ll save on the French housing</span>
                <br></br>
                <span>We got a few friends over there</span>
                <br></br>
                <br></br>
                <span>
                  Could I refile this as international promotion tour?
                </span>
                <br></br>
                <br></br>
              </span>
              <div className="home-get-started10 template-button">
                <span className="home-text188">
                  <span>MEET AND GREET?</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="home-image-container4">
              <img
                alt="pastedImage"
                src="/Foldery/frenchy-300h.png"
                className="home-cards-image6"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="Tokenomics" className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading">
            <span className="home-text191">--Under Deliberation--</span>
            <span className="home-text192 title">Tokenomics</span>
          </div>
          <div className="home-category4 card">
            <div className="home-headng">
              <span className="home-text193">
                1 — We wanna raise about 69ETH
              </span>
              <span className="home-text194">
                <span>
                  Whether that&apos;s 69 people whaling in an ETH each
                </span>
                <br></br>
                <span>or whether it&apos;s 6900 people pooling in 0.01</span>
                <br></br>
                <br></br>
                <span>
                  Ideally 690 people who believe in us enough to fund our memes
                  &amp; dreams 
                </span>
              </span>
              <div className="home-get-started11 template-button">
                <span className="home-text201">MINT ERC 404</span>
              </div>
            </div>
            <div className="home-container20">
              <img
                alt="pastedImage"
                src="/FowlPlay/bucky-1200w.jpeg"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row card">
            <div className="home-category5">
              <div className="home-headng1">
                <span className="home-text202">2 — Tokenomics</span>
                <span className="home-text203">
                  <span>690 Farmhouses NFTs</span>
                  <br></br>
                  <br></br>
                  <span>
                    Or 6.9 billion Potatoes that will be auctioned in the
                    farmers market
                  </span>
                  <br></br>
                  <br></br>
                  <span>Every 10million Potatoes buys a farmhouse</span>
                  <br></br>
                  <span>
                    ie 10million erc20 tokens per erc721 which will give
                    privileged access to the village produce
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-container21">
                <img
                  alt="pastedImage"
                  src="/Foldery/tato%20(1)-200h.png"
                  className="home-pasted-image1"
                />
                <img
                  alt="pastedImage"
                  src="/Foldery/farmhouse%20(1)-200h.jpeg"
                  className="home-pasted-image2"
                />
              </div>
            </div>
            <div className="home-category6">
              <div className="home-headng2">
                <span className="home-text214">3 — Price Choice</span>
                <span className="home-text215">
                  <span>0.1 ETH per NFT</span>
                  <br></br>
                  <span>0.01 Eth per Million Tato Coins</span>
                  <br></br>
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/dos logos/eth-1200w.png"
                className="home-pasted-image3"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="Utility" className="home-pricing">
        <div className="home-centered-container3">
          <div className="home-heading1">
            <span className="home-text220 title">Utility</span>
            <span className="home-text221">
              <span className="home-text222">
                ERC 404 is a triple edged broadsword
              </span>
              <br></br>
              <span>Works as a token, as an NFT and as an in game dragon</span>
              <br></br>
            </span>
            <div className="home-selection">
              <span className="home-text226">
                ERC20 (for any holder) WHITE EDITION
              </span>
              <span className="home-text227">
                <span className="home-text228">ERC721</span>
                <span>
                  {' '}
                  (ERC20  +
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text230">black edition</span>
                <span>)</span>
              </span>
            </div>
          </div>
          <div className="home-cards1">
            <div className="home-card">
              <span className="home-text232">Free</span>
              <span className="home-text233">
                Airdrops, in game currency, rare items, limited edition drops,
                streamer drip
              </span>
              <div className="home-get-started12 template-button">
                <span className="home-text234">Claim</span>
              </div>
              <span className="home-text235">What&apos;s included</span>
              <div className="home-bullet-points">
                <div className="home-point">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon58"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text236">In game items</span>
                </div>
                <div className="home-point01">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon60"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text237">Game Currency</span>
                </div>
              </div>
            </div>
            <div className="home-card1">
              <span className="home-text238">Value Addition</span>
              <span className="home-text239">
                <span>
                  There will be drops whose value will flow back in the
                  ecosystem via either tubewelling that money into liquidity
                  pools or new in game currency drops directly to holders in
                  ratio of holdings
                </span>
                <br></br>
                <br></br>
                <span>
                  Also free mints of in game currency for the holders that
                  others will have to pay for
                </span>
                <br></br>
              </span>
              <div className="home-get-started13 template-button">
                <span className="home-text245">
                  <span>Swap Now</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text248">What&apos;s included</span>
              <div className="home-bullet-points1">
                <div className="home-point02">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon62"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text249">
                    Minted Ethereum pools back to TATOs
                  </span>
                </div>
                <div className="home-point03">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon64"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text250">
                    ERC20 coins for individual games allotment
                  </span>
                </div>
                <div className="home-point04">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon66"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text251">
                    Sed ut pespiciatis unde omnis
                  </span>
                </div>
              </div>
            </div>
            <div className="home-card2">
              <span className="home-text252">
                <span className="home-text253">Copilots</span>
                <br className="home-text254"></br>
                <span className="home-text255">Councilors</span>
                <br className="home-text256"></br>
                <span className="home-text257">Contributors</span>
                <br></br>
              </span>
              <span className="home-text259">
                <span>You get to direct, suggest &amp; </span>
                <br></br>
                <span>harvest game assets, mechanics &amp; characters</span>
                <br></br>
                <br></br>
                <span>Early access</span>
                <br></br>
                <br></br>
                <span>
                  Ad free in game experiences, battle passes, pro++ max
                  experience ensues for any full holder
                </span>
                <br></br>
              </span>
              <div className="home-get-started14 template-button">
                <span className="home-text270">
                  <span>OpenSea</span>
                  <br></br>
                </span>
              </div>
              <span className="home-text273">What&apos;s included</span>
              <div className="home-bullet-points2">
                <div className="home-point05">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon68"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text274">VIP </span>
                </div>
                <div className="home-point06">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon70"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text275">Ad Free Experience</span>
                </div>
                <div className="home-point07">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon72"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text276">
                    In game development roles
                  </span>
                </div>
                <div className="home-point08">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon74"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text277">
                    Add, suggest &amp; design characters
                  </span>
                </div>
                <div className="home-point09">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon76"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text278">
                    Lotteries, raffles &amp; giveaways
                  </span>
                </div>
                <div className="home-point10">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon78"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text279">
                    Ultra Rare 1 offs &amp; exclusive drops
                  </span>
                </div>
                <div className="home-point11">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon80"
                  >
                    <path d="M877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className="home-text280">
                    Suggest game ideas, vote on what next to build
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading2">
            <span className="home-text281 title">What&apos;s next</span>
            <span className="home-text282">
              We buy Chelsea and win 16 champions league
            </span>
            <div className="home-get-started15 template-button">
              <span className="home-text283">
                <span>BOOK TICKETS NOW</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/FowlPlay/egge%20card%20mini-1200w.png"
              className="home-image17"
            />
          </div>
        </div>
      </section>
      <section id="FAQs" className="home-faq">
        <div className="home-heading3">
          <span className="home-text286 title">Frequently asked questions</span>
          <span className="home-text287">
            <span className="home-text288">
              Nobody asks us atm, but maybe someday
            </span>
            <br></br>
            <span>I&apos;m including some IRL questions, fuck it</span>
            <br></br>
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text292">— Is crypto a scam?</span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text293">
                <span>
                  Welcome to the casino, but no it isn&apos;t if you are not
                  just buying to sell it the very next day hoping it will 10x.
                  Ethereum powers the decentralized network which itself powers
                  a lot of applications ranging from fundraising, money
                  transfer, payments, decentralized finance whether it&apos;s
                  stocks and now gaming
                </span>
                <br></br>
                <span>
                  It&apos;s just a better accounting system (transparent,
                  permissionless, secure) with a poor social security system in
                  terms of how people operate at the moment. Better
                  infrastructure, UI &amp; safety protocols are on the way
                </span>
                <br></br>
                <span>
                  Soon backend of many a good public goods will be powered by
                  this but especially entertainment, sports and gaming are
                  especially a match for the ages
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text300">
                — Wait what is ERC 404, I just understood coins and NFTs
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text301">
                Well 20 &amp; 721 had a baby out of wedlock, which operates as
                both a coin and an NFT if enough coins
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text302">
                — How do I get into this space?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text303">
                <span>
                  Download metamask, play free crypto games. I personally like
                  crypto arena on wemix
                </span>
                <br></br>
                <span>I go by spikeshinoda in that</span>
                <br></br>
                <span>
                  You can swap in game currency with a token that you can sell
                  buy trade
                </span>
                <br></br>
                <br></br>
                <span>Wait did you mean how did I get into this space</span>
                <br></br>
                <span>
                  Well I did my engineering, had a creative bug in me, went
                  freelance, got wasted, went for trading, got wasted, heard
                  about beeple, invested in NFTs, got wasted, invested in coins,
                  got wasted, invested in myself and here I am, most likely
                  still wasted but I enjoyed it
                </span>
                <br></br>
                <span>
                  10/10 would recommend, but read some basic investment books
                  first. Peter Lynch or read some azquotes of Oracle of Omaha
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text317">
                — What&apos;s a game developer?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text318">
                <span>
                  Alright maybe I&apos;m just focusing what my mom dad football
                  friends are asking me but until I get some questions that need
                  answering, I&apos;ll just wing this FAQ. 
                </span>
                <br></br>
                <span>
                  So a game dev is someone who wants to remove all joy that he
                  gets from said activity by trying to develop something that
                  never existed and burn their savings in a bottomless pit that
                  devours any cash you throw at it
                </span>
                <br></br>
                <span>Welcome to the shitshow</span>
                <br></br>
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text325">
                — When are you launching the token?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text326">
                <span>
                  Waiting for 690 people in telegram to say Shut up and take my
                  Eth
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container23">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container4">
          <div className="home-heading4">
            <span className="home-text329 sub-title">HIT US</span>
            <span className="home-text330 title">SIUUUUUUUUUUUUUUUUUU</span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container24">
                <YouTube></YouTube>
                <YouTube pastedImageSrc="/logos/group%201012-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/layer1-200h.png"></YouTube>
                <div className="home-you-tube">
                  <svg
                    viewBox="0 0 1170.2857142857142 1024"
                    className="home-icon92"
                  >
                    <path d="M493.143 589.714c0-85.714-69.143-154.857-154.857-154.857-85.143 0-154.286 69.143-154.286 154.857 0 85.143 69.143 154.286 154.286 154.286 85.714 0 154.857-69.143 154.857-154.286zM986.286 589.143c0-85.143-69.143-154.286-154.286-154.286-85.714 0-154.857 69.143-154.857 154.286 0 85.714 69.143 154.857 154.857 154.857 85.143 0 154.286-69.143 154.286-154.857zM1170.286 126.857v770.286c0 33.714-27.429 61.143-61.714 61.143h-1046.857c-34.286 0-61.714-27.429-61.714-61.143v-770.286c0-33.714 27.429-61.143 61.714-61.143h246.286c33.714 0 61.714 27.429 61.714 61.143v92h430.857v-92c0-33.714 28-61.143 61.714-61.143h246.286c34.286 0 61.714 27.429 61.714 61.143z"></path>
                  </svg>
                  <span className="home-text331">Discord</span>
                </div>
                <YouTube pastedImageSrc="/logos/group-200h.png"></YouTube>
              </div>
              <div className="home-container25">
                <YouTube pastedImageSrc="/logos/group%201014-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201015-200h.png"></YouTube>
                <YouTube pastedImageSrc="/logos/group%201017-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
