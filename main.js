const images = document.querySelectorAll('#carousel img');
const pagination = document.querySelector('#pagination');

function createPaginationMarkers() {
  images.forEach((img) => {
    const imgViewName = `--${img.id}`;
    img.style.viewTimelineName = imgViewName;
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.role = 'tab';
    marker.style.animationTimeline = imgViewName;
    marker.addEventListener('click', () => img.scrollIntoView());
    pagination.appendChild(marker);
  });

  document.body.style.timelineScope = `${Array.from(images).map(
    (image) => image.style.viewTimelineName
  )}`;
}

if (CSS.supports('view-timeline-axis', 'inline')) {
  createPaginationMarkers();
}

images[1].scrollIntoView();