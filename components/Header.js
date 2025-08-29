export function Header() {
    return `
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <img src="images/masp-logo.png" alt="MASPメインロゴ" class="logo-img desktop-logo">
                        <img src="images/masp-symbol.png" alt="MASPシンボルロゴ" class="logo-img mobile-logo">
                    </div>
                    <div class="spacer"></div>
                    <nav class="nav-menu">
                        <a href="#service" class="nav-link">SERVICE</a>
                        <a href="#use-case" class="nav-link">USE CASE</a>
                        <a href="#price" class="nav-link">PRICE</a>
                        <a href="#blog" class="nav-link">BLOG</a>
                        <a href="#contact" class="nav-link mobile-only">CONTACT</a>
                    </nav>
                    <button class="btn btn-primary contact-btn">
                        お問い合わせ
                    </button>
                </div>
            </div>
        </header>
    `;
}
