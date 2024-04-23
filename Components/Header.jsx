import React from "react";

const Header = () => {
  const menuList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "ERC20",
      link: "/create",
    },
    {
      name: "Contact Us",
      link: "#contactUs",
    },
    // {
    //   name: "Blog",
    //   link: "#",
    // },
  ];
  return (
    <header class="header-one">
      <div class="header-menu-area header-area">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-2 col-md-3 d-flex align-items-center">
              <div class="logo">
                <a href="/">
                  <b> <div className="text-md text-b" style={{color:"#ff06b7", fontSize:25, fontStyle:"bold"}}> EtherealMint</div> </b>
                </a>
              </div>
            </div>
            <div class="col-xl-10 col-lg-10 col-md-9">
              <div class="header-right ">
                <a href="/#swap" class="top-btn coin-btn">
                  Transfer token
                </a>
              </div>
              <div class="header_menu f-right">
                <nav id="mobile-menu">
                  <ul className="new-nav-class" class="main-menu">
                    {menuList.map((menu, i) => (
                      <li class="resulta" key={i + 1}>
                        <a href={menu.link}>{menu.name}</a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
