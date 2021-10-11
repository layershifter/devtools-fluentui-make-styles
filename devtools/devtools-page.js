// @ts-check
chrome.devtools.panels.elements.createSidebarPane(
  "💅 makeStyles",
  (sidebarPanel) => {
    sidebarPanel.setPage("build/index.html");

    sidebarPanel.onShown.addListener((devtoolsWindow) => {
      devtoolsWindow.postMessage({ visible: true }, "*");
    });
  }
);
