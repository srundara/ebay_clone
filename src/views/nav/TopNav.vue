<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { topMenu } from "./menu";
</script>
<template>
  <div class="container">
    <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 top_nav_bar">
      <div class="nav_bar">
        <div class="top_left">
          <ul>
            <li>
              <a> Hi!</a>
            </li>
            <li class="menu">
              <a href="">Sign In</a>
            </li>
            <a> Or</a>
            <li class="menu">
              <a href="" to="">Register</a>
            </li>
            <li v-for="(menu, i) in topMenu.leftMenu" :key="i">
              <!-- <a href="">{{ menu.name }}</a> -->
              <RouterLink class="a" to="">{{ menu.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="top_right">
          <ul>
            <li v-for="(menu, i) in topMenu.rightMenu" :key="i">
              <RouterLink to="">{{ menu.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid top_category_bar">
    <div class="container">
      <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 mt-1">
        <div class="nav_search">
          <div class="row">
            <div class="col-lg-3 bg-gray">
              <div class="row">
                <div class="col-md-5 nav_img m-auto">
                  <RouterLink :to="{ name: '' }">
                    <img
                      src="../../assets/img/1200px-EBay_logo.svg.png"
                      alt=""
                    />
                  </RouterLink>
                </div>
                <div
                  class="col-md-7 m-auto btn"
                  style="display: flex; justify-content: space-between"
                >
                  <RouterLink to="" class="d-flex">
                    <span>Shop By Category</span>
                    <i class="fa-sharp fa-solid fa-chevron-down m-auto"></i>
                  </RouterLink>
                </div>
              </div>
            </div>
            <div class="col-lg-9 m-auto">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Text input with segmented dropdown button"
                />
                <button
                  type="button"
                  class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="">All Categories</span>
                </button>
                <button
                  class="btn btn-outline-success"
                  style="width: 200px"
                  type="submit"
                >
                  Search
                </button>
                <RouterLink to="" style="width: 120px; text-align: center"
                  >Advanced</RouterLink
                >
                <ul class="dropdown-menu dropdown-menu-end">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
