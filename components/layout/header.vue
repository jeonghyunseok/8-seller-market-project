<template>
  <header class="p-3 mb-3 border-bottom">
    <div class="container">
      <div class="row">
        <div>
          <div class="text-left">
            <img
              src="@/static/icon.png"
              alt="mdo"
              width="30"
              height="30"
              class="rounded-circle"
              style="margin-bottom: 10px"
            />
            <span
              :style="{
                'margin-left': '10px',
                'font-size': '25px',
                'font-weight': '600',
              }"
              >PRE-SELLER-MARKET</span
            >
          </div>
        </div>
        <!-- <div class="col-md-4 col-xs-12 col-sm-4"></div> -->
        <!-- <div class="col-md-6 col-xs-12 col-sm-4">
          <div
            class="text-right"
            :style="{ 'font-size': '20px', 'font-weight': '400' }"
          >
            LOGIN
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="30"
              height="30"
              class="rounded-circle"
            />
          </div>
        </div> -->
      </div>
      <!-- <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
        >
          <img
            src="@/static/icon.png"
            alt="mdo"
            width="60"
            height="60"
            class="rounded-circle"
          />
        </a>
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li><a href="#" class="navbar-brand">PRE-SELLER 마켓</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Inventory</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Customers</a></li>
          <li><a href="#" class="nav-link px-2 link-dark">Products</a></li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <div class="dropdown text-end">
          <a
            href="#"
            class="d-block link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="32"
              height="32"
              class="rounded-circle"
            />
          </a>
          <ul
            class="dropdown-menu text-small"
            aria-labelledby="dropdownUser1"
            style=""
          >
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div> -->
    </div>
  </header>
</template>
<script>
export default {
  name: 'Header',
}
</script>
