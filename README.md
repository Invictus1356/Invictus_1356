# INVICTUS Personal Profile Website

This is a single-page static website for **INVICTUS**. It includes:

- The supplied muted video as a moving background
- The supplied anime boy profile/logo image
- The supplied MP3 as looping background music with a Play/Stop button
- The supplied bio content styled with the Cinzel font
- Responsive layout for phones, tablets, and desktops
- Three account entries: Discord, Comix, and AniList

## Files

```text
invictus-profile-website/
├── index.html
├── style.css
├── script.js
├── README.md
├── background-video.mp4
├── logo.png
└── music.mp3
```

## Account Links

The page includes only these accounts:

- Discord username: `Invictus_1356`
- Comix: `https://comix.to/u/mn8lym`
- AniList: `https://anilist.co/user/Invictus05/`

Discord usernames do not create a public profile URL by themselves, so the Discord entry copies the username instead of using a fake link.

## Get A Public HTTPS URL With GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new public repository.
   - For a main profile URL, name it `YOUR-GITHUB-USERNAME.github.io`.
   - For a project URL, any name works, such as `invictus-profile`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, `background-video.mp4`, `logo.png`, and `music.mp3` to the repository root.
4. Open the repository on GitHub.
5. Go to **Settings**.
6. Go to **Pages**.
7. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
8. Set **Branch** to `main` and folder to `/root`, then save.
9. Wait a minute or two for GitHub to publish it.

Your HTTPS link will be:

```text
https://YOUR-GITHUB-USERNAME.github.io
```

If you used a normal project repository name instead, it will usually be:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

## Notes

The page tries to start the music automatically when someone opens it. Many browsers block automatic music with sound until the visitor clicks or taps once, so the button remains as a fallback. When the music is playing, the button changes to **Stop Music**.

The moving background video is muted and loops automatically. Browsers normally allow muted background videos to autoplay.

Because this is a public site, keep personal details limited to what you are comfortable sharing online.
