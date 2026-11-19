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
| `public/images/lessons/adult-piano-teacher.png` | `pen-assets/lessons/adult-piano-teacher.png` | Adult Piano Lessons teaching block |
| `public/images/lessons/adult-piano-lesson-ai.jpeg` | `photo-candidates/adult/adult-piano-lesson.jpeg` | Adult Piano Lessons hero; AI-generated scene, labeled `AI 情境示意` |
| `public/images/lessons/exams-hero-teacher.png` | `pen-assets/lessons/exams-hero-teacher.png` | Previous Exams & Competitions hero; retained in assets but no longer referenced |
| `public/images/lessons/exams-competition-ai-scene.png` | `photo-candidates/exams-competitions/piano-achievement.png` | Exams & Competitions hero; AI-generated activity scene, labeled `AI 情境示意`; does not represent a real award recipient or organizer endorsement |
| `public/images/gallery/music-activity-teacher-stage-talk.jpg` | `source-materials/gallery/recital/S__33955862_0.jpg` | Exams Teacher Experience block; neutral music-activity context, not presented as a judging-session photograph |
| `public/images/lessons/custom-example-01-difficult.jpg` | `pen-assets/lessons/custom-example-01-original.jpg` | Difficult score preview; website copy labels it 困難版 |
| `public/images/lessons/custom-example-01-custom.jpg` | `source-materials/custom-arrangements/example-01/custom-example-01-custom-clean.jpg` | Clean, production-safe Custom score preview; website copy labels it 客製版 |

### Custom Scores clean preview — resolved 2026-10-11

- Clean source: `source-materials/custom-arrangements/example-01/custom-example-01-custom-clean.jpg`
- Production preview: `public/images/lessons/custom-example-01-custom.jpg`
- Retired source: `source-materials/custom-arrangements/example-01/adapted.jpg`; the prior website copy showed orange selected notes, a blue cursor, gray control points, and an active editing selection.
- Processing is deterministic only: proportional downscaling to `1280 × 1260`, JPEG preview compression, and three low-opacity diagonal `Crazy Piano / Sample` watermarks. No notes, text, rhythm, or musical content were redrawn or generated.
- The source file remains unchanged. The public page provides no PDF, original editing file, full-resolution source, or score-download control.
- Production blocker status: **RESOLVED**.

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

## 2026 Student Recital assets

The source photographs remain unchanged in the user-provided Desktop folder `學生發表會節目單/發表會合照`. The website uses eight selected copies; `S__35651609_0.jpg` was excluded because the blurred, high-contrast audience view was not suitable for clear web presentation. The user confirmed public website permission for the people shown in the selected photographs.

| Website path | Source filename | Usage |
| --- | --- | --- |
| `public/images/events/2026-student-recital/recital-group-photo.jpg` | `S__35651607_0.jpg` | Events overview, recital detail hero, and gallery |
| `public/images/events/2026-student-recital/teacher-coaching-piano-duet.jpg` | `S__35651611_0.jpg` | Recital gallery: preparation and coaching |
| `public/images/events/2026-student-recital/student-stage-performance.jpg` | `S__35651610_0.jpg` | Recital gallery: stage performance |
| `public/images/events/2026-student-recital/teacher-student-after-recital.jpg` | `S__35651603_0.jpg` | Recital gallery: post-performance portrait |
| `public/images/events/2026-student-recital/teacher-young-performers.jpg` | `S__35651604_0.jpg` | Recital gallery: teacher and performers |
| `public/images/events/2026-student-recital/family-recital-moment.jpg` | `S__35651605_0.jpg` | Recital gallery: family and recital moment |
| `public/images/events/2026-student-recital/family-stage-portrait.jpg` | `S__35651606_0.jpg` | Recital gallery: stage portrait |
| `public/images/events/2026-student-recital/teacher-student-stage-portrait.jpg` | `S__35651608_0.jpg` | Recital gallery: teacher and performer portrait |
| `public/images/events/2026-student-recital/recital-poster-with-venue.png` | `本次發表會海報_含地址版.png` | Official recital poster displayed in the event materials section; selected copy only, original Desktop source remains outside the repository |
| `public/images/events/2026-student-recital/recital-program-preview.png` | Rendered from `徐家超學生鋼琴發表會_單頁節目單_A4最終姓名版.pdf` | Web preview for the official one-page performance program |
| `public/images/events/2026-student-recital/recital-program.pdf` | `徐家超學生鋼琴發表會_單頁節目單_A4最終姓名版.pdf` | Official one-page program opened from the event page; selected copy only, source work files remain outside the repository |

## Contact assets

| Website path | Design source | Usage |
| --- | --- | --- |
| `public/images/contact/line-add-friend-qr.jpeg` | `pen-assets/contact/line-add-friend-qr.jpeg` | Official LINE add-friend QR; preserve full image without crop, rotation, distortion, recoloring, or filters |
| `public/images/contact/youtube-scales-khoVWNOrBEU.jpg` | `pen-assets/contact/youtube-scales-khoVWNOrBEU.jpg` | Teaching Portfolio: scales / technique |
| `public/images/contact/youtube-bach-introduction-cMOq9T46eBY.jpg` | `pen-assets/contact/youtube-bach-introduction-cMOq9T46eBY.jpg` | Teaching Portfolio: Bach / interpretation |
| `public/images/contact/youtube-bach-practice-hlusAJ9v_vI.jpg` | `pen-assets/contact/youtube-bach-practice-hlusAJ9v_vI.jpg` | Teaching Portfolio: Bach / teaching |

The official QR decodes to `https://line.me/ti/p/dXFpD4P63M`. The Contact page uses this exact URL for the desktop/mobile Add Friend link without exposing a LINE ID.

## Arrangement portfolio previews

The original PDFs remain in the local `Scores` source folder and are not copied into `public`. Only the six watermarked, web-sized previews below are available to the application. Each image is exported at a maximum width of 1400 px, compressed as WebP, and stamped with repeated low-opacity `CRAZY PIANO / ARRANGEMENT PREVIEW` watermarks. No PDF, full-resolution source, or score-download control is exposed by the website.

| Website path | Source document and page | Usage |
| --- | --- | --- |
| `public/images/scores/prince-ali/primo-opening.webp` | `Scores/Prince Ali/Prince Ali 第一部・橫式 A4 合併版・音符放大版.pdf`, page 1 | Prince Ali overview card and primo opening preview |
| `public/images/scores/prince-ali/secondo-opening.webp` | `Scores/Prince Ali/Prince Ali 第二部・橫式 A4 合併版・音符放大版.pdf`, page 1 | Prince Ali secondo opening preview |
| `public/images/scores/prince-ali/development-detail.webp` | `Scores/Prince Ali/Prince Ali 第一部・橫式 A4 合併版・音符放大版.pdf`, page 6, cropped excerpt | Prince Ali development-detail preview |
| `public/images/scores/remember-me/primo-opening.webp` | `Scores/可可夜總會/Remember me一部.pdf`, page 1 | Remember Me overview card and primo melodic-line preview |
| `public/images/scores/remember-me/secondo-opening.webp` | `Scores/可可夜總會/Remember me 二部.pdf`, page 1 | Remember Me flowing-accompaniment preview |
| `public/images/scores/remember-me/fast-passage-detail.webp` | `Scores/可可夜總會/Remember me一部.pdf`, page 2, cropped excerpt | Remember Me fast-note-group preview |

These previews are for arrangement-portfolio context only. They do not imply that the underlying copyrighted compositions, complete arrangements, or distribution rights are offered for sale or download.

## Production reminders

- Do not reference `source-materials` from application code.
- Confirm all `Public use permission required` entries in `PHOTO_USAGE_REVIEW.md` before production launch.
- Homepage Hero teacher photo is the approved final design image.
- Custom Scores clean preview blocker is **RESOLVED**. Keep the production preview watermarked and do not expose the clean full-resolution source or a score-download link.
- Contact form backend is implemented at `app/api/contact/route.ts` with the Resend SDK. Production delivery requires server-side `RESEND_API_KEY` and a verified sender in `CONTACT_FROM_EMAIL`; neither value belongs in source control.
