# Portfolio projects

`gradient-descent/` is the production build of the interactive course at
[Jacob19999/gradient-descent](https://github.com/Jacob19999/gradient-descent),
currently built from commit `dd2dd02`. It is served at
`/portfolio/gradient-descent/` and linked from the homepage portfolio section.

To refresh it, build the course with `npm run build`, then replace the contents
of `portfolio/gradient-descent/` with the contents of the course's `dist/`
directory. Preserve the directory structure: its JavaScript, styles, fonts,
and model weights load from `assets/` relative to `index.html`.

`mission-control/` is a read-only replay of the EDF mission-control console from
[Jacob19999/tvc-retro-propulsion](https://github.com/Jacob19999/tvc-retro-propulsion)
(`simulation/isaac/mission_control`). It is a static page served at
`/portfolio/mission-control/`: the real UI replays 13 recorded NVIDIA Isaac Sim
flights (convex SOCP powered-descent guidance on an electric ducted-fan
vehicle, including two failures) from gzipped JSON in `api/`. Nothing runs
server-side; launching new missions is disabled by `demo-shim.js`. To refresh
it, run `python -m mission_control.export_static_demo <this repo>/portfolio/mission-control`
from `simulation/isaac` in the source repo, then replace this directory. It must
stay together: every URL is relative to `index.html`.

The other portfolio cards link to separate sites:

- Optimist Club of Minnesota Valley: https://optimistmv.com/
- Toby Leonard for Mankato Mayor: https://www.mankatomayor.com/
- Jackie Henry for Minnesota Senate: https://www.henry4senate.com/
- Joel Hollerich for District 77 School Board: https://www.joelhollerich.com/
