const w = window,
  d = document;
export function responsiveMedia(
  id,
  mediaQuery,
  htmlMobileContent,
  htmlDesktopContent
) {
  let breakpoint = w.matchMedia(mediaQuery);
  //console.log(breakpoint);
  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = htmlDesktopContent;
    } else {
      d.getElementById(id).innerHTML = htmlMobileContent;
    }
    console.log(breakpoint, e.matches);
  };
  //breakpoint.addEventListener("change", responsive(breakpoint));
  //breakpoint.addListener(responsive);

  try {
    breakpoint.addEventListener("change", responsive);
  } catch (e) {
    try {
      breakpoint.addListener(responsive);
    } catch (e2) {
      console.log(e2);
    }
  }
  responsive(breakpoint);
}
