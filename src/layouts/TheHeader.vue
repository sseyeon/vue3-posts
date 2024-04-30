<template>
  <header>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-primary"
      data-bs-theme="dark"
    >
      <div class="container-fluid">
        <RouterLink class="navbar-brand" active-class="active" to="/"
          >요니</RouterLink
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/about"
                >About</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" active-class="active" to="/posts"
                >게시글</RouterLink
              >
            </li>
          </ul>
          <div class="d-flex">
            <button
              class="btn btn-sm btn-outline-light"
              type="button"
              @click="goPage"
            >
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// eslint-disable-next-line no-unused-vars
const goPage = () => {
  router.push({
    name: "PostCreate",
  });
};
</script>
