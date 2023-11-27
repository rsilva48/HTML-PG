<template>
    <div class="container-flex fixed-md-bottom bg-white" style="--bs-bg-opacity: 0.9">
        <div class="container">
            <footer
                class="footer d-flex flex-wrap justify-content-between align-items-center px-1 py-2 py-md-3 my-4 my-md-4 border-top"
            >
                <div class="col-md-4 d-flex align-items-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <i class="bi bi-code" width="30" height="24"></i>
                    </a>
                    <span class="mb-3 mb-md-0 text-body-secondary">2023 Roger Silva</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li class="ms-3">
                        <a class="text-body-secondary" href="https://github.com/rsilva48">
                            <i class="bi bi-github" width="24" height="24"></i
                        ></a>
                    </li>
                    <li class="ms-3">
                        <a class="text-body-secondary" href="https://gitlab.com/silvara99">
                            <i class="bi bi-gitlab" width="24" height="24"></i
                        ></a>
                    </li>
                    <li class="ms-3">
                        <a class="text-body-secondary" href="https://www.linkedin.com/in/rasilvab/">
                            <i class="bi bi-linkedin" width="24" height="24"></i
                        ></a>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppFooter',
}
</script>
