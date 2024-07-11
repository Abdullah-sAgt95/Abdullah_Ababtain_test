

<template>
    <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <a href="#" class="arabic">
    <p class="top-right text-muted">اللغة العربية</p>
    </a>
    <div class="row border rounded-5 p-3 bg-white shadow box-area">

      <!-- Left Box -->
      <div
        class="col-md-6 d-flex justify-content-center align-items-center flex-column bg-secondary bg-gradient left-box">
        <div class="featured-image mb-3 justify-content-center text-center">
          <img src="../assets/Gittax-removebg-preview.png" alt="Background.." class="img-fluid image-width">
          <p class="text-white fs-4">Gittax</p>
        </div>
      </div>

      <!-- Right Box -->
      <div class="col-md-6 right-box">
        <div class="row align-items-center">

          <div class="header-text mb-4">
            <h3 class="fw-bold">Log In</h3>
            <div class="row">
              <small class="text-muted">Don't have account? <a href="#" class="text-black fw-bold">Sign up</a></small>
            </div>
          </div>

          <label for="email" class="mb-2 fw-bold">Email Address</label>
          <div class="input-group mb-3">
            <input type="email" class="form-control form-control-lg fs-6" id="email">
          </div>

          <label for="pass" class="mb-2 fw-bold">Password</label>
          <div class="input-group mb-1">
            <div class="d-flex align-items-center w-100 border rounded-3">
              <input type="password" class="form-control form-control-lg fs-6 input-password-width" id="pass">
              <img src="../assets/hideImage.jpg" alt="hide Password" class="image-width-hide" id="eye-hide">
            </div>
          </div>
          <div class="input-group mb-5 d-flex justify-content-between">
            <div class="form-check">
              <input type="checkbox" class="form-check-input" id="formCheck">
              <label for="formCheck" class="form-check-label text-secondary"> <small>Remember </small> </label>
            </div>
            <div class="forgot text-right">
              <small> <a href="#" class="text-muted"> Forgot Password ?</a> </small>
            </div>
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-lg btn-warning w-100 fs-5"><small>Log In</small></button>
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-lg btn-light w-100 fs-5">
              <img src="../assets/google.jpg" alt="" class="googleIcon me-2">
              <small> Log In With Google </small>
            </button>
          </div>
          <div class="input-group mb-3 justify-content-center">
            <a href="#" class=" w-100 back text-muted text-center">&larr; Back To Home Page</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<!-- <script >
      let eyeIcon = document.getElementById("eye-hide");
      let password = document.getElementById("pass");

      eyeIcon.onclick = function() {
        if(password.type == "password") {
          password.type = "text";
          eyeIcon.src = "../assets/showImage.jpg";
        }
        else {
          password.type = "password";
          eyeIcon.src = "../assets/hideImage.jpg"
        }
      }
    </script> -->




<style>
@import url(https://fonts.googleapis.com/css?family=Poppins:wght@400;500);
body {
    font-family: 'Poppins', sans-serif;
    background: #ececec;
}

/* For the image */
.image-width {
    width: 100px;
}

/* for the row div */
.box-area {
    width: 930px;
}

/* width for the <small> */
.smWidth {
    width: 17rem;
}

/* Log in with Google */
.googleIcon {
    width: 20px;
}

/* right box */
.right-box {
    padding: 40px 30px 40px 40px;
}

/* custom Placeholder */
::placeholder {
    font-size: 16px;
}

/* Small devices responsive design */
@media only screen and (max-width: 768px) {
    .box-area{
        margin: 0 10px;
    }

    .left-box {
        height: 100px;
        overflow: hidden;
    }

    .right-box {
        padding: 20px;
    }
}

.back,
.arabic {
    text-decoration: none;
}

.input-password-width {
    /* width: 100%; */
    /* padding: 10px 0; */
    border: 0;
    outline: 0;
    /* font-size: 24px; */
}

/* .input-password-width:hover {
    border: 0;
    outline: 0;
} */

.image-width-hide {
    width: 35px; 
    cursor: pointer;
}

.top-right {
    position: relative;
    top: -272px;
    left: 908px;
    font-size: 13px;
}
</style>