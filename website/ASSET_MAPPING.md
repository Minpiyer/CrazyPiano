# Website Asset Mapping

Homepage assets are copied from `D:\CrazyPiano\pen-assets` into `public/images`.
The source assets remain unchanged.

| Website path | Design source |
| --- | --- |
| `public/images/profile/hsu-minpiyer-hero-enhanced.png` | `pen-assets/profile/hsu-minpiyer-hero-enhanced.png` |
| `public/images/about/about-teacher-student-stage-2024.jpg` | `pen-assets/about/about-teacher-student-stage-2024.jpg` |
| `public/images/youtube/*` | `pen-assets/youtube/*` |
| `public/images/gallery/*` | Selected Homepage assets from `pen-assets/gallery/*` |

## Lessons assets

| Website path | Design source | Usage |
| --- | --- | --- |
| `public/images/lessons/kids-piano-student-2024.jpg` | `pen-assets/lessons/kids-piano-student-2024.jpg` | Kids Piano Lessons hero and teaching block |
| `public/images/lessons/adult-piano-teacher.png` | `pen-assets/lessons/adult-piano-teacher.png` | Adult Piano Lessons hero and teaching block |
| `public/images/lessons/exams-hero-teacher.png` | `pen-assets/lessons/exams-hero-teacher.png` | Exams & Competitions hero |
| `public/images/gallery/music-activity-teacher-stage-talk.jpg` | `source-materials/gallery/recital/S__33955862_0.jpg` | Exams Teacher Experience block; neutral music-activity context, not presented as a judging-session photograph |
| `public/images/lessons/custom-example-01-difficult.jpg` | `pen-assets/lessons/custom-example-01-original.jpg` | Difficult score preview; website copy labels it 困難版 |
| `public/images/lessons/custom-example-01-custom.jpg` | `pen-assets/lessons/custom-example-01-adapted.jpg` | Custom score preview; website copy labels it 客製版 |

## About assets

| Website path | Design source | Usage |
| --- | --- | --- |
| `public/images/about/about-teacher-piano-portrait.png` | `pen-assets/about/about-teacher-piano-portrait.png` | About hero |
| `public/images/about/about-teaching-in-action-piano-cajon.jpg` | `pen-assets/about/about-teaching-in-action-piano-cajon.jpg` | About Teaching in Action; public-use permission remains required |

## Gallery assets

The Gallery page uses the approved editorial selection copied from `pen-assets/gallery` with unchanged filenames:

- `gallery-teaching-adult-lesson.jpg`
- `gallery-ensemble-piano-drums.jpg`
- `gallery-ensemble-violin-piano.jpg`
- `gallery-ensemble-teacher-student-stage.jpg`
- `gallery-posture-child-hand-position.jpg`
- `gallery-posture-video-preview.jpg`
- `gallery-recital-student-solo-stage.jpg`
- `music-activity-teacher-stage-talk.jpg`
- `gallery-performance-teacher-studio-piano.jpg`
- `gallery-performance-teacher-recital-hall.jpg`
- `gallery-performance-editorial-piano-reflection.jpg`
- `gallery-judging-event-portrait.jpg`
- `gallery-judging-live-session.jpg`

## Production photo replacements — 2026-10-10

The source files remain unchanged. Only the production-safe website copies below are referenced at runtime.

| Removed production asset | New production asset | Source path | Replacement reason | Permission-risk reduction |
| --- | --- | --- | --- | --- |
| `public/images/gallery/hero-student-recital-group-2024.jpg` | `public/images/gallery/homepage-performance-recital-stage.jpg` | `source-materials/gallery/performace/S__33955852_0.jpg` | Replace the multi-student Homepage gallery hero with a neutral teacher performance image | Removes a group photo containing about ten identifiable minors from the deployed website |
| `public/images/gallery/gallery-recital-teacher-students-group.jpg` | `public/images/gallery/music-activity-teacher-stage-talk.jpg` | `source-materials/gallery/recital/S__33955862_0.jpg` | Preserve the recital/activity narrative while making the teacher the principal identifiable subject | Removes a two-child group portrait; remaining audience details are low-identifiability |
| `public/images/gallery/competition-judging-students-certificates-2023.jpg` | `public/images/gallery/music-activity-teacher-stage-talk.jpg` | `source-materials/gallery/recital/S__33955862_0.jpg` | Replace the Homepage certificate group with neutral music-activity context | Removes four identifiable minors and visible certificates |
| `public/images/lessons/exams-competition-judging-2023.jpg` | `public/images/gallery/music-activity-teacher-stage-talk.jpg` | `source-materials/gallery/recital/S__33955862_0.jpg` | Present teacher/activity experience without implying that this photograph documents a judging session | Removes the route-specific alias of the same four-student certificate image |

`public/images/gallery/gallery-judging-live-session.jpg` is intentionally retained for now and remains **REPLACEMENT STILL REQUIRED BEFORE PUBLIC LAUNCH**.

Gallery posture video destination: `https://www.youtube.com/watch?v=BBhqRfK0UZU&t=114s`. The timestamp is intentionally preserved and the card opens YouTube without autoplay.

## Contact assets

| Website path | Design source | Usage |
| --- | --- | --- |
| `public/images/contact/line-add-friend-qr.jpeg` | `pen-assets/contact/line-add-friend-qr.jpeg` | Official LINE add-friend QR; preserve full image without crop, rotation, distortion, recoloring, or filters |
| `public/images/contact/youtube-scales-khoVWNOrBEU.jpg` | `pen-assets/contact/youtube-scales-khoVWNOrBEU.jpg` | Teaching Portfolio: scales / technique |
| `public/images/contact/youtube-bach-introduction-cMOq9T46eBY.jpg` | `pen-assets/contact/youtube-bach-introduction-cMOq9T46eBY.jpg` | Teaching Portfolio: Bach / interpretation |
| `public/images/contact/youtube-bach-practice-hlusAJ9v_vI.jpg` | `pen-assets/contact/youtube-bach-practice-hlusAJ9v_vI.jpg` | Teaching Portfolio: Bach / teaching |

The official QR decodes to `https://line.me/ti/p/dXFpD4P63M`. The Contact page uses this exact URL for the desktop/mobile Add Friend link without exposing a LINE ID.

## Production reminders

- Do not reference `source-materials` from application code.
- Confirm all `Public use permission required` entries in `PHOTO_USAGE_REVIEW.md` before production launch.
- Homepage Hero teacher photo is the approved final design image.
- `custom-example-01-custom.jpg` currently preserves the source preview's editing selection marks. Replace it with a clean formal export when available.
- Contact form backend is implemented at `app/api/contact/route.ts` with the Resend SDK. Production delivery requires server-side `RESEND_API_KEY` and a verified sender in `CONTACT_FROM_EMAIL`; neither value belongs in source control.
