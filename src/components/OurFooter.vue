<template>
  <div class="our-footer">
    <div class="lets-talk">
      <img src="@/assets/imgs/logo-symbol.svg" alt="">
      <a href="/contact">let's talk</a>
    </div>
    <div class="socials">
      <ul>
        <li><a href="#insta">Instagram</a></li>
        <li><a href="#Behance">Behance</a></li>
        <li><a href="#linkedin">Linkedin</a></li>
        <li><a href="#twitter">X</a></li>
      </ul>
    </div>
    <div class="routing-banner">
      <ul>
        <li><a href="/about">Agency</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="copy-writes">
      <p>&copy; <span> {{ new Date().getFullYear() }}</span>. All rights
        reserved.</p>
    </div>
    <div class="formal-contact">
      <div class="phone-main">
        <p>+1-234-5678910</p>
        <p>me@example.com</p>
      </div>
      <div class="st-addr">
        <a href="#a-map-on-google">
          Seventh Ave 7, New York City
        </a>
      </div>
    </div>
    <div class="privacy">
      <a href="#a-privacy-policy">Privacy Policy</a>
    </div>
  </div>
</template>

<style lang="scss">
.our-footer {
  height: 560px;
  background-color: #e9e9e7;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .lets-talk {
    font-size: 52px;
  }


  .routing-banner {
    flex-basis: 100%;
    padding: 5px;
    border-top: 1px solid $primary1;
    border-bottom: 1px solid $primary1;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      padding: 0;
    }
  }
  .copy-writes, .formal-contact, .privacy {
    flex-basis: 33%;
  }
  .formal-contact {
    display: flex;
    flex-wrap: wrap;
    .phone-main {
      display: flex;
    }
    .st-addr {
      flex-basis: 100%;
    }
  }
  .copy-writes {
    align-self: end;
  }
  .privacy {
    align-self: end;
  }
}
</style>

<script setup >
</script>