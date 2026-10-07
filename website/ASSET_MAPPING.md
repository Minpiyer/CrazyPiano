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
| `public/images/lessons/exams-competition-judging-2023.jpg` | `pen-assets/lessons/exams-competition-judging-2023.jpg` | Judge / Teacher Experience block |
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
- `gallery-recital-teacher-students-group.jpg`
- `gallery-performance-teacher-studio-piano.jpg`
- `gallery-performance-teacher-recital-hall.jpg`
- `gallery-performance-editorial-piano-reflection.jpg`
- `gallery-judging-event-portrait.jpg`
- `gallery-judging-live-session.jpg`

Gallery posture video destination: `https://www.youtube.com/watch?v=BBhqRfK0UZU&t=114s`. The timestamp is intentionally preserved and the card opens YouTube without autoplay.

## Production reminders

- Do not reference `source-materials` from application code.
- Confirm all `Public use permission required` entries in `PHOTO_USAGE_REVIEW.md` before production launch.
- Homepage Hero teacher photo is the approved final design image.
- `custom-example-01-custom.jpg` currently preserves the source preview's editing selection marks. Replace it with a clean formal export when available.
