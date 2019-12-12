<template>
  <div id="about" class="view">
    <h1 class="section-title">About</h1>
    <div class="about-content">
      <p class="content-title">
        <font-awesome-icon icon="code" />
        Tech stack
      </p>
      <div class="stacks">
        <div class="frontend">
          <p class="stack-title">Frontend</p>
          <p>Repository</p>
          <div class="tech-list">
            <Tech
              :data="frontend.repository"
              size="3x"
            />
          </div>
          <p>Techs</p>
          <div class="tech-list">
            <Tech
              :data="item"
              :key="index"
              size="2x"
              v-for="(item, index) in frontend.techs"
            />
          </div>
        </div>
        <div class="backend">
          <p class="stack-title">Backend</p>
          <p>Repository</p>
          <div class="tech-list">
            <Tech
              :data="backend.repository"
              size="3x"
            />
          </div>
          <p>Techs</p>
          <div class="tech-list">
            <Tech
              :data="item"
              :key="index"
              size="2x"
              v-for="(item, index) in backend.techs"
            />
          </div>
          <p>Running on</p>
          <div class="tech-list">
            <Tech
              :data="item"
              :key="index"
              size="2x"
              v-for="(item, index) in backend.hosting"
            />
          </div>
        </div>
      </div>
      <p class="author-text">
        Coded with <font-awesome-icon icon="heart" class="heart" /> by <a href="http://brebaje.es" class="author-link">@brebaje</a>
      </p>
    </div>
  </div>
</template>

<script>
import { backend, frontend } from '@/data/techs';
import Tech from '@/components/About/Tech.vue';

export default {
  name: 'About',
  components: {
    Tech,
  },
  data() {
    return {
      backend,
      frontend,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../styles/view";

#about {
  @extend %view;
  font-family: $codeFont;
  font-feature-settings: "calt" 1; // IE 10+, Edge
  font-variant-ligatures: contextual; // CodeMirror

  .section-title {
    color: $blue;
  }

  .about-content {
    .content-title {
      border: 1px solid $text;
      border-bottom: 0;
      display: inline-block;
      font-size: 1.3rem;
      margin: 0;
      padding: 15px;
    }

    .stacks {
      // inverted
      background-color: $text;
      color: $bg;
      padding-bottom: 15px;

      @include sm-screen {
        padding-left: 15px;
      }

      .backend,
      .frontend {
        padding: 15px;

        .stack-title {
          font-size: 1.3rem;
          font-weight: bold;
        }

        .tech-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;

          @include sm-screen {
            justify-content: normal;
          }
        }
      }
    }

    .author-text {
      font-family: $mainFont;
      font-weight: bold;

      .heart {
        color: $green;
      }

      .author-link {
        color: $blue;
        text-decoration: none;

        &:focus,
        &:hover,
        &:visited {
          color: $blue;
        }
      }
    }
  }
}
</style>
