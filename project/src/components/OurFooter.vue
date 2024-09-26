<template>
  <div class="our-footer">
    <div class="lets-talk">
      <img src="@/assets/imgs/logo-symbol.svg" alt="" />
      <a href="/contact">let's talk</a>
      <CircleCursor />
    </div>
    <div class="socials">
      <ul>
        <li>
          <a href="#insta">Instagram</a>
          <CircleCursor />
        </li>
        <li>
          <a href="#Behance">Behance</a>
          <CircleCursor />
        </li>
        <li>
          <a href="#linkedin">Linkedin</a>
          <CircleCursor />
        </li>
        <li>
          <a href="#twitter">X</a>
          <CircleCursor />
        </li>
      </ul>
    </div>
    <div class="routing-banner">
      <ul>
        <li>
          <a href="/about">Agency</a>
          <CircleCursor />
        </li>
        <li>
          <a href="/work">Work</a>
          <CircleCursor />
        </li>
        <li>
          <a href="/services">Services</a>
          <CircleCursor />
        </li>
        <li>
          <a href="/contact">Contact</a>
          <CircleCursor />
        </li>
      </ul>
    </div>
    <div class="copy-writes">
      <p>
        &copy; <span> {{ new Date().getFullYear() }}</span
        >. All rights reserved.
      </p>
    </div>
    <div class="formal-contact">
      <div class="phone-main">
        <p>+1-234-5678910</p>
        <p>me@example.com</p>
      </div>
      <div class="st-addr">
        <a href="#a-map-on-google"> Seventh Ave 7, New York City </a>
      </div>
    </div>
    <div class="privacy">
      <a href="#a-privacy-policy">Privacy Policy</a>
    </div>
  </div>
</template>

<style lang="scss">
.our-footer {
  height: 520px;
  padding-top: 40px;
  background-color: #e9e9e7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px;

  .lets-talk {
    font-size: 82px;
    display: flex;
    flex-direction: column;

    img {
      width: 100px;
    }

    a {
      color: black;
    }
  }

  .socials {
    text-align: right;

    li {
      padding: 5px 0;

      a {
        color: black;
      }
    }
  }

  .routing-banner {
    flex-basis: 100%;
    border-top: 1px solid $primary1;
    border-bottom: 1px solid $primary1;
    // padding: 15px;
    height: 70px;

    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      margin-top: 4px;
      padding: 15px;

      font-size: 26px;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      a {
        color: black;
      }
    }
  }

  .copy-writes,
  .formal-contact,
  .privacy {
    flex-basis: 33%;
  }

  .copy-writes,
  .privacy {
    align-self: center;
  }

  .privacy {
    text-align: right;

    a {
      color: black;
    }
  }

  .formal-contact {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .phone-main {
      display: flex;
      flex-basis: 100%;
      justify-content: space-evenly;
      margin: 0 50px;
      height: 20px;

      & > :first-child {
        position: relative;

        &::after {
          content: '';
          width: 1px;
          height: 20px;
          background-color: $primary1;
          position: absolute;
          right: -15px;
        }
      }
    }

    .st-addr {
      flex-basis: 100%;
      text-align: center;
      align-self: start;

      a {
        color: black;
      }
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 20px;
    padding-top: 80px;

    .lets-talk {
      font-size: 60px;
    }

    .formal-contact {
      flex-basis: 100%;
      padding: 20px 0;

      & > * {
        padding: 10px 0;
      }

      .phone-main {
        height: auto;
        // flex-direction: column;
        // align-items: center;
        margin: 0;
        display: float;

        & > * {
          margin: 10px 0;
          // flex-basis: calc(50% - 20px);
        }

        & > :first-child::after {
          // display: none;
          right: -25px;
        }
      }
    }

    .privacy {
      order: 4;
      flex-basis: 100%;
      text-align: center;
      // padding: 5px;
    }

    .copy-writes {
      order: 5;
      flex-basis: 100%;
      text-align: center;
      // padding: 5px;
    }
  }
}
</style>

<script setup></script>
