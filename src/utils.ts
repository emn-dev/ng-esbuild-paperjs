// import paper from 'paper';
// import * as paper from 'paper/dist/paper-core';
import paper from 'paper/dist/paper-core'; // You can do this if "esModuleInterop": true, is in tsconfig

const ZOOM_INCREMENT = 0.25;

export function initTools() {
  const tool = new paper.Tool();

  tool.onMouseDown = onMouseDown;
  window.onwheel = onWheelHandler;
  tool.onMouseDrag = onMouseDrag;

  function onMouseDown(event: paper.ToolEvent) {
    paper.project.activeLayer.selected = false;

    if (!event.item) return;

    (event.item as paper.Path).fullySelected = true;

    const pGroup = event.item as paper.Group;

    console.log('pGroup', pGroup);
  }

  function onMouseDrag(event: paper.ToolEvent) {
    const offset = event.downPoint.subtract(event.point);
    paper.project.view.center = paper.project.view.center.add(offset);
  }

  function onWheelHandler(evt: any) {
    const point = paper.project.view.getEventPoint(evt);

    if (evt.deltaY < 0) {
      paper.project.view.scale(1 + ZOOM_INCREMENT, point);
    }
    if (evt.deltaY > 0) {
      paper.project.view.scale(1 / (1 + ZOOM_INCREMENT), point);
    }
  }
}

export const mySvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="54.4cm" height="152.4cm" viewBox="0 0 54.4 152.4">
<g id="export">
  <g>
  <g id="Group_a">
      <path d="M26.15826,3.98756c4.13187,0.08945 8.26398,0.16883 11.42098,0.22388c3.157,0.05505 5.33889,0.08578 6.97207,0.09003c2.43906,0.00637 4.82413,-0.0661 7.25041,-0.30175c0.37777,-0.03669 0.70122,-0.07184 1.02419,-0.11102c0.12213,-0.01152 0.38006,-0.08642 0.30168,0.12662c-0.01146,0.03112 -0.01747,0.06196 -0.03326,0.09331c-0.06935,0.18213 -0.14692,0.36109 -0.23905,0.55154c-0.5951,1.23022 -1.68312,2.43087 -2.5522,3.47311c-0.46081,0.5526 -1.01927,1.22029 -1.60521,1.9318c-0.58593,0.71151 -1.19932,1.46685 -1.60848,1.97556c-0.455,0.56571 -1.05731,1.26469 -1.42711,1.89118c-0.6112,1.03543 -0.60712,1.98919 -0.37068,3.14803c0.25556,0.90209 0.56194,1.79067 0.9364,2.65054c0.19441,0.44646 0.42359,0.92837 0.6681,1.40232c0.057,0.11045 -0.02299,0.24572 -0.14747,0.24894c-2.00482,0.05198 -4.01282,0.09729 -5.96364,0.13244c-1.84612,0.03326 -3.6409,0.05811 -5.39184,0.07567c-1.75094,0.01755 -3.45805,0.02783 -5.16517,0.03119c-3.62995,0.12326 -7.27143,0.2086 -10.90335,0.2456c-2.11344,-0.0381 -4.28182,-0.07384 -6.29684,-0.7843c-0.89869,-0.31687 -1.72886,-0.73964 -2.49635,-1.26645c-0.7675,-0.5268 -1.47233,-1.15763 -2.08618,-1.86683c-0.62543,-0.71939 -1.22936,-1.45745 -1.8339,-2.24195c-0.60454,-0.7845 -1.20967,-1.61545 -1.82053,-2.52021c-0.61087,-0.90476 -1.22745,-1.88334 -1.61833,-2.51468c-0.25979,-0.4196 -1.08067,-1.69768 -1.21103,-2.21776c-0.12351,-0.48852 -0.10476,-0.95428 0.18547,-1.37911c0.37507,-0.54908 1.28103,-1.01139 1.86734,-1.28362c0.49182,-0.22833 1.00177,-0.40448 1.53041,-0.52532c0.47576,-0.10875 0.94849,-0.12999 1.43506,-0.10841c0.52284,0.02377 1.04944,-0.10626 1.55949,-0.20048c0.40955,-0.07566 0.82589,-0.10382 1.24,-0.14385c0.84209,-0.0814 2.47269,-0.23717 4.20378,-0.36822c1.73109,-0.13106 3.56268,-0.23741 5.60861,-0.31546c2.04593,-0.07805 4.30619,-0.1278 6.56662,-0.14234z"/>
    </g>
  </g>
  <g>
  <g id="Group_b">
      <path d="M36.57614,29.06843c2.04741,0.0066 3.88159,0.04897 5.6162,0.11953c1.73461,0.07056 3.36965,0.16932 4.21407,0.22129c0.41526,0.02556 0.83232,0.03917 1.24427,0.10049c0.51304,0.07637 1.04385,0.18794 1.56554,0.14593c0.48553,-0.03854 0.95871,-0.03381 1.43797,0.05826c0.53254,0.10231 1.04832,0.26056 1.54782,0.47159c0.59545,0.2516 1.517,0.68201 1.911,1.21767c0.30487,0.41444 0.33987,0.87927 0.23348,1.3718c-0.11213,0.52431 -0.88791,1.83026 -1.13289,2.25867c-0.36861,0.6446 -0.95066,1.6441 -1.52958,2.56963c-0.57891,0.92553 -1.15468,1.77709 -1.73147,2.58221c-0.57679,0.80512 -1.1546,1.5638 -1.75454,2.30458c-0.58872,0.73019 -1.27111,1.38523 -2.01976,1.9385c-0.74864,0.55327 -1.56355,1.00476 -2.45063,1.3528c-1.98899,0.78035 -4.15481,0.89174 -6.26563,1.00357c-3.21733,0.07955 -6.44349,0.12142 -9.66356,0.13237c-0.07938,0.00027 -0.15875,0.00052 -0.23812,0.00075c-0.33461,0.00098 -0.66914,0.00163 -1.00359,0.00195c-1.70619,0.05622 -3.41262,0.10553 -5.16311,0.14909c-1.75049,0.04356 -3.54504,0.08136 -5.3912,0.11255c-0.58519,0.00988 -1.17556,0.01903 -1.76947,0.02749c-0.07931,0.00113 -0.15867,0.00225 -0.2381,0.00335c-1.30872,0.01819 -2.63353,0.03303 -3.95706,0.04493c-0.12452,0.00113 -0.20918,-0.13127 -0.15607,-0.24364c0.22782,-0.48219 0.44004,-0.97181 0.61875,-1.42478c0.34423,-0.87242 0.61941,-1.77114 0.84333,-2.6816c0.19585,-1.16638 0.16664,-2.11971 -0.48032,-3.13317c-0.39144,-0.61321 -1.01778,-1.29074 -1.49224,-1.84023c-0.42666,-0.49412 -1.06605,-1.22759 -1.67645,-1.91822c-0.61041,-0.69063 -1.19183,-1.33842 -1.67165,-1.8746c-0.90492,-1.01127 -2.03418,-2.17321 -2.67185,-3.38192c-0.09872,-0.18711 -0.18249,-0.36326 -0.25816,-0.54286c-0.01688,-0.03078 -0.02396,-0.06139 -0.0365,-0.09209c-0.08576,-0.21018 0.17462,-0.14432 0.29708,-0.13708c0.32414,0.02789 0.64863,0.05173 1.02744,0.07521c2.43303,0.15084 4.81918,0.14002 7.25653,0.04853c1.63204,-0.06125 3.81152,-0.16811 6.96468,-0.3333c3.15315,-0.1652 7.27997,-0.38874 11.40621,-0.62233c2.25956,-0.06437 4.52018,-0.09353 6.56759,-0.08692z"/>
    </g>
  </g>
</g>
</svg>
`;

export function convertSvgToCanvas() {
  const defaultProject = new paper.Project('myCanvas');
  defaultProject.addLayer(new paper.Layer({ name: 'export' }));
  initExport();

  function initExport() {
    const tempProject = new paper.Project(new paper.Size(1, 1));

    const layer = tempProject.importSVG(mySvg, { insert: false });

    // @ts-ignore
    const exportLayer = defaultProject.layers['export'];
    exportLayer.clear();

    // @ts-ignore
    layer.children['export']
      .getItems({ recursive: true })
      // @ts-ignore
      .forEach((i) => (i.applyMatrix = true));
    // @ts-ignore
    layer.children['export'].children.forEach((grp: paper.Group) => {
      const newGrps = addNewGrps(grp);
      newGrps.style = { strokeWidth: 0.5 } as any;
      exportLayer.addChild(newGrps);
    });

    tempProject.remove();
    // @ts-ignore
    paper.project = defaultProject;
  }

  function addNewGrps(paperGroup: paper.Group) {
    const newGrp = new paper.Group();

    const rawItems = paperGroup.getItems({
      match: (i: paper.Group) => i.name && i.name.startsWith('Group'),
    });

    newGrp.addChildren(rawItems);
    return newGrp;
  }
}