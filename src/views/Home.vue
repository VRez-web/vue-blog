<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <blog-post :post="post" v-for="(post, i) in sampleBlogPost" :key="i" />
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent blogs</h3>
        <div class="blog-cards">
          <blog-card
            :post="post"
            v-for="(post, index) in sampleBlogCards"
            :key="index"
          />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-btn" to="#">
          Register for FireBlogs <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import blogPost from "@/components/BlogPost";
import blogCard from "@/components/BlogCard";
import Arrow from "@/assets/Icons/arrow-right-light.svg";

export default {
  name: "Home",
  components: {
    blogPost,
    Arrow,
    blogCard,
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: `Lorem ipsum dolor sit amet consectetur,
           adipisicing elit. Minus, animi amet  assumenda labore dolorem quasi repudiandae eum nisi,
            nostrum porro    voluptates molestiae corporis ipsum nihil modi beatae illum ab ut`,
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a Filter Title",
          blogHtml: "This is a Filter post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a Filter Title",
          blogHtml: "This is a Filter post title",
          blogCoverPhoto: "beautiful-stories",
        },
      ],
    };
  },

  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    },
  },
};
</script>


<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-btn {
      display: flex;
      font-size: 14px;

      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 300;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
