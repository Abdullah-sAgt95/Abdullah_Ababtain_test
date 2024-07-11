<template>
    <aside :class="`${is_expanded && 'is-expanded'}`">
        <!-- Logo -->
        <div class="logo text-center">
            <img src="../assets/Gittax-removebg-preview.png" alt="Logo">
        </div>

        <!-- For the closing menu -->
        <div class="menu-toggle-wrap">
            <button class="menu-toggle">
                <span class="material-icons" @click="ToggleMenu">
                    keyboard_double_arrow_right
                </span>
            </button>
        </div>
        
        <!-- Menu and "seciotns" -->
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>
            
            <router-link class="button" to="/t">
                <span class="material-symbols-outlined">lab_profile</span>
                <label for="invoicesReports">Invoices And Reports </label>
                <select name="" id="invoicesReports">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
            </router-link>
            
            <router-link class="button" to="/affiliate">
                <span class="material-symbols-outlined">license</span>
                <span class="text">Affiliate</span>
            </router-link>
            
            <router-link class="button" to="/contact">
                <span class="material-symbols-outlined">chat</span>
                <span class="text">Contact Us</span>
            </router-link>
            
            <router-link class="button" to="/permissions">
                <span class="material-symbols-outlined">encrypted</span>
                <span class="text">Permissions</span>
            </router-link>
            
            <router-link class="button" to="/serviceslink">
                <span class="material-symbols-outlined">manufacturing</span>
                <span class="text">Services Link</span>
            </router-link>
            
            <router-link class="button" to="/videos">
                <span class="material-symbols-outlined">dvr</span>
                <span class="text">Videos</span>
            </router-link>
            <br><br>
            <route-link>
                <div class="form-check form-switch check-ops">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault1">
                    <label class="form-check-label" for="flexSwitchCheckDefault1">اللغة العربية</label>
                </div>
            </route-link>

            <route-link>
                <div class="form-check form-switch check-ops">
                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2">
                    <label class="form-check-label" for="flexSwitchCheckDefault2">Night mode</label>
                </div>
            </route-link>
                <br><br>
            <router-link>
                <!-- <section class="bg-light">
                    <div class="container">
                        <div class="text-center">
                            <h2>Stay in The Loop</h2>
                            <p class="lead"> Get The Latest updates as they happen ....</p>
                        </div>
                        <div class="row justify-content-center">
                            <div class="col-md-8 text-center">
                                <p class="text-muted my-4"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, minima.</p>
                                <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#reg-modal">Register for Updates</button>
                            </div>
                        </div>
                    </div>
                </section> -->
                <button class="btn btn-warning check-ops" type="button" data-bs-toggle="modal" data-bs-target="#reg-modal">Download App</button>

                <!-- modal -->
                <div class="modal fade" id="reg-modal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true" >
                    <div class="modal-dialog">
                        <div class="modal-content bg-secondary">
                            <!-- modal-header -->
                            <div class="modal-header">
                                <h5 class="modal-title text-light" id="modal-title">Add New Testimonial</h5>
                                <button class="btn-close bg-light" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <!-- modal-body -->
                            <div class="modal-body">
                                <div class="drag-area text-center">
                                    <div class="icon text-light">
                                        <br>
                                        <span class="material-symbols-outlined text-light">add_photo_alternate</span>
                                        <header>Drag Your image Here Or Browse</header>
                                        <small>Max Size 5 MB, 35*35 Pixel Supported Format Jpg, Png</small>
                                        <button class="text-light">.</button>
                                        <br><br>
                                        <input type="file" height="1px" width="1px">
                                    </div>
                                </div>
                                <br><br>
                                <label for="modal-userName" class="form-label text-light">User Name</label>
                                <input type="text" class="form-control bg-secondary" id="modal-userName">

                                <label for="modal-companyName" class="form-label text-light">Company Name</label>
                                <input type="text" class="form-control bg-secondary" id="modal-companyName">
                                
                                <label for="modal-content" class="form-label text-light">Content</label>
                                <textarea name="" id="modal-content" class="form-control bg-secondary" maxlength="100"></textarea>
                            </div>
                            <!-- modal-footer -->
                            <div class="modal-footer">
                                <button class="btn btn-warning">Save</button>
                            </div>
                        </div>
                    </div>
                </div>

            </router-link>
            
            <!-- Modal -->
            <!-- POP-up -->
            


    </div>

    </aside>
</template>

<script setup>
    import { ref } from 'vue'

    const is_expanded = ref(false)

    const ToggleMenu = () => {
        is_expanded.value = !is_expanded.value
    }
</script>

<style lang="scss" scoped>

aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh; // take the whole height oe the screen.
    overflow: hidden;
    padding: 1rem; // = 16px
    background-color: var(--dark);
    color: var(--light);
    transition: 0.2s ease-out;

    &.is-expanded {
        width: var(--sidebar-width);

        .menu-toggle-wrap {
            top: -3rem;
            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3, 
        .button,
        .text,
        .check-ops {
            opacity: 1;
        }

        .button {
            .material-icons,
            .material-symbols-outlined {
                margin-right: 0.5rem;
            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 2.6rem; // 64px
        }
    }
    
    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons,
            .material-symbols-outlined {
                font-size: 2rem;
                color: gray;
                transition: 0.2s ease-out;
            }

            &:hover {
                .material-icons,
                .material-symbols-outlined {
                    color: var(--primary);
                    transform: translateX(0.5rem);
                }
            }
        }
    }

    h3, 
    .button,
    .text,
    .check-ops {
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3 {
        color: var(--grey);
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase; // ttu => shortcut...
    }

    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: 0.5rem 1rem;
            transition: 0.2 ease-out;

            .material-icons,
            .material-symbols-outlined {
                font-size: 2rem;
                color: gray;
                transition: 0.2s ease-out;
                margin-bottom: 0.5rem;
            }

            .text {
                color: var(--light);
                transition: 0.2s ease-out;
            }

            &:hover, &.router-link-exact-active {
                background-color: var(--dark-alt);

                .material-icons,
                .material-symbols-outlined,
                .text {
                    color: var(--primary);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    .drag-area {
        border: 2px dashed lightgray;
        height: 150px;
        border-radius: 6px;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }

    .drag-area .active {
        border: 2px solid pink;
    }

    .drag-area .icon {
        font-size: 10px;
    }

}

</style>