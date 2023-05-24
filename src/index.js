import "./style.css";

const toggleDrawer = (drawerToggleClass, drawerListClass) => {
  const drawerToggle = document.querySelectorAll(drawerToggleClass);
  const drawerList = document.querySelector(drawerListClass);

  drawerToggle.forEach((button) =>
    button.addEventListener("click", () => {
      drawerList.classList.toggle("hidden");
    })
  );
};

toggleDrawer(".drawer-toggle", ".drawer-list");
