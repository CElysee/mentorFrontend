import React from "react";
import { Link } from "react-router-dom";
import "./findMentors.css";

function findMentors() {
  return (
    <>
      <div className="explore__Wrapper-sc-wikv8h-0 kTYjaS container">
        <div>
          <div
            style={{
              transition: "opacity 400ms ease 0s, transform 400ms ease 0s",
              transform: "none",
              opacity: "1",
            }}
          >
            <div class="filters__Wrapper-sc-1gplzf-0 lgrhEy">
              <div class="ExploreMentorsFilters__GridWrapper-sc-3pvlcw-0 ftcyPH">
                <button
                  height="50"
                  color="var(--black)"
                  border="var(--grey-3)"
                  type="button"
                  class="sc-jlZhew fjUACt text-truncate font-weight-400 btn btn-default"
                >
                  <svg
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1172 17.9866H2.88306"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.1179 17.9866C21.1179 19.5772 19.8285 20.8666 18.2379 20.8666C16.6473 20.8666 15.3579 19.5772 15.3579 17.9866C15.3579 16.3948 16.6473 15.1066 18.2379 15.1066C19.8285 15.1066 21.1179 16.3948 21.1179 17.9866Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.8827 6.26212H21.118"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.8826 6.26211C2.8826 7.85388 4.17201 9.14211 5.7626 9.14211C7.35319 9.14211 8.6426 7.85388 8.6426 6.26211C8.6426 4.67152 7.35319 3.38211 5.7626 3.38211C4.17201 3.38211 2.8826 4.67152 2.8826 6.26211Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span class="ml-12 d-none d-md-block">Filters</span>
                </button>
              </div>
            </div>

            <div className="Mentors__FilterWrapper-sc-16jv56v-0 eowcYl">
              <div className="main-wrapper false">
                <div className="CategoryFilter__Wrapper-sc-12epgxv-1 jmqjbq">
                  <div className="react-horizontal-scrolling-menu--wrapper">
                    <div className="react-horizontal-scrolling-menu--header"></div>
                    <div className="react-horizontal-scrolling-menu--inner-wrapper">
                      <div className="react-horizontal-scrolling-menu--arrow-left">
                        <div
                          className="Arrows__StyledArrow-sc-kci6kk-0 lhRKAX"
                          style={{ display: "none", marginLeft: "-32px" }}
                        >
                          <svg
                            fill="none"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15.5 19L8.5 12L15.5 5"
                              stroke="var(--black)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="react-horizontal-scrolling-menu--scroll-container">
                        <div className="react-horizontal-scrolling-menu--item">
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center active"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 kmfdDf article-icon hover">
                                    <img
                                      src="https://adplist.org/illustrations/all-filters.svg"
                                      alt=""
                                      className=""
                                    />
                                  </span>
                                  All
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".0:$0-separator"
                          data-index="0.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".0:$1"
                          data-index="1"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist.org/illustrations/available-asap.svg"
                                      alt=""
                                      className=""
                                    />
                                  </span>
                                  Available ASAP
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".0:$1-separator"
                          data-index="1.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".0:$2"
                          data-index="2"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist.org/illustrations/recommended.svg"
                                      alt=""
                                      className=""
                                    />
                                  </span>
                                  Recommended
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".0:$2-separator"
                          data-index="2.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$0"
                          data-index="3"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/9224cdf3a0d648a9bca4049da918a02eBm99p.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/9224cdf3a0d648a9bca4049da918a02eBm99p.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Content Writing
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$0-separator"
                          data-index="3.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$1"
                          data-index="4"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/3e38daac291f4ac993cf7f28c9ff2260RhRjH.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/3e38daac291f4ac993cf7f28c9ff2260RhRjH.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Data Science
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$1-separator"
                          data-index="4.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$2"
                          data-index="5"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/68868f0bd46d4b10a03cc0c58ce9311cST84I.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/68868f0bd46d4b10a03cc0c58ce9311cST84I.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Design
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$2-separator"
                          data-index="5.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$3"
                          data-index="6"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/7eb66c4b6bd24d459cbc3f751089a830bESmd.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/7eb66c4b6bd24d459cbc3f751089a830bESmd.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Engineering
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$3-separator"
                          data-index="6.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$4"
                          data-index="7"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/6c96860d575d4033b49391ea6fbab99a0GWWz.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/6c96860d575d4033b49391ea6fbab99a0GWWz.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Marketing
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$4-separator"
                          data-index="7.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$5"
                          data-index="8"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e268a00fc57c40229758bcdacef62976hRjgo.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e268a00fc57c40229758bcdacef62976hRjgo.svg icon"
                                      className=""
                                    />
                                  </span>
                                  No/Low Code
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$5-separator"
                          data-index="8.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$6"
                          data-index="9"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e2678a77e84b4945ac47bec96047e7c83kaOl.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e2678a77e84b4945ac47bec96047e7c83kaOl.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Product
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="react-horizontal-scrolling-menu--separator"
                          data-key=".1:$6-separator"
                          data-index="9.1"
                        ></div>
                        <div
                          className="react-horizontal-scrolling-menu--item"
                          data-key=".1:$7"
                          data-index="10"
                        >
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e07e66793e384e18a5f59b211497bc16XJDEN.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/e07e66793e384e18a5f59b211497bc16XJDEN.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Product Research
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="react-horizontal-scrolling-menu--separator"></div>
                        <div className="react-horizontal-scrolling-menu--item">
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/ed2d2c5af9504cd28e11b2e28fc2b1dawGVjw.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/ed2d2c5af9504cd28e11b2e28fc2b1dawGVjw.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Sales/BD
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="react-horizontal-scrolling-menu--separator"></div>
                        <div className="react-horizontal-scrolling-menu--item">
                          <div>
                            <div
                              style={{
                                transition:
                                  "opacity 400ms ease 0s, transform 400ms ease 0s",
                                transform: "none",
                                opacity: "1",
                              }}
                            >
                              <div
                                tabindex="0"
                                className="CategoryFilterCard__Category-sc-f819ce-0 fznhgN d-flex justify-content-center align-items-center"
                              >
                                <a
                                  href="/"
                                  className="d-flex flex-column justify-content-center align-items-center false"
                                  style={{ gap: "0.5rem" }}
                                >
                                  <span className="CategoryIcon__StyledIcon-sc-19ovsxy-0 ewTGkM article-icon hover">
                                    <img
                                      src="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/5db99da782ba4732b1bc9d688e5bc909diUYE.svg"
                                      alt="https://adplist-bucket.s3.amazonaws.com/media/expertise_icon_svg/5db99da782ba4732b1bc9d688e5bc909diUYE.svg icon"
                                      className=""
                                    />
                                  </span>
                                  Talent Acquisition
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="react-horizontal-scrolling-menu--arrow-right">
                        <div
                          className="Arrows__StyledArrow-sc-kci6kk-0 lhRKAX"
                          style={{
                            display: "flex",
                            marginLeft: "0px",
                            paddingLeft: "0px",
                          }}
                        >
                          <svg
                            fill="none"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.5 5L15.5 12L8.5 19"
                              stroke="var(--black)"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="react-horizontal-scrolling-menu--footer"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-eldPxv jGbpTU mb-5 pt-3" width="1440">
                <Link to={'/mentorProfile'}>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Oxana Tamas"
                    title="Oxana Tamas"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/e4c6cfcebcc74ffbaf30ea8d24ec1927S1qqw.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Oxana Tamas&nbsp;
                    </span>
                    <span>🇮🇹</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Senior Product Designer</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Birdie Care</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      6 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              </Link>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Abolfazl Fattahi"
                    title="Abolfazl Fattahi"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/2ff121a686f64f5a9ed2d3ae4dcb21c5AHh7s.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Abolfazl Fattahi&nbsp;
                    </span>
                    <span>🇮🇷</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>CEO, Product Manager, Project Manager</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Twelve Group</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      18 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Abhijeet Chopra"
                    title="Abhijeet Chopra"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/72d973587b68447f8ad431fd82da76c7UiSZ1.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Abhijeet Chopra&nbsp;
                    </span>
                    <span>🇮🇳</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Founder &amp; CEO</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Electrum IT Solutions</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      6 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Matthias Klenk"
                    title="Matthias Klenk"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/3d6cbf06bb634f9f8256c49c48d6f93cnRwLA.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Matthias Klenk&nbsp;
                    </span>
                    <span>🇨🇦</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>User Researcher</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Stocksy</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <g clipPath="url(#clip0_2219_10179)">
                        <path
                          d="M4.06295 7.4859C4.02151 7.21886 4.00002 6.94528 4.00002 6.66671C4.00002 3.72119 6.40354 1.33337 9.36844 1.33337C12.3333 1.33337 14.7369 3.72119 14.7369 6.66671C14.7369 7.33209 14.6142 7.96901 14.3901 8.55638C14.3436 8.67837 14.3203 8.73936 14.3098 8.78698C14.2993 8.83416 14.2953 8.86736 14.2941 8.91567C14.293 8.96444 14.2996 9.01816 14.3128 9.12559L14.5812 11.3057C14.6103 11.5417 14.6248 11.6597 14.5855 11.7455C14.5511 11.8207 14.49 11.8804 14.4141 11.913C14.3274 11.9503 14.2098 11.9331 13.9745 11.8986L11.851 11.5873C11.7401 11.5711 11.6847 11.5629 11.6342 11.5632C11.5843 11.5635 11.5497 11.5672 11.5008 11.5775C11.4514 11.5879 11.3883 11.6115 11.262 11.6588C10.6732 11.8794 10.035 12 9.36844 12C9.08964 12 8.81582 11.9789 8.54848 11.9382M5.08776 14.6667C7.06436 14.6667 8.66671 13.0251 8.66671 11C8.66671 8.975 7.06436 7.33337 5.08776 7.33337C3.11116 7.33337 1.50881 8.975 1.50881 11C1.50881 11.4071 1.57356 11.7987 1.69307 12.1645C1.74359 12.3192 1.76885 12.3965 1.77715 12.4493C1.7858 12.5045 1.78732 12.5355 1.78409 12.5912C1.78101 12.6446 1.76765 12.7049 1.74094 12.8256L1.33337 14.6667L3.32991 14.394C3.43888 14.3792 3.49337 14.3717 3.54095 14.372C3.59105 14.3724 3.61764 14.3751 3.66678 14.3849C3.71344 14.3942 3.78281 14.4187 3.92155 14.4676C4.2871 14.5967 4.67945 14.6667 5.08776 14.6667Z"
                          stroke="var(--black)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_2219_10179">
                          <rect width="16" height="16" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">
                      1 session <span className="grey-2-text">(0 reviews)</span>
                    </p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      3 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <div className="available-asap position-absolute">
                    <svg
                      fill="none"
                      width="16"
                      height="16"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#65FF8B"
                        strokeWidth="2.18182"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.6667 3.33333L5 23.3333H20L18.3333 36.6667L35 16.6667H20L21.6667 3.33333Z"
                      ></path>
                    </svg>
                    <span className="ml-1 font-weight-600">Available ASAP</span>
                  </div>
                  <img
                    alt="Sam Howard"
                    title="Sam Howard"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/a6cd8ef47b0543579c8964d78dbd2744GaTTw.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Sam Howard&nbsp;
                    </span>
                    <span>🇬🇧</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Principal UX Researcher</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Curio Labs</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      10 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <div className="available-asap position-absolute">
                    <svg
                      fill="none"
                      width="16"
                      height="16"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke="#65FF8B"
                        strokeWidth="2.18182"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.6667 3.33333L5 23.3333H20L18.3333 36.6667L35 16.6667H20L21.6667 3.33333Z"
                      ></path>
                    </svg>
                    <span className="ml-1 font-weight-600">Available ASAP</span>
                  </div>
                  <img
                    alt="Mohd Faizan Siddiqi"
                    title="Mohd Faizan Siddiqi"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/17e738c4d34843958555e8727efc36021QtQn.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Mohd Faizan Siddiqi&nbsp;
                    </span>
                    <span>🇮🇳</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Director</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Legalo Technology Services</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      16 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Cece Lin"
                    title="Cece Lin"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/7dc3927fa658482aabab6498bc3d968b5hBXH.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Cece Lin&nbsp;
                    </span>
                    <span>🇹🇼</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Sr. Product designer</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Ex - Yahoo</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      7 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Bailey Liu"
                    title="Bailey Liu"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/15378397d1114591b5a5672f7aae3b86Qb7A5.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Bailey Liu&nbsp;
                    </span>
                    <span>🇺🇸</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Senior Product Design Recruiter</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Pinterest</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      8 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Dawna Kelley"
                    title="Dawna Kelley"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/fc6e9d8f7ed74327b664ea85efd91b784Z3YY.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Dawna Kelley&nbsp;
                    </span>
                    <span>🇺🇸</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Product Designer</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>CodeScience</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      3 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Victoria Lorenzana"
                    title="Victoria Lorenzana"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/83fc48d654624cc991f1f38b3641d3aaKSxYQ.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Victoria Lorenzana&nbsp;
                    </span>
                    <span>🇲🇽</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Senior Product Marketing Manager</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Tala</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      12 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Heba Yehia"
                    title="Heba Yehia"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/cc8961544233480c97dc784f09f6fd2buKKAZ.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Heba Yehia&nbsp;
                    </span>
                    <span>🇪🇬</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Associate Director</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Agile</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      16 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
              <div className="sc-dBmzty dGxpIk cursor-pointer">
                <div className="mentor-avatar overflow-hidden">
                  <div className="image-dimmer"></div>
                  <img
                    alt="Lau de Miguel"
                    title="Lau de Miguel"
                    className=""
                    width="100%"
                    height="100%"
                    src="https://adplist-bucket.s3.amazonaws.com/media/profile_photos/1c47f28e593a4d6cb1b3b2f051dc21204U8xA.webp"
                  />
                </div>
                <div className="sc-eldPxv bJvagg mb-4" width="1440">
                  <p className="sc-kAyceB cCBfKf preview__content__name d-flex align-items-center text-truncate">
                    <span className="black-text font-weight-600 text-truncate">
                      Lau De Miguel&nbsp;
                    </span>
                    <span>🇦🇷</span>
                  </p>
                  <div className="preview__content__job grey-1-text">
                    <div className="item">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.1667 4.95833H2.83335C2.05095 4.95833 1.41669 5.59259 1.41669 6.37499V13.4583C1.41669 14.2407 2.05095 14.875 2.83335 14.875H14.1667C14.9491 14.875 15.5834 14.2407 15.5834 13.4583V6.37499C15.5834 5.59259 14.9491 4.95833 14.1667 4.95833Z"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.3334 14.875V3.54167C11.3334 3.16594 11.1841 2.80561 10.9184 2.53993C10.6527 2.27426 10.2924 2.125 9.91669 2.125H7.08335C6.70763 2.125 6.3473 2.27426 6.08162 2.53993C5.81594 2.80561 5.66669 3.16594 5.66669 3.54167V14.875"
                          stroke="var(--grey-1)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                      <p className="sc-jXbUNg kFsvSZ ml-2 line-clamp">
                        <span>Senior Product Designer</span>{" "}
                        <span className="grey-2-text">at</span>{" "}
                        <span>Mural</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <svg
                      fill="none"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
                    >
                      <path
                        d="M12 2.00003L15.09 8.26003L22 9.27003L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27003L8.91 8.26003L12 2.00003Z"
                        fill="#FFC200"
                        stroke="#FFC200"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text">New mentor</p>
                  </div>
                </div>
                <div className="preview__content__metadata grey-4-bg p-3 mt-auto d-flex justify-content-between">
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">Experience</p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      22 years
                    </p>
                  </div>
                  <div>
                    <p className="sc-dhKdcB fwahpz grey-2-text">
                      Avg. Attendance
                    </p>
                    <p className="sc-jXbUNg kFsvSZ grey-1-text font-weight-600">
                      100%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-5 d-flex justify-content-center">
                <button
                  type="button"
                  className="sc-jlZhew cKRinY text-truncate btn--default px-5 false btn btn-default"
                >
                  Load more mentors
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default findMentors;
